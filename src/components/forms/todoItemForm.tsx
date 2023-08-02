import { Todo, useTodosContext } from '../context/todosContext';
import { DeleteIcon, EditIcon } from '../icons';

interface TodoItemFormProps {
  listKey: string;
  todo: Todo;
  onClick: () => void;
}

export const TodoItemForm = ({ listKey, todo, onClick }: TodoItemFormProps) => {
  const { checkTodo, deleteTodo } = useTodosContext();

  return (
    <form className='flex justify-between place-items-start w-full p-4'>
      <div className='flex items-start gap-3 w-full'>
        <input
          type='checkbox'
          id={listKey}
          className='min-w-[17px] h-[17px] rounded mt-1 cursor-pointer'
          onChange={(e) => checkTodo(listKey, e.target.checked)}
          checked={todo.isDone}
        />
        <label
          htmlFor={listKey}
          className={`text-base w-full cursor-pointer
              ${
                todo.isDone
                  ? 'italic line-through text-gray-500'
                  : 'text-gray-900'
              }`}
        >
          {todo.text}
        </label>
      </div>
      <div
        className={`flex items-center min-w-[55px] ${
          !todo.isDone ? 'justify-between' : 'justify-end'
        }`}
      >
        {!todo.isDone && (
          <button
            type='button'
            title='Edit task'
            aria-label='Edit task'
            onClick={onClick}
          >
            <EditIcon />
          </button>
        )}
        <button
          title='Delete task'
          aria-label='Delete task'
          type='submit'
          onClick={(e) => {
            e.preventDefault();
            deleteTodo(listKey);
          }}
        >
          <DeleteIcon />
        </button>
      </div>
    </form>
  );
};
