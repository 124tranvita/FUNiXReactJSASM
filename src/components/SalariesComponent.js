import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Table, Breadcrumb, InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

function Salaries({ staffs }) {

  const [staffList, setStaffList] = useState(staffs);

  const handleSearchStaff = (searchedStaff) => (
    setStaffList(staffs.filter((staff) => staff.name.includes(searchedStaff))
    )
  )

  const Salary = ({ staff }) => {
    const calSalary = staff.salaryScale * 3000000 + staff.overTime * 200000;
    return (
      <>
        <h3>{calSalary.toFixed(0)}$</h3>
      </>
    )
  }

  const OverTime = ({ times }) => {
    if (times < 8) {
      return (
        <>{times} giờ</>
      )
    } else {
      return (
        <>{(times / 8).toFixed(0)} ngày {times % 8} giờ</>
      )
    }
  }

  return (
    <div className="mt-3 mb-5">
      <Container>
        <div className="row">
          {/* Breadcrumb */}
          <div className="col-12 col-sm-6">
            <Breadcrumb className=" border-bottom border-dark mb-1">
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Trang chủ</Breadcrumb.Item>
              <Breadcrumb.Item active>Bảng lương</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          {/* Breadcrumb */}

          {/* Staff Search */}
          <div className="col-12 col-sm-6">
            <div className="row">
              <div className="col-12 col-xl-6"></div>
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
            </div>
          </div>
          {/* Staff Search */}
        </div>

        <div className="row">
          {staffList.map((staff) => (
            <div className="col-12 col-sm-6 col-xl-4">
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