import { actions, reducer } from './search';

describe('Search Slice', () => {
  describe('reducer', () => {
    it('should handle setSearchValue', () => {
      const initialState = {
        value: '',
      };
      const action = actions.setSearchValue('example search value');
      const state = reducer(initialState, action);
      expect(state.value).toEqual('example search value');
    });
  });
});