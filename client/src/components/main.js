import React, { useEffect, useState } from "react";
import axios from "axios";
import Reactxl from "react-html-table-to-excel";
import Table from "./table";


// const [show, setshow] = useState(true);

export default function () {
    const [services, setName] = useState("");
const [location, setlocation] = useState("");

let [data, setData] = useState([]);
const [show, setshow] = useState("");
const [exportt, setexportt] = useState([]);
const [loading, setloading] = useState(false);


const getSchedule = () => {
  setshow(true)
};


function postName(e) {
    e.preventDefault();
  
    try {
      axios
        .post("http://localhost:3001/fetchData", {
          services,
          location,
        })
        .then((res) => res)
        .then((data) => {
          let details = data;
          console.log(details);
          // getData(details.data.local_results);
          let local = details.data.local_results;
          console.log(local);
          let final_data = [];
          for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 20; j++) {
              final_data.push(details.data[i].local_results[j]);
            }
          }
          //  let exported = []
          //  for (let k = 0; k < final_data.length; k++) {
          //   exported.push(final_data[k].title);
          //  }
          //  console.log(exported);
          //  exportt(exported)
          setData(final_data);
          setshow(true)
  
          // setpost(details.data.serpapi_pagination.other_pages)
          //    other_pages(details.data.serpapi_pagination.other_pages[3])
          //   // console.log(details.data.serpapi_pagination.other_pages);
          //  console.log(other_pages.length);
          //  console.log(other_pages);
  
          //  console.log(data);
        });
      console.log(services);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div class="container">
        <h1 id="heading">PROJECT 1</h1>
        <form onSubmit={postName} method="get">
          <div class="form-group">
            <div class="mb-3">
              <div class="row">
                <div class="col-5">
                  <label for="exampleFormControlInput1" class="form-label">
                    Services
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    value={services}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div class="col-5">
                  <label for="exampleFormControlInput1" class="form-label">
                    location
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    value={location}
                    onChange={(e) => setlocation(e.target.value)}
                  />
                </div>
                <div class="col-2">
            <div class="form-group">
              <div class="text-center">
              <button
              style={{"margin-top":"30px","background-color": "#309255" ,"padding": "8px"}}
            type="submit"
            class="btn btn-primary button btn-sm"
            onClick={() => postName}
          >
            Google Search
          </button>
              </div>
            </div>
          </div>
              </div>
            </div>
          </div>
         

         
        </form>
        <div>
          {
            show ?   <Reactxl
          className="btn btn-danger mb-3"
          table="example"
          filename="data"
          sheet="sheet 1"
          buttonText="EXPORT"
        />: null 
          }
        </div>
      
        {/* <CSVLink data={data} className="btn btn-success mb-3">
          Export data
        </CSVLink> */}
  
  {show ?   <div className='container'>
    
    <table class="table table-striped table table-hover" id="example">
<thead class="table-dark">
  <tr>
  <th scope="col">S.No</th>
    <th scope="col">Name</th>
    <th scope="col">Address</th>
    <th scope="col">Phone Number</th>
  </tr>
</thead>
 




<tbody id="my_table">

  {data.map((item, i) => (
    <tr key={i}>
    <td>{i+1}</td>
      <td>{item.title}</td>
      <td>{item.address}</td>
      <td>{item.phone}</td>
    </tr>
  ))}
  <tr></tr>
</tbody>
</table>
 <div className='container'>

 </div>
  </div> :null}
{/*         
        <div>{show ? <Table data={data}  /> : null}</div> */}
        
      </div>
  )
}
