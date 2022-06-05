import { useEffect, useState } from 'react'

export default function PopupAdded({ setShow, show }) {
  const [showPopup, setShowPopup] = useState(true)

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShowPopup(false)
      // setShow(false)
    }, 1000)
    return () => clearTimeout(timeId)
  }, [setShow])

  if (!showPopup) return null

  return <div className="product__body__cart__popup">Added!</div>
}
