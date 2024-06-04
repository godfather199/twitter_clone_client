import {LogoutButton, SidebarNavigation} from '../'
import { Outlet, useLocation, useParams } from 'react-router-dom';



function Sidebar() {
  const {pathname} = useLocation()


  return (
    <div style={{border: '3px solid green'}} className="flex">
      {/* Sidebar contents */}
      {pathname !== "/" && (
        <div style={{border: '3px solid black'}} className="">
          {/* Logo */}
          <div className="">
            <img
              src="https://img.freepik.com/free-vector/bird-icon_23-2147507196.jpg?t=st=1716088305~exp=1716091905~hmac=16ec2cb9b2c1ba24859ee58ff8a51c9afc228626dea0766e14cfc8b7e8aaa624&w=740"
              alt=""
              className="w-[5rem] h-[5rem] rounded-full"
            />
          </div>

          {/* Navigation section */}
          <div className="">
            <SidebarNavigation />
          </div>

          {/* Logout section */}
          <div className="">
            <LogoutButton />
          </div>
        </div>
      )}

      {/* Child routes */}
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar