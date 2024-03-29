import React from 'react'
import Style from './SideNavBar.module.css'
import { useMediaQuery } from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faHouse, faBuildingNgo, faWallet } from '@fortawesome/free-solid-svg-icons'

export default function SideNavBar({ displayMenu, setDisplayMenu }) {
    const displayNone = {
        display: 'none'
    }
    const isMobile = useMediaQuery({
        query: "(max-width: 600px)",
    });
    return (
        <div className={Style.main} style={displayMenu ? {} : displayNone}>

            <div className={Style.logo}>
                <div className={Style.company}>Carbon Cell</div>
                <div className={Style.menu} onClick={() => isMobile && setDisplayMenu(false)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>

            <div className={Style.searchContainer}>
                <FontAwesomeIcon className={Style.icon} icon={faMagnifyingGlass} />
                <input placeholder='search' ></input>
            </div>

            <div className={Style.navItem}>
                <FontAwesomeIcon className={Style.Icon} icon={faHouse} />
                <span>Home</span>
            </div>

            <div className={Style.navItem}>
                <FontAwesomeIcon className={Style.Icon} icon={faBuildingNgo} />
                <span>Organisation</span>
            </div>

            <div className={Style.navItem}>
                <FontAwesomeIcon className={Style.Icon} icon={faWallet} />
                <span>Wallet</span>
            </div>
        </div>
    )
}
