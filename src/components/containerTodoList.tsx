import { ContainerTodoItem } from './containerTodoItem';
import { ContainerTodoSection } from './containerTodoSection';
import { useTodosContext } from './context/todosContext';
import { TodoAddForm } from './forms/todoAddForm';

export const ContainerTodoList = () => {
  const { todos } = useTodosContext();

  const doneTodos = Object.entries(todos).filter(([, value]) => value.isDone);

  const notDoneTodo = Object.entries(todos).filter(
    ([, value]) => !value.isDone
  );

  return (
    <>
      <TodoAddForm />
      {Object.entries(todos).length === 0 && <p>No task to show....</p>}

      <div className='flex flex-col m-auto max-w-[30rem] w-full'>
        {notDoneTodo.length != 0 && (
          <ContainerTodoSection title={'Ongoing'}>
            {notDoneTodo.map(([key, value]) => {
              return <ContainerTodoItem key={key} todo={value} listKey={key} />;
            })}
          </ContainerTodoSection>
        )}

        {doneTodos.length != 0 && (
          <ContainerTodoSection title={'Completed'}>
            {doneTodos.map(([key, value]) => {
              return <ContainerTodoItem key={key} todo={value} listKey={key} />;
            })}
          </ContainerTodoSection>
        )}
      </div>
    </>
  );
};
