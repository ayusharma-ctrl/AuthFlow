"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'


const Navbar = () => {

    const { status, data } = useSession();

    return (
        <div className='flex justify-between items-center mt-0 mb-4 bg-black w-full px-6 py-4 shadow-lg'>
            <Link href={'/'} className='text-lg font-extrabold italic text-purple-500'>AuthFlow</Link>
            {
                status === 'authenticated' ? (
                    <div className='flex items-center'>
                        <Image src={data?.user?.image} alt='dp' width={30} height={30} className='rounded-full mr-2' />
                        <button onClick={() => signOut()} className='px-4 py-1 rounded-md bg-purple-200 text-xs md:text-sm'>Logout</button>
                    </div>
                ) : (
                    <button onClick={() => signIn('google')} className='px-4 py-1 rounded-md bg-purple-200 text-xs md:text-sm'>Login</button>
                )
            }
        </div>
    )
}

export default Navbar