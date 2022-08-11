import React from 'react'

export default function Item({ item }) {

  return (
    <div key={item.id} className="item">
      <img className="item-image" src={item.tokenURL} alt={item.tokenName}></img>
      <span className="item-name">{item.tokenName}</span>
    </div>
  )
}