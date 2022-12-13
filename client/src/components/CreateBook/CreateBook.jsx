import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import './CreateBook.css'
const CreateBook = ()=>{
    return(
        <div className="main">
        <Sidebar />
        <div className="formContainer">

            <h2 className="newbook">Create A New Book</h2>

            <form action="" method="post">
                <input type="text" name="name" placeholder="Add Name of The Book"/>
                <input type="text" name="author" placeholder="Add Name of Author"/>
                <input type="text" name="pages" placeholder="Add Number of Pages"/>
                <textarea placeholder="Add Content of the book"></textarea>
                <input type="submit" value="Save"/>
            </form>
        </div>
        </div>
    )
}

export default CreateBook