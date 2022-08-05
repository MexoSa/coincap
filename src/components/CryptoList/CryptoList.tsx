import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkPosition } from '../../helpers/checkPosition'
import { getCryptoList, getCryptoPagination } from '../../store/actions/cryptoActions'
import { globalState } from '../../types/GlobalState'
import CryptoCard from '../CryptoCard/CryptoCard'
import Loader from '../Loader/Loader'
import Modal from '../Modal/Modal'

const CryptoList: FC = () => {

  const cryptoData = useSelector((state: globalState) => state.cryptoReducer.cryptoData)
  const isLoading = useSelector((state: globalState) => state.cryptoReducer.isLoading)

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [id, setId] = useState<string>('')
  const dispatch = useDispatch()

  const scrollHandler = () => {
    if (checkPosition()) {
      dispatch(getCryptoPagination())
    }
  }

  useEffect(() => {
    dispatch(getCryptoList())

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
        cryptoData && cryptoData.map(cryptoItem => <CryptoCard key={cryptoItem.rank} {...cryptoItem} openModal={() => setIsOpen(true)} setId={setId} />)
      }
      {
        isLoading && <Loader />
      }
      {
        isOpen && <Modal closeModal={() => setIsOpen(false)} >
          <div>{id}</div>
        </Modal>
      }
    </div>
  )
}

export default CryptoList