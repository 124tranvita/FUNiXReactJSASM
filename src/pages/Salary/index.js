import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import HomeBreadcrumb from '../../components/HomeBreadcrumb';
import Search from '../../components/Search';
import { SalaryCard } from '../../components/Card';
import { SalarySort } from '../../components/Sort';
import { salaryKeyword } from '../../features/Search/searchSlice';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

function Salary() {
  const { staffs, status, error } = useSelector((state) => ({
    staffs: state.staff.get.staffs,
    status: state.staff.get.status,
    error: state.staff.get.error,
  }));
  const searchKeyword = useSelector((state) => state.search.salarySearch);
  const [staffList, setStaffList] = useState(staffs);
  const { idAsc, idDes, salaryAsc, salaryDes } = useSelector((state) => ({
    idAsc: state.sort.salary.staffIdAsc,
    idDes: state.sort.salary.staffIdDes,
    salaryAsc: state.sort.salary.salaryAsc,
    salaryDes: state.sort.salary.salaryDes,
  }));

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

    const staffListCopied = staffList.map((staff) => {
      return {
        ...staff,
        salary: (staff.salaryScale * 3000000 + staff.overTime * 25000).toFixed(0),
      };
    });

    if (idAsc) {
      staffListCopied.sort((a, b) => a.id - b.id);
    }

    if (idDes) {
      staffListCopied.sort((a, b) => b.id - a.id);
    }

    if (salaryAsc) {
      staffListCopied.sort((a, b) => a.salary - b.salary);
    }

    if (salaryDes) {
      staffListCopied.sort((a, b) => b.salary - a.salary);
    }

    setStaffList(staffListCopied);
  }, [idAsc, idDes, salaryAsc, salaryDes, staffList]);

  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-6">
          <HomeBreadcrumb active={'Bảng lương'} />
        </div>
        <div className="col-12 col-sm-6">
          <div className="row">
            <div className="col-12 col-xl-4"></div>
            <div className="col-12 col-xl-6">
              <Search action={salaryKeyword} />
            </div>
            <div className="col-12 col-xl-2">
              <SalarySort />
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

      <div className="row scroll-list">
        {status === 'succeeded' && !error && (
          <>
            {staffList.map((staff) => (
              <div className="col-12 col-sm-6 col-xl-3" key={staff.id}>
                <SalaryCard staff={staff} />
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default Salary;
