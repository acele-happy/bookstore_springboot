import React from "react";
import './Book.css'
import {AiOutlineShoppingCart, AiFillEdit} from 'react-icons/ai'

const Book = ()=>{
    return(
        <div className="cont">
            <div className="imagepart">
                 <img src="https://i.pinimg.com/originals/35/66/dc/3566dc24c327c144d18dffbac7145d28.jpg" alt="cover"/>
            </div>
            <div className="textpart">
                <ul>
                    <li>Name: The martian </li>
                    <li>Author: Sam chop</li>
                    <li>Pages: 235</li>
                </ul>
            </div>
            <button className="cart">Add To Cart <AiOutlineShoppingCart /></button>
        </div>
    )
}

export default Book