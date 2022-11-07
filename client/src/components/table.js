import React from 'react'
import MaterialTable from "material-table"

export default function Table({data}) {
  return (
    
    <div className='container'>
    
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
 <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="sr-only"></span>
  </div>
</div>
 </div>
  </div>
  
  )
}

// const columns = [
//   { title: 'id', field: 'ID' },
//   { title: 'name', field: 'name' },
//   { title: 'address', field: 'address' },
//   { title: 'phone', field: 'phone' },
  
// ]
// <MaterialTable title="ss"
// rows={data}
// columns={columns}
// pageSize={5}
// />

