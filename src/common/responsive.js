import React from 'react'
import Responsive from 'react-responsive'

export const Desktop = ({ children }) =>
  <Responsive minWidth={992} children={children} />
export const MobileTablet = ({ children }) =>
  <Responsive maxWidth={991} children={children} />
