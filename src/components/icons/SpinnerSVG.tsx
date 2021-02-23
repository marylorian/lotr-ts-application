import React from 'react'
import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from './constants'

const SpinnerSVG = ({
  height = DEFAULT_HEIGHT,
  width = DEFAULT_WIDTH,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" height={height} width={width} {...props}>
    <path d="M50.6,95c-14.3,0-27.9-6.9-36.4-18.5l14.5-10.6C33.9,72.9,42,77,50.6,77c14.9,0,27-12.1,27-27  s-12.1-27-27-27l-0.1,0V5v9l0-9c24.9,0,45.1,20.2,45.1,45S75.4,95,50.6,95z" />
  </svg>
)

export default SpinnerSVG
