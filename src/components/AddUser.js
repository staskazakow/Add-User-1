import React from "react"
class AddUser extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            first_name:"",
            last_name:"",
            email:1,
            isHappy: true
        }
        
    }
    userAdd = {}
    render() {
        return (
           <form className="form-user" ref={(el) => this.myForm = el}>
            <input className="input-user" placeholder="Имя" onChange={(e) => this.setState({first_name: e.target.value})}/>
            <input className="input-user" placeholder="Фамилия" onChange={(e) => this.setState({last_name: e.target.value})}/>
            <input className="input-user" placeholder="Email" onChange={(e) => this.setState({email : e.target.value})}/>
            <label htmlFor="isHappy">Счастлив?</label>
            <input className="input-user" type="checkbox" id="isHappy" onChange={(e) => this.setState({isHappy: e.target.checked})}/>
            <button type="button" onClick={() =>{ 
                this.myForm.reset()
                this.userAdd ={
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        email: this.state.email,
                        isHappy: this.state.isHappy,
                }
                if(this.props.user) {
                    this.userAdd.id = this.props.user.id
                }
                this.props.onAdd(
                this.userAdd
            )}}>Добавить</button>
           </form>
        )
    }
}
export default AddUser