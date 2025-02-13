import React from 'react';
import Container from './Container';
import Logo from './Logo';
import Link from 'next/link';
import { navigation } from '@/constants/data';

const Footer = () => {
  return (
    <div className='bg-[#180735] mt-10 py-10 text-zinc-300'>
        <Container className='flex items-center justify-between'>
         <Logo className="text-white" spanClassName='bg-white text-black'/>
            <ul className='flex gap-6 items-center justify-center'>{
                navigation.map((item) => (
                    <Link href={item?.href} key={item?._id}>
                    <li className='hover:text-white duration-200'>{item?.title}</li></Link>
                ))
                }

            </ul>
            <p className='text-right mr-4'>Join with me at reactbd.com</p>
        </Container>
    </div>
  )
}

export default Footer