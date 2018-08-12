import React, { Component } from "react";
import { connect } from "react-redux";
import { FeedCard } from "./Card";
import { getData } from "../actions";
import LoadingComponent from "./LoadingComponent";
import Navbar from "./Navbar";

const actions = {
  getData
};

class App extends Component {
  
  state = {
    tags: ""
  };

  componentDidMount() {
    this.props.getData();
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { tags } = this.state;
    this.props.getData(tags);
    this.setState({
      tags: ""
    });
  };

  render() {
    const { tags } = this.state;
    const { data, loading, errorMsg } = this.props;
    return (
      <React.Fragment>
        <Navbar
          onChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          tags={tags}
          loading={loading}
        />
        {errorMsg && <h1 className="errorH1">{errorMsg}</h1>}
        {!errorMsg && data.length === 0 && <LoadingComponent inverted={true} />}
        <FeedCard data={data} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ flickrData, loading: { loading, errorMsg } }) => {
  return {
    data: flickrData,
    loading,
    errorMsg
  };
};

export default connect(
  mapStateToProps,
  actions
)(App);
