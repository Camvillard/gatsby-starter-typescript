import React from "react"
import { action } from "@storybook/addon-actions"
import {
  withKnobs,
  text,
  boolean,
  number,
  object,
} from "@storybook/addon-knobs"
import { Grid } from "../src/components/Grid/Grid.component"
import { GridElement } from "../src/components/Grid/GridElement.ui"

export default {
  title: "Grid",
  component: Grid,
  decorators: [withKnobs],
}

const columns = {
  default: "1fr 1fr",
  xsm: "1fr 1fr 1fr",
  sm: "1fr 6fr 1fr",
  md: "repeat(4, 1fr)",
  lg: "1fr 1fr 1fr 1fr 1fr 1fr",
  xlg: "repeat(12, 1fr)",
}

const gap = {
  default: "8px",
  xsm: "10px",
  sm: "12px",
  md: "16px",
  lg: "18px",
  xlg: "24px",
}

const justify = {
  default: "start",
  xsm: "start",
  sm: "start",
  md: "start",
  lg: "start",
  xlg: "start",
}

const align = {
  default: "center",
  xsm: "center",
  sm: "center",
  md: "center",
  lg: "center",
  xlg: "center",
}

export const Standard = () => {
  return (
    <Grid columns={columns} gap={gap} justify={justify} align={align}>
      one
    </Grid>
  )
}

export const GridWithKnobs = () => {
  const columnsOptions = object("columns", columns)
  const gapOptions = object("gap", gap)
  const justifyOptions = object("justify items", justify)
  const alignOptions = object("align items", align)
  return (
    <Grid
      columns={columnsOptions}
      gap={gapOptions}
      justify={justifyOptions}
      align={alignOptions}
    >
      <GridElement column={{ default: "span 1" }}>one</GridElement>
      <GridElement column={{ default: "span 1" }}>two</GridElement>
      <GridElement column={{ default: "span 1" }}>three</GridElement>
      <GridElement column={{ default: "span 1" }}>four</GridElement>
      <GridElement column={{ default: "span 1" }}>five</GridElement>
      <GridElement column={{ default: "span 1" }}>six</GridElement>
      <GridElement column={{ default: "span 1" }}>seven</GridElement>
      <GridElement column={{ default: "span 1" }}>eight</GridElement>
      <GridElement column={{ default: "span 1" }}>nine</GridElement>
      <GridElement column={{ default: "span 1" }}>ten</GridElement>
      <GridElement column={{ default: "span 1" }}>eleven</GridElement>
      <GridElement column={{ default: "span 1" }}>twelve</GridElement>
    </Grid>
  )
}
