import React from 'react'

type InputType = {
  value: string,
  placeholder: string,
  type: string,
  className?: string,
  inputError?: string,
  // eslint-disable-next-line no-unused-vars
  setValue: (value: string) => void
}

const Input: React.FC<InputType> = ({ value, placeholder, className = '', type, setValue, inputError }) => {

  const handleChange = (value: string) => {
    if (+value >= 0) {
      setValue(value)
    }
  }

  return (
    <div className='input-wrapper'>
      <input type={type} placeholder={placeholder} className={`input-wrapper__content ${className}`} value={value} onChange={(e) => handleChange(e.target.value)} />
      {
        inputError
        &&
        <div className='input-wrapper__error'>
          <span>{inputError}</span>
        </div>
      }

    </div>

  )
}

export default Input