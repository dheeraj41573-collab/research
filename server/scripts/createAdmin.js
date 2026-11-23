const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const readline = require("readline");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const User = require("../models/UserModel.js");

function ask(rl, question) {
  return new Promise((resolve) => rl.question(question, (answer) => resolve(answer.trim())));
}

function askPassword(question) {
  return new Promise((resolve, reject) => {
    const input = process.stdin;
    if (!input.isTTY || typeof input.setRawMode !== "function") {
      reject(new Error("Run this setup command in an interactive terminal."));
      return;
    }

    process.stdout.write(question);
    let password = "";
    const cleanup = () => {
      input.setRawMode(false);
      input.removeListener("data", onData);
      input.pause();
      process.stdout.write("\n");
    };
    const onData = (chunk) => {
      for (const character of chunk.toString()) {
        if (character === "\u0003") {
          cleanup();
          reject(new Error("Setup cancelled."));
          return;
        }
        if (character === "\r" || character === "\n") {
          cleanup();
          resolve(password);
          return;
        }
        if (character === "\u007f" || character === "\b") {
          password = password.slice(0, -1);
        } else if (character >= " ") {
          password += character;
        }
      }
    };

    input.setRawMode(true);
    input.resume();
    input.on("data", onData);
  });
}

async function main() {
  if (!process.env.DATA_BASE_CONNECTION) {
    throw new Error("DATA_BASE_CONNECTION is missing from server/.env.");
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const name = await ask(rl, "Admin name: ");
  const email = await ask(rl, "Admin email: ");
  rl.close();

  if (!name || !email) {
    throw new Error("Name and email are required.");
  }

  const password = await askPassword("Admin password (input hidden): ");
  const confirmPassword = await askPassword("Confirm password (input hidden): ");
  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters.");
  }
  if (password !== confirmPassword) {
    throw new Error("Passwords do not match.");
  }

  await mongoose.connect(process.env.DATA_BASE_CONNECTION);
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.findOneAndUpdate(
    { email },
    {
      $set: { name, email, password: hashedPassword, role: "admin" },
      $setOnInsert: { _id: new mongoose.Types.ObjectId() },
    },
    { upsert: true, new: true }
  );

  console.log("Admin account is ready:", user.email);
}

main()
  .catch((error) => {
    console.error("Admin setup failed:", error.message);
    process.exitCode = 1;
  })
  .finally(async () => {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
    }
  });
