import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Card, Table, InputGroup, FormControl, Dropdown } from 'react-bootstrap';
import { FaSearch, FaFilter } from 'react-icons/fa';
import HomeBreadcrumb from './HomeBreadcrumbComponent';
import { OverTime } from '../shared/data';

/*
* Công thức tính lương: salaryScale * 3000000 + overTime * 200000. 
* Trong đó, số giờ làm thêm cần được quy đổi ra đơn vị ngày bằng cách chia cho 8h/ngày (tức là 200000 cho 8h làm thêm).
* => 1 giờ làm thêm = 25000
*/

function Salaries() {
  // Get the list of staffs from {Redux Store}
  const staffs = useSelector(state => state.staffs);

  const [staffList, setStaffList] = useState(staffs);

  const handleSearchStaff = (searchedStaff) => (
    setStaffList(staffs.filter((staff) => (staff.name.includes(searchedStaff) || staff.id === parseInt(searchedStaff)))
    )
  )

  // React Element to display staff's salary
  const Salary = ({ staff }) => {
    let vnd = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });

    const calSalary = staff.salaryScale * 3000000 + staff.overTime * 25000;
    return (
      <>
        <h3>{vnd.format(calSalary.toFixed(0))}</h3>
      </>
    )
  }

  // Sorting function
  const salariesSort = (sortType) => {
    const staffSalaries = staffList.map((staff) => {
      return {
        ...staff,
        salary: (staff.salaryScale * 3000000 + staff.overTime * 25000).toFixed(0)
      }
    })

    switch (sortType) {
      case "salaryAsc":
        staffSalaries.sort((a, b) => a.salary - b.salary);
        break;
      case "salaryDes":
        staffSalaries.sort((a, b) => b.salary - a.salary);
        break;
      case "idAsc":
        staffSalaries.sort((a, b) => a.id - b.id);
        break;
      case "idDes":
        staffSalaries.sort((a, b) => b.id - a.id);
        break;
      default:
        throw new Error("Sort Error!");
    }

    return staffSalaries
  }

  return (
    <div className="mt-3 mb-5">
      <Container>
        <div className="row">
          {/* Breadcrumb */}
          <HomeBreadcrumb active={"Bảng lương"} />
          {/* Breadcrumb */}

          {/* Staff Search - Filter*/}
          <div className="col-12 col-sm-6">
            <div className="row">
              <div className="col-12 col-xl-4"></div>
              {/* Staff Search */}
              <div className="col-12 col-xl-6">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-default"><FaSearch /></InputGroup.Text>
                  <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={(e) => handleSearchStaff(e.target.value)}
                    placeholder="Tìm kiếm..."
                  />
                </InputGroup>
              </div>
              {/* Staff Search */}

              {/* Filter */}
              <div className="col-12 col-xl-2">
                <Dropdown onSelect={(eventKey) => setStaffList(salariesSort(eventKey))}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <FaFilter />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="salaryAsc">Lương tăng dần</Dropdown.Item>
                    <Dropdown.Item eventKey="salaryDes">Lương giảm dần</Dropdown.Item>
                    <Dropdown.Item eventKey="idAsc">Mã NV tăng dần</Dropdown.Item>
                    <Dropdown.Item eventKey="idDes">Mã NV giảm dần</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              {/* Filter */}
            </div>
          </div>
          {/* Staff Search - Filter */}
        </div>

        <div className="row">
          {staffList.map((staff) => (
            <div className="col-12 col-sm-6 col-xl-4" key={staff.id}>
              <Card className="m-2">
                <Card.Header className="bg-dark text-white">
                  <Card.Title>{staff.name}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Table hover size="sm">
                    <tbody>
                      <tr>
                        <td>Mã nhân viên:</td>
                        <td>{staff.id}</td>
                      </tr>
                      <tr>
                        <td>Hệ số lương:</td>
                        <td>{staff.salaryScale}</td>
                      </tr>
                      <tr>
                        <td>Số giờ làm thêm:</td>
                        <td>{<OverTime times={staff.overTime} />}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
                <Card.Footer className="text-muted">
                  <Card.Title>Lương: {<Salary staff={staff} />}</Card.Title>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Salaries