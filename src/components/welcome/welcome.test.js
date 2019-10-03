import React from "react"
import { mount } from "enzyme"
import { Welcome } from "./welcome"

describe("Welcome component", () => {
  test("Check component render", () => {
    const wrapper = mount(<Welcome/>)

    expect(wrapper.find("#title").text().trim())
      .toBe("React init pack.")

    expect(wrapper.find("#sub-title").text().trim())
      .toBe("A simple way to start a react package for npm.")

    expect(wrapper.find("#link").prop("href").trim())
      .toBe("https://github.com/C4co/react-init-pack")
  })
})
