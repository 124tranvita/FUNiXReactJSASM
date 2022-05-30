import Header from './components/Header';
import Footer from './components/Footer';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="py-3">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
