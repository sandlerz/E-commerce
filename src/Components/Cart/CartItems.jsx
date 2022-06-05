import React from 'react'
import { deleteIcon } from '../../Assets/Images/index'
import { useDispatch } from 'react-redux'
import { deleteItem, removeItem, addItem } from './CartSlice'
import { less, plus } from '../../Assets/Images/index'

export default function CartItems({ data }) {
  const { image, price, amount, title, id } = data
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteItem(id))
  }

  const handleLess = () => {
    dispatch(
      removeItem({
        ...data,
        amount: 1,
      })
    )
  }

  const handlePlus = () => {
    dispatch(
      addItem({
        ...data,
        amount: 1,
      })
    )
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
          <div className="cart__products__item__body__details__amount">
            <div
              className="cart__products__item__body__details__amount__icon red"
              onClick={handleLess}
            >
              <img src={less} alt="" />
            </div>
            <span className="cart__products__item__body__details__amount__amount">
              {amount}
            </span>
            <div
              className="cart__products__item__body__details__amount__icon green"
              onClick={handlePlus}
            >
              <img src={plus} alt="" />
            </div>
          </div>
          <div
            className="cart__products__item__body__details__trashIcon"
            onClick={handleDelete}
          >
            <img src={deleteIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
