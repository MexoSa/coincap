import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import BriefcaseModal from '../../components/Briefcase/BriefcaseModal/BriefcaseModal'
import { roundTo } from '../../helpers/roundTo'
import briefcaseIcon from '../../icons/briefcase-icon.png'
import { getCurrentCryptoPriceList } from '../../store/actions/briefcaseActions'
import { getCryptoList } from '../../store/actions/cryptoActions'
import { GlobalState } from '../../types/GlobalState'

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()

  const [isOpen, setIsOpen] = useState(false)

  const cryptoData = useSelector((state: GlobalState) => state.cryptoReducer.data.cryptoData)
  const initialSum = useSelector((state: GlobalState) => state.briefcaseReducer.initialSum)
  const currentSum = useSelector((state: GlobalState) => state.briefcaseReducer.currentSum)

  useEffect(() => {
    dispatch(getCryptoList())
  }, [])

  useEffect(() => {
    dispatch(getCurrentCryptoPriceList())
  }, [pathname])

  return (
    <>
      <div className='header'>
        <div className='header__top-crypto top-crypto'>
          {
            cryptoData && cryptoData.slice(0, 3).map(cryptoItem =>
              <div key={cryptoItem.id} className='top-crypto__item'>
                {cryptoItem.symbol}
                <span className='top-crypto__item_grey'>{roundTo(cryptoItem.priceUsd)}</span>
              </div>
            )}
        </div>
        <div className='header__briefcase briefcase' onClick={() => setIsOpen(true)}>
          <img className='briefcase__icon' src={briefcaseIcon} alt='briefcase-Icon' />
          <div className='briefcase__price'>
            {
              `${roundTo(`${currentSum}`)} USD (${currentSum - initialSum && '+'} ${roundTo(`${(currentSum - initialSum) / initialSum * 100}`)}%)`
            }
          </div>
        </div>
      </div>
      {
        isOpen && <BriefcaseModal onClose={() => setIsOpen(false)} />
      }
    </>
  )
}

export default Header