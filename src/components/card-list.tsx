import React from "react";
import CardProps from "./card-props";
import { Card } from "./card";
async function getItems(){
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();
  
    console.log(data);
    return data.results;
  }
  const data: CardProps[] = await getItems();

export class CardList extends React.Component {
    
    render() {
        return (
        <div>
            {data.map((item) => <Card title={item.title} key={item.episode_id} />)}
        </div>
           
        )
    }
}