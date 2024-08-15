import "./sidebar.scss";
import { useState } from "react";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    // const variants = {
    //     open:
    //     closed:
    // }
    return (
        <div className="sidebar">
            <div className="bg">
                <Links />
            </div>
            <ToggleButton setOpen={setOpen} />
        </div>
    )
}

export default Sidebar
