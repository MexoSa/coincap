import React, { useState } from 'react'
import addToLocalStorage from '../../../helpers/addToLocalStorage'
import { roundTo } from '../../../helpers/roundTo'
import Modal from '../../UI/Modal/Modal'
import Button from '../../UI/Button/Button'

type AddToBriefcaseModalProps = {
  onClose: () => void,
  price: string,
  id: string
}

const AddToBriefcaseModal: React.FC<AddToBriefcaseModalProps> = ({ onClose, id, price }) => {
  const [value, setValue] = useState('')

  const handleAdd = () => {
    if (+value > 0) {
      addToLocalStorage({ amount: value, id, price })
      onClose()
    }
  }

  return (
    <Modal closeModal={onClose}>
      <div className='add-to-briefcase-modal'>
        <div className='add-to-briefcase-modal__title'>
          <div className='add-to-briefcase-modal__name'>{id.toUpperCase()}</div>
          <div className='add-to-briefcase-modal__price'>
            <span className='add-to-briefcase-modal__price_gray'>{roundTo(price)}</span>
            USD
          </div>
        </div>
        <div className='add-to-briefcase-modal__add-controll'>
          <input className='add-to-briefcase-modal__input' placeholder='INPUT AMOUNT' type="number" value={value} onChange={(e) => setValue(e.target.value)} />
          <Button onClick={handleAdd} className='add-to-briefcase-modal__button' />
        </div>
      </div>
    </Modal>
  )
}

export default AddToBriefcaseModal