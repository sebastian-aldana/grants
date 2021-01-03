import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import useStyles from "./Header.styles";

const Header = ({ children }) => {
  const styles = useStyles();
  return (
    <>
      <AppBar position="static" className={styles.container}>
        <Toolbar>
          <img
            src="https://www.grants.gov/o/grants-blue-theme/images/grants/grants-gov-logo.png"
            alt="grants image"
          />
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
};

export default Header;
