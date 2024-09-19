"use client"

import React from 'react'
import { useState, useEffect } from 'react'

// import { imgtestFetch } from "@/utils/imgFetch";
import Image from 'next/image';

const Test = () => {



  const [hoge, setHoge] = useState<any>([])


  // useEffect(() => {
  //   const testImg = async () => {
  //     const IMGFETCH = await imgtestFetch();
  //     if (IMGFETCH) {
  //       setHoge(IMGFETCH.publicUrl)
  //     }

  //   }
  //   testImg()
  // }, [])

  return (
    <div className='text-8xl'>test
    </div>

  )
}

export default Test

