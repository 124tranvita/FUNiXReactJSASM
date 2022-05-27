import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomeBreadcrumb({ links, active }) {
  if (!links && !active) {
    return <p>Có lỗi xảy ra, kiểm tra lại props "links, active"!</p>;
  }

  return (
    <>
      {links && active && (
        <Breadcrumb className=" border-bottom border-dark mb-1">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
            Trang chủ
          </Breadcrumb.Item>
          {links.map((link, index) => (
            <Breadcrumb.Item key={index} linkAs={Link} linkProps={{ to: `${link.to}` }}>
              {link.name}
            </Breadcrumb.Item>
          ))}
          <Breadcrumb.Item active>{active}</Breadcrumb.Item>
        </Breadcrumb>
      )}

      {!links && active && (
        <Breadcrumb className=" border-bottom border-dark mb-1">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
            Trang chủ
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{active}</Breadcrumb.Item>
        </Breadcrumb>
      )}
    </>
  );
}

export default HomeBreadcrumb;
