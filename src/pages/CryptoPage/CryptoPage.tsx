import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import CryptoFullInfo from '../../components/Crypto/CryptoFullInfo/CryptoFullInfo'
import Button from '../../components/UI/Button/Button'
import { getCryptoFullInfo } from '../../store/actions/cryptoActions'
import { GlobalState } from '../../types/GlobalState'

const CryptoPage = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const cryptoById = useSelector((state: GlobalState) => state.cryptoReducer.byId.cryptoById)

  useEffect(() => {
    dispatch(getCryptoFullInfo(id))
  }, [])


  return (
    <div className='crypto-page'>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
      {
        cryptoById && <CryptoFullInfo {...cryptoById} />
      }
    </div>
  )
}

export default CryptoPage