export interface Todosdata {
  todo?: string;
  completed?: boolean;
  id?: string;
  date?: any;
}

export interface TodoWrapperChildren {
  TodoHead: React.ReactNode;
  TextInput: React.ReactNode;
  AddButton: React.ReactNode;
  logic:any;
  TodosData: Todosdata[];
}


export interface singleTodo {
  todo?: string;
  completed?: boolean;
  id?: string;

}

export interface completedTodos {
  completed?: boolean;
  id?: string;

}
