import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import Modal from '../../components/Modal/Modal'
import { roundTo } from '../../helpers/roundTo'
import briefcaseIcon from '../../icons/briefcase-icon.png'
import { globalState } from '../../types/GlobalState'

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const cryptoData = useSelector((state: globalState) => state.cryptoReducer.cryptoData)

  return (
    <>
      <div className='header'>
        <div className='header__top-crypto top-crypto'>
          {
            cryptoData.slice(0, 3).map(cryptoItem =>
              <div key={cryptoItem.id} className='top-crypto__item'>
                {cryptoItem.symbol}
                <span className='top-crypto__item_grey'>{roundTo(cryptoItem.priceUsd, 2)}</span>
              </div>
            )}
        </div>
        <div className='header__briefcase briefcase' onClick={() => setIsOpen(true)}>
          <img className='briefcase__icon' src={briefcaseIcon} alt='briefcase-Icon' />
          <div className='briefcase__price'>124232 USD (+12.4%)</div>
        </div>
      </div>
      {
        isOpen && <Modal closeModal={() => setIsOpen(false)} >
          <div>Content</div>
        </Modal>
      }
    </>
  )
}

export default Header