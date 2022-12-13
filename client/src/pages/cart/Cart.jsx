import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Book from "../../components/Book/Book";
const Cart = ()=>{
    return(
        <div className="dashContainer">
        {/* <div className="sidebar"> */}
            <Sidebar/>
        {/* </div> */}
        <div className="books">
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </div>
    </div>
    )
}

export default Cart