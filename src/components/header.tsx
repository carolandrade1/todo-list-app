export const Header = () => {
  return (
    <>
      <div className='-z-10 absolute top-0 left-0 right-0 bg-[#E7DCFF] h-[21rem] w-full rounded-bl-[40px] sm:rounded-none'></div>
      <div className='sm:hidden absolute top-[21rem] right-0'>
        <div className='bg-[#E7DCFF] effectTodo'></div>
      </div>

      <header className='w-full mb-16'>
        <img
          src='/todolist-icon.svg'
          alt=''
          width='44'
          height='44'
          className='shadow-lg rounded-2xl'
        />
      </header>
    </>
  );
};
