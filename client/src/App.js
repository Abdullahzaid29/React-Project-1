import axios from "axios";
import React, { useState } from "react";
import Main from "./components/main"
import { CSVLink } from "react-csv";
import "./App.css";
import Table from "./components/table";
import Reactxl from "react-html-table-to-excel";
import Home from "./components/Home"
import login from "./components/login"
import { BrowserRouter, Route ,Switch} from 'react-router-dom'
import register from "./components/register";

function App() {
 
  // let exported = {title:"",address:"",phone:""}
  //   {data.map((item, i) => (
  //   // console.log(item.title)
  //   exported.title=item.title,
  //   exported.address=item.address,
  //   exported.phone=item.phone

  //   ))}

  // const pagecount =

  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("http://localhost:3001/fetchData")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       let details = data.message
  //       console.log(details);
  //     });

  // }, []);
  // const getSchedule = () => {
  //   return(
  //     <Table data={data}/>
  //   )
  // }

  return (
    <BrowserRouter>
     <div className="App">
      <Switch>
      <Route exact path='/' component={login} />
      <Route exact path='/main' component={Main} />
      <Route exact path='/register' component={register} />
    </Switch>

    </div>
    </BrowserRouter>
    
  );
}

export default App;
