import React from 'react'

export default function List({category, products}) {
  
  return (
    <div className='container'>
      <h2>{category}</h2>

      <ul className='list-group'>
        {products.map(({id, item, brand, model, price}) => 
          <li key={id} className='list-group-item'>
            {item} {brand} {model} - Price: {price}$
          </li>)}
      </ul>
    </div>
  )
}