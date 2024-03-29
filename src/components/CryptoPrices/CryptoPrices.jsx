import React, { useEffect, useState } from 'react'
import Style from './CryptoPrices.module.css'
import axios from 'axios'
import { useMediaQuery } from 'react-responsive'

export default function CryptoPrices() {
    const isMobile = useMediaQuery({
        query: '(max-width: 600px)'
    })

    const displayBlock = {
        display: 'block'
    }

    const [cryptoData, setCryptoData] = useState(null)

    useEffect(() => {
        getCryptoPrices()
    }, [])

    function getCryptoPrices() {
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then((response) => {
            console.log("crupto prices", response?.data?.bpi)
            setCryptoData(response?.data?.bpi)
        }).catch((error) => {
            console.log("error in crypto prices", error)
        })
    }

    return (
        <div>
            <div className={Style.main}>
                <h4>Coin Prices</h4>
                <div className={Style.currencyContainer} style={isMobile ? displayBlock : {}}>
                    {cryptoData &&
                        Object.keys(cryptoData).map(currency => (
                            <div key={currency} className={Style.currencyCard}>
                                <div className={Style.header}>{currency} </div>
                                <div className={Style.details}>
                                    <p>{currency}: {cryptoData[currency].rate}</p>
                                    <p>Description: {cryptoData[currency].description}</p>
                                    <p>Rate Float: {cryptoData[currency].rate_float}</p>
                                </div>
                            </div>
                        ))}

                </div>
            </div >
        </div>
    )
}
