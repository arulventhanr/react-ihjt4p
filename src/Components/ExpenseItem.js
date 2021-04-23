import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props)
{
  //const [title,SetTitle] = useState(props.title);

  /*const clickHandler =() =>{
    SetTitle('Updated');
    console.log("Clicked");
  };*/ 
  return(
    <li>
    <Card className="expense-item">
      <div>
      <ExpenseDate date={props.date}/>
      </div>
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">{props.amount}</div>
    </div>
    
    </Card>
    </li>
  );
}

export default ExpenseItem;