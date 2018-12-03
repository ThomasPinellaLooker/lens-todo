// Basic Todo interface
export interface Todo {
  id: number,
  what: string,
  completed: boolean,
  on?: Date
}

// Array of todos
export interface Todos extends Array<Todo>{}

/**
 * Definition of our entire app state. We can manage this state in a variety of ways, including
 * React's default component state, Redux, and/or a handful of other approaches.
 */
export interface TodoAppState {

  /* Indicates if we should show the completed todos or not */
  showCompleted: boolean

  /* List o' todos */
  todos: Todos,
}

// Internal counter for creating incrementing IDs
let idCounter = 0

// Returns a new todo for a given string.
export const todoFromStr = (what: string) =>
  ({ what, completed: false, id: idCounter++})

// Callback types
export type AddTodoCallback = (todo: string) => void
export type RemoveTodoCallback = (id: number) => void
export type UpdateTodoCallback = (id: number, completed: boolean, when?: Date) => void
