import React, { useState } from 'react';
import Navbar from '../components/Navbar'


const initialState = [
    {
        id: 1,
        title: "The Little prince",
        price: 890,
        content: "uewytoiwshgfdk,jhgeoiuarytoirjhg,kfdngv.,goiitrp;yoituierytgirgmfezsueywiqujhfmdnfujdytir8t7e9qoiak4ty4r9a8476ythtfk",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9aQy74QpkrrIOZLDdZQNpQD6PQ0FUR3IKw&usqp=CAU"
    },
    {
        id: 2,
        title: "Alice in Wonderland",
        price: 940,
        content: "uewytoiwshgfdk,jhgeoiuarytoirjhg,kfdngv.,goiitrp;yoituierytgirgmfezsueywiqujhfmdnfujdytir8t7e9qoiak4ty4r9a8476ythtfk",
        img: "https://images-na.ssl-images-amazon.com/images/I/91ucDBkMeyL.jpg"

    },
    {
        id: 3,
        title: "Cinderella",
        price: 820,
        content: "uewytoiwshgfdk,jhgeoiuarytoirjhg,kfdngv.,goiitrp;yoituierytgirgmfezsueywiqujhfmdnfujdytir8t7e9qoiak4ty4r9a8476ythtfk",
        img: "https://i.harperapps.com/hcanz/covers/9780008171889/y648.jpg"
    },
    {
        id: 4,
        title: "Harry Potter",
        price: 790,
        content: "uewytoiwshgfdk,jhgeoiuarytoirjhg,kfdngv.,goiitrp;yoituierytgirgmfezsueywiqujhfmdnfujdytir8t7e9qoiak4ty4r9a8476ythtfk",
        img: "https://4.imimg.com/data4/VO/DP/MY-3816229/harry-potter-and-the-cursed-child-parts-i-500x500.jpg"
    },
]

const App = () => {
    const [books, setBooks] = useState(initialState)
    return (
        <div className="container border shadow-sm rounder pb-4">
            <Navbar />
            <h1>Books</h1>
            <div className="row">
                {books.map((item)=> (
                <div className="col-3">
                    <div className="card books-item">
                        <img className="card-img-top" src={item.img} alt="" />
                        <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
                            <p className="card-text">Price : {item.price}c</p>
                        </div>
                    </div>
                </div>
                ))},

            </div>

        </div>
    );
};

export default App;