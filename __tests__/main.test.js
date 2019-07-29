import { mount } from 'enzyme'
import React from 'react'

describe("Suite", () => {
  test("first test", () => {
    const component = mount(
      <> <h1>Hello world!</h1> </>
    )

    expect(component.contains(<h1>Hello world!</h1>)).toBe(true)
  })
})
