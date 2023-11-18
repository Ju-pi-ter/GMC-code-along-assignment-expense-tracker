import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TranscationList from './components/TranscationList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider className="">
    <Header></Header>
    <div className="container">
      <Balance></Balance>
      <IncomeExpenses></IncomeExpenses>
      <TranscationList></TranscationList>
      <AddTransaction></AddTransaction>
    </div>
    </GlobalProvider>
  );
}

export default App;
