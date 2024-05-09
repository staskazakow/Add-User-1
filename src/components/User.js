import React from "react"
import {IoCloseCircleSharp, IoHammerSharp} from "react-icons/io5"
import AddUser from "./AddUser"
class User extends React.Component {
    constructor(props) {
        super(props) 
        this.state= {
            editForm: false
        }
    }
    user = this.props.user
    render() {
        return (
            <div className="user" >
                <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id) } className="delete"/>
                <IoHammerSharp onClick={() => {this.setState({editForm: !this.state.editForm})}} className="edit-icon"/>
                        <h2>Имя: {this.user.first_name}</h2>
                        <h2>Фамилия: {this.user.last_name}</h2>
                        <img src={this.user.avatar} />
                        <h3>Email:{this.user.email}</h3>
                        <b>{this.user.happy=== true ? "Счастлив :)" : "Не особо счастлив :("}</b>
                        {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit}/>}
                    </div>)
        
    }
}
export default User