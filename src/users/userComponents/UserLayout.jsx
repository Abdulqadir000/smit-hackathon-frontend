// import { useState } from "react";
// import { Layout, Menu, Button, Avatar } from "antd";
// import {
//   DashboardOutlined,
//   UserOutlined,
//   BankOutlined,
//   HomeOutlined,
//   CarOutlined,
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   AppstoreAddOutlined,
//   DollarOutlined,
//   BookOutlined,
// } from "@ant-design/icons";
// import { Link, useLocation } from "react-router-dom";

// const { Header, Sider, Content } = Layout;

// const UserLayout = ({ children }) => {
//   const [collapsed, setCollapsed] = useState(false);
//   const location = useLocation();

//   const menuItems = [
//     {
//       key: "/",
//       icon: <AppstoreAddOutlined />,
//       label: <Link to={"/user"}>Dashbaord</Link>,
//     },
//     {
//       key: "loans",
//       label: "Loans",
//       children: [
//         {
//           key: "/weddingloans",
//           icon: <UserOutlined />,
//           label: <Link to={"/weddingloans"}>Wedding Loan</Link>,
//         },
//         {
//           key: "/constructionloans",
//           icon: <BankOutlined />,
//           label: <Link to={"/constructionloans"}>Home Construction Loans</Link>,
//         },
//         {
//           key: "/bussinessloans",
//           icon: <DollarOutlined />,
//           label: <Link to={"/bussinessloans"}>Business Startup Loans</Link>,
//         },
//         {
//           key: "/educationloans",
//           icon: <BookOutlined />,
//           label: <Link to={"/educationloans"}> Education Loans</Link>,
//         },
//       ],
//     },
//   ];

//   return (
//     <Layout style={{ minHeight: "100vh" }}>
//       <Sider
//         trigger={null}
//         collapsible
//         collapsed={collapsed}
//         theme="light"
//         style={{
//           boxShadow: "0 2px 8px rgba(0,0,0,0.15) ",
//         }}
//       >
//         <div
//           style={{
//             height: "64px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//           className="p-8"
//         >
//             {
//             collapsed
//             ? "SMA"
//             : <img width={'180px'} src={"https://www.saylaniwelfare.com/static/media/logo_saylaniwelfare.22bf709605809177256c.png"} alt="Logo"/>
//         }
//         </div>
//         <Menu
//           theme="light"
//           mode="inline"
//           defaultSelectedKeys={["/"]}
//           selectedKeys={[location.pathname]}
//           defaultOpenKeys={["loans"]}
//           items={menuItems}
//         >
//           {menuItems.map((item) => {
//             if (item.children) {
//               return (
//                 <Menu.SubMenu
//                   key={item.key}
//                   icon={item.icon}
//                   title={item.label}
//                 >
//                   {item.children.map((child) => (
//                     <Menu.Item key={child.key} icon={child.icon}>
//                       <Link to={child.key}>{child.label}</Link>
//                     </Menu.Item>
//                   ))}
//                 </Menu.SubMenu>
//               );
//             }
//             return (
//               <Menu.Item key={item.key} icon={item.icon} >
//                 <Link to={item.key}>{item.label}</Link>
//               </Menu.Item>
//             );
//           })}
//         </Menu>
//       </Sider>
//       <Layout>
//         <Header
//           style={{
//             padding: "0 16px",
//             background: "#fff",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
//           }}
//         >
//           <Button
//             type="text"
//             icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//             onClick={() => setCollapsed(!collapsed)}
//             style={{ fontSize: "16px", width: 64, height: 64 }}
//           />
//           <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
//             {/* <Button type="primary">Loan Details</Button> */}
//             <Link to={"/login"}><Button type="primary">Login</Button></Link>
//           </div>
//         </Header>
//         <Content
//           style={{
//             margin: "24px 16px",
//             padding: 24,
//             background: "#fff",
//             minHeight: 280,
//           }}
//         >
//           {children}
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default UserLayout;

import { useState } from "react";
import { Layout, Menu, Button, Avatar, theme } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  BankOutlined,
  DollarOutlined,
  BookOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const UserLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuItems = [
    {
      key: "/user",
      icon: <DashboardOutlined style={{ fontSize: "18px" }} />,
      label: <Link to={"/user"}>Dashboard</Link>,
    },
    {
      key: "loans",
      label: "Loan Products",
      children: [
        {
          key: "/weddingloans",
          icon: <UserOutlined style={{ fontSize: "16px" }} />,
          label: <Link to={"/weddingloans"}>Wedding Loans</Link>,
        },
        {
          key: "/constructionloans",
          icon: <BankOutlined style={{ fontSize: "16px" }} />,
          label: <Link to={"/constructionloans"}>Home Construction</Link>,
        },
        {
          key: "/bussinessloans",
          icon: <DollarOutlined style={{ fontSize: "16px" }} />,
          label: <Link to={"/bussinessloans"}>Business Startup</Link>,
        },
        {
          key: "/educationloans",
          icon: <BookOutlined style={{ fontSize: "16px" }} />,
          label: <Link to={"/educationloans"}>Education Loans</Link>,
        },
      ],
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh", background: "#f5f6fa" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme="light"
        width={250}
        style={{
          boxShadow: "4px 0 16px rgba(0,0,0,0.08)",
          background: colorBgContainer,
        }}
      >
        <div className="flex items-center justify-center p-4 mb-4"></div>

        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          defaultOpenKeys={["loans"]}
          items={menuItems}
          style={{
            borderRight: 0,
            padding: "0 8px",
          }}
          expandIcon={() => null}
          className="custom-ant-menu"
        />
      </Sider>

      <Layout>
        <Header
          style={{
            padding: "0 24px",
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            height: "64px",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "18px", width: 48, height: 48 }}
            className="hover:bg-gray-100 rounded-lg"
          />

          <div className="flex items-center gap-4">
            <Avatar
              size="default"
              icon={<UserOutlined />}
              className="bg-indigo-500 cursor-pointer"
            />
            <Button
              type="text"
              icon={<LogoutOutlined />}
              className="flex items-center text-gray-600 hover:text-indigo-600"
            >
              {!collapsed && "Logout"}
            </Button>
          </div>
        </Header>

        <Content
          style={{
            margin: "24px",
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default UserLayout;
