export interface Todosdata {
  todo?: string
  completed?: boolean
  id?: string
}

export interface TodoWrapperChildren {
  TodoHead: React.ReactNode
  TextInput: React.ReactNode
  AddButton: React.ReactNode
  LogOutButton: React.ReactNode
}
