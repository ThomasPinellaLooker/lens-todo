import { theme, ThemeProvider } from 'looker-lens';
import * as React from 'react'
import { create } from 'react-test-renderer';
import LensTodo from './LensTodo';

test('Default Todo', () => {
  const component = create(
    <ThemeProvider theme={theme}>
      <LensTodo />
    </ThemeProvider>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
