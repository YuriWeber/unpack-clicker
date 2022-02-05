import { logo, box, upgrade } from "../assets"

export default function Unpack() {
    return (
        <>
        <header>
            <img src={logo} alt="logo.png" className="header-logo"/>
            <div className="menu">
                <button className="save-button button">Save</button>
                <button className="options-button button">Options</button>
            </div>
        </header>

        <div className="game">
            <main>
                <div className="boxes-area">
                    <div className="box"><img src={box} alt="box.ng" /></div>
                </div>

                <div className="upgrades-container">
                    <div className="move-bar">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className="upgrades">
                        <div className="upgrade-item-container">
                            <button className="upgrade"><img src={upgrade} alt="upgrade.png" /></button>
                            <span>CLICK</span>
                        </div>
                        <div className="upgrade-item-container">
                            <button className="upgrade"><img src={upgrade} alt="upgrade.png" /></button>
                            <span>CLICK</span>
                        </div>
                        <div className="upgrade-item-container">
                            <button className="upgrade"><img src={upgrade} alt="upgrade.png" /></button>
                            <span>CLICK</span>
                        </div>
                        <div className="upgrade-item-container">
                            <button className="upgrade"><img src={upgrade} alt="upgrade.png" /></button>
                            <span>CLICK</span>
                        </div>
                        <div className="upgrade-item-container">
                            <button className="upgrade"><img src={upgrade} alt="upgrade.png" /></button>
                            <span>CLICK</span>
                        </div>
                        <div className="upgrade-item-container">
                            <button className="upgrade"><img src={upgrade} alt="upgrade.png" /></button>
                            <span>CLICK</span>
                        </div>
                        <div className="upgrade-item-container">
                            <button className="upgrade"><img src={upgrade} alt="upgrade.png" /></button>
                            <span>CLICK</span>
                        </div>
                        <div className="upgrade-item-container">
                            <button className="upgrade"><img src={upgrade} alt="upgrade.png" /></button>
                            <span>CLICK</span>
                        </div>
                        <div className="upgrade-item-container">
                            <button className="upgrade"><img src={upgrade} alt="upgrade.png" /></button>
                            <span>CLICK</span>
                        </div>
                        <div className="upgrade-item-container">
                            <button className="upgrade"><img src={upgrade} alt="upgrade.png" /></button>
                            <span>CLICK</span>
                        </div>
                    </div>
                </div>
            </main>
            
            <aside>
                <h1 className="name">NAME</h1>
                <h2 className="click-value">Click: 1</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti obcaecati 
                    eos quasi quam dolorum eaque assumenda, vitae corporis sed id in consequuntur
                    aspernatur modi excepturi optio incidunt magnam. Dolorum, maiores.</p>  
            </aside>
        </div>

        </>
    )
}