import * as React from 'react'
import Moment from 'react-moment'
import './TodoElement.css'

import {
  RemoveTodoCallback,
  Todo,
  UpdateTodoCallback,
} from '../utils/todo_utils'

// Lens components
import {
  Box,
  Button,
  Checkbox,
  Flex,
  IconClose,
  ListItem,
  Text
} from 'looker-lens'

// Component interface
interface TodoElementProps {
  todo: Todo,
  updateTodo: UpdateTodoCallback,
  removeTodo: RemoveTodoCallback
}

// Internal state for when to show the the remove button.
interface TodoElementState {
  showRemoveUx: boolean
}

// Displays a provided todo.
export class TodoElement extends React.Component<TodoElementProps, TodoElementState> {

  constructor(props: TodoElementProps) {
    super(props)

    this.state = {
      showRemoveUx: false,
    }
  }

  public checkboxChanged = (event: any) => {
    this.props.updateTodo(this.props.todo.id, event.target.checked,  event.target.checked  ? new Date() : undefined)
  }

  public removeTodo = () => {
    this.props.removeTodo(this.props.todo.id)
  }

  // Utility methods to show a remove button for the given todo item.
  public mouseEnter = () => {
    this.showRemoveUx(true)
  }

  public mouseLeave = () => {
    this.showRemoveUx(false)
  }

  public showRemoveUx = (showRemoveUx: boolean) => {
    this.setState({showRemoveUx})
  }

  public render() {

    const eventProps = {onMouseEnter: this.mouseEnter, onMouseLeave:this.mouseLeave}

    return (
        <ListItem {...eventProps}>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box mr="medium">
              <Checkbox onChange={this.checkboxChanged}
                        checked={this.props.todo.completed}/>
            </Box>
            <Text size="3" className={this.props.todo.completed ? "completed": "active"}>
              {this.props.todo.what}
            </Text>
            {
              this.props.todo.on && <Box ml="small">
                                      <Text size="6">
                                        <Moment fromNow>{this.props.todo.on.toString()}</Moment>
                                      </Text>
                                    </Box>
            }
          </Flex>
          {
            this.state.showRemoveUx && <Button size="small"
                                               variant="transparent"
                                               onClick={this.removeTodo}><IconClose /></Button>
          }
        </Flex>
      </ListItem>
    )
  }
}
