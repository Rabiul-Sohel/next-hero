"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';



const Navbar = () => {
    
    const pathname = usePathname()
    const links = [
        {
            title: 'Post',
            path: '/post'
        },
        {
            title: 'Meals',
            path: '/meals'
        },
        {
            title: 'Image Gallery',
            path: '/image'
        },
        {
            title: 'About',
            path: '/about'
        }
    ]
    return (
        <div className='flex justify-center items-center gap-5 my-10'>
            <Link href='/'><h4>Next <span className='text-cyan-500'>Hero</span></h4></Link>
           <ul className='flex items-center gap-5'>
           {
            links.map(link => <li className={`${pathname === link.path &&  'bg-cyan-700'} px-4 py-2`} key={link.path}>
                <Link href={link.path}> {link.title} </Link>
            </li> )
           } 
           </ul>
        </div>
    );
};

export default Navbar;