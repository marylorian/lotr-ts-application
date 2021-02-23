import React from 'react'
import classnames from 'classnames'
import './styles.css'

enum EButtonTheme {
  Primary = 'primary',
  Muted = 'muted',
}

export interface IButtonProps {
  className?: string
  isDisabled?: boolean
  theme?: EButtonTheme
  label: string
  onClick: () => void
}

const Button: React.FunctionComponent<IButtonProps> & {
  Theme: typeof EButtonTheme
} = ({
  className,
  isDisabled,
  theme = EButtonTheme.Primary,
  label,
  onClick,
}) => {
  return (
    <input
      className={classnames('button', `button_${theme}`, className)}
      type="button"
      disabled={isDisabled}
      value={label}
      onClick={onClick}
    />
  )
}

Button.Theme = EButtonTheme

export default Button
