import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import LazyLoad from 'react-lazyload';
import HomeBreadcrumb from '../../components/HomeBreadcrumb';
import Search from '../../components/Search';
import DepartmentCard from '../../components/Card/components/DepartmentCard';
import { DeptIdSort } from '../../components/Sort';
import { departmentKeyword } from '../../features/Search/searchSlice';
import { AddDept } from '../../components/Form';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

function Department() {
  const { departments, status, error } = useSelector((state) => ({
    departments: state.department.get.departments,
    status: state.department.get.status,
    error: state.department.get.error,
  }));
  const searchKeyword = useSelector((state) => state.search.departmentSearch);
  const { idAsc, idDes } = useSelector((state) => ({
    idAsc: state.sort.deptIdAsc,
    idDes: state.sort.deptIdDes,
  }));

  const [deparmentList, setDepartmentList] = useState(departments);

  // Prevent useEffect running on initial render
  const initRender = useRef(true);

  useEffect(() => {
    /**First render will set initRender.current = fales and ignore the array filter */
    if (initRender.current) {
      initRender.current = false;
      return;
    }
    const searchedList = departments.filter((staff) =>
      staff.name.toLowerCase().includes(searchKeyword.toLowerCase()),
    );
    setDepartmentList(searchedList);
  }, [searchKeyword, departments]);

  useEffect(() => {
    /**First render will set initRender.current = fales and ignore the array sort */
    if (initRender.current) {
      initRender.current = false;
      return;
    }

    const departmentListCopied = [...deparmentList];

    if (idAsc) {
      departmentListCopied.sort((a, b) => a.numberOfStaff - b.numberOfStaff);
    }

    if (idDes) {
      departmentListCopied.sort((a, b) => b.numberOfStaff - a.numberOfStaff);
    }

    setDepartmentList(departmentListCopied);
  }, [idAsc, idDes, deparmentList]);

  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-6">
          <HomeBreadcrumb active={'Phòng ban'} />
        </div>
        <div className="col-12 col-sm-6 mb3">
          <div className="row">
            <div className="col-2 col-xl-4 text-lg-end">
              <AddDept />
            </div>
            <div className="col-8 col-xl-6">
              <Search action={departmentKeyword} />
            </div>
            <div className="col-2 col-xl-2">
              <DeptIdSort />
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
              <DepartmentCard deparmentList={deparmentList} />
            </LazyLoad>
          </>
        )}
      </div>
    </>
  );
}

export default Department;
