import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { getByTestId, screen } from '@testing-library/dom'
import Description from "../description"

test("Displays a description", () => {
  render(<Description text="A long, long, time ago." />)

  expect(screen.getByTestId("description")).toHaveTextContent("A long, long, time ago")
})
