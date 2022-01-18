import axios from "axios"

class UserService{
    getUser(props){
        console.log(props)
        return axios.get(`http://localhost:8080/api/getEmployees/${props}`)
    }
    postUser(props){
        console.log(props)
        return axios.post('http://localhost:8080/api/postEmployee',props);
    }
    updateUser(props){
       
        console.log(props)
        return axios.put('http://localhost:8080/api/updateEmployee',props)
    }
    fetchAll(){
        return axios.get('http://localhost:8080/api/getAll')
    }
    deleteEmployee(id){
        console.log(id,'in service')
        return axios.post('http://localhost:8080/api/deleteEmployee',id)
    }
}
export default new UserService();