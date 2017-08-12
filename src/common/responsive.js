import React from 'react'
import Responsive from 'react-responsive'

export const Large = ({ children }) =>
  <Responsive minWidth={992}>
    {children}
  </Responsive>
export const Medium = ({ children }) =>
  <Responsive maxWidth={991}>
    {children}
  </Responsive>
