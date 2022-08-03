import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { cryptoData } from '../types/response'

type CryptoCardProps = {
  openModal: () => void,
  setId: (id: string) => void,
} & cryptoData

const CryptoCard: FC<CryptoCardProps> = ({ id, rank, name, symbol, priceUsd, openModal, setId }) => {
  return (
    <>
      <Link to={`/${id}`} className='crypto-list__crypto-card crypto-card'>
        <span>{rank}</span>
        <div className='crypto-card__name'>{name} <span>{symbol}</span></div>
        <div>{Number(priceUsd).toFixed(2)} USD</div>
        <button className='crypto-card__add' onClick={(e) => {
          e.preventDefault()
          openModal()
          setId(id)
        }}>+</button>
      </Link>
    </>
  )
}

export default CryptoCard