import { Container, Card, Button } from 'react-bootstrap';
import { FaRegBuilding, FaMoneyCheckAlt } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import HomeBreadcrumb from './HomeBreadcrumbComponent';
import { StaffBarChart, DeptsBudgetPieChart } from './ChartComponent';

function Home({ props }) {

  const [staffs, departments] = props;

  return (
    <div className="mt-3 mb-5">
      <Container>
        <div className="row">
          <HomeBreadcrumb active={"Dashboard"} />
        </div>
        <div className="row">
          {/* Staff Card*/}
          <div className="col-12 col-sm-6 col-xl-4 my-2">
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
          </div>
          {/* Staff Card*/}

          {/* Department Card*/}
          <div className="col-12 col-sm-6 col-xl-4 my-2">
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
          </div>
          {/* Department Card*/}

          {/* Salary Card*/}
          <div className="col-12 col-sm-6 col-xl-4 my-2">
            <Card className="bg-dark text-white">
              <Card.Body>
                <div className="row">
                  <div className="col-8">
                    <Card.Title>
                      <h1 style={{ fontSize: "300%" }}>
                        4$
                      </h1>
                    </Card.Title>
                    <Card.Text>
                      Tổng Chi
                    </Card.Text>
                  </div>
                  <div className="col-4">
                    <Card.Title className="text-center"><h1 style={{ fontSize: "300%" }}><FaMoneyCheckAlt /></h1></Card.Title>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          {/* Salary Card*/}
        </div>
      </Container>

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
    </div>
  )
}

export default Home