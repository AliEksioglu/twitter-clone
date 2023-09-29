import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";
import mainMenu from "../../../utils/const";
import Button from "../../../componenets/button";
import More from "./more";

function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      {mainMenu.map((menu, index) => (
        <NavLink to={menu.path} key={index} className="py-1 block group">
          {({ isActive }) => (
            <div
              className={classNames(
                "p-2.5 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a]",
                { "font-bold": isActive }
              )}
            >
              <div className="w-[26px] h-[26px] relative ">
                {menu?.notifications && (
                  <span className="w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 text-[11px] flex justify-center items-center">
                    {menu.notifications}
                  </span>
                )}
                {isActive ? menu.icon.active : menu.icon.passive}
              </div>
              <div className="pr-4 text-xl">{menu.title}</div>
            </div>
          )}
        </NavLink>
      ))}
      <More />
      <div className="py-4 w-[90%]">
        <Button size="large"> Gönder </Button>
      </div>
    </nav>
  );
}

export default Menu;
