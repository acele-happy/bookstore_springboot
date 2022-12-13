import React from "react";
import Book from "../../components/Book/Book";
import Sidebar from "../../components/Sidebar/Sidebar";
import './Dashboard.css'
const Dashboard = ()=>{
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
export default Dashboard