import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { privateRoutes } from './routes';
import Layout from './components/Layout';
import { getStaffs } from './features/Staffs/staffsSlice';

function App() {
  const dispatch = useDispatch();
  const modifyStatus = useSelector((state) => state.staffs.modify.status);

  useEffect(() => {
    dispatch(getStaffs());
  }, [modifyStatus]);

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
