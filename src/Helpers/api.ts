import { Item } from "../types/Item";

export interface fetchItemsProps {
  query: string,
  newOffset: number,
  limit: number
}
export const fetchItems =  
    async ({ query, newOffset, limit }: fetchItemsProps) => {
      try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${query}&skip=${newOffset}&limit=${limit}`);
        if (!response.ok) {
          throw new Error('Failed to fetch items');
        }
        const data = await response.json();
        console.log(data.products);
        return data.products;
      } catch (error) {
        throw new Error('Failed to fetch items' + error);
      }
    }
;

export const fetchItem = async (id: string): Promise<Item> => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch item');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('Failed to fetch item' + error);
  }
}