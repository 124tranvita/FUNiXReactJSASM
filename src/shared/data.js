import { STAFFS } from './staffs';


export const OverTime = ({ times }) => {
  if (times < 8) {
    return (
      <>0 ngày {times} giờ</>
    )
  } else {
    return (
      <>{(times / 8).toFixed(0)} ngày {times % 8} giờ</>
    )
  }
}

// Get the selected staff by filtered their Id. This function will be passed to <StaffDetail /> as props
export const getStaff = (staffId) => {
  return STAFFS.filter((staff) => staff.id === staffId)
}

// Get all the staffs belong to specific deparment by filtered their Department Id. This function will be passed to <DepartmentStaff /> as props
export const getDepartmentStaffs = (departmentId) => {
  return STAFFS.filter((staff) => staff.department.id === departmentId)
}