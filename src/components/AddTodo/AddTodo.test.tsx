import { mount } from 'enzyme';
import { theme, ThemeProvider } from 'looker-lens';
import * as React from 'react'
import { create } from 'react-test-renderer';
import "../../../test/setupJest.js"
import { AddTodo } from './AddTodo';

test('Default AddTodo', () => {
  const addTodo = () => undefined

  const component = create(
    <ThemeProvider theme={theme}>
      <AddTodo addTodo={addTodo} />
    </ThemeProvider>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Add button is disabled initially', () => {
  const addTodo = () => undefined

  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <AddTodo addTodo={addTodo} />
    </ThemeProvider>
  )

  const addButton = wrapper.find('button')
  expect(addButton.props().disabled).toBe(true)
})
