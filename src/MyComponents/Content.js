import React, {useState} from 'react';
import './Content.css';
import TinderCard from 'react-tinder-card';

function Content() {
    const [people,setPeople]=useState([
        {
            name:" ",
            url:"https://images.unsplash.com/photo-1590013330451-3946e83e0392?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
            name:" ",
            url:"https://images.unsplash.com/photo-1568660357733-823cbddb0f6a?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
            name:" ",
            url:"https://images.unsplash.com/photo-1598207981454-d849f4ac3a9e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnV0dGVyZmxpZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
            name:" ",
            url:"https://images.unsplash.com/photo-1558379485-57344c39258a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGJ1dHRlcmZsaWVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
            name:" ",
            url:"https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
            name:" ",
            url:"https://images.unsplash.com/photo-1605627673269-dd30abb724dd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGNhdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
    ]);

    const swiped=(direction,nameToDelete)=>{
        console.log("removing: "+ nameToDelete);
        // setLastDirection(direction);
    };
    const outOfFrame=(name)=>{
        console.log(name+" left the screen");
    };
    return (
        <div className="tinderCards">
        <h2>Swipe the images left or right to view more.</h2>
        <div className="tinderCards__cardContainer">
        {people.map((person) => (
            <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up","down"]}
            onSwipe={(dir)=>swiped(dir,person.name)}
            pnCardLeftScreen={()=>outOfFrame(person.name)}>
              <div style={{backgroundImage:"url("+person.url+"}"}}
              className="card">
              <h3>{person.name}</h3>
              </div>  
            </TinderCard>
        ))}
        </div>
        </div>
    )
}

export default Content

