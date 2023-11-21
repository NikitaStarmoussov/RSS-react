import React from 'react'
import { Item } from '../../../src/types/Item';
import { fetchItems, fetchItemsProps } from '../../../src/Helpers/api';
import Link from 'next/link';
export default async function List({query, newOffset, limit}: fetchItemsProps) {
    const items = await fetchItems({ query, newOffset, limit });


  // console.log("data", items)
  if (!items) {
    return <div>No items found</div>;
  }

  return (
    <div>
      {items.map((item: Item) => (
        <Link href={`/?productName=${item.id}`} key={item.id}>
          {item.title}
        </Link>
      ))}
    </div>
  );
}