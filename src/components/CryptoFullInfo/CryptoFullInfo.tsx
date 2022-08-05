import React, { FC } from 'react'
import { CryptoData } from '../../types/CryptoData'
import CryptoBar from '../CryptoBar/CryptoBar'

const CryptoFullInfo: FC<CryptoData> = ({ id }) => {
  return (
    <>
      <div>{id}</div>
      <CryptoBar id={id} />
    </>
  )
}

export default CryptoFullInfo