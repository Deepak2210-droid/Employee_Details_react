import React from "react";
import { Button } from "reactstrap";
import Table from 'react-bootstrap/Table'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import UserService from '../services/UserService';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
export default class renderEmployee extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            edit:false,
            save:false,
            alert:false,
            id:props.data.id,
            firstName:props.data.firstName,
            lastName:props.data.lastName,
            telNum:props.data.telNum,
            companyName:props.data.companyName,
            email:props.data.email,
            address:props.data.address,
            designation:props.data.designation,
            level:props.data.level,
            salary:props.data.salary
        }
    }
    componentDidUpdate(){
        console.log("update"+this.state.edit)
    }
    handleEdit=()=>{
        this.setState((state)=>({
            edit:!state.edit,
            save:!state.save
        }));
    }
    handleAlert=()=>{
        this.setState({alert:false})
    }
    handleAlertrender(){
        console.log("Alert")
        return(
            <Snackbar open={this.state.alert} autoHideDuration={2000} onClose={this.handleAlert}>
            <Alert  severity="success" sx={{ width: '100%' }}>
                Saved Successfully!
            </Alert>
            </Snackbar>
        )
    }
    handleSave= ()=>{
       
            UserService.updateUser(this.state).then(response=>
                {
                    this.setState((state)=>({alert:true,edit:!state.edit,save:!state.save}))
                    console.log("After saving the data")
                }).catch(error=>{
                    console.log(error);
                })
        
    }
    handleFn=(e)=>{ 
        this.setState({firstName:e.target.value})
    }
    handleLn=(e)=>{
        this.setState({lastName:e.target.value})
    }
    handleAddress=(e)=>{
        this.setState({address:e.target.value})
    }
    handleEmail=(e)=>{
        this.setState({email:e.target.value})
    }
    handleTelnum=(e)=>{
        this.setState({telNum:e.target.value})
    }
    handleCn=(e)=>{
        this.setState({companyName:e.target.value})
    }
    handleDesignation=(e)=>{
        this.setState({designation:e.target.value})
    }
    handleLevel=(e)=>{
        this.setState({level:e.target.value})
    }
    handleSalary=(e)=>{
        this.setState({salary:e.target.value})
    }
    handleDelete=()=>{
        if (window.confirm('Are you sure you want to delete the details?')) {
           
            console.log(this.state.id)
            UserService.deleteEmployee(this.state.id).then((response)=>{console.log(response.data)}).catch(error=>console.log(error))
             this.setState((state)=>({
                alert:true,
                edit:!state.edit,
                save:!state.save
            }))
          } else {
            console.log('Thing was not saved to the database.');
          }
    }
    render(){
        return( 
            <div className='container-fluid'>
               
                 <Table responsive>
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Company Name</th>
                            <th>Designation</th>
                            <th>Career level</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{!this.state.save
                            ?<Button color="light" data-bs-toggle="tooltip" data-bs-placement="left" title="Edit" onClick={this.handleEdit} ><span className="fa fa-pencil fa-sm"  ></span></Button>
                            
                                    :<Button color="grey" className="fa fa-save fa-sm" data-bs-toggle="tooltip" data-bs-placement="left" title="Save" onClick={this.handleSave}></Button>
                            }
                            {this.state.id}</td>
                            <td><input  className="form-control-sm" value={this.state.firstName} onChange={this.handleFn} disabled={(!this.state.edit)?'disabled':''}/></td>
                            <td><input className="form-control-sm" value={this.state.lastName} onChange={this.handleLn} disabled={(!this.state.edit)?'disabled':''}/></td>
                            <td><input className="form-control-sm" value={this.state.telNum} onChange={this.handleTelnum} disabled={(!this.state.edit)?'disabled':''}/></td>
                            <td><input className="form-control-sm" value={this.state.email} onChange={this.handleEmail} disabled={(!this.state.edit)?'disabled':''}/></td>
                            <td><input className="form-control-sm" value={this.state.address} onChange={this.handleAddress} disabled={(!this.state.edit)?'disabled':''}/></td>
                            <td><input className="form-control-sm" value={this.state.companyName} onChange={this.handleCn} disabled={(!this.state.edit)?'disabled':''}/></td>
                            <td><input className="form-control-sm" value={this.state.designation} onChange={this.handleDesignation} disabled={(!this.state.edit)?'disabled':''}/></td>
                            <td><input className="form-control-sm" value={this.state.level} onChange={this.handleLevel} disabled={(!this.state.edit)?'disabled':''}/></td>
                            <td><input className="form-control-sm"value={this.state.salary} onChange={this.handleSalary} disabled={(!this.state.edit)?'disabled':''}/></td>
                            <td>{(!this.state.edit)?'':<Button color="grey"className="fa fa-trash fa-sm" data-bs-toggle="tooltip" data-bs-placement="left" title="Delete" onClick={this.handleDelete}></Button>}</td>
                        </tr>
                    </tbody>
                </Table>  
                
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Company Name</th>
                            <th>Designation</th>
                            <th>Career level</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Button color="light" data-bs-toggle="tooltip" data-bs-placement="left" title="Edit" onClick={this.handleEdit}><span className="fa fa-pencil fa-sm"></span></Button>{this.state.id}</td>
                            <td><input style={{'width':'100px'}}
                                    className="form-control-sm" value={this.state.firstName} onChange={this.handleFn} disabled={(!this.state.edit)?'disabled':''}/></td>
                            <td><input style={{'width':'100px'}} className="form-control-sm" value={this.state.lastName} onChange={this.handleLn} disabled={(!this.state.edit)?'disabled':''}/></td>
                            <td><input style={{'width':'100px'}} className="form-control-sm" value={this.state.telNum} onChange={this.handleTelnum} disabled={(!this.state.edit)?'disabled':''}/></td>
                            <td><input style={{'width':'100px'}} className="form-control-sm" value={this.state.email} onChange={this.handleEmail} disabled={(!this.state.edit)?'disabled':''}/></td>
                            <td><input style={{'width':'100px'}} className="form-control-sm" value={this.state.address} onChange={this.handleAddress} disabled={(!this.state.edit)?'disabled':''}/></td>
                            <td><input style={{'width':'100px'}} className="form-control-sm" value={this.state.companyName} onChange={this.handleCn} disabled={(!this.state.edit)?'disabled':''}/></td>
                            <td><input style={{'width':'100px'}} className="form-control-sm" value={this.state.designation} onChange={this.handleDesignation} disabled={(!this.state.edit)?'disabled':''}/></td>
                            <td><input style={{'width':'100px'}} className="form-control-sm" value={this.state.level} onChange={this.handleLevel} disabled={(!this.state.edit)?'disabled':''}/></td>
                            <td><input style={{'width':'100px'}} className="form-control-sm"value={this.state.salary} onChange={this.handleSalary} disabled={(!this.state.edit)?'disabled':''}/></td>
                            <td>{(!this.state.edit)?'':<Button color="grey"className="fa fa-trash fa-sm" data-bs-toggle="tooltip" data-bs-placement="left" title="Delete" onClick={this.handleDelete}></Button>}</td>
                        </tr>
                        <tr>
                           <td>
                                {
                                    (!this.state.edit)?'':<Button color="grey" className="fa fa-save fa-sm" data-bs-toggle="tooltip" data-bs-placement="left" title="Save" onClick={this.handleSave}></Button>
                                }
                           </td> 
                        </tr>
                    </tbody>
                </Table>
                <div>
                  {this.state.alert && this.handleAlertrender()}
                </div>
            </div>
    )
    }
   // const Emp=props.data
   
}
