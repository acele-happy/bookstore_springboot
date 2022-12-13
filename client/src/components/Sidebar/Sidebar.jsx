import React from "react";
import {Link} from "react-router-dom"
import './Sidebar.css'
import { BsBook } from 'react-icons/bs'

const Sidebar =()=>{
    return(
        <div className="container">
            <span><BsBook /> E-book</span>

            <ul>
                <li><Link to="/">Book Store</Link></li>
                <li><Link to="/create">New Book</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li className="logout">Logout</li>
            </ul>
        </div>
    )
}

export default Sidebar