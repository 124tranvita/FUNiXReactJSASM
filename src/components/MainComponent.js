import { Routes, Route } from 'react-router-dom';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import StaffList from './StaffListComponent';
import StaffDetail from './StaffDetailComponent';
import Departments from './DepartmentsComponent';
import DepartmentStaff from './DepartmentStaffsComponent';
import Salaries from './SalariesComponent';
import Test from './TestComponent';
import { PageNotFound } from './PageErrorComponent';
import { STAFFS, DEPARTMENTS } from "../shared/staffs";


function Main() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home props={[STAFFS, DEPARTMENTS]} />} />
        <Route path="staffs" element={<StaffList staffs={STAFFS} />} />
        <Route path="staffs/:staffId" element={<StaffDetail />} />
        <Route path="departments" element={<Departments departments={DEPARTMENTS} />} />
        <Route path="departments/:deptId" element={<DepartmentStaff />} />
        <Route path="salaries" element={<Salaries staffs={STAFFS} />} />
        {/* Test Component */}
        <Route path="test" element={<Test staffs={STAFFS} />} />
        {/* "No match" route case */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Main