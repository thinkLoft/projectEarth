import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Login from './components/login/index.js';
import AddFreeTime from './components/addFreeTime/index.js';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/addFreeTime" component={AddFreeTime} />
    </div>
  </Router>
);

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Login />
//       </div>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <AddFreeTime />
//       </div>
//     );
//   }
// }

export default App;
