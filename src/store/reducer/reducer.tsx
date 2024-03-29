import { IReducer } from '../../interfaces/actions.interface';

const reducer:IReducer = (state = 0, { type, payload = 0 }) => {
  switch (type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RND':
      return state + payload;
    default:
      return state;
  }
};
export default reducer;