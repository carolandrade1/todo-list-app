import { useState } from 'react';
import { SendIcon } from '../icons';
import { useTodosContext } from '../context/todosContext';

export const TodoAddForm = () => {
  const { addTodo } = useTodosContext();

  const [newText, setNewText] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = () => {
    if (newText.length > 0) {
      addTodo(newText);
      setNewText('');
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <form className='mb-14 w-full'>
      <label
        htmlFor='newTodo'
        className='"mb-2 text-sm font-medium text-gray-900 sr-only'
      >
        Write new todo.
      </label>
      <p className={`${error ? 'opacity-1' : 'opacity-0'}`}>
        At least one character
      </p>
      <div className='group relative'>
        <input
          value={newText}
          type='text'
          id='newTodo'
          placeholder='Write new todo...'
          className='block w-full p-3 sm:p-4 pl-6 pr-11 placeholder:text-gray-500 text-base bg-[#FBFBFB] shadow-lg border hover:border hover:border-gray-400 customTransition rounded-[20px] focus:outline-none focus:ring-2 focus:ring-gray-900'
          onChange={(e) => setNewText(e.target.value)}
          required
        />
        <button
          title='Add new todo'
          aria-label='Add new todo'
          type='submit'
          className='absolute right-4 top-[13px] sm:top-[17px] group-hover:-rotate-45 customTransition '
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <SendIcon />
        </button>
      </div>
    </form>
  );
};
