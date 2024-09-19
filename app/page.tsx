"use client"

import React from 'react'
import { useState, useEffect } from 'react'

import { imgtestFetch } from "@/utils/imgFetch";
import Image from 'next/image';

const Test = () => {



  const [hoge, setHoge] = useState<any>([])


  useEffect(() => {
    const testImg = async () => {
      const IMGFETCH = await imgtestFetch();
      if (IMGFETCH) {
        setHoge(IMGFETCH.publicUrl)
      }

    }
    testImg()
  }, [])

  return (
    <div>{<Image
      src={hoge}
      width={500}
      height={500}
      alt="Picture of the author"

    />}
    </div>

  )
}

export default Test

