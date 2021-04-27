import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
const Landing = ({ register: { isAuthenticated } }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return <div className="landing">Hello</div>;
};
const mapStatetoProps = (state) => ({
  register: state.register,
});
export default connect(mapStatetoProps)(Landing);
