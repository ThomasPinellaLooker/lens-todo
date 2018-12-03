import * as React from 'react'

import { TodoElement } from './TodoElement'

import {
  RemoveTodoCallback,
  Todo,
  Todos,
  UpdateTodoCallback
} from '../utils/todo_utils'

import {
  Box,
  List
} from 'looker-lens'

// Todo list interface
interface TodoListProps {
  todos: Todos,
  updateTodo: UpdateTodoCallback
  removeTodo: RemoveTodoCallback
}

export class TodoList extends React.Component<TodoListProps, {}> {

  // Helper method to generate a todo list element
  public generateTodo = (todo: Todo) =>
    <TodoElement key={todo.id}
                 todo={todo}
                 updateTodo={this.props.updateTodo}
                 removeTodo={this.props.removeTodo} />


  public render() {
    return (
      <Box mt='medium'>
        <List>
          {
            this.props.todos.map(this.generateTodo)
          }
        </List>
      </Box>
    )
  }
}
