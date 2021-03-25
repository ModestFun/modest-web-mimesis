import { Row, Col } from 'antd';
import globals from "../globals"
import { MenuItem } from '../interface';
import {
  Link
} from 'react-router-dom';

function useMenu() {
  return [
    {
      title: "文章",
      isShow: false,
      path: "/article"
    },
    {
      title: "日记",
      isShow: false,
      path: "/career"
    },
    {
      title: '归档',
      isShow: false,
      path: '/archive'
    },
    {
      title: "留言",
      isShow: false,
      path: "/interact"
    },
    {
      title: "友链",
      isShow: false,
      path: "/friends"
    },
    {
      title: "关于",
      isShow: false,
      path: "/about"
    },
  ]
}

function Header() {

  return (
    <div className="header">
      <Row justify="center">
        <Col xl={5} lg={5} md={5} xs={14} sm={14}>
          <div className="logo">
            <img src={globals.logo} alt="" />
            <h3 >ModestFun</h3>
            <div className="detail">
              在这个娱乐致死的时代
             <br />
            提醒自己只能“<span style={{ color: "#ff6700" }}>适度娱乐</span>”
          </div>
          </div>

        </Col>
        <Col xl={15} lg={15} md={15} xs={0} sm={0}>
          <ul className="menu">
            {
              useMenu().map((v: MenuItem) => (
                <li key={v.path} className={v.isShow ? "navItem navItem_show" : "navItem"}>
                  <Link to={v.path}>{v.title}</Link>
                  <span className={v.isShow ? "line line_show" : "line"}></span>
                </li>
              ))
            }
          </ul>
        </Col>
      </Row>
    </div>
  )
}

export default Header