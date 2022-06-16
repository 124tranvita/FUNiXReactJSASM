import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import HomeBreadcrumb from '../../components/HomeBreadcrumb';
import Search from '../../components/Search';
import { SalaryCard } from '../../components/Card';
import { SalarySort } from '../../components/Sort';
import { salaryKeyword } from '../../features/Search/searchSlice';
import { PageLoader } from '../../components/Loader';
import Error from '../../components/Error';
import { useDidMountEffect } from '../../hooks';
import { Fade, Stagger } from 'react-animation-components';

function Salary() {
  const { staffs, status, error } = useSelector((state) => ({
    staffs: state.staff.get.staffs,
    status: state.staff.get.status,
    error: state.staff.get.error,
  }));
  const [staffList, setStaffList] = useState([]);
  const searchKeyword = useSelector((state) => state.search.salarySearch);
  const { idAsc, idDes, salaryAsc, salaryDes } = useSelector((state) => ({
    idAsc: state.sort.salary.staffIdAsc,
    idDes: state.sort.salary.staffIdDes,
    salaryAsc: state.sort.salary.salaryAsc,
    salaryDes: state.sort.salary.salaryDes,
  }));

  // Only setStaffList when staffs data is responsed
  useEffect(() => {
    if (status === 'succeeded' && !error) {
      setStaffList(staffs);
    }
  }, [status, error]);

  // Filter staff
  useDidMountEffect(() => {
    const searchedList = staffs.filter((staff) =>
      staff.name.toLowerCase().includes(searchKeyword.toLowerCase()),
    );
    setStaffList(searchedList);
  }, [searchKeyword]);

  // Sort salary by
  useDidMountEffect(() => {
    const staffListCopied = staffList.map((staff) => {
      return {
        ...staff,
        salary: (staff.salaryScale * 3000000 + staff.overTime * 25000).toFixed(
          0,
        ),
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
  }, [idAsc, idDes, salaryAsc, salaryDes]);

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
          <PageLoader />
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
                <Stagger in>
                  <Fade in>
                    <SalaryCard staff={staff} />
                  </Fade>
                </Stagger>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default Salary;
