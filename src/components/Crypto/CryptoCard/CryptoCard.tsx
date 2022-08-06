import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { roundTo } from '../../../helpers/roundTo'
import { CryptoData } from '../../../types/Crypto/CryptoData'
import AddToBriefcaseModal from '../../Briefcase/AddToBriefcaseModal/AddToBriefcaseModal'

const CryptoCard: React.FC<CryptoData> = ({ id, rank, name, symbol, priceUsd }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Link to={`/coincap/${id}`} className='crypto-list__crypto-card crypto-card'>
        <div className='crypto-card__rank'>{rank}</div>
        <div className='crypto-card__name'>
          {name}
          <span className='crypto-card__name_gray'>{symbol}</span>
        </div>
        <div className='crypto-card__price'>{roundTo(priceUsd)} USD</div>
        <button className='crypto-card__add-crypto' onClick={(e) => {
          e.preventDefault()
          setIsOpen(true)
        }}>+</button>
      </Link>
      {
        isOpen && <AddToBriefcaseModal id={id} price={priceUsd} onClose={() => setIsOpen(false)} />
      }
    </>
  )
}

export default CryptoCard