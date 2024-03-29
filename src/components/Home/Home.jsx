import React from 'react'
import Style from './Home.module.css'
import ChartComponent from '../ChartComponent/ChartComponent'
import CryptoPrices from '../CryptoPrices/CryptoPrices'
import { useMediaQuery } from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faHouse, faBuildingNgo, faWallet } from '@fortawesome/free-solid-svg-icons'
import { ST } from 'next/dist/shared/lib/utils'


function Home({ setDisplayMenu, displayMenu }) {
    const displayNone = {
        display: 'none'
    }
    const isMobile = useMediaQuery({
        query: "(max-width: 600px)",
    });
    return (
        <div className={Style.main}>
            <div className={Style.header}>
                <div className={Style.content}>
                    <div className={Style.menu} style={!isMobile ? displayNone : {}} onClick={() => setDisplayMenu(true)} >
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <h4>Hello , <span>Brooklyn Symmons</span></h4>
                    <p>Welcome to <span>Spot trading</span></p>
                </div>
                <div>
                    <button>Start Trading</button>
                </div>
            </div>
            <div className={Style.chart}>
                <ChartComponent />
            </div>
            <div className={Style.currency}>
                <CryptoPrices />
            </div>
        </div>
    )
}

export default Home