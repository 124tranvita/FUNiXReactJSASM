import { useParams } from 'react-router-dom';

/**
 * Sử dụng useParams để đọc giá trị từ URL (https://reactrouter.com/docs/en/v6/getting-started/tutorial#reading-url-params)
 */

function Test({ getStaff }) {

  let params = useParams();
  let staffId = parseInt(params.staffId, 10);
  // Filter trả về 1 mảng -> dùng Destructuring để lấy giá trị trong mảng (thông tin staff)
  const [staff] = getStaff(staffId);
  console.log(staff);


  return (
    <>
      <h1>URL PARAM:{staff.name}</h1>
    </>
  )
}

export default Test