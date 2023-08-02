import { useState } from 'react';
import { Todo } from './context/todosContext';
import { TodoEditForm } from './forms/todoEditForm';
import { TodoItemForm } from './forms/todoItemForm';

interface ContainerTodoItemProps {
  todo: Todo;
  listKey: string;
}

export const ContainerTodoItem = ({
  todo,
  listKey,
}: ContainerTodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li
      key={listKey}
      className='flex flex-col items-center w-full mb-4 bg-[#FBFBFB] rounded-[20px] customTransition border border-transparent hover:border hover:border-gray-400'
    >
      {isEditing ? (
        <TodoEditForm
          listKey={listKey}
          todo={todo}
          onClick={() => setIsEditing(false)}
        />
      ) : (
        <TodoItemForm
          listKey={listKey}
          todo={todo}
          onClick={() => setIsEditing(true)}
        />
      )}
    </li>
  );
};
