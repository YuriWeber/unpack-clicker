import { BsSunFill } from "react-icons/bs"

interface Props {
    open: boolean
}

export default function Options(props: Props) {

    return (
        <div className={`options-menu ${props.open}`}>
            <BsSunFill className="sun-icon" />
            <label className="switch">
                <input type="checkbox" />
                <span className="slider" />
            </label>
        </div>
    )
}