import { useDispatch } from "react-redux"
import { box } from "../../assets"
import { ActionType } from "../../store/actions/action-types"

export default function BoxArea() {
    const dispatch = useDispatch()

    const HandleBoxClick = () => {
        //action para o redux
        dispatch({ type: ActionType.CLICK })
    }

    return (
        <div className="boxes-container">
            <div className="box" onClick={HandleBoxClick}><img src={box} alt="box.ng" /></div>
        </div>
    )
}