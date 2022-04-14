import { SET_PC_COL_1, SET_PC_COL_3, SET_PC_COL_6, SET_TABLET_COL_1, SET_TABLET_COL_2 } from "./constants";

const initState = {
  mobile: 'col-12',
  tablet: 'col-sm-6',
  pc: 'col-xl-4'
}

function reducer(state, action) {
  switch (action.type) {
    case SET_PC_COL_1:
      return {
        ...state,
        pc: action.payload
      }
    case SET_PC_COL_3:
      return {
        ...state,
        pc: action.payload
      }
    case SET_PC_COL_6:
      return {
        ...state,
        pc: action.payload
      }
    case SET_TABLET_COL_1:
      return {
        ...state,
        pc: action.payload
      }
    case SET_TABLET_COL_2:
      return {
        ...state,
        pc: action.payload
      }
    default:
      throw new Error('Invalid action!');
    //
  }
}

export { initState }
export default reducer