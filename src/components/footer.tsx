export const Footer = () => {
  return (
    <footer className='flex justify-between border-t-[1px] border-gray-300 w-full'>
      <div className='flex items-center md:text-base gap-1'>
        <span className='text-sm'> ©{new Date().getFullYear()} | </span>
        <a
          href='https://github.com/carolandrade1'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Github Profile of Carol Andrade'
          title='Github Profile - Carol Andrade'
          className='flex items-center gap-1 text-sm'
        >
          Carol Andrade
        </a>
      </div>
      <div>
        <a
          href='https://github.com/carolandrade1/todo-list-app'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Source code of this project'
          title='Source code of this project'
          className='flex justify-between gap-1 items-center p-1 rounded-lg text-sm'
        >
          Source
        </a>
      </div>
    </footer>
  );
};
