import React, { SVGProps } from 'react'
import { SpinnerIcon } from '../icons'
import './styles.css'

enum ESize {
  Small = 16,
  Medium = 24,
  Large = 32,
}

interface ILoaderProps extends SVGProps<SVGSVGElement> {
  size?: ESize
}

const Loader: React.FunctionComponent<ILoaderProps> & {
  Size: typeof ESize
} = ({ size = ESize.Medium, ...svgProps }) => {
  return (
    <div className="loader">
      <SpinnerIcon height={size} width={size} {...svgProps} />
    </div>
  )
}

Loader.Size = ESize

export default Loader
