import { useParams } from 'react-router-dom';
import HomeBreadcrumb from './HomeBreadcrumbComponent';

/**
 * Sử dụng useParams để đọc giá trị từ URL (https://reactrouter.com/docs/en/v6/getting-started/tutorial#reading-url-params)
 */

function Test() {

  return (
    <>
      <HomeBreadcrumb links={[
        { to: "/staffs", name: "Staffs" },
        { to: "/departments", name: "Departments" },
        { to: "/salaries", name: "Salaries" },
      ]}
        active="Test Page" />
      <h1>Test Component</h1>
    </>
  )
}

export default Test