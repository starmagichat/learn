"use client"
import React, { useState } from 'react'

const page = () => {
  const [formInAdd,setFormInAdd] = useState()

  const handleForm = e =>{
    setFormInAdd(e.target.value)
  }
  return (
    <div>
      <form action="">
        <div>簡易フォーム</div>
        <input type="text" className='bg-slate-500' onChange={handleForm} value={formInAdd}/>
      </form>
      <div>{formInAdd}</div>
    </div>
  )
}

export default page