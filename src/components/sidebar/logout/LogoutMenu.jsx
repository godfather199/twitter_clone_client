import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



export default function LogoutMenu({ openLogoutMenu, handle_Close_Menu, username, handle_Logout }) {
  

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
        // sx={{border: 'blue'}}
      >
        <MenuItem
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            border: "blue",
          }}
          onClick={handle_Logout}
        >
          <span className=" text-blue-400 text-lg font-bold">{`Logout @${username}`}</span>
        </MenuItem>
      </Menu>
    </div>
  );
}
