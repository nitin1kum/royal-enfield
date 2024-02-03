import React from 'react'

const NavCards = (data) => {
  console.log(data)
  return (
    <div className="card bg-zinc-800 my-3 overflow-hidden rounded-lg">
        <img className="w-full h-80 object-cover" src={data.data.img_link} alt="" />
        <h2 className="text-center font-semibold m-2">{data.data.name}</h2>
        <div className="flex justify-center gap-3 m-3">
          <p className="py-1 px-5 bg-hover text-white">Explore</p>
          <p className="py-1 px-5  border-2 border-white">Book a Test Ride</p>
        </div>
      </div>
  )
}

export default NavCards