import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { privateRoutes } from './routes';
import Layout from './components/Layout';
import { getStaffs } from './features/Staffs/staffsSlice';
import { getDepts } from './features/Deparments/departmentSlice';
import { useDidMountEffect } from './hooks';

function App() {
  const dispatch = useDispatch();
  const staffModifyStatus = useSelector((state) => state.staff.modify.status);
  const deptModifyStatus = useSelector(
    (state) => state.department.modify.status,
  );

  // Initial API Deparment request
  useEffect(() => {
    dispatch(getDepts());
    dispatch(getStaffs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // API request every Dept List is modified
  useDidMountEffect(() => {
    console.log('Modify status changed!');
    let timeID;

    if (staffModifyStatus === 'succeeded') {
      timeID = setTimeout(() => {
        dispatch(getStaffs());
        dispatch(getDepts());
      }, 500);
    }

    if (deptModifyStatus === 'succeeded') {
      timeID = setTimeout(() => dispatch(getDepts()), 500);
    }

    return () => clearTimeout(timeID);
  }, [deptModifyStatus, staffModifyStatus]);

  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
