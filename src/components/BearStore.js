import React from 'react'
import { useSelector } from "react-redux"
import './Bear.css';

function BearStore() {
    const inStock = useSelector(state => state.bearShop.inStock)
    return (
        <div className="bearShop">
            <p>Welcom to Bear Store</p>
            <p>We have {inStock} bears with us</p>
        </div>
    )
}

export default BearStore
