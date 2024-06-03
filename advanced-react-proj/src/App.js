import logo from './logo.svg';
import './App.css';

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

function App() {
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
          newData.map( (result)=>(
            <li key={result.id}>
              {result.title}
            </li>
          ))
        }
      </ol>
    


      </header>

    </div>
  );
}

export default App;
