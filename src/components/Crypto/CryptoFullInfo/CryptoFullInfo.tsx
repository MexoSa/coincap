import React from 'react'
import { useSelector } from 'react-redux'
import { CryptoData } from '../../../types/Crypto/CryptoData'
import { GlobalState } from '../../../types/GlobalState'
import Loader from '../../UI/Loader/Loader'
import CryptoBar from '../CryptoBar/CryptoBar'
import CryptoContent from '../CryptoContent/CryptoContent'

const CryptoFullInfo: React.FC<CryptoData> = ({ id }) => {
  const isLoadingCrypto = useSelector((state: GlobalState) => state.cryptoByIdReducer.isLoading)
  const isLoadingHistory = useSelector((state: GlobalState) => state.cryptoHistoryByIdReducer.isLoading)

  return (
    <div className='crypto-full-info'>
      {
        isLoadingCrypto ? <Loader /> : <CryptoContent className="crypto-full-info__crypto-content" />
      }
      {
        isLoadingHistory ? <Loader /> : <CryptoBar className="crypto-full-info__bar" id={id} />
      }
    </div>
  )
}

export default CryptoFullInfo