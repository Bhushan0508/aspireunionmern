import React,{Component} from "react";
import axios from "axios";

export default class CreateUser extends Component{
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
                this.onSubmit =this.onSubmit.bind(this);

        this.state = {
            username: '',
        
        }
    }
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const user ={
            
            username:this.state.username,
            
        }
        console.log(user)
        axios.post("http://192.168.0.104:5000/users/add",user)
         .then(res=>console.log(res.data));
        //.catch(err=>res.status(400).json("error -"+err));
        this.setState(
            {
                username:','
            }
        );

    }
    render(){
        return (
            <div>
                <h3>Create new User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-froup">
                        <label>Username:</label>
                        <input type="text" required className="form-control" value={this.state.username} onChange={this.onChangeUsername}/>
                    </div>
                    <div className="form-froup">
                        <input type="submit" value="Create User" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}