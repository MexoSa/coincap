import React, { FC } from 'react'

type ModalProps = {
  children?: React.ReactNode,
  closeModal: () => void,
}

const Modal: FC<ModalProps> = ({ closeModal, children }) => {
  return (
    <div className='modal' onClick={e => (e.currentTarget === e.target) && closeModal()}>
      <div className='modal__content'>
        <div className='modal__close' onClick={closeModal}>X</div>
        {children}
      </div>
    </div>
  )
}

export default Modal