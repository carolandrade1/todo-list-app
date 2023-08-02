interface ContainerTodoSectionProps {
  children: React.ReactNode;
  title: string;
}

export const ContainerTodoSection = ({
  children,
  title,
}: ContainerTodoSectionProps) => {
  return (
    <section className='mb-10'>
      <h2 className='text-base font-medium sm:text-lg sm:font-normal mb-4 sm:mb-6'>
        {title}
      </h2>
      <ul className='flex items-center flex-col w-full'>{children}</ul>
    </section>
  );
};
