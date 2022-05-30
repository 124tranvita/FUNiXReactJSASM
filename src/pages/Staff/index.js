import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import HomeBreadcrumb from '../../components/HomeBreadcrumb';
import Search from '../../components/Search';
import StaffCard from '../../components/Card/components/StaffCard';
import { StaffIdSort } from '../../components/Sort';
import { staffKeyword } from '../../features/Search/searchSlice';
import { AddStaff } from '../../components/Form';

function Staff() {
  const staffs = useSelector((state) => state.staffs);
  const searchKeyword = useSelector((state) => state.search.staffSearch);
  const { idAsc, idDes } = useSelector((state) => ({
    idAsc: state.sort.staffIdAsc,
    idDes: state.sort.staffIdDes,
  }));

  const [staffList, setStaffList] = useState(staffs);

  // Prevent useEffect running on initial render
  const initRender = useRef(true);

  useEffect(() => {
    /**First render will set initRender.current = fales and ignore the array filter */
    if (initRender.current) {
      initRender.current = false;
      return;
    }
    const searchedList = staffs.filter((staff) =>
      staff.name.toLowerCase().includes(searchKeyword.toLowerCase()),
    );
    setStaffList(searchedList);
  }, [searchKeyword, staffs]);

  useEffect(() => {
    /**First render will set initRender.current = fales and ignore the array sort */
    if (initRender.current) {
      initRender.current = false;
      return;
    }

    const staffListCopied = [...staffList];

    if (idAsc) {
      staffListCopied.sort((a, b) => a.id - b.id);
    }

    if (idDes) {
      staffListCopied.sort((a, b) => b.id - a.id);
    }

    setStaffList(staffListCopied);
  }, [idAsc, idDes, staffList]);

  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-6">
          <HomeBreadcrumb active={'Nhân viên'} />
        </div>
        <div className="col-12 col-sm-6">
          <div className="row">
            <div className="col-12 col-xl-4"></div>
            <div className="col-12 col-xl-6">
              <Search action={staffKeyword} />
            </div>
            <div className="col-12 col-xl-2">
              <StaffIdSort />
            </div>
          </div>
        </div>
      </div>
      <div className="row scroll-list">
        <div className="col-12 col-sm-6 col-xl-2">
          <AddStaff />
        </div>
        {staffList.map((staff) => (
          <div className="col-12 col-sm-6 col-xl-2" key={staff.id}>
            <StaffCard staff={staff} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Staff;
