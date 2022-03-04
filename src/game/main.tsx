import { logo, box, upgrade } from "../assets"
import BoxArea from "./box/boxArea"
import Header from "./header/header"
import Info from "./info/infoArea"
import UpgradeArea from "./upgrade/upgradeArea"

export default function Unpack() {
    return (
        <>
        <Header />

        <div className="game">
            <main>
                <BoxArea />

                <UpgradeArea />
            </main>
            
            <Info />
        </div>
        </>
    )
}