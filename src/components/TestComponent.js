import { useState } from "react";
import { Container } from "react-bootstrap";
import HomeBreadcrumb from "./HomeBreadcrumbComponent";
import { StaffBarChart, DeptsBudgetPieChart } from "./ChartComponent";
import AddStaff from "./AddStaffComponent";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import { Button } from "bootstrap";

/**
 * Sử dụng useParams để đọc giá trị từ URL (https://reactrouter.com/docs/en/v6/getting-started/tutorial#reading-url-params)
 */

function Test() {
  const localStaffs = JSON.parse(localStorage.getItem("staffs"));

  const [staffs, setStaffs] = useState(localStaffs || []);

  return (
    <>
      <Container>
        <HomeBreadcrumb
          links={[
            { to: "/staffs", name: "Staffs" },
            { to: "/departments", name: "Departments" },
            { to: "/salaries", name: "Salaries" },
          ]}
          active="Test Page"
        />

        <h1>Test Component</h1>

        <AddStaff currentStaffList={STAFFS} />
        <button onClick={() => window.location.reload()}>Refresh</button>
        <div className="row">
          {staffs.map((staff) => (
            <p key={staff.id}>{JSON.stringify(staff)}</p>
          ))}
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 p-1">
            <StaffBarChart />
          </div>
          <div className="col-12 col-sm-6 p-1">
            <DeptsBudgetPieChart />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Test;
