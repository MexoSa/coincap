import React from 'react'

type ButtonProps = {
  onClick: () => void,
  className?: string,
  children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ onClick, className = "", children = 'Add' }) => {
  return (
    <div className={`button ${className}`} onClick={onClick}>
      {children}
    </div>
  )
}

export default Button