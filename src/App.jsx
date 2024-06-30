import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [name, setName] = useState("Sandeep")

  // declare here function 
  function updateName(value) {
    setName(value)
  }

  return (
    <>
      <div className="container">
        <div className="card mt-4" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Click on Btn given below to update Name</h5>
            <p className="card-text">Name: <span className='d-inline-block fw-bold'>{name}</span></p>
            <a className="btn btn-primary me-2" onClick={() => updateName('Learning Panda')}>Click 1</a>
            <a className="btn btn-primary" onClick={() => updateName('Pradeep')}>Click 2</a>
          </div>
        </div>
      </div>

    </>

  )
}

export default App
