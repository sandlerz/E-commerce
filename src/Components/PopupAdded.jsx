import { useEffect, useState } from 'react'

export default function PopupAdded() {
  const [showPopup, setShowPopup] = useState(true)

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShowPopup(false)
    }, 1000)
    return () => clearTimeout(timeId)
  }, [])

  if (!showPopup) return null

  return <div className="product__body__cart__popup">Added!</div>
}
