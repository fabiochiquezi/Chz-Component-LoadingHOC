import React, { FC } from 'react'
import { Div } from './styles'

const SpinIcon: FC<{
  className?: string
  width?: number
  height?: number
  color?: string
  stroke?: number
}> = ({
  className = '',
  width = 16,
  height = 16,
  color = '#fff',
  stroke = 2
}) => (
    <Div
      data-testid="SpinIcon"
      className={className}
      style={{ width: width + 20, height: height + 20 }}
    >
      <div
        style={{
          width,
          height,
          border: `${stroke}px solid ${color}`,
          borderColor: `${color} transparent transparent transparent`
        }}
      ></div>
      <div
        style={{
          width,
          height,
          border: `${stroke}px solid ${color}`,
          borderColor: `${color} transparent transparent transparent`
        }}
      ></div>
      <div
        style={{
          width,
          height,
          border: `${stroke}px solid ${color}`,
          borderColor: `${color} transparent transparent transparent`
        }}
      ></div>
      <div
        style={{
          width,
          height,
          border: `${stroke}px solid ${color}`,
          borderColor: `${color} transparent transparent transparent`
        }}
      ></div>
    </Div>
  )


export { SpinIcon }
