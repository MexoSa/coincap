import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { cryptoData } from '../../types/response'

type CryptoCardProps = {
  openModal: () => void,
  setId: (id: string) => void,
} & cryptoData

const CryptoCard: FC<CryptoCardProps> = ({ id, rank, name, symbol, priceUsd, openModal, setId }) => {
  return (
    <>
      <Link to={`/${id}`} className='crypto-list__crypto-card crypto-card'>
        <div className='crypto-card__rank'>{rank}</div>
        <div className='crypto-card__name'>
          {name}
          <span className='crypto-card__name_gray'>{symbol}</span>
        </div>
        <div className='crypto-card__price'>{Number(priceUsd).toFixed(2)} USD</div>
        <button className='crypto-card__add-crypto' onClick={(e) => {
          e.preventDefault()
          openModal()
          setId(id)
        }}>+</button>
      </Link>
    </>
  )
}

export default CryptoCard