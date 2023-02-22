import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";
import DropDown from "./DropDown";

import styles from "./styles";

const BtnNav = ({ page }) => {
  return (
    <>
      {page.arrow ? (
        <DropDown page={page} />
      ) : (
        <Link
          //In the code you provided, the Link component is being used with the component prop set to NavLink. This allows you to use the NavLink component from the react-router-dom package with the additional styling capabilities it provides, while still using the Link component from the @mui/material package.
          component={NavLink}
          to={page.link}
          sx={styles.btnLink}
          //isActive is a function that is provided by the react-router-dom package. It is commonly used in conjunction with the NavLink component to apply styles to the link when it matches the current route.When a NavLink is active (i.e., its path matches the current URL), the isActive function will return true. This allows you to conditionally apply styles to the link based on its active state.
          style={({ isActive }) =>
            isActive ? { color: "#777FEB" } : undefined
          }
        >
          {page.title}
        </Link>
      )}
    </>
  );
};

export default BtnNav;
