import { useState } from "react";
import FilmListItem from "./FilmListItem";
import SearchForm from "./SearchForm";
import Item from "../types/types";
import { Link, useLoaderData, useNavigate} from "react-router-dom";

export async function itemsLoader({ request }: { request: Request }) {
  let page = Number(new URL(request.url).searchParams.get('page'));
  let limit = Number(new URL(request.url).searchParams.get('limit'));
  let query = new URL(request.url).searchParams.get('q');
  if(limit === 0){
    limit = 10
  }
  if(page === 0){
    page = 1
  }
  if(!query){
    query = ''
  }
  

  const newOffset = (page - 1) * 10;
    
      const response = await fetch(`https://dummyjson.com/products/search?q=${query}&skip=${newOffset}&limit=${limit}`);
      const data = response.json();
      return data;

}

type Response = {

products: Item[]
}

    // export const itemsWithPageLoader = async (search: string) => {
      

    //   const page = Number(new URLSearchParams(search).get('page'));
    //   const newOffset = (page - 1) * 10;
    //   const newLimit = page * 10;
    
    //   const response = await fetch(`https://pokeapi.co/api/v2/ability/? skip=${newOffset}&limit=${newLimit}`);
    //   const data = await response.json();
    
    //   return data;
    // };
    


function getSearchQuery(addPage?:boolean, subtractPage?:boolean, newLimit?:number, query?:string) {
  const url = window.location.search
  const params = new URLSearchParams(url)
  const page = params.get('page')
  if(addPage){
    params.set('page', (Number(page) + 1).toString())
  }
  if(subtractPage && Number(page)>1){
    params.set('page', (Number(page) - 1).toString())
  }
  if(newLimit){
    params.set('limit', newLimit.toString())
    params.set('page', '1')
  }
  if(query){
    params.set('q', query)
    params.set('page', '1')
  }
  return params.toString()
  
}
function FilmList() {
  const data = useLoaderData() 

  const items = (data as Response).products

  const [itemLimit, setItemLimit] = useState<number>(10);

  

  
  const navigate = useNavigate();
  const searchSubmit = (query: string) => {
    navigate({
      pathname: '/',
      search: getSearchQuery(undefined, undefined, undefined, query),
    })
  };
  const changeLimit = (limit: number) => {
    setItemLimit(limit)
    navigate({
      pathname: '/',
      search: getSearchQuery( undefined, undefined, limit),
    });
  }


  return (
    <div>
      <SearchForm isLoading={false} onSearchSubmit={searchSubmit} />
      <div>

<select value={itemLimit} onChange={(e) => changeLimit(Number(e.target.value))}>
  <option value="5">5</option>
  <option value="10">10</option>
  <option value="20">20</option>
</select></div>
      <div style={{ display: "flex" }}>
      <Link to={{ pathname: '/', search: getSearchQuery(undefined, true)}}>Prev</Link>
      <Link to={{ pathname: '/', search: getSearchQuery(true)}}>Next</Link>
      
      </div>
      {false ? (
  <p>Загрузка...</p>
) : items.length > 0 ? (
  <ul key={items.length}>
    {items.map((item) => (
      <FilmListItem key={item.id} item={item} />
    ))}
  </ul>
) : (
  <p>Нет результатов поиска</p>
)}
    </div>
  );
}

export default FilmList;