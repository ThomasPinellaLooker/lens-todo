import { theme, ThemeProvider } from 'looker-lens';
import * as React from 'react'
import { create } from 'react-test-renderer';
import { AddTodo } from './AddTodo';

test('Default AddTodo', () => {
  const component = create(
    <ThemeProvider theme={theme}>
      <AddTodo addTodo={() => undefined} />
    </ThemeProvider>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
