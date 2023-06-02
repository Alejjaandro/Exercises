import React from 'react'
import List from './List';

export default function Shop() {

    const shop = {
        electronics: [
            {id:27, item: "Televisor", brand: "LG", model: "XP7302", price: 399},
            {id:28, item: "Equipo Hi-FI", brand: "Samsung", model: "VF235", price: 179},
            {id:29, item: "Televisor", brand: "Sony", model: "Bravia-173", price: 498}
        ],
        groceries: [
            {id:30, item: "Galletas", brand: "María",  price: 0.90},
            {id:31, item: "Ensaladas", brand: "Imizurra", price: 1.30},
            {id:32, item: "Patatas", brand: "McKain", price: 0.90},
            {id:33, item: "Pasta", brand: "Gallo", price: 0.90}
        ],
        pets: [
            {id:34, item: "Croquetas para gato", brand: "Purina", price: 4.90},
            {id:35, item: "Arena de gato", brand: "Limpior", price: 1.10}
        ]
    };
    
  return (
    <div>
        <List category="electronics" products={shop.electronics}></List>
        <List category="groceries" products={shop.groceries}></List>
        <List category="pets" products={shop.pets}></List>
    </div>
  )
}