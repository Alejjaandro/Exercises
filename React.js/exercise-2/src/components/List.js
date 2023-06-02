import React from 'react'

//Ver Desfragmentacion SESION 51 - 28 a 35

export default function List({category, products}) {
  
  return (
    <div className='container'>
      <h2>{category}</h2>

      <ul className='list-group'> {/*JSON.stringify(products) para ver por pantalla. Similar a console.log()*/}
        {products.map(({id, item, brand, model, price}) => 
          <li key={id} className='list-group-item'>
            {item} {brand} {model} - Price: {price}$
          </li>)}
      </ul>
    </div>
  )
}