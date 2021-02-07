import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { changeQuantity } from "../redux/bear-shop/mafiaActions"
import './Bear.css';

function Mafia() {
    const quantity = useSelector(state => state.bearShop.quantity)
    const dispatch = useDispatch()
    const onChange = (event) => {
        const { value } = event.target
        dispatch(changeQuantity(value))
    }
    return (
        <div className="mafia">
            <p>Mafia Say's ----> Hey Butter go to Bear shop and bring {quantity} bear for me.</p>
            <input value={quantity} onChange={(event) => onChange(event)} name="quantity" placeholder="Enter the Quantity"></input>
        </div>
    )
}

export default Mafia
