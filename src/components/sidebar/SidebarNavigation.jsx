import { Link } from "react-router-dom"
import { navigation_Items } from "../../utils/navigation.utils"




function SidebarNavigation() {
  return (
    <div className="">
      {/* Navigation links */}
      <div className="">
        {navigation_Items.map((item, idx) => (
          <Link to={item.link} key={idx} className="flex items-center">
            <div className="w-[2rem] h-[2rem]">{item.symbol}</div>

            <div className="">
              <span className="">{item.title}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Create post modal */}
      <div className="">
        <span className="">Create post modal</span>
      </div>
    </div>
  );
}

export default SidebarNavigation