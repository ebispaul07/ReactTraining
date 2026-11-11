import React, { useState } from 'react'

const products = [
    {id:1,Item:"Fruit",itemName:"Apple",Quantity:1},
    {id:2,Item:"Vegitable",itemName:"Cucumber",Quantity:1},
    {id:3,Item:"Drink",itemName:"Fizz",Quantity:1},
    {id:4,Item:"Vegitable",itemName:"Carrot",Quantity:1}
]

const Keys = () => {

    const [goods,setGoods]=useState(products);

    const addQty = (id)=>{
       const newQty= goods.map((good)=>(
            good.id===id?{...good,Quantity:good.Quantity+1}:good
        ))

        setGoods(newQty)
    }

    const remQty = (id) =>{
        const newQty=goods.map((good)=>(
            good.id===id?{...good,Quantity:good.Quantity-1}:good
        ))
        setGoods(newQty)
    }


  return (
    <div>

        {
            goods.map((product)=>(
                <div className='bg-danger m-3 text-white'>
                    <h1>{product.Item}</h1>
                    <h3>{product.itemName}</h3>
                    <h4>{product.Quantity}</h4>
                    <button onClick={()=>addQty(product.id)} className='bg-success'>+</button>
                    <button onClick={()=>remQty(product.id)} disabled={product.Quantity===0} className='bg-warning'>-</button>
                </div>
                
            ))
        }

    </div>
  )
}

export default Keys