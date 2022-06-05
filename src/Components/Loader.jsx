import React from 'react'
import { SpinnerCircular } from 'spinners-react'

export default function Loader({ amount }) {
  const amountOfLoaders = [...Array(amount).keys()].map((loader, index) => (
    <div key={index} className="product loader">
      <SpinnerCircular
        size={150}
        thickness={94}
        speed={99}
        color="rgba(255, 254, 255, 1)"
        secondaryColor="rgba(41, 45, 48, 1)"
      />
    </div>
  ))
  return amountOfLoaders
}
