import React from "react";
import PropTypes from "prop-types";

import Menu from "./menu";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
