import { Breadcrumb, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomeBreadcrumb({ links, active }) {
  if (!links && !active) {
    return <p>Có lỗi xảy ra, kiểm tra lại props "links, active"!</p>;
  }

  return (
    <>
      {links && active && (
        <Breadcrumb className="mb-1">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
            <Badge id="badgeHome">Trang chủ</Badge>
          </Breadcrumb.Item>
          {links.map((link, index) => (
            <Breadcrumb.Item key={index} linkAs={Link} linkProps={{ to: `${link.to}` }}>
              <Badge id="badgeLink">{link.name}</Badge>
            </Breadcrumb.Item>
          ))}
          <Breadcrumb.Item active>
            <Badge bg="secondary">{active}</Badge>
          </Breadcrumb.Item>
        </Breadcrumb>
      )}

      {!links && active && (
        <Breadcrumb className="mb-1">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
            <Badge id="badgeHome">Trang chủ</Badge>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            <Badge bg="secondary">{active}</Badge>
          </Breadcrumb.Item>
        </Breadcrumb>
      )}
    </>
  );
}

export default HomeBreadcrumb;
