import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { getByTestId, screen } from '@testing-library/dom'
import Title from "../title"

test("Displays a title", () => {
  render(<Title text="Grand Title" />)

  expect(screen.getByTestId("hero-title")).toHaveTextContent("Grand Title")
})
