import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Footer } = Layout;

const menu = [
  {
    label: "图片懒加载",
    key: "/image/lazy-load",
  },
  {
    label: "自定义报表面板",
    key: "/chart_dashboard",
  },
];
const Home = () => {
  const navigate = useNavigate();
  const onSelect = ({ item, key }) => {
    navigate(`${key}`);
  };
  return (
    <div className="flex w-full h-full">
      <Header>
        <Menu theme="dark" mode="horizontal" items={menu} onSelect={onSelect} />
      </Header>
      <Content>
        <Outlet />
      </Content>
    </div>
  );
};

export default Home;
