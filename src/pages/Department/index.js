import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import HomeBreadcrumb from '../../components/HomeBreadcrumb';
import Search from '../../components/Search';
import DepartmentCard from '../../components/Card/components/DepartmentCard';
import { DeptIdSort } from '../../components/Sort';
import { departmentKeyword } from '../../features/Search/searchSlice';

import AddStaff from '../../components/Form/components/AddStaff';

function Department() {
  const departments = useSelector((state) => state.departments);
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
        <div className="col-12 col-sm-6">
          <div className="row">
            <div className="col-12 col-xl-4"></div>
            <div className="col-12 col-xl-6">
              <Search action={departmentKeyword} />
            </div>
            <div className="col-12 col-xl-2">
              <DeptIdSort />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-6 col-xl-2">
          <AddStaff />
        </div>
        {deparmentList.map((department) => (
          <div className="col-12 col-sm-6 col-xl-2" key={department.id}>
            <DepartmentCard department={department} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Department;
