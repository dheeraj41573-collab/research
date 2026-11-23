import { useState, useEffect } from 'react';

import image1 from '../Image/MaizePC.jpg';
import image2 from '../Image/bajraPC.jpg';
import image3 from '../Image/ricePC.jpg';


import image4 from '../Image/chrysophthalmusPC.jpg';
import image5 from '../Image/cristatellaPC.jpg';
import image6 from '../Image/glaucaPC.jpg';

import image7 from '../Image/currypattaPC.jpg';
import image8 from '../Image/oryzaPC.jpeg';
import image9 from '../Image/pudinaPC.jpeg';

import image10 from '../Image/whPC.jpeg';

import image11 from '../Image/CycasPC.webp';
import image12 from '../Image/CycasbeddomeiPC.jpeg';
import image13 from '../Image/GinkgoPC.jpg';
import image14 from '../Image/ThujaPC.jpg';


import image1Mobile from '../Image/Maize.jpg';
import image2Mobile from '../Image/bajra.jpg';
import image3Mobile from '../Image/rice.jpg';


import image4Mobile from '../Image/chrysophthalmus.jpg';
import image5Mobile from '../Image/cristatella.jpg';
import image6Mobile from '../Image/glauca.jpg';

import image7Mobile from '../Image/currypatta.jpg';
import image8Mobile from '../Image/oryza.jpeg';
import image9Mobile from '../Image/pudina.jpeg';

import image10Mobile from '../Image/wh.jpeg';

import image11Mobile from '../Image/Cycas.webp';
import image12Mobile from '../Image/Cycasbeddomei.jpeg';
import image13Mobile from '../Image/Ginkgo.jpg';
import image14Mobile from '../Image/Thuja.jpg';

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";


const BannerProduct = () => {
    const [currentImage,setCurrentImage] = useState(0)

    const desktopImages = [
        image1,
        image2,
        image3,

        image4,
         image5,
        image6,

        image7,
        image8,
        image9,

        image10,
        image11,
        image12,
        image13,
        image14,
    ]

    const mobileImages = [
        image1Mobile,
        image2Mobile,
        image3Mobile,

        image4Mobile,
        image5Mobile,
        image6Mobile,

        image7Mobile,
        image8Mobile,
        image9Mobile,

        image10Mobile,
        image11Mobile,
        image12Mobile,
        image13Mobile,
        image14Mobile,
    ]

    const nextImage = () =>{
        if(desktopImages.length - 1 > currentImage){
            setCurrentImage(preve => preve + 1)
        }
    }

    const preveImage = () =>{
        if(currentImage !== 0){
            setCurrentImage(preve => preve - 1)
        }
    }


    useEffect(()=>{
        const interval = setInterval(()=>{
            if(desktopImages.length - 1 > currentImage){
                nextImage()
            }else{
                setCurrentImage(0)
            }
        },5000)

        return ()=> clearInterval(interval)
    },[currentImage])

  return (
    <div className='w-full rounded '>
        <div className='relative w-full h-56 md:h-72 bg-slate-200'>

                <div className='absolute items-center hidden w-full h-full md:flex '>
                    <div className='flex justify-between w-full text-2xl '>
                        <button onClick={preveImage} className='p-1 bg-white rounded-full shadow-md'><FaAngleLeft/></button>
                        <button onClick={nextImage} className='p-1 bg-white rounded-full shadow-md'><FaAngleRight/></button> 
                    </div>
                </div>

                {/**desktop and tablet version */}
              <div className='hidden w-full h-full overflow-hidden md:flex'>
                {
                        desktopImages.map((imageURl)=>{
                            return(
                            <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURl} style={{transform : `translateX(-${currentImage * 100}%)`}}>
                                <img src={imageURl} className='w-full h-full'/>
                            </div>
                            )
                        })
                }
              </div>


                {/**mobile version */}
                <div className='flex w-full h-full overflow-hidden md:hidden'>
                {
                        mobileImages.map((imageURl)=>{
                            return(
                            <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURl} style={{transform : `translateX(-${currentImage * 100}%)`}}>
                                <img src={imageURl} className='object-cover w-full h-full'/>
                            </div>
                            )
                        })
                }
              </div>


        </div>
    </div>
  )
}

export default BannerProduct