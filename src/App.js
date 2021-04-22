import React ,{useState} from "react";
import "./style.css";
import Expenses from "./Components/Expenses"
import NewExpense from "./Components/NewExpense";
import ExpensesFilter from "./Components/ExpensesFilter"

var DUMMY_EXPENSES = [
      {
        id: 'e1',
        title : "Car Insurance",
        amount : 123,
        date : new Date(2020,7,15)},
      {
        id:'e2',
        title : "Petrol charge",
      amount : 560.2,
      date : new Date(2020,8,14)},
      {
        id:'e3',
        title : "Bank Trasfer",
      amount : 1456,
      date : new Date(2020,2,13)},
      {
        id:'e4',
        title : "Bus charge",
      amount : 12.3,
      date : new Date(2021,9,12)
      }
    ];
function App() {
    
    const [expenses,setExpenses]=useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) =>
    {
      setExpenses((prevExpenses) =>{
        return [expense,...prevExpenses];
      })
    }
  return (
      <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;