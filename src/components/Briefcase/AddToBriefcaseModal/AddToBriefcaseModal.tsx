import React, { useState } from 'react'
import addToLocalStorage from '../../../helpers/addToLocalStorage'
import { roundTo } from '../../../helpers/roundTo'
import Modal from '../../UI/Modal/Modal'
import Button from '../../UI/Button/Button'
import { useDispatch } from 'react-redux'
import { getCurrentCryptoPriceList } from '../../../store/actions/briefcaseActions'
import Input from '../../UI/Input/Input'

type AddToBriefcaseModalProps = {
  onClose: () => void,
  price: string,
  id: string
}

const AddToBriefcaseModal: React.FC<AddToBriefcaseModalProps> = ({ onClose, id, price }) => {
  const [value, setValue] = useState('')
  const [inputError, setInputError] = useState('')
  const dispatch = useDispatch()

  const handleAdd = () => {
    if (+value > 100 || +value === 0) {
      setInputError('Please enter a number between 0 and 100')
      setTimeout(() => {
        setInputError('')
      }, 3000)
      setValue('')
      return
    } else if (isNaN(parseFloat(value))) {
      setInputError('Please enter a valid number')
      setTimeout(() => {
        setInputError('')
      }, 3000)
      setValue('')
      return
    } else {
      addToLocalStorage({ amount: `${parseFloat(value)}`, id, price })
      dispatch(getCurrentCryptoPriceList())
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
          <Input value={value} placeholder={'INPUT AMOUNT'} type={'number'} className='add-to-briefcase-modal__input' setValue={setValue} inputError={inputError} />
          <Button onClick={handleAdd} className='add-to-briefcase-modal__button' />
        </div>
      </div>
    </Modal>
  )
}

export default AddToBriefcaseModal