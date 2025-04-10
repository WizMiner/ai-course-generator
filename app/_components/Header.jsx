import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex  justify-between p-5 shadow-sm'>
      <Image src={'/logo.svg'} alt="logo" width={200} height={100} />
      <Button >click me</Button>      
    </div>
  )
}

export default Header