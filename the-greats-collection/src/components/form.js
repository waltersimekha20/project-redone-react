import React, { useState } from 'react'

export default function Form({addClothes}) {
    const [id, setId] = useState("")
    const [type, setType] = useState("")
    const [brand, setBrand] = useState("")
    const [size, setSize] = useState("")
    const [prize, setPrize] = useState("")
    const [color, setColor] = useState("")
    const [img, setImg] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        const formdata ={
            id:id,
            type:type,
            brand:brand,
            size:size,
            prize:prize,
            color:color,
            img:img,
        }
    
        fetch("http://localhost:4000/TSHIRTS",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formdata)
        })
        .then(res => res.json())
        .then(data => addClothes(data))

    }

  

  return (
    <form onSubmit={handleSubmit}>
    <input id="id" type="text" value={id} onChange={e => setId(e.target.value)}/><br></br>
    <input id="type"type="text" value={type} onChange={e => setType(e.target.value)}/><br></br>
    <input id="brand"type="text" value={brand} onChange={e => setBrand(e.target.value)}/><br></br>
    <input id="size"type="text" value={size} onChange={e => setSize(e.target.value)}/><br></br>
    <input id="price"type="text" value={prize} onChange={e => setPrize(e.target.value)}/><br></br>
    <input id="color"type="text" value={color} onChange={e => setColor(e.target.value)}/><br></br>
    <input id="img"type="text"  value={img} onChange={e => setImg(e.target.value)}/>
    <button type='submit'>Submit</button>

    </form>
  )
}

