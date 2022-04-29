import { useState } from "react";
import { Container } from "react-bootstrap";
import HomeBreadcrumb from "./HomeBreadcrumbComponent";
import { StaffBarChart, DeptsBudgetPieChart } from "./ChartComponent";
import AddStaff from "./AddStaffComponent";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import { Button } from "bootstrap";
import { Form, Control, LocalForm } from 'react-redux-form';

/**
 * Sử dụng useParams để đọc giá trị từ URL (https://reactrouter.com/docs/en/v6/getting-started/tutorial#reading-url-params)
 */

function Test() {
  const localStaffs = JSON.parse(localStorage.getItem("staffs"));

  const [staffs, setStaffs] = useState(localStaffs || []);

  const handleSubmit = () => {
    alert('Submit');
  }
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
        <div className="row">
          <div className="col-6 col-sm-4 col-xl-2">
            <AddStaff currentStaffList={STAFFS} />
          </div>
        </div>

        <button onClick={() => window.location.reload()}>Refresh</button>
        <div className="row">
          {staffs.map((staff) => (
            <p key={staff.id}>{JSON.stringify(staff)}</p>
          ))}
        </div>
      </Container>
      <Container>
        <LocalForm onSubmit={handleSubmit}>
          <Control
            type="email"
            model=".email"
          />
          <Control
            type="password"
            model=".password"
          />
          <Control
            type="password"
            model=".confirmPassword"
          />
          <button>Submit!</button>
        </LocalForm>
      </Container>
    </>
  );
}

export default Test;
