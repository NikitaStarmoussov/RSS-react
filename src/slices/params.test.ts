import { actions, reducer } from './paramsSlice';

describe('paramsSlice reducers', () => {
  it('should handle incrementPage', () => {
    const initialState = { page: 1, limit: 10 };
    const action = actions.incrementPage(2);
    const nextState = reducer(initialState, action);
    expect(nextState.page).toEqual(2);
  });

  it('should handle decrementPage', () => {
    const initialState = { page: 2, limit: 10 };
    const action = actions.decrementPage(1);
    const nextState = reducer(initialState, action);
    expect(nextState.page).toEqual(1);
  });

  it('should handle setPage', () => {
    const initialState = { page: 1, limit: 10 };
    const action = actions.setPage(5);
    const nextState = reducer(initialState, action);
    expect(nextState.page).toEqual(5);
  });

  it('should handle setLimit', () => {
    const initialState = { limit: 10, page: 1 };
    const action = actions.setLimit(20);
    const nextState = reducer(initialState, action);
    expect(nextState.limit).toEqual(20);
  });
});