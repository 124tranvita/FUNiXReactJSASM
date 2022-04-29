import { DEPARTMENTS, ROLE, STAFFS } from '../shared/staffs';

// Get the staff list from localStorage
const localStaffs = JSON.parse(localStorage.getItem("staffs"));
// Push the staff list in localStorage to current staff list
const STAFFSFULL = localStaffs === null ? STAFFS : STAFFS.concat(localStaffs);

export const initState = {
  departments: DEPARTMENTS,
  roles: ROLE,
  staffs: STAFFSFULL
}

export const reducer = (state = initState, action) => {
  switch (action.type) {
    //
  }
  return state;
}