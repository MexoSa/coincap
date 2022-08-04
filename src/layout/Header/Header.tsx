import React, { FC, useState } from 'react'
import Modal from '../../components/Modal/Modal'
import briefcaseIcon from '../../icons/briefcase-icon.png'

const Header: FC = () => {
  let [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
      <div className='header'>
        <div className='header__top-crypto top-crypto'>
          <div className='top-crypto__item'>BTC<span className='top-crypto__item_grey'>price</span></div>
          <div className='top-crypto__item'>BTC<span className='top-crypto__item_grey'>price</span></div>
          <div className='top-crypto__item'>BTC<span className='top-crypto__item_grey'>price</span></div>
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