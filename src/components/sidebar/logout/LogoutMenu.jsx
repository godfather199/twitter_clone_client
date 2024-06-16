import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



export default function LogoutMenu({ openLogoutMenu, handle_Close_Menu, username }) {
  

  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={openLogoutMenu}
        open={Boolean(openLogoutMenu)}
        // open={true}
        onClose={handle_Close_Menu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handle_Close_Menu}>{`Logout @${username}`}</MenuItem>
      </Menu>
    </div>
  );
}
