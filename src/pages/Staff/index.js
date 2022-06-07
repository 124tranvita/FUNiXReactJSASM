import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import LazyLoad from 'react-lazyload';
import HomeBreadcrumb from '../../components/HomeBreadcrumb';
import Search from '../../components/Search';
import StaffCard from '../../components/Card/components/StaffCard';
import { StaffIdSort } from '../../components/Sort';
import { staffKeyword } from '../../features/Search/searchSlice';
import { AddStaff } from '../../components/Modal';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

function Staff() {
  const { staffs, status, error } = useSelector((state) => ({
    staffs: state.staff.get.staffs,
    status: state.staff.get.status,
    error: state.staff.get.error,
  }));

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
            <div className="col-2 col-xl-4 text-xl-end">
              <AddStaff />
            </div>
            <div className="col-8 col-xl-6">
              <Search action={staffKeyword} />
            </div>
            <div className="col-2 col-xl-2">
              <StaffIdSort />
            </div>
          </div>
        </div>
      </div>

      {status === 'loading' && (
        <div className="position-relative">
          <Loader />
        </div>
      )}

      {error && (
        <div className="position-relative">
          <Error error={error} />
        </div>
      )}

      <div className="row">
        {status === 'succeeded' && !error && (
          <>
            <LazyLoad>
              <StaffCard staffList={staffList} />
            </LazyLoad>
          </>
        )}
      </div>
    </>
  );
}

export default Staff;
