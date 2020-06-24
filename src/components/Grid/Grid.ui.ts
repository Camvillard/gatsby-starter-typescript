import styled from "styled-components"
import { Breakpoint } from "../../shared/types/Breakpoint.type"
import { themeBreakpoints } from "../../shared/theme/theme"

const { sm, md, lg, xlg } = themeBreakpoints

export interface GridWrapperProps {
  columns: Breakpoint<string>
  gap: Breakpoint<string>
  justify: Breakpoint<string>
  align: Breakpoint<string>
  rows?: Breakpoint<string>
  area?: Breakpoint<string>
  justifyContent?: Breakpoint<string>
  alignContent?: Breakpoint<string>
  margin?: Breakpoint<string>
}
export const GridWrapper = styled.div<GridWrapperProps>`
  margin: ${props => props.margin?.default};
  display: grid;
  grid-template-columns: ${props => props.columns.default};
  justify-items: ${props => props.justify.default};
  align-items: ${props => props.align.default};
  gap: ${props => props.gap.default};
  grid-template-rows: ${props => props.rows?.default};
  grid-template-areas: ${props => props.area?.default};
  justify-content: ${props => props.justifyContent?.default};
  align-content: ${props => props.alignContent?.default};
  @media (min-width: ${sm}) {
    margin: ${props => props.margin?.sm};
    grid-template-columns: ${props => props.columns.sm};
    justify-items: ${props => props.justify.sm};
    align-items: ${props => props.align.sm};
    gap: ${props => props.gap.sm};
    grid-template-rows: ${props => props.rows?.sm};
    grid-template-areas: ${props => props.area?.sm};
    justify-content: ${props => props.justifyContent?.sm};
    align-content: ${props => props.alignContent?.sm};
  }
  @media (min-width: ${md}) {
    margin: ${props => props.margin?.md};
    grid-template-columns: ${props => props.columns.md};
    justify-items: ${props => props.justify.md};
    align-items: ${props => props.align.md};
    gap: ${props => props.gap.md};
    grid-template-rows: ${props => props.rows?.md};
    grid-template-areas: ${props => props.area?.md};
    justify-content: ${props => props.justifyContent?.md};
    align-content: ${props => props.alignContent?.md};
  }
  @media (min-width: ${lg}) {
    margin: ${props => props.margin?.lg};
    grid-template-columns: ${props => props.columns.lg};
    justify-items: ${props => props.justify.lg};
    align-items: ${props => props.align.lg};
    gap: ${props => props.gap.lg};
    grid-template-rows: ${props => props.rows?.lg};
    grid-template-areas: ${props => props.area?.lg};
    justify-content: ${props => props.justifyContent?.lg};
    align-content: ${props => props.alignContent?.lg};
  }
  @media (min-width: ${xlg}) {
    margin: ${props => props.margin?.xlg};
    grid-template-columns: ${props => props.columns.xlg};
    justify-items: ${props => props.justify.xlg};
    align-items: ${props => props.align.xlg};
    gap: ${props => props.gap.xlg};
    grid-template-rows: ${props => props.rows?.xlg};
    grid-template-areas: ${props => props.area?.xlg};
    justify-content: ${props => props.justifyContent?.xlg};
    align-content: ${props => props.alignContent?.xlg};
  }
`
