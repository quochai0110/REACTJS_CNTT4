import React, { Component } from "react";
type User = {
  email: string;
  password: string;
};
type InitialState = {
  user: User;
};
export default class Controll extends Component<{}, InitialState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: "",
      },
    };
  }
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("giá trị khi nhập", this.state.user);
    // gửi dữ liệu lên server
    this.setState({
        user:{
            email:"",
            password:""
        }
    })
    
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("giá trị name", e.target.name);
    const {name,value} = e.target;
    this.setState({
        user:{...this.state.user,[name]:value}
    })
  };
  render() {
    return (
      <div>
        Form dùng kỹ thuật Controll
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">Email</label>
          <input 
            type="text"
            onChange={this.handleChange} 
            name="email"
            value={this.state.user.email}
             />
          <br />
          <label htmlFor="">Password</label>
          <input 
             type="text"
             onChange={this.handleChange}
             name="password"
             value={this.state.user.password}
              /> <br />
          <button>login</button>
        </form>
      </div>
    );
  }
}
