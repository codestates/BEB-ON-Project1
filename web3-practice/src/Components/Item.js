import React from 'react'

export default function Item({ item }) {

  return (
    <div key={item.id} className="item">
      <img className="item-image" src={item.image} alt={item.name}></img>
      <span className="item-name">{item.name}</span>
    </div>
  )
}