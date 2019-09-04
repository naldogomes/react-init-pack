import React from 'react'
import { storiesOf } from '@storybook/react'
import { Welcome } from "../src"
import WelcomeReadme from "../src/components/welcome/welcome.md"

storiesOf('Welcome', module)
  .addParameters({
    readme: {
      sidebar: WelcomeReadme
    }
  })
  .add('Basic', () => (
    <Welcome/>
  ))
