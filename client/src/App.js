import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar_component";
import detailList from "./components/details-list_component";
import Editdetail from "./components/edit-detail_component";
import Createdetail from "./components/create-detail_component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={detailList} />
        <Route path="/edit/:id" component={Editdetail} />
        <Route path="/create" component={Createdetail} />
      </div>
    </Router>
  );
}

export default App;
