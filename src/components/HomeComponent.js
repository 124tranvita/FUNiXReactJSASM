import { Container, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { FaRegBuilding, FaMoneyCheckAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BsPeopleFill } from 'react-icons/bs';
import HomeBreadcrumb from './HomeBreadcrumbComponent';
import { StaffBarChart, DeptsBudgetPieChart } from './ChartComponent';

function Home() {

  // Get the list of staffs from {Redux Store}
  const staffs = useSelector(state => state.staffs);
  // Get the list of departments from {Redux Store}
  const departments = useSelector(state => state.departments);

  return (
    <div className="mt-3 mb-5">
      <Container>
        <div className="row">
          <HomeBreadcrumb active={"Dashboard"} />
        </div>
        <div className="row">
          {/* Staff Card*/}
          <div className="col-12 col-sm-6 col-xl-4 my-2">
            <Link className="nav-link" to={"/staffs"}>
              <Card className="bg-dark text-white">
                <Card.Body>
                  <div className="row">
                    <div className="col-8">
                      <Card.Title>
                        <h1 style={{ fontSize: "300%" }}>
                          {staffs.length}
                        </h1>
                      </Card.Title>
                      <Card.Text>
                        Nhân Viên
                      </Card.Text>
                    </div>
                    <div className="col-4">
                      <Card.Title className="text-center">
                        <h1 style={{ fontSize: "300%" }}>
                          <BsPeopleFill />
                        </h1>
                      </Card.Title>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </div>
          {/* Staff Card*/}

          {/* Department Card*/}
          <div className="col-12 col-sm-6 col-xl-4 my-2">
            <Link className="nav-link" to={"/departments"}>
              <Card className="bg-dark text-white">
                <Card.Body>
                  <div className="row">
                    <div className="col-8">
                      <Card.Title>
                        <h1 style={{ fontSize: "300%" }}>
                          {departments.length}
                        </h1>
                      </Card.Title>
                      <Card.Text>
                        Phòng Ban
                      </Card.Text>
                    </div>
                    <div className="col-4">
                      <Card.Title className="text-center">
                        <h1 style={{ fontSize: "300%" }}>
                          <FaRegBuilding />
                        </h1>
                      </Card.Title>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </div>
          {/* Department Card*/}

          {/* Salary Card*/}
          <div className="col-12 col-sm-6 col-xl-4 my-2">
            <Link className="nav-link" to={"/salaries"}>
              <Card className="bg-dark text-white">
                <Card.Body>
                  <div className="row">
                    <div className="col-8">
                      <Card.Title>
                        <h1 style={{ fontSize: "300%" }}>
                          4$
                        </h1>
                      </Card.Title>
                      <Card.Text className="text-muted">
                        Tổng Chi (In-completed)
                      </Card.Text>
                    </div>
                    <div className="col-4">
                      <Card.Title className="text-center"><h1 style={{ fontSize: "300%" }}><FaMoneyCheckAlt /></h1></Card.Title>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </div>
          {/* Salary Card*/}
        </div>
      </Container>

      {/* Chart Area */}
      <Container>
        <hr className="my-4" />
        <div className="row">
          <div className="col-12 col-sm-6 p-1">
            <StaffBarChart />
          </div>
          <div className='col-12 col-sm-6 p-1'>
            <DeptsBudgetPieChart />
          </div>
        </div>
      </Container>
      {/* Chart Area */}
    </div>
  )
}

export default Home