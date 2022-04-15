import { Routes, Route } from 'react-router-dom';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import StaffList from './StaffListComponent';
import StaffDetail from './StaffDetailComponent';
import Test from './TestComponent';
import { PageNotFound } from './PageErrorComponent';
import { STAFFS } from "../shared/staffs";


function Main() {

  function getStaff(staffId) {
    return STAFFS.filter((staff) => staff.id === staffId)
  }

  return (
    <div>
      <div className='row bg-black'>dsa</div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="staffs" element={<StaffList staffs={STAFFS} />} />
        <Route path="staffs/:staffId" element={<StaffDetail getStaff={getStaff} />} />
        <Route path="/test" element={<Test />} />
        {/* "No match" route case */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Main