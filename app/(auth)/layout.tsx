import React, { ReactNode } from 'react';
import Image from 'next/image';
import BackgroundImage from '../../public/login_background.jpg'
import Logo from '../../public/netflix_logo.svg'
export default function Authlayout({ children }: { children: ReactNode }) {
  return (
    <>
    <div className='relative h-screen w-screen flex md:items-center flex-col bg-black md:justify-center md:bg-transparent'>
        <Image src={BackgroundImage} alt="" className='hidden sm:flex sm:object-cover -z-10 w-full brightness-50' priority fill></Image>
        <Image src={Logo} alt="logo" width={120} className='absolute top-4 left-4 md:object-contain md:mt-10 md:ml-10' priority></Image>
        {children}
    </div>
    </>
  );
}
