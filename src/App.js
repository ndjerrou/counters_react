import Counter from './ui/Counter';

const App = () => {
  return (
    <>
      <Counter initialCount={100} name='Nissim' isDisplay={true} />
      <Counter initialCount={0} name='Nissim' isDisplay={true} />
      <Counter initialCount={18} name='Nissim' isDisplay={true} />
    </>
  ); // counter(0, Nissim, true)
};

export default App;
