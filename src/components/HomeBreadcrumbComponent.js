import React, { Component } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/**
 * HOMEBREADCRUMB COMPONENT
 * Nhận vào 2 props là {links} và {active}
 * Links dùng để hiển thị các nhánh của Breadcrumb (Ví dụ: Home/Link1/Link2/Link3/...)
 * Active dùng để hiển thị item cuối cùng của Breadcrumb (Ví dụ: Home/Link1/Link2/...../Active)
 * Item đầu tiên của Breadcrumb sẽ mặc đinh là Home ("/")
 */

class HomeBreadcrumb extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const HomeBreadcrumb = () => {
      if (this.props.links != null) {
        return (
          <div className="col-12 col-sm-6">
            <Breadcrumb className=" border-bottom border-dark mb-1">
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Trang chủ</Breadcrumb.Item>
              {this.props.links.map((link, index) => (
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: `${link.to}` }} key={index}>{link.name}</Breadcrumb.Item>
              ))}
              <Breadcrumb.Item active>{this.props.active}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        )
      }
      else if (this.props.active != null) {
        return (
          <div className="col-12 col-sm-6">
            <Breadcrumb className=" border-bottom border-dark mb-1">
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Trang chủ</Breadcrumb.Item>
              <Breadcrumb.Item active>{this.props.active}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        )
      } else {
        return (
          <>
            <p>Có lỗi xảy ra, kiểm tra lại props "links, active"!</p>
          </>
        )
      }
    }

    return (
      <HomeBreadcrumb />
    )
  }
}

export default HomeBreadcrumb