import { useDispatch, useSelector } from "react-redux"
import { State } from "../../store"

export default function Info() {
    const clickData = useSelector((state: State) => state.click) //estado do reducer CLICK

    return (
        <aside className="info-container">
            <h1 className="name">NAME</h1>
            <h2 className="click-value">Click: {clickData.click}</h2>
            <h2 className="click-value">Mouse Click: {clickData.mouseClick}</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti obcaecati
                eos quasi quam dolorum eaque assumenda, vitae corporis sed id in consequuntur
                aspernatur modi excepturi optio incidunt magnam. Dolorum, maiores.</p>
        </aside>
    )
}