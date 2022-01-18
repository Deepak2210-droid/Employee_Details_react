import React from 'react'
import {Routes,  Route } from 'react-router-dom'
import GetDetailsComponent from './GetDetailsComponent'
import HomeComponent from './HomeComponent'
import { ViewOrupdateComponent } from './ViewOrupdateComponent'
import GetAllEmployees from './GetAllEmployees'
class RootComponent extends React.Component{
    render(){
        return(

            
                <Routes>
                    <Route path="/" element={<HomeComponent/>}/>
                    <Route path="/signin" element={<GetDetailsComponent/>}/>
                    <Route path="/viewdetails" element={<ViewOrupdateComponent/>}/>
                    <Route path="/allEmployees" element={<GetAllEmployees/>}/>
                </Routes>
            
        )
    }
}
export default RootComponent