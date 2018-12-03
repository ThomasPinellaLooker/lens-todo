import * as React from 'react'
import './AddTodo.css'

import { AddTodoCallback } from '../utils/todo_utils'

import {
  Box,
  Button,
  FieldText,
  Flex,
  Form
} from 'looker-lens'

// Component interface.
interface AddTodoProps {
  addTodo: AddTodoCallback
}

interface AddTodoState {
  input: string
}

export class AddTodo extends React.Component<AddTodoProps, AddTodoState> {

  constructor(props: AddTodoProps) {
    super(props)

    this.state = {
      input: ''
    }
  }

  // I used a form in my component so clicking 'Enter' when typing would call my add action.
  // Notice I did have to prevent default
  public submit = (event: any) => {
    event.preventDefault()
    const trimmedInput = this.state.input.trim()

    if (!trimmedInput) {
      return
    }

    this.props.addTodo(trimmedInput)

    this.setState({
      input: ''
    })
  }

  public onChange = (event: any) => {
    this.setState({
      input: event.target.value
    })
  }

  public render() {

    const { input } = this.state

    return (
      <Form onSubmit={this.submit}>
        <Flex mt="medium">
          <Box className="todo-input-container">
            <FieldText value={input}
                       placeholder="Add a todo..."
                       onChange={this.onChange} />
          </Box>
          <Button size="small" disabled={input.length === 0}>Add it</Button>
        </Flex>
      </Form>
    )
  }
}
