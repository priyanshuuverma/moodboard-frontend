import React, { useEffect, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Homepage from './Homepage';


const Loader = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },7000)
    },[])
  return (
    <div>
      {
        loading? <>
        <div className='w-full h-dvh bg-black fixed'>
            <div className='mx-auto fixed top-3/7 left-3/7 w-40 text-white'>
                <DotLottieReact
      src="https://lottie.host/a192abc7-f889-4a98-b91f-f5dd6e4036c7/B4jaHTO5gV.lottie"
      loop
      autoplay
      speed={4}
      
    />
            </div>
        </div>
        </>:<>
        <Homepage />
        </>
      }
    </div>
  )
}

export default Loader
