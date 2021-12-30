import Balance from "./components/Balance";
import Header from "./components/Header";
import './App.css';
import IncomeStatement from "./components/IncomeStatement";
import TransactionList from "./components/TransactionList";
import AddTransactions from "./components/AddTransactions";
import { GlobalProvider } from "./Context/GlobalState";


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeStatement />
        <TransactionList />
        <AddTransactions />
      </div>
    </GlobalProvider>
  );
}

export default App;
