import React from "react";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function HomeComponent(){
    return(
        <div className="container-fluid">
            
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}> 
            <h1>Employee Details</h1>
            </div>
            
            <Stack 
            spacing={2} 
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
                <Link to="/signin"><Button variant="contained" disableElevation>Register Details</Button></Link>
                <Link to="/viewdetails"> <Button variant="contained" disableElevation>View Details</Button></Link>
                <Link to="/allEmployees"><Button variant="contained" disableElevation>View All employees</Button></Link>

            </Stack>
           
        </div>
    )
}