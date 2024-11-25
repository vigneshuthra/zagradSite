import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className=' contactSction my-6 px-4 flex flex-col items-start'>

      <div>
        <Image src={'/logo.png'} alt={''} width={1000} height={1000} className='w-[100px] h-auto lg:w-44' />
      </div>
      <div className='mt-2 lg:mt-4'>
        <p className='font-bold text-sm tracking-tighter '>
          ZAKLJUČNA IN GRADBENA DELA V GRADBENIŠTVU
        </p>
        <p className='font-normal text-md tracking-tighter'>
          Sp. Prhovec 10, 1411 Izlake.
        </p>
        <p className='font-normal text-md tracking-tighter'>
          Direktor: Jožef Jeretina, gr. <br /> <span className='font-semibold underline'>teh. 041-689-524</span>
        </p>
        <p className='font-normal text-md tracking-tighter'>
          Vodja Projektov: Polona Jeretina, dipl. inž. grad. <br /> <span className='font-semibold underline'>(UN) 031-675-355</span>
        </p>
      </div>

    </div>
  )
}

export default Contact