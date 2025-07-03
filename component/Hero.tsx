import React from 'react'
import { cn } from "@/lib/utils";
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './text-generate-effect';
import { MagicButton } from './magicbutton';
import { FloatingNav } from './floating-navbar';
const Hero = () => {
  return (
    <div className='pb-29 pt-36'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
      </div>

      <div>
        <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 transparent_0.5px">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,rgba(228,228,231,0.5)_1px,transparent_0.3px),linear-gradient(to_bottom,rgba(228,228,231,0.5)_1px,transparent_0.2px)]",
              "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.5)_1px,transparent_0.3px),linear-gradient(to_bottom,rgba(38,38,38,0.5)_1px,transparent_0.2px)]"
            )}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        </div>
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-sm text-blue-100 max-w-80 mb-4'>
            hi my name is vineet
          </h2>
          <TextGenerateEffect
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
            words='I Build Scalable Software & Seamless Digital Experiences'
          />

          <p className='text-center md:tracking-wider md:-4 text-sm md:text-lg lg:text-2xl'>
            A passionate software engineer turning complex problems into elegant solutions.</p>
            <br />
        <a href="#about">
         <MagicButton title='See My Projects'/>
        </a>
        <FloatingNav navItems={[{name:"about" , link:"/"}]} />
        </div>
      </div>
    </div>
  )
}

export default Hero;
