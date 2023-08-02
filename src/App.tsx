import { ContainerTodoList } from './components/containerTodoList';
import { TodosContextProvider } from './components/context/todosContext';
import { Footer } from './components/footer';
import { Header } from './components/header';

function App() {
  return (
    <div className='grid grid-rows-layout items-baseline w-full min-h-screen sm:max-w-[42rem] pt-8 pb-6 px-6 m-auto'>
      <Header />

      <main className='max-w-[38rem] w-full mx-auto p-4'>
        <h1 className='font-bold text-5xl mb-4'>Todo List.</h1>
        <TodosContextProvider>
          <ContainerTodoList />
        </TodosContextProvider>
      </main>

      <Footer />
    </div>
  );
}

export default App;
