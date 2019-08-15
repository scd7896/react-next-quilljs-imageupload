import React, { Component } from "react";
import Meta from "./Meta";

export default class Page extends Component {
  render() {
    return (
      <>
        <Meta />
        {this.props.children}
      </>
    );
  }
}