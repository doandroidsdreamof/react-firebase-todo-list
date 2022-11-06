export interface Todosdata {
  todo?: string;
  completed?: boolean;
  date?: any;
  createdAt?: string;
  id?: string;
  owner?: string;
}

export interface TodoWrapperChildren {
  TodoHead: React.ReactNode
  TextInput: React.ReactNode
  AddButton: React.ReactNode
  logic: any
  TodosData: Todosdata[]
}

export interface singleTodo {
  todo?: string
  completed?: boolean
  id?: string
}

export interface completedTodos {
  completed?: boolean
  id?: string
}
export interface ChartData {
  completed?: number
  unCompleted?: number

}
export interface LoginRegisterProps {
  children: React.ReactNode
  state: string
}


export type errorEmail = {
  validError: boolean,
}


export interface Values {
  password: string
  email: string
}