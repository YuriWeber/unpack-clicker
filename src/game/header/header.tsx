import { logo } from "../../assets"
import { FaGithub } from "react-icons/fa"
import Options from "./options"
import { useState } from "react"

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)

    const HandleClickMenu = () => {
        setOpenMenu(state => !state)
    }

    return (
        <header>
            <div className="information">
                <a href="https://github.com/YuriWeber/unpack-clicker" target="_blank"><FaGithub className="github" /></a>
            </div>

            <div className="menu">
                {/* <button className="save-button button">Save</button> */}
                <button className="options-button button" onClick={HandleClickMenu}>Options</button>
            </div>
            <Options open={openMenu} />
        </header>
    )
}