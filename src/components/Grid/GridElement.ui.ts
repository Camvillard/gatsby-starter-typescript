import styled from "styled-components"
import { Breakpoint } from "../../shared/types/Breakpoint.type"
import { themeBreakpoints } from "../../shared/theme/theme"

const { sm, md, lg, xlg } = themeBreakpoints

export type GridElementProps = {
  column: Breakpoint<string>
  justify?: Breakpoint<string>
  align?: Breakpoint<string>
  row?: Breakpoint<string>
  area?: Breakpoint<string>
  padding?: Breakpoint<string>
}

export const GridElement = styled.div<GridElementProps>`
  grid-column: ${props => props.column.default};
  align-self: ${props => props.align?.default};
  justify-self: ${props => props.justify?.default};
  grid-row: ${props => props.row?.default};
  grid-area: ${props => props.area?.default};
  padding: ${props => props.padding?.default};
  @media (min-width: ${sm}) {
    grid-column: ${props => props.column.sm};
    align-self: ${props => props.align?.sm};
    justify-self: ${props => props.justify?.sm};
    grid-row: ${props => props.row?.sm};
    grid-area: ${props => props.area?.sm};
    padding: ${props => props.padding?.sm};
  }
  @media (min-width: ${md}) {
    grid-column: ${props => props.column.md};
    align-self: ${props => props.align?.md};
    justify-self: ${props => props.justify?.md};
    grid-row: ${props => props.row?.md};
    grid-area: ${props => props.area?.md};
    padding: ${props => props.padding?.md};
  }
  @media (min-width: ${lg}) {
    grid-column: ${props => props.column.lg};
    align-self: ${props => props.align?.lg};
    justify-self: ${props => props.justify?.lg};
    grid-row: ${props => props.row?.lg};
    grid-area: ${props => props.area?.lg};
    padding: ${props => props.padding?.lg};
  }
  @media (min-width: ${xlg}) {
    grid-column: ${props => props.column.xlg};
    align-self: ${props => props.align?.xlg};
    justify-self: ${props => props.justify?.xlg};
    grid-row: ${props => props.row?.xlg};
    grid-area: ${props => props.area?.xlg};
    padding: ${props => props.padding?.xlg};
  }
`
