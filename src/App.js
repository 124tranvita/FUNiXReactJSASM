import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { privateRoutes } from './routes';
import Layout from './components/Layout';
import { getStaffs } from './features/Staffs/staffsSlice';
import { getDepts } from './features/Deparments/departmentSlice';

function App() {
  const dispatch = useDispatch();
  const staffModifyStatus = useSelector((state) => state.staff.modify.status);
  const deptModifyStatus = useSelector((state) => state.department.modify.status);

  // Initial API Deparment request
  useEffect(() => {
    dispatch(getDepts());
  }, []);

  // API request every Dept List is modified
  useEffect(() => {
    let timeID;

    if (deptModifyStatus === 'succeeded') {
      timeID = setTimeout(() => dispatch(getDepts()), 500);
    }

    return () => clearTimeout(timeID);
  }, [deptModifyStatus]);

  // Initial API Staff request
  useEffect(() => {
    dispatch(getStaffs());
  }, []);

  // API request every Staff List is modified
  useEffect(() => {
    let timeID;

    if (staffModifyStatus === 'succeeded') {
      timeID = setTimeout(() => dispatch(getStaffs()), 500);
    }

    return () => clearTimeout(timeID);
  }, [staffModifyStatus]);

  return (
    <BrowserRouter>
      <Routes>
        {privateRoutes.map((route, index) => {
          const Page = route.component;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
