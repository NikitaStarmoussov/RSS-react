import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../slices/paramsSlice';
import { useNavigate } from 'react-router-dom';
import getSearchQuery from '../Helpers/createParams';
import { storeSelector } from '../store/store';
import { fetchItems } from '../Helpers/api';
import { AppDispatch } from '../App';

export default function Pagination() {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate()
    const curPage =  useSelector<storeSelector>((state) => state.params.page);
    const searchQuery =  useSelector<storeSelector>((state) => state.search.value);
    const limit = useSelector<storeSelector>((state) => state.params.limit);



    function handleIncrement(){
        const newPage = (curPage as number) + 1
        dispatch(actions.incrementPage(newPage))
        dispatch(fetchItems({ query: searchQuery as string, page: newPage, limit: (limit as number) }))
        navigate(getSearchQuery(true))
    }
    function handleDecrement(){
        const newPage = (curPage as number) - 1
        dispatch(actions.decrementPage(newPage))
        dispatch(fetchItems({ query: searchQuery as string, page: newPage, limit: (limit as number) }))
        navigate(getSearchQuery(false, true))
    }

  return (
    <div>
        <button onClick={handleDecrement} >Previous</button>
        <button onClick={handleIncrement}>Next</button>
    </div>
  )
}
