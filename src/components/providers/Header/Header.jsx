import React from "react";
import { useRouter } from "next/router";
import { AppBar, Toolbar } from "@material-ui/core";
import useStyles from "./Header.styles";

const Header = ({ children }) => {
  const styles = useStyles();

  const router = useRouter();

  const goToHomePage = () => {
    router.push("/");
  };

  return (
    <>
      <AppBar position="static" className={styles.container}>
        <Toolbar>
          <img
            src="https://www.grants.gov/o/grants-blue-theme/images/grants/grants-gov-logo.png"
            alt="grants image"
            onClick={goToHomePage}
          />
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
};

export default Header;
