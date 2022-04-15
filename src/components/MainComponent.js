import { Routes, Route, useParams } from 'react-router-dom';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import StaffList from './StaffListComponent';
import Test from './TestComponent';
import { PageNotFound } from './PageErrorComponent';
import { STAFFS } from "../shared/staffs";


function Main() {
  let params = useParams();

  function getStaff(staffId) {
    return STAFFS.filter((staff) => staff.id === staffId)
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="staffs" element={<StaffList staffs={STAFFS} />} />
        <Route path="staffs/:staffId" element={<Test getStaff={getStaff} />} />
        <Route path="/test" element={<Test />} />
        {/* "No match" route case */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default Main