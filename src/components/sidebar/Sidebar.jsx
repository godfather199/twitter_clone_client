import {LogoutButton, SidebarNavigation, TwitterLogo} from '../'
import { Outlet, useLocation, useParams } from 'react-router-dom';



function Sidebar() {
  const {pathname} = useLocation()


  return (
    <div
      style={{ border: "5px solid green" }}
      className={`flex ${pathname !== "/" ? "p-5" : "p-0"}  w-[100%] relative`}
    >
      {/* Sidebar contents */}
      {pathname !== "/" && (
        <div
          style={{ border: "5px solid orange" }}
          // className="w-[20%] sm:w-[25%] h-[38rem] flex flex-col gap-5 p-3  "
          className="w-[20%] sm:w-[25%] h-[38rem] flex flex-col gap-5 p-3  sticky top-[1rem] self-start"
          // className="w-[20%]  "
        >
          {/* Logo */}
          <TwitterLogo />

          {/* Navigation section */}
          <SidebarNavigation />

          {/* Logout section */}
          <LogoutButton />
        </div>
      )}

      {/* Child routes */}
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar