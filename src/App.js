import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./bulma-0.9.0/css/bulma.css";
import Navbar from "./components/layout/Navbar";
import Sidenav from "./components/layout/Sidenav";
import Home from "./components/pages/Home";
import Dues from "./components/pages/DuesPage";
import Titlebar from "./components/layout/Titlebar";
import DuesState from "./context/dues/DuesState";

import "./App.sass";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="tile is-ancestor">
          <div className="tile is-2 has-background-black-bis">
            <Sidenav />
          </div>
          <div className="tile is-vertical">
            <Titlebar />
            <div className="tile is-parent">
              <div className="tile is-child">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <DuesState>
                    <Route exact path="/dues" component={Dues} />
                  </DuesState>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

// const App = () => {
//   return (
//     <div class="modal is-active">
//       <div class="modal-background"></div>
//       <div class="modal-card">
//         <header class="modal-card-head">
//           <p class="modal-card-title">Modal title</p>
//           <button class="delete" aria-label="close"></button>
//         </header>
//         <section class="modal-card-body"></section>
//         <footer class="modal-card-foot">
//           <button class="button is-success">Save changes</button>
//           <button class="button">Cancel</button>
//         </footer>
//       </div>
//     </div>
//   );
// };
// export default App;
