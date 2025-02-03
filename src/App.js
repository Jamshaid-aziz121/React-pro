
import './myStyle.css';
import './output.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';
import TaskList from './components/taskList/TaskList';
import FAQ from './components/FAQ/FAQ';
import Modal from './components/Modal/Modal';
import Passwordgenerator from './components/PASSWORD/Passwordgenerator.jsx';
import Tabbing from './components/Tabbing/Tabbing.js';
import TernaryOperator from './components/ternaryOperator/TernaryOperator.jsx';
import ShowHidePassword from './components/showHidePassword/ShowHidePassword.jsx';
import { ExpenseTracker } from './components/expenseTracker/ExpenseTracker.js';
import StateHandling from './components/stateHandling/StateHandling.jsx';
import { ToastContainer } from 'react-toastify';
import { db } from './firebase.js';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { Login } from './components/login/Login.jsx';
// import FormHandling from './components/CRUD-formHandling/CRUD.jsx';
import CRUD from './components/CRUD-formHandling/CRUD.jsx';
import Ecommerce from './components/EcommerceApp/EcommerceApp.js';
// import HomePage from './components/EcommerceApp/homepage/index.jsx';
// import Products from './components/EcommerceApp/products-list/products.jsx';
// import ProductDetails from './components/EcommerceApp/product-details/index.jsx';
// import Cart from './components/EcommerceApp/cart/index.jsx';
// import EcommerLogin from './components/EcommerceApp/login/index.jsx';



function App() {
  useEffect(() => {
    fetchtodos();
  }, [])
  const fetchtodos = async () => {

    const querySnapshot = await getDocs(collection(db, "todos"))
    const newData = querySnapshot.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(newData);
  }


  const addDocument = async () => {
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        text: "jams",
        isCompleted: false
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }


  return (
    <div id="myApp">
      <ToastContainer />

      <Row>
        <h1 onClick={addDocument} > Pro-x React </h1>
      </Row>

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/tasklist' element={<TaskList />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/modal' element={<Modal />} />
          <Route path='/passwordgenerator' element={<Passwordgenerator />} />
          <Route path='/tabbing' element={<Tabbing />} />
          <Route path='/ternaryoperator' element={<TernaryOperator />} />
          <Route path='/showhidepassword' element={<ShowHidePassword />} />
          <Route path='/expensetracker' element={<ExpenseTracker />} />
          <Route path='/statehandling' element={<StateHandling />} />
          <Route path='/formhandling' element={<CRUD />} />
          <Route path='/eCommerceApp' element={<Ecommerce />} >
            {/* <Route path="/eCommerceApp" element={<HomePage />} />
                  <Route path="/eCommerceApp/homepage" element={<HomePage />} />
                  <Route path="/eCommerceApp/products" element={<Products />} />
                  <Route
                    path="/eCommerceApp/product-details"
                    element={<ProductDetails />}
                  />
                  <Route
                    path="/eCommerceApp/product-details/:id"
                    element={<ProductDetails />}
                  />
                  <Route path="/eCommerceApp/cart" element={<Cart />} /> */}
          </Route>

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;


function Main() {
  return (
    <Container fluid>
      <Container>
        <Row className='main'>
          <Col>
            <NavLink to='/tasklist' end>  <Button className='shadow-lg bg-primary rounded-5 border-none'> Task List </Button> </NavLink>
          </Col>
          <Col>
            <NavLink to='/faq' end>  <Button className='shadow-lg bg-primary rounded-5 border-none'> FAQ </Button> </NavLink>
          </Col>
          <Col>
            <NavLink to='/modal' end>  <Button className='shadow-lg bg-primary rounded-5 border-none'> Modal </Button> </NavLink>
          </Col>
          <Col>
            <NavLink to='/passwordgenerator' end>  <Button className='shadow-lg bg-primary rounded-5 border-none'> Password Generator </Button> </NavLink>
          </Col>
          <Col>
            <NavLink to='/tabbing' end>  <Button className='shadow-lg bg-primary rounded-5 border-none'> Tabbing </Button> </NavLink>
          </Col>
          <Col>
            <NavLink to='/ternaryoperator' end>  <Button className='shadow-lg bg-primary rounded-5 border-none'> Ternary Operator </Button> </NavLink>
          </Col>
          <Col>
            <NavLink to='/showhidepassword' end>  <Button className='shadow-lg bg-primary rounded-5 border-none'> Show & Hide Password </Button> </NavLink>
          </Col>
          <Col>
            <NavLink to='/expensetracker' end>  <Button className='shadow-lg bg-primary rounded-5 border-none'> Expense Tracker </Button> </NavLink>
          </Col>
          <Col>
            <NavLink to='/statehandling' end>  <Button className='shadow-lg bg-primary rounded-5 border-none'> State Handling </Button> </NavLink>
          </Col>
          <Col>
            <NavLink to='/formhandling' end>  <Button className='shadow-lg bg-primary rounded-5 border-none'> CRUD- formHandling </Button> </NavLink>
          </Col>
          <Col>
            <NavLink to='/eCommerceApp' end>  <Button className='shadow-lg bg-primary rounded-5 border-none'> eCommerceApp </Button> </NavLink>
          </Col>
          <Col>
            <NavLink to='/login' end>  <Button className='shadow-lg bg-primary rounded-5 border-none'> Login </Button> </NavLink>
          </Col>

        </Row>
      </Container>
    </Container >
  )
}
