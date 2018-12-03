import * as React from 'react'
import './LensTodo.css'

// Lens components
import {
  Button,
  Card,
  CardContent,
  Flex,
  FlexItem,
  Heading,
  theme,
  ThemeProvider,
} from 'looker-lens'

// User defined components.
import { AddTodo } from '../components/AddTodo'
import { Divider } from '../components/Divider'
import { TodoList } from '../components/TodoList'

// Some useful utilities.
import
{
  Todo,
  TodoAppState,
  todoFromStr,
  Todos,
} from '../utils/todo_utils'

// Some data to seed app with.
import { todoItems } from '../utils/todo_items'

/**
 * Every React app is itself a component. Here we will define a basic container component,
 * an app state, and a composition of Lens and user defined components
 * to create a sweet Todo app.
 */
export default class LensTodo extends React.Component<{}, TodoAppState> {

  constructor(props: {}) {
    super(props)

    // Initial state of app. This can come from anything (e.g local storage, a server call, etc)
    // but for simplicity we will simply set here every time we start app.
    this.state = {
      showCompleted: false,
      todos: todoItems.map(todoFromStr),
    }
  }

  // Handler to add a todo to list.  Note we are creating an immutable new todo list
  // and set state for that. Conventional React tries to not mutate state as much as possible.
  public add = (what: string) => {
    this.setState({
      todos: [...this.state.todos, todoFromStr(what)] as Todos
    })
  }

  // Handler when some state in a todo changes.
  public updateTodo = (id: number, completed: boolean, on?: Date) => {
    const todos = this.state.todos.map((t: Todo) => (t.id !== id ? t : { ...t, completed, on }))
    this.setState({todos})
  }

  // Remove a given todo.
  public removeTodo = (id: number) => {
    this.setState({
      todos: this.state.todos.filter((t: Todo) => t.id !== id)
    })
  }

  // Toggle whether or not to show completed todos.
  public toggleCompleted = () => {
    this.setState({showCompleted: !this.state.showCompleted})
  }

  // The render function is called anytime a component's state or properties (props) change.
  public render() {

    const { todos, showCompleted } = this.state
    const activeTodos = todos.filter((todo) => !todo.completed)
    const completedTodos = todos.filter((todo) => todo.completed)
    const toggleButtonText = showCompleted ? 'Hide' : 'Show'

    return (
      <ThemeProvider theme={theme}>
        <Flex bg={theme.colors.semanticColors.primary.lighter} height="100%" justifyContent="center" alignItems="flex-start">
          <FlexItem>
            <Card className="todo-card" raised>
              <CardContent>
                <Flex justifyContent="center">
                  <Heading size="d3">Get stuff done with Lens</Heading>
                </Flex>
                <AddTodo addTodo={this.add} />
                <TodoList updateTodo={this.updateTodo}
                          removeTodo={this.removeTodo}
                          todos={activeTodos}/>
                <Divider />
                <Flex justifyContent="center">
                  <Button variant="transparent"
                          size="small"
                          disabled={completedTodos.length === 0}
                          onClick={this.toggleCompleted}>
                    {toggleButtonText} completed items
                  </Button>
                </Flex>
                {
                  showCompleted &&
                    <TodoList updateTodo={this.updateTodo}
                              removeTodo={this.removeTodo}
                              todos={completedTodos} />
                }
              </CardContent>
            </Card>
          </FlexItem>
        </Flex>
      </ThemeProvider>
    )
  }
}
