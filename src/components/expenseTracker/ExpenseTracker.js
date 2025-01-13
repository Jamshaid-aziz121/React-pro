import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Form, FormGroup, Row, Table } from 'react-bootstrap';

export function ExpenseTracker() {
  let [budget, setBudget] = useState(0)
  let [expense, setExpense] = useState([])
  let balance = 0;
  let totalAmount = 0;
  const [isSubmitted, setisSubmitted] = useState(false);
  let index = 0;
  var date = new Date();
  // let [date, setDate] =useState[ ];



  let saveBudget = (e) => {
    e.preventDefault();
    let urBudget = e.target.amount.value;
    console.log(urBudget)
    // let budget = urBudget;
    setBudget(urBudget)
    setisSubmitted(true)

  }


  let saveItem = (e) => {
    e.preventDefault();

    let itemName = e.target.item.value;
    let itemPrice = +e.target.price.value;
    if (expense.find(item => item.itemName == itemName)) {
      alert('items already exit , Do You want to add it again, Yes')
    } else {

      let objTask = {
        itemName,
        itemPrice,
      }

      expense.push(objTask)
      // console.log(expense)
      setExpense([...expense])
    }
    e.target.item.value = "";
    e.target.price.value = "";
  }

  let listOfExpense = expense.map((element, ind) => {

    totalAmount += element.itemPrice;
    console.log("Here it is", totalAmount)

    if (ind === 0) {
      balance = budget - element.itemPrice;
    } else {
      balance = balance - element.itemPrice;

    }
    return (
      <ItemName {...element} budget={budget} indexNum={ind} balance={balance} totalAmount={totalAmount} key={ind} />
    )
  })

  // console.log('list of Expense' + listOfExpense)

  return (
    <div className="expense">
      <Container fluid>
        <Container>
          <h1><h5>{date.toDateString()}</h5>  Expense Tracker </h1>
          <h3 className='text-primary bg-light p-3 mb-3 rounded-3 '> ur Budget :   {budget}</h3>

          <Form onSubmit={saveBudget}>
            {!isSubmitted && <div>
              <div className='d-flex  justify-content-center gap-3 mt-2'>
                <input type="text" className='mr-1' name='amount' placeholder="Budget Amount" />
                <button type='submit' className='btn btn-dark ml-2'> Add </button>
              </div>
            </div>}
          </Form>

          {isSubmitted && <div className={`${isSubmitted ? '' : 'hide'}`}>
            <Form className='itemform' onSubmit={saveItem}>

              <div className='d-flex justify-content-around gap-4 w-60  mb-5 mt-5'>
                <Form.Control size='lg' className='mr-4' name='item' type="text" placeholder="item name" />
                <Form.Control size='lg' className='mr-4' name='price' type="text" placeholder=" item price" />
                <button className='btn btn-dark'>save</button>
              </div>

            </Form>



            <Table striped bordered hover className="table-sm fs-6 shadow">
              <thead>
                <tr className='fWeight'>
                  <td> Serial # </td>
                  <td>Item Name </td>
                  <td>Item Price </td>
                  <td> Current Balance</td>
                </tr>
              </thead>
              <tbody>
                {listOfExpense}
              </tbody>

              <tfoot className={`${!expense[index] == 0 ? '' : 'hide'}`}>
                <tr>
                  <td></td>
                  <td>Total Expense :</td>
                  <td>{totalAmount}</td>
                  <td></td>

                </tr>
              </tfoot>
            </Table>



          </div>}
        </Container>
      </Container>




    </div>
  );
}


function ItemName({ itemName, itemPrice, indexNum, balance, totalAmount }) {
  return (
    <>
      {/* <li> {itemName} : {itemPrice} : {budget - itemPrice} </li> */}
      <tr>

        <td>{indexNum + 1}</td>
        <td>{itemName}</td>
        <td>{itemPrice}</td>
        <td>{balance}</td>

      </tr>
    </>
  )
}
