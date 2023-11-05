import Item from "../types/types";
import React from 'react';

interface FilmListItemProps {
  item: Item;
}

const FilmListItem: React.FC<FilmListItemProps> = ({ item }) => {
    return (
        <li key={item.url}>
            <h3>{item.name}</h3>
            <p>{item.manufacturer}</p>
        </li>
    );
};

export default FilmListItem;