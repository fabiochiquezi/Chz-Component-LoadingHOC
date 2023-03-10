import { SpinIcon } from '../SpinIcon'
import React, { FC } from 'react'

export type ILoadingPage = FC<{
  height?: string,
  className?: string
}>

export const LoadingPage: ILoadingPage = ({ height = 'h-screen', className }) => (
  <div
    data-testid="LoadingPage"
    className={`flex flex-col items-center justify-center ${height} ${className}`}
  >
    <SpinIcon width={32} height={32} color="#FB923C" />
  </div>
)
