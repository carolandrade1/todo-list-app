import { createContext, useContext, useState } from 'react';

interface TodosContextValue {
  todos: Record<string, Todo>;
  addTodo: (text: string) => void;
  deleteTodo: (key: string) => void;
  checkTodo: (key: string, isDone: boolean) => void;
  editTodo: (key: string, text: string) => void;
}

const TodosContext = createContext<TodosContextValue | null>(null);

interface TodosContextProviderProps {
  children: React.ReactNode;
}

export interface Todo {
  text: string;
  isDone: boolean;
}

export const TodosContextProvider = ({
  children,
}: TodosContextProviderProps) => {
  const [todos, setTodos] = useState<Record<string, Todo>>(
    JSON.parse(localStorage.getItem('todos') || '{}')
  );

  const addTodo = (text: string) => {
    // copy object
    const updateObject = { ...todos };

    // new value
    updateObject[crypto.randomUUID()] = {
      text,
      isDone: false,
    };

    // update react state - todos
    setTodos(updateObject);

    // add that key to the todo object
    localStorage.setItem('todos', JSON.stringify(updateObject));
  };

  const deleteTodo = (key: string) => {
    const updateObject = { ...todos };

    delete updateObject[key];

    setTodos(updateObject);

    localStorage.setItem('todos', JSON.stringify(updateObject));
  };

  const checkTodo = (key: string, isDone: boolean) => {
    const updateObject = { ...todos };

    updateObject[key].isDone = isDone;

    setTodos(updateObject);

    localStorage.setItem('todos', JSON.stringify(updateObject));
  };

  const editTodo = (key: string, text: string) => {
    const updateObject = { ...todos };

    updateObject[key].text = text;

    setTodos(updateObject);

    localStorage.setItem('todos', JSON.stringify(updateObject));
  };

  return (
    <TodosContext.Provider
      value={{ todos, addTodo, deleteTodo, checkTodo, editTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodosContext = () => {
  const context = useContext(TodosContext);
  if (context === null) {
    throw 'UseTodoContext should only be use inside TodosContextProvider';
  }
  return context;
};
