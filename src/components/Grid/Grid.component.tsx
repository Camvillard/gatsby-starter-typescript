import React, { ReactNode } from "react"
import { GridWrapper, GridWrapperProps } from "./Grid.ui"

interface GridProps extends GridWrapperProps {
  children: ReactNode
}

export const Grid = (props: GridProps) => {
  const { children } = props
  return <GridWrapper {...props}>{children}</GridWrapper>
}
