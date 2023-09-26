import Logo from "./logo";
import Menu from "./menu";

function SideBar(){

return (
    <aside className="w-[275px] min-h-screen px-2 " >
        <Logo/>
        <Menu/>
        Side Bar
    </aside>
)

}

export default SideBar;