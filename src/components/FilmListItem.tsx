import Item from "../types/types";
import React from 'react';

interface FilmListItemProps {
  item: Item;
}

const FilmListItem: React.FC<FilmListItemProps> = ({ item }) => {
    return (
        <li >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </li>
    );
};

export default FilmListItem;