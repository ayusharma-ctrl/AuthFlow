"use client"
import React from 'react'
import Image from 'next/image'
import GoogleLogo from '../public/google-logo.png'
import { signIn } from 'next-auth/react'
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";


const Login = () => {
    return (
        <div className='flex justify-center items-center flex-col mt-8 mb-8'>
            <h1 className='font-bold my-8'> SignIn/SignUp with Email </h1>
            <LoginLink className="m-2 rounded-2xl bg-purple-300 px-4 py-1 shadow-xl hover:opacity-80" >Sign in</LoginLink>
            <RegisterLink className="m-2 rounded-2xl bg-orange-300 px-4 py-1 shadow-xl hover:opacity-80">Sign up</RegisterLink>
            <h1 className='font-bold mt-8'> OR </h1>
            <h1 className='font-bold my-8'> Link Your Google Account </h1>
            <button
                onClick={() => signIn('google')}
                className="flex items-center gap-4 shadow-xl rounded-lg pl-3 hover:scale-95"
            >
                <Image src={GoogleLogo} alt='logo' height={30} width={30} />
                <span className="bg-blue-500 text-white px-4 py-3">
                    Sign in with Google
                </span>
            </button>
        </div>
    )
}

export default Login