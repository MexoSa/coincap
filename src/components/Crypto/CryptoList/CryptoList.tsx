import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkPosition } from '../../../helpers/checkPosition'
import { getCryptoPagination } from '../../../store/actions/cryptoActions'
import { GlobalState } from '../../../types/GlobalState'
import CryptoCard from '../CryptoCard/CryptoCard'
import Loader from '../../UI/Loader/Loader'

const CryptoList: React.FC = () => {

  const cryptoData = useSelector((state: GlobalState) => state.cryptoReducer.data.cryptoData)
  const isLoading = useSelector((state: GlobalState) => state.cryptoReducer.data.isLoading)

  const dispatch = useDispatch()

  const scrollHandler = () => {
    if (checkPosition()) {
      dispatch(getCryptoPagination())
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <div className="crypto-list">
      <div className="crypto-list__table-title table-title">
        <div className="table-title__rank">Rank</div>
        <div className="table-title__name">Name</div>
        <div className="table-title__price">Price USD</div>
        <div className="table-title__add-crypto">Add</div>
      </div>
      {
        cryptoData && cryptoData.map(cryptoItem => <CryptoCard key={cryptoItem.rank} {...cryptoItem} />)
      }
      {
        isLoading && <Loader />
      }
    </div>
  )
}

export default CryptoList