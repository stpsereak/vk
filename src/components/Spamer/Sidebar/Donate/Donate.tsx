import React from 'react'
import s from './Donate.module.css'
import Title from '../../../common/Title/Title'

function Donate () {
  return (
    <div className={s.donate}>
      <Title>Поддержка</Title>
      <iframe
        src="https://widget.qiwi.com/widgets/middle-widget-300x300?publicKey=48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPxFBdK75dLhP5ZguhqCdK8DArgVFMGbEVgfWDrErKrKt5gSXLXv3zieRMKiLYg28nkn9nNsBjr6Tf8RUX7mpJS7XX9wTjGd5KwQZyxiPsD"
        width="300"
        height="300"
        frameBorder="0"
        scrolling="no"
        title="qiwi"
      />
    </div>
  )
}

export default Donate
