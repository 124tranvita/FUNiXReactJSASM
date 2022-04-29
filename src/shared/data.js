import { STAFFS } from "./staffs";

// Get the staff list from localStorage
const localStaffs = JSON.parse(localStorage.getItem("staffs"));
// Push the staff list in localStorage to current staff list
const STAFFSFULL = localStaffs === null ? STAFFS : STAFFS.concat(localStaffs);

export const OverTime = ({ times }) => {
  if (times < 8) {
    return <>0 ngày {times} giờ</>;
  } else {
    return (
      <>
        {(times / 8).toFixed(0)} ngày {times % 8} giờ
      </>
    );
  }
};

// Get the selected staff by filtered their Id. This function will be passed to <StaffDetail /> as props
export const getStaff = (staffId) => {
  return STAFFSFULL.filter((staff) => staff.id === staffId);
};

// Get all the staffs belong to specific deparment by filtered their Department Id. This function will be passed to <DepartmentStaff /> as props
export const getDepartmentStaffs = (departmentId) => {
  return STAFFSFULL.filter((staff) => staff.department.id === departmentId);
};

export const getOverTime = (value) => {
  if (value < 8) {
    return `0 ngày ${value} giờ`;
  } else {
    return `${(value / 8).toFixed(0)} ngày ${value % 8} giờ`;
  }
};
