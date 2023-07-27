import React from 'react'

const Dashboard = ({ userData, kindeData }) => {
  return (
    <div className='text-center my-4'>
      Welcome Back, <span className='text-purple-600 font-bold'>{userData ? userData?.user?.name : kindeData?.given_name}</span> !
      <h1 className='my-4'>Your registered email is <span className='text-purple-600 font-semibold'>{userData ? userData?.user?.email : kindeData?.email}</span></h1>
    </div>
  )
}

export default Dashboard