import React from "react"
import Navbar from "./components/Navbar.js"
import Cards from "./components/Cards.js"
import data from "./data"



export default function App() {
    const cards = data.map(item => {
        return (
           <Cards 
               key={item.id}
               {...item}  
            />
        )
    })
    
    return (
        <div>
            <Navbar />
            <section className="cards-list">
               {cards}
            </section>      
        </div>
    )
}