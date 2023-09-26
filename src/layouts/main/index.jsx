import { Outlet } from "react-router-dom";
import SideBar from "../sidebar";
import RightBar from "../rightbar";

function MainLayout() {
  return (
    <div className="w-[1265px] mx-auto flex">
      <SideBar />
      <main className="flex-1 flex gap-7" >
        <main className="flex-1 max-w-[600px] border-x border-slate-700">
          <Outlet />
        </main>
        <RightBar />
      </main>
    </div>
  );
}

export default MainLayout;
