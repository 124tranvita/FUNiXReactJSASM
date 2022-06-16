import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import LazyLoad from 'react-lazyload';
import HomeBreadcrumb from '../../components/HomeBreadcrumb';
import Search from '../../components/Search';
import DepartmentCard from '../../components/Card/components/DepartmentCard';
import { DeptIdSort } from '../../components/Sort';
import { departmentKeyword } from '../../features/Search/searchSlice';
import { AddDept } from '../../components/Modal';
import { PageLoader } from '../../components/Loader';
import Error from '../../components/Error';
import { useDidMountEffect } from '../../hooks';

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

  const [deparmentList, setDepartmentList] = useState([]);

  // Only setStaffList when staffs data is responsed
  useEffect(() => {
    if (status === 'succeeded' && !error) {
      setDepartmentList(departments);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, error]);

  // Dept filter
  useDidMountEffect(() => {
    const searchedList = departments.filter((staff) =>
      staff.name.toLowerCase().includes(searchKeyword.toLowerCase()),
    );
    setDepartmentList(searchedList);
  }, [searchKeyword]);

  // Dept sort by
  useDidMountEffect(() => {
    const departmentListCopied = [...deparmentList];

    if (idAsc) {
      departmentListCopied.sort((a, b) => a.numberOfStaff - b.numberOfStaff);
    }

    if (idDes) {
      departmentListCopied.sort((a, b) => b.numberOfStaff - a.numberOfStaff);
    }

    setDepartmentList(departmentListCopied);
  }, [idAsc, idDes]);

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
          <PageLoader />
        </div>
      )}

      {error && (
        <div className="position-relative">
          <Error error={error} />
        </div>
      )}

      <div className="row">
        {deparmentList[0] && (
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
