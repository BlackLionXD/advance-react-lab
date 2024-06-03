import logo from './logo.svg';
import './App.css';

const data = [
  {
    id: '1',
    name: 'Ibrahim',
    position: 'Software Developer'
  },
  {
    id: '2',
    name: 'Firaol',
    position: 'Software Developer'
  },
]
function App() {
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
            data.map( employee =>(
            
              <li key={employee.id}>
                  {employee.name} - {employee.position}
             
              </li>
            
            ))
          }
        </ul>

      </header>

    </div>
  );
}

export default App;
