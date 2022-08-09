import React from 'react'

type ButtonProps = {
  onClick?: () => void,
  className?: string,
  type?: 'button' | 'submit' | 'reset',
  children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ onClick, className = "", children = 'Add', type = "button" }) => {
  return (
    <button type={type} className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button