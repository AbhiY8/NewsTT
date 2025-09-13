import React from 'react'

export default function Header() {
  return (
    <div className='fixed to-0% w-[100%] h-14 flex justify-between items-center px-10 bg-gray-400 border-b-2 border-b-gray-200'>
      <h2 className="text-xl font-bold text-orange-700">NEWS_Till_Today</h2>
      <div className=" flex gap-5">
        <h3>Latest</h3>
        <h3>International</h3>
        <h3>National</h3>
        <h3>Sports</h3>
        <h3>Politics</h3>
      </div>
    </div>
  )
}
