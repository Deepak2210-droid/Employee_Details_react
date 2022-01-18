import React, { Component } from 'react';
import UserService from '../services/UserService';
import swal from 'sweetalert';
import {
  Label,
  Button,
  Row,
  Col,
  
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Home } from '@material-ui/icons';
import TextField from '@mui/material/TextField';
import HomeComponent from './HomeComponent';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

  const LoginText = props => (<TextField {...props} size='small'/>);

  
class GetDetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.state={
      success:false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSuccess=this.handleSuccess.bind(this)
  
    console.log('con for');
  }
  handleSuccess(){
    this.setState({success:true})
  }
  componentDidMount() {
    console.log('mounted');
  }
  componentDidUpdate() {
    console.log('Updated');
  }
  componentWillUnmount() {
    console.log('unmount');
  }
 returnHome(){
   return(<HomeComponent/>)
 }
  handleSubmit(values) {
      console.log(values)
        UserService.postUser(values).then(response=>{console.log(response.data)
          swal({title: "Success", text: "You're Data Submitted Successfully", type: 
          "success"}).then(this.setState(()=>({success:true}))
          );       

      }).catch(error=>{console.log(error)
      swal("Failed","Data Not Submitted","error")
      })

       
    }
  
renderForm(){
  return (
    <div className="container">
      <div className="row row-content">
        <div className="col-12">
          <h3>Enter the details</h3>
        </div>
        <div className="col-12 col-md-9">
          <LocalForm onSubmit={(values) => this.handleSubmit(values)} className='align-center'>
            <Row className="form-group">
              <Label htmlFor="firstName" md={2}>
                First Name
              </Label>
              <Col md={10}>
                <Control.text
                  model=".firstName"
                  id="firstName"
                  label='First-name'
                  name="firstName"
                  component={LoginText}
                  className="form-control"
                  helpText="This is my custom help text." 
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".firstName"
                  show="touched"
                  messages={{
                    required: 'Required and ',
                    minLength: 'Must be greater than 2 characters',
                    maxLength: 'Must be 15 characters or less',
                  }}
                />
              </Col>
            </Row>
            <br/>
            <Row className="form-group">
              {' '}
              <Label htmlfor="lasttName" md={2}>
                Last Name
              </Label>
              <Col md={10}>
                <Control.text
                  model=".lastName"
                  component={LoginText}
                  label='Last-name'
                  id="lastName"
                  name="lasttName"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".lastName"
                  show="touched"
                  messages={{
                    required: 'Required and ',
                    minLength: 'Must be greater than 2 characters',
                    maxLength: 'Must be 15 characters or less',
                  }}
                />
              </Col>
            </Row>
            <br/>
            <Row className="form-group">
              <Label htmlfor="telNum" md={2}>
                Contact no
              </Label>
              <Col md={10}>
                <Control.text
                  model=".telNum"
                  component={LoginText}
                  label='Contact-number'
                  id="telNum"
                  name="telNum"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3) ,
                    maxLength: maxLength(15),
                    isNumber: isNumber ,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".telNum"
                  show="touched"
                  messages={{
                    required: 'Required and ',
                    minLength: 'Must be greater than 2 characters',
                    maxLength: 'Must be 15 characters or less',
                    isNumber: ' Must be a number',
                  }}
                />
              </Col>
            </Row>
            <br/>
            <Row className="form-group">
              <Label htmlfor="email" md={2}>
                Email
              </Label>
              <Col md={10}>
                <Control.text
                  model=".email"
                  component={LoginText}
                  label='Email'
                  id="email"
                  name="email"
                  className="form-control"
                  validators={{
                    required,
                    validEmail,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".email"
                  show="touched"
                  messages={{
                    required: 'Required ',
                    validEmail: 'Not a vaild Email',
                  }}
                />
              </Col>
            </Row>
            <br/>
            <Row className="form-group">
              <Label htmlfor="address" md={2}>
                Address
              </Label>
              <Col md={10}>
                <Control.textarea
                  model=".address"
                  component={LoginText}
                  label='Address'
                  id="address"
                  name="address"
                  rows={5}
                  className="form-control"
                  multiline
                />
              </Col>
            </Row>
            <br/>
            <Row className="form-group">
              <Label htmlfor="companyName" md={2}>
                Company Name
              </Label>
              <Col md={10}>
                <Control.text
                  model=".companyName"
                  component={LoginText}
                  label='Company-Name'
                  id="companyName"
                  name="companyName"
                  className="form-control"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".companyName"
                  show="touched"
                  messages={{
                    required: 'Required',
                    }}
                />
              </Col>
            </Row>
            <br/>
            <Row className="form-group">
              <Label htmlfor="designation" md={2}>
                Designation
              </Label>
              <Col md={10}>
                <Control.text
                  model=".designation"
                  component={LoginText}
                  label='Designation'
                  id="designation"
                  name="designation"
                  className="form-control"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".designation"
                  show="touched"
                  messages={{
                    required: 'Required',
                  }}
                />
              </Col>
            </Row>
            <br/>
            <Row className="form-group">
              <Label htmlfor="level" md={2}>
                Career Level
              </Label>
              <Col md={10}>
                <Control.text
                  model=".level"
                  component={LoginText}
                  label='Level'
                  id="level"
                  name="level"
                  className="form-control"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".level"
                  show="touched"
                  messages={{
                    required: 'Required',
                  }}
                />
              </Col>
            </Row>
            <br/>
            <Row className="form-group">
              <Label htmlfor="salary" md={2}>
                Salary
              </Label>
              <Col md={10}>
                <Control.text
                  model=".salary"
                  component={LoginText}
                  label='Salary'
                  id="salary"
                  name="salary"
                  className="form-control"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".salary"
                  show="touched"
                  messages={{
                    required: 'Required',
                  }}
                />
              </Col>
            </Row>
            <br/>
            <Row className="form-group">
              <Col md={{ size: 2, offset: 2 }}>
                <Button type="submit" color="success">
                  Submit
                </Button>
              </Col>
            </Row>
          </LocalForm>
        </div>
      </div>
    </div>
  );
}
  render() {
    console.log('render');
    return(
      <div>
          {!this.state.success && this.renderForm()}
          {this.state.success && this.returnHome()}
      </div>
    )
   
  }
}
export default GetDetailsComponent;