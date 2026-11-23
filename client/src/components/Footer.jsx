import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1BD11B] to-[#57C785] text-white shadow-lg mt-auto">
      <div className="max-w-screen px-4 md:px-6 lg:px-0 py-4 md:py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2">
          {/* Logo and Title */}
          <Link
            to='/'
            className='flex items-center justify-center md:justify-start order-first mb-4 md:mb-0 font-medium text-gray-900 lg:order-none lg:w-1/5 title-font'
          >
            <span className='pl-4 md:pl-8 lg:pl-12 p-2 text-xl md:text-2xl lg:text-3xl font-bold text-center md:text-left'>
              <span className='text-[#fad73d]'>Food Drugs & </span>
              <span className='text-white'>Pharmacology</span>
            </span>
          </Link>

          {/* Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {/* Dr Sushil Kumar */}
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-base md:text-lg font-semibold">Dr Sushil Kumar</h3>
              <div className="space-y-1">
                <a href="mailto:skg1979@gmail.com" className="block text-xs md:text-sm hover:text-gray-200 transition-colors">
                  skg1979@gmail.com
                </a>
                <a href="tel:9410602676" className="block text-xs md:text-sm hover:text-gray-200 transition-colors">
                  +91 9410602676
                </a>
              </div>
            </div>

            {/* Dr Gourav Choudhir */}
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-base md:text-lg font-semibold">Dr Gourav Choudhir</h3>
              <div className="space-y-1">
                <a href="mailto:gouravbotany@gmail.com" className="block text-xs md:text-sm hover:text-gray-200 transition-colors break-words">
                  gouravbotany@gmail.com
                </a>
                <a href="tel: 9639268521" className="block text-xs md:text-sm hover:text-gray-200 transition-colors">
                  +91  9639268521
                </a>
              </div>
            </div>

            {/* Sakshi Sharma */}
            <div className="space-y-2 text-center sm:text-left col-span-2 sm:col-span-1">
              <h3 className="text-base md:text-lg font-semibold">Sakshi Sharma</h3>
              <div className="space-y-1">
                <a href="mailto:sakshisharma78757@gmail.com" className="block text-xs md:text-sm hover:text-gray-200 transition-colors break-words">
                  sakshisharma78757@gmail.com
                </a>
                <a href="tel:9682315044" className="block text-xs md:text-sm hover:text-gray-200 transition-colors">
                  +91 9682315044
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white my-4 md:my-6"></div>

        {/* Copyright */}
        <div className="flex justify-center items-center text-center">
          <div className="text-sm md:text-base lg:text-lg px-2">
            © {new Date().getFullYear()} Food Drugs & Pharmacology. This work is licensed under a Creative Commons Attribution 4.0 International License (CC BY 4.0).
          </div>
        </div>
      </div>
    </footer>
  );
}

