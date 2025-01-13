// import './App.css';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { useState } from 'react';
import '../taskList/taskList.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleList, faRotateRight } from '@fortawesome/free-solid-svg-icons';


function TaskList() {
  const [taskList, setTaskList] = useState([])
  const [delet, setDelet] = useState([])

  const tasks = taskList.map((item, index) => {

    return (
      <TaskItems
        task={item}
        key={index}
        indexNumber={index}
        taskList={taskList}
        setTaskList={setTaskList}
        delet={delet}
        setDelet={setDelet} />
    )
  })



  const handleSubmit = (e) => {
    e.preventDefault();
    let taskItem = e.target.taskItem.value;

    if (taskList.includes(taskItem)) {
      toast.error("Task item is already exist....", { theme: "colored" })
      alert("Task item is already exist....")
    } else {
      // console.log(taskItem)
      setTaskList([...taskList, taskItem])
      toast.success("Task saved sucessfully...", { theme: "dark" })

    }
  }

  const UndoTask = ({ v, indxN }) => {
    const undo = () => {
      setTaskList([...taskList, delet.splice(indxN, 1)]);
      toast.warning("Task reversed sucessfully...", { theme: "dark" })

    }
    return (
      <li> {indxN + 1} - {v} <span onClick={undo}>
        <FontAwesomeIcon icon={faRotateRight} />
      </span></li>
    )
  }


  const deleTask = delet.map((v, i) => {
    return (
      <UndoTask v={v} key={i} indxN={i} taskList={taskList} setTaskList={setTaskList} />
    )

  })


  // const currentDate = new Date().toLocaleDateString();
  const currentDate = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "long", // Displays the full month name
    year: "numeric",
  });

  return (

    <div className="taskList">
      <Container fluid>
        <ToastContainer />
        <Container>
          <Row>
            <div id='title'>
              <h6 className='algin-item-center'>{currentDate} </h6>
              <h2>Task List</h2>
              <FontAwesomeIcon icon={faRectangleList} size='2x' />
            </div>
          </Row>
        </Container>

        <Container>
          <Row>
            <Form onSubmit={handleSubmit}>
              <div className='outerDiv'>
                <input type='text' name='taskItem' /><Button type='submit' btn btn-primary id="bttn">save</Button>
              </div>
            </Form>
          </Row>
          <Row>
            <ul>
              {tasks}
            </ul>
          </Row>
          <Row>
            <ul>
              {delet.length ? <h4 id='title2'>Deleted Items</h4> : null}
            </ul>
          </Row>
          <Row>
            <ul>
              {deleTask}
            </ul>
          </Row>
        </Container>

      </Container>
    </div >
  );
}

export default TaskList;

function TaskItems({ task, taskList, setTaskList, indexNumber, delet, setDelet }) {



  const deleteRow = () => {

    setDelet([...delet, taskList.splice(indexNumber, 1)]);

    toast.error("Task removed sucessfully...", { theme: "colored" })

  }

  return (

    <>
      <li>{indexNumber + 1} - {task} <span onClick={deleteRow}>&times;</span> </li>
    </>

  )
}

