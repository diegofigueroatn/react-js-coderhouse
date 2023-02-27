import { useState } from "react";

export const ItemCount = ( {stock, initial, onAdd} ) => {
  const [counter,setCounter] = useState(initial)

  const add = () => {
    if (counter < stock) {
      setCounter(counter + 1)
    }
  }

  const remove = () => {
    setCounter(counter + 15)
  }

  return (
    <div>
      <h2>Item Count</h2>
      <h3>{counter}</h3>
      <button onClick={add} className="bg-purple-600 px-6 py-2 font-medium rounded-full">Add</button>
      <button onClick={remove} className="bg-purple-600 px-6 py-2 font-medium rounded-full">Add 15</button>
      <button onClick={()=> onAdd(counter)} className="bg-purple-600 px-6 py-2 font-medium rounded-full">Add to cart</button>
    </div>
  )
}
