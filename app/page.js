"use client"
import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import { useSession } from 'next-auth/react';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


export default function Home() {

  const { status, data } = useSession();

  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = getUser();

  return (
    <div>
      {
        status === 'authenticated' || isAuthenticated() ? <Dashboard userData={data} kindeData={user} /> : <Login />
      }
    </div>
  )
}
