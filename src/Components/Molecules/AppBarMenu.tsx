import React from "react";
import { app } from "../../Firebase/base";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { navigation } from "../../Constants/Strings";

// Material-ui <Header>
const AppBarMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >
      <Button
        style={{color: "white", fontSize: "16px"}}
        aria-controls="simple-meny"
        aria-haspopup="true"
        onClick={handleClick}
        >
          {navigation.menu}
        </Button>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link style={{ textDecoration: "none", color: "black"}} to="signup">
            <MenuItem style={{fontSize: "16px"}} onClick={handleClose}>{navigation.signUp}</MenuItem>
          </Link>

          <Link style={{ textDecoration: "none", color: "black"}} to="logIn">
            <MenuItem style={{fontSize: "16px"}} onClick={handleClose}>{navigation.logIn}</MenuItem>
          </Link>

          <MenuItem style={{fontSize: "16px"}} onClick={() => app.auth().signOut()}>{navigation.logOut}</MenuItem>
        </Menu>
    </div>
  )
}

export default AppBarMenu;