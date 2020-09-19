import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { response } from 'express';

const Detail = (props) => (
  <tr>
    <td>{props.detail.username}</td>
    <td>{props.detail.email}</td>
    <td>{props.detail.qualification}</td>
    <td>{props.detail.age}</td>
    <td>{props.detail.gender}</td>
    <td>
      {/* <Link to={"/edit/" + props.detail._id}>edit</Link>  */}
      <Link to={"/edit/" + props.detail._id}>
        <button type="button" className="btn btn-warning">
          Edit
        </button>
      </Link>{" "}
      |{" "}
      <button
        type="button"
        onClick={() => {
          props.deletedetails(props.detail._id);
        }}
        className="btn btn-danger"
      >
        Delete
      </button>
    </td>
  </tr>
);

export default class detailList extends Component {
  constructor(props) {
    super(props);

    this.deletedetails = this.deletedetails.bind(this);

    this.state = { details: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/details/")
      .then((response) => {
        this.setState({ details: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deletedetails(id) {
    axios.delete(`http://localhost:5000/details/${id}`).then((response) => {
      console.log(response.data);
    });

    this.setState({
      details: this.state.details.filter((el) => el._id !== id),
    });
  }

  detailList() {
    return this.state.details.map((currentdetail) => {
      return (
        <Detail
          detail={currentdetail}
          deletedetails={this.deletedetails}
          key={currentdetail._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>User details</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Qualification</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.detailList()}</tbody>
        </table>
      </div>
    );
  }
}
