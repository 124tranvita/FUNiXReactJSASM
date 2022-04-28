import { useParams, Link } from "react-router-dom";
import { Container, Card, Table } from "react-bootstrap";
import dateFormat from "dateformat";
import HomeBreadcrumb from "./HomeBreadcrumbComponent";
import { OverTime, getStaff } from "../shared/data";

/**
 * Sử dụng useParams để đọc giá trị từ URL (https://reactrouter.com/docs/en/v6/getting-started/tutorial#reading-url-params)
 */

function StaffDetail() {
  // Declare useParams() variable to take the params from URL
  let params = useParams();
  let staffId = parseInt(params.staffId, 10);

  // Use array destructuring to unpack value from getStaff() - getStaff() return an array with only one value (array: [selected staff])
  const [staff] = getStaff(staffId);

  return (
    <div className="mt-3 mb-5" style={{ height: "70vh" }}>
      <Container style={{ height: "100%" }}>
        {/* Breadcrumb */}
        <HomeBreadcrumb
          links={[
            {
              to: "/staffs",
              name: "Nhân viên",
            },
          ]}
          active={staff.name}
        />
        {/* Breadcrumb */}

        <Card className="m-5">
          <Card.Header className="bg-dark text-white">
            <strong>Thông tin nhân viên</strong>
          </Card.Header>
          <Card.Body>
            <div className="row">
              <div className="col-12 col-sm-4 col-xl-3">
                <Card.Img src={staff.image} style={{ width: "100%" }} />
              </div>
              <div className="col-12 col-sm-8 col-xl-9">
                <Table>
                  <tbody>
                    <tr>
                      <td>Họ và tên:</td>
                      <th>{staff.name}</th>
                    </tr>
                    <tr>
                      <td>Ngày sinh:</td>
                      <th>{dateFormat(staff.doB, "dd/mm/yyyy")}</th>
                    </tr>
                    <tr>
                      <td>Ngày vào công ty:</td>
                      <th>{dateFormat(staff.startDate, "dd/mm/yyyy")}</th>
                    </tr>
                    <tr>
                      <td>Phòng ban:</td>
                      <th>
                        <Link to="/departments">
                          {staff.department.name || staff.department}
                        </Link>
                      </th>
                    </tr>
                    <tr>
                      <td>Số ngày nghỉ còn lại:</td>
                      <th>{staff.annualLeave} ngày</th>
                    </tr>
                    <tr>
                      <td>Số ngày đã làm thêm:</td>
                      <th>
                        <OverTime times={staff.overTime} />
                      </th>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default StaffDetail;
