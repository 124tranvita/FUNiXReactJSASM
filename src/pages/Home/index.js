import { useDispatch } from 'react-redux';

import { notifyShow } from '../../features/Notification/notificationSlice';

function Home() {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Home page</h1>
      <button onClick={() => dispatch(notifyShow())}>Click me</button>
    </>
  );
}

export default Home;
