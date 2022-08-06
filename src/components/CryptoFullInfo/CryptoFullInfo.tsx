import React, { FC } from 'react'
import { CryptoData } from '../../types/CryptoData'
import CryptoBar from '../CryptoBar/CryptoBar'
import CryptoContent from '../CryptoContent/CryptoContent'

const CryptoFullInfo: FC<CryptoData> = ({ id }) => {
  return (
    <div className='crypto-full-info'>
      <CryptoContent className="crypto-full-info__crypto-content" />
      <CryptoBar className="crypto-full-info__bar" id={id} />
    </div>
  )
}

export default CryptoFullInfo