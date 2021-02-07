import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getBear, changeQuantity } from "../redux/bear-shop/mafiaActions"
import './Bear.css';

function Buttler() {
    const dispatch = useDispatch()
    const quantity = useSelector(state => state.bearShop.quantity)
    const orderBear = (quantity) => {
        dispatch(getBear(quantity))
        dispatch(changeQuantity(""))
    }
    return (
        <div className="buttler">
            <p>Buttler</p>
            <button onClick={() => orderBear(quantity)}>Order {quantity} Bear</button>
        </div>
    )
}

export default Buttler
