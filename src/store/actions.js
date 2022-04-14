import { SET_PC_COL_1, SET_PC_COL_3, SET_PC_COL_6, SET_TABLET_COL_1, SET_TABLET_COL_2 } from './constants';

export const setPCCol1 = payload => ({
  type: SET_PC_COL_1,
  payload
})

export const setPCCol3 = payload => ({
  type: SET_PC_COL_3,
  payload
})

export const setPCCol6 = payload => ({
  type: SET_PC_COL_6,
  payload
})

export const setTabletCol1 = payload => ({
  type: SET_TABLET_COL_1,
  payload
})

export const setTabletCol2 = payload => ({
  type: SET_TABLET_COL_2,
  payload
})