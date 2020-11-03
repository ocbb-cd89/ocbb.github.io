import logo from "./logo.svg";
import "./App.css";
import { Content, Type, Submit } from "./Component/Content.js";
import { Component } from "react";
//import { render } from "@testing-library/react";

class App extends Component {
  // đây là function Component, thấy chữ function hem :)
  // 1. state chỉ xài được cho class-component thôi
  // 2. chữ this chỉ xuất hiện trong class thôi

  // Đây là cách handle thủ công, nếu có chục cái INPUT thì làm chục cái
  // như vậy thì rất tốn thời gian
  // handleChangeUserName(event) {
  //   this.setState({
  //     username: event.target.value,
  //   });
  // }

  // handleChangePassword(event) {
  //   this.setState({
  //     password: event.target.value,
  //   });
  // }

  // Cách làm nhanh hơn, chỉ cần 1 cái handle
  state = {
    username: "",
    password: "",
    content: "",
    noidung: false,
  };
  handleChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value, // name lấy từ thuộc tính name trong input
    });
  }
  // hoặc
  handleChange1(event) {
    const { name: ten, value: gia_tri } = event.target; // cú pháp spreading trong ES6
    // nó tương đương
    // const ten = event.target.name;
    // const gia_tri = event.target.value;

    this.setState({
      [ten]: gia_tri, // name lấy từ thuộc tính name trong input
    });
  }

  handleSubmit(e) {
    //alert(this.state.password + " Cộng lại " + this.state.username);
    alert(
      `Đây là mật khẩu ${1 + 2 > 2 ? "Có" : "Không"} ${
        this.state.password
      } Cộng lại ${this.state.username} Hello`
    );
  }
  handleSubmit1(e) {
    this.state.content = true;
  }

  renderHello() {
    return <div>Hello Phuong</div>;
  }

  render() {
    return (
      <form>
        <div>
          {this.renderHello()}
          <p>
            <Type ten="Minh"></Type>
          </p>
          <div>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange.bind(this)}
              //onChange={this.handleChangeUserName.bind(this)}
            />
            <br />
            <input
              type="text"
              name="content"
              value={this.state.content}
              onChange={this.handleChange.bind(this)}
            />
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleChange.bind(this)}
              //onChange={this.handleChangePassword.bind(this)}
            />

            {this.state.content != null ? (
              <div name="content"> đây là nội dung </div>
            ) : (
              <div>Hello</div>
            )}

            <br />
            <input
              type="submit"
              value="Bấm"
              onClick={this.handleSubmit.bind(this)}
            ></input>
          </div>
        </div>
      </form>
    );
  }
}

export default App;
