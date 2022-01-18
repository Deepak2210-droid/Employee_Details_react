import React from 'react'
import swal from 'sweetalert'
import { Form,Button, Card, CardBody, CardTitle, CardText } from 'reactstrap'
import UserService from '../services/UserService'
import DisplayEmployee from './DisplayEmployee'

export class ViewOrupdateComponent extends React.Component{
    constructor(){
        super()
        this.state={
            id:'',
            emp:''
        }
        this.handleId=this.handleId.bind(this)
    }
    
   
     handleId(e){
       this.setState({id:e.target.value})
     }
     handleSubmit(){
         const id=this.state.id
         if(id)
         UserService.getUser(this.state.id).then(response=>this.setState({emp:response.data})).catch(error=>{swal("failed","Please enter valid empid","error")
        this.setState({id:''})})
        else
        swal("failed","Please enter valid empid","error")
     }

    renderForm(){
        return(
            <div className='d-flex justify-content-center'>
                <Form>
                    <label color='grey'>Enter the Employee Id </label><br></br>
                    <input type="text" value={this.state.id} onChange={this.handleId} ></input><br></br>
                    <Button color="dark" value="submit" onClick={this.handleSubmit.bind(this)}>View</Button>
                </Form>
            </div>
        )
    }
    
    render(){
        return(
            <div>
                
                {!this.state.emp && this.renderForm()}
                {this.state.emp && <DisplayEmployee data={this.state.emp}/>}
            
            </div>
        )
    }
}