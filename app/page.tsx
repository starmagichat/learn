"use client"

import React from 'react'
import { useState, useEffect } from 'react'

import { imgtestFetch } from "@/utils/imgFetch";
import Image from 'next/image';

const Test = () => {



  const [hoge, setHoge] = useState<any>([])
  const [foo, setFoo] = useState<any>([])

  // useEffect(() => {
  //     const getTest = async () => {
  //         const tests = await getTests();
  //         setHoge(tests)
  //         console.log(tests)

  //         const imgFetch = await imgtestFetch();
  //         setFoo(imgFetch?.publicUrl)
  //         console.log(imgFetch?.publicUrl)
  //     }
  //     getTest();
  // }, [])

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


// "use client"

// import React from 'react'
// import { useState, useEffect } from 'react'
// import { getTests } from "@/lib/storyFetch";
// import { imgtestFetch } from "@/lib/imgtestFetch";

// const Test = () => {
//     const [hoge, setHoge] = useState<any>([])
//     const [imageUrl, setImageUrl] = useState<string | null>(null)

//     useEffect(() => {
//         const getTest = async () => {
//             const tests = await getTests();
//             setHoge(tests)
//             console.log(tests)

//             const imgFetch = await imgtestFetch();
//             if (imgFetch && imgFetch.publicUrl) {
//                 setImageUrl(imgFetch.publicUrl)
//             }
//             console.log(imgFetch)
//         }
//         getTest();
//     }, [])

//     return (
//         <div>
//             <h1>Test</h1>
//             {imageUrl && (
//                 <img src={imageUrl} alt="Fetched image" style={{ maxWidth: '100%', height: 'auto' }} />
//             )}
//             <pre>{JSON.stringify(hoge, null, 2)}</pre>
//         </div>
//     )
// }

// export default Test