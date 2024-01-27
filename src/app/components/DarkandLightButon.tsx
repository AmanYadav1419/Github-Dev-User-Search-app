import React from 'react'
import { IoSunnyOutline } from 'react-icons/io5'

type Props = {}

export default function DarkandLightButon({}: Props) {
  return (
    <div className='flex items-center gap-2'>
        <p className='text-sm'>LIGHT</p>
        <IoSunnyOutline className='text-2xl'/>
    </div>
  );
}