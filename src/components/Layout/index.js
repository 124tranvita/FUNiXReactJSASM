import Header from './components/Header';
//import Footer from './components/Footer';
import Notification from './components/Notification';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Notification />
      <div className="container content-wrapper">
        <div className="py-3">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
