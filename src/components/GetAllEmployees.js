import React, { useEffect, useState } from "react";
import UserService from "../services/UserService";
import MaterialTable from "material-table";

import tableIcons from "../services/MaterialTableIcons";
import { useParams } from "react-router-dom";


const columns = [
  { title: "Name", field: "firstName",},
  { title: "Surname", field: "lastName" },
  {title:"Email",field:"email"},
  {title:"Contact no",field:"telNum"},
  {title:"Company",field:"companyName" },
  {title:"Primary Skill",field:"primarySkill"},
  {title:"Designation",field:"designation"},
  {title:"Level",field:"level"},
];

export default function BasicTable ()  {

    
    const[data,setData]=useState([])

    // Intial fetch from Db
    useEffect(()=>{
        (async ()=>{
            const result= await UserService.fetchAll().then(response=>response.data).catch(error=>console.log(error))
            setData(result)
        })();
    },[])
    console.log(data)
   // const data=props
  return <MaterialTable 
  title="Employee Table" 
  columns={columns} 
  data={data} 
  icons={tableIcons}
  options={{
    headerStyle: {
      backgroundColor: '#01579b',
      color: '#FFF'
    },
    exportButton:true,
    actionsColumnIndex: -1
  }}

  editable={{
    
    onRowUpdate: (newData, oldData) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          const dataUpdate = [...data];
          const index = oldData.tableData.id;
          UserService.updateUser(newData).then(response=>console.log(response.data)).catch(error=>console.log(error))
          dataUpdate[index] = newData;
          setData([...dataUpdate]);
          resolve();
        }, 1000)
      }),
      onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                UserService.deleteEmployee(oldData.id).then(response=>console.log(response.data)).catch(error=>console.log(error))
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                
                resolve()
              }, 1000)
            }),
  }}
 

  
  />;
}; 
