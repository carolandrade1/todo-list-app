import { useState } from 'react';
import { SendIcon } from '../icons';
import { Todo, useTodosContext } from '../context/todosContext';

interface TodoEditFormProps {
  listKey: string;
  todo: Todo;
  onClick: () => void;
}

export const TodoEditForm = ({ listKey, todo, onClick }: TodoEditFormProps) => {
  const { editTodo } = useTodosContext();
  const [text, setText] = useState<string>(todo.text);

  return (
    <form className='w-full'>
      <label
        htmlFor='newtask'
        className='"mb-2 text-sm font-medium text-gray-900 sr-only'
      >
        Edit task
      </label>
      <div className='relative'>
        <input
          value={text}
          type='text'
          className='block w-full p-4 pl-6 pr-10 placeholder:text-gray-500 text-base bg-[#FBFBFB] rounded-[20px] focus:outline-none focus:ring-2 focus:ring-gray-900'
          onChange={(e) => setText(e.target.value)}
        />
        <button
          title='Edit task'
          aria-label='Edit task'
          type='submit'
          className='absolute right-4 top-[17px]'
          key='Edit task'
          onClick={(e) => {
            e.preventDefault();
            onClick();
            editTodo(listKey, text);
          }}
        >
          <SendIcon />
        </button>
      </div>
    </form>
  );
};
