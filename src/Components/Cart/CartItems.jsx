import React from 'react'
import { deleteIcon } from '../../Assets/Images/index'
import { useDispatch } from 'react-redux'
import { deleteItem } from './CartSlice'

export default function CartItems({ data }) {
  const { image, price, amount, title, id } = data
  const dispatch = useDispatch()

  const handleDelete = value => {
    dispatch(deleteItem(value))
  }

  return (
    <div className="cart__products__item">
      <div className="cart__products__item__img">
        <img src={image} alt="" />
      </div>
      <div className="cart__products__item__body">
        <span className="cart__products__item__body__title">{title}</span>
        <div className="cart__products__item__body__details">
          <span className="cart__products__item__body__details__price">
            $ {price}
          </span>
          <span className="cart__products__item__body__details__amount">
            {amount}
          </span>
          <div
            className="cart__products__item__body__details__trashIcon"
            onClick={() => handleDelete(id)}
          >
            <img src={deleteIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
