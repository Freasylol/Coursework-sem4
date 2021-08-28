import React from 'react';
import Axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
 
const Admin = () => {
  let columns = [
    {field: 'id', headerName: 'ID'},
    {field: 'name', headerName: "NAME", width: 150},
    {field: 'lastName', headerName: 'LAST NAME', width: 200},
    {field: 'email', headerName: 'EMAIL', width: 300},
    {field: 'password', headerName: 'PASSWORD', width: 200},
    {field: 'userRole', headerName: 'USER ROLE', width: 200}
  ];
  const [dataArr, setDataArr] = useState([]);

  useEffect(async () => Axios.get('https://itransition-final-project.herokuapp.com/users').then((response) => setDataArr(response.data)));

  let rows = dataArr;
  return (
      <div style={{height: '86vh', width: '1200px'}}>
        <DataGrid 
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
         />
      </div>

  )
}

export default Admin;