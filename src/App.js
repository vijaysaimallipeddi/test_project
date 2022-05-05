// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from 'react'
// import SignUp from './registrationform/SignUp'

// function App() {
//   return(
//     <div>
//       <SignUp/>
//     </div>

//   )

// }

// export default App

import React, {useState} from "react";
import Data from './city.json'

const App = () => {
  const [search, setSearch] = useState('')
  return (
  <div>
    <center>
      <h4>Enter the city:</h4>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} /> <br />
      {Data.filter(city => city.name.toLowerCase().includes(search.toLocaleLowerCase())).map(city => {
        return (
        <div style={{"border":"1px solid black","padding":"10px","margin":"10px","maxWidth":"70%"}}>
          {city.name}
        </div>
        )
      })}
    </center>
  </div>
  )
}

export default App