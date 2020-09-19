import React, { Component } from "react";
import axios from "axios";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeQualification = this.onChangeQualification.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      email: "",
      qualification: "",
      age: 0,
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/details/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          username: response.data.username,
          email: response.data.email,
          qualification: response.data.qualification,
          age: response.data.age,
          gender: response.data.gender,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/users/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map((user) => user.username),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeQualification(e) {
    this.setState({
      qualification: e.target.value,
    });
  }

  onChangeAge(e) {
    this.setState({
      age: e.target.value,
    });
  }

  onChangeGender(e) {
    this.setState({
      gender: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const detail = {
      username: this.state.username,
      email: this.state.email,
      qualification: this.state.qualification,
      age: this.state.age,
      gender: this.state.gender,
    };

    console.log(detail);

    axios
      .post(
        "http://localhost:5000/details/update/" + this.props.match.params.id,
        detail
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Edit User Details</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username : </label>
            <input
              type="name"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label>Email : </label>
            <input
              type="email"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label>Qualification : </label>
            <input
              type="text"
              className="form-control"
              value={this.state.qualification}
              onChange={this.onChangeQualification}
            />
          </div>
          <div className="form-group">
            <label>Age : </label>
            <input
              type="number"
              className="form-control"
              value={this.state.age}
              onChange={this.onChangeAge}
            />
          </div>
          <div className="form-group">
            <label>Gender : </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.gender}
              onChange={this.onChangeGender}
            >
              {/* {this.state.users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })} */}
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Other</option>
            </select>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Edit Details"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
