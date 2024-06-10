import './App.css';

import { useRef } from 'react';
 
const data = [
  {
    id: 1,
    name: 'Ibrahim',
    position: 'Software Developer'
  },
  {
    id: 2,
    name: 'Firaol',
    position: 'Mechanical Engineer'
  }
]
// filtering an array
const rowData = [
  {
    id: 1,
    name: 'abc',
    price: 34
  },
  {
    id: 2,
    name: 'def',
    price: 36
  },
  {
    id: 3,
    name: 'ghi',
    price: 7
  },
  {
    id: 4,
    name: 'jkl',
    price: 88
  },
  {
    id: 5,
    name: 'mno',
    price: 40
  },
  {
    id: 6,
    name: 'pqr',
    price: 78
  }
];
const sortedFruits = []
const fruits = ['pinapple', 'banana', 'mango', 'apple','orange','papaya']
const filteredArray = rowData.filter( obj => obj.price>50);
// const sortedArray = [...array].sort((a, b) => a.localeCompare(b));

console.log()

console.log(filteredArray)
function App() {
  const inputRef = useRef(null);
  const handleInput = (e) =>{
    e.preventDefault();
    console.log(inputRef.current.value);
  }

  const newData = data.map( result =>(
    {
      id: result.id,
      title: `${result.name} is a ${result.position}`
    }
  ))
  console.log(newData)
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      <ul>
        {
          data.map( (result) => (
              <li key={result.id}>
              {result.name} - { result.position}
              </li>
            )
          )
        }

      </ul>

      <ol>
        {
          filteredArray.map( (result)=>(
            <li key={result.id}>
              {result.name}
            </li>
          ))
        }
      </ol>
    
        <ul>
          {
            sortedFruits.map( (fruit,index)=>(
              <li key={index}>{fruit}</li>
            ))
          }
        </ul>

        <button > Sort the fruit</button>

      </header>

      <div className='container bg-primary'>
          <div className='row'>
              <div className='col-12 col-md-8 col-lg-4'>
                col 1
              </div>
              <div className='col-12 col-md-4 col-lg-8'>
                col 2
              </div>
          </div>
      </div>

          <form onSubmit={handleInput}>
              <input ref={inputRef} type='text'/>
              <button type='submit'>Submit</button>
          </form>
   

    </div>

  );
}

export default App;
