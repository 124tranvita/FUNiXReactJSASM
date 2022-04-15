import { Routes, Route } from 'react-router-dom';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import StaffList from './StaffListComponent';
import StaffDetail from './StaffDetailComponent';
import Departments from './DepartmentsComponent';
import DepartmentStaff from './DepartmentStaffsComponent';
import Test from './TestComponent';
import { PageNotFound } from './PageErrorComponent';
import { STAFFS, DEPARTMENTS } from "../shared/staffs";


function Main() {

  function getStaff(staffId) {
    return STAFFS.filter((staff) => staff.id === staffId)
  }

  function getDepartmentStaffs(departmentId) {
    return STAFFS.filter((staff) => staff.department.id === departmentId)
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="staffs" element={<StaffList staffs={STAFFS} />} />
        <Route path="staffs/:staffId" element={<StaffDetail getStaff={getStaff} />} />
        <Route path="departments" element={<Departments departments={DEPARTMENTS} />} />
        <Route path="departments/:departmentId" element={<DepartmentStaff getDepartmentStaffs={getDepartmentStaffs} />} />
        <Route path="/test" element={<Test />} />
        {/* "No match" route case */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Main