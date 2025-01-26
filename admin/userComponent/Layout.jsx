import { Layout, Menu, Button } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  BankOutlined,
  HomeOutlined,
  CarOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, getUserToken } from "@/constant/HelperAuth";

const { Header, Sider, Content } = Layout;

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
    if (currentUser && getUserToken) {
      setIsLoggedIn(true);
    }
  }, []);
  console.log("Checking if user is logged in:", user);

  const handleLogin = () => {
    const currentUser = getUserToken();
    console.log("Checking if user is logged in:", currentUser);
    if (currentUser) {
      setIsLoggedIn(true);
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("jwtToken");
    setIsLoggedIn(false);
  };

  const menuItems = [
    {
      key: "/dashboard",
      icon: <DashboardOutlined />,
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
      key: "/loans/personal",
      icon: <UserOutlined />,
      label: <Link to="/loans/personal">Personal Loans</Link>,
    },
    {
      key: "/loans/business",
      icon: <BankOutlined />,
      label: <Link to="/loans/business">Business Loans</Link>,
    },
    {
      key: "/loans/home",
      icon: <HomeOutlined />,
      label: <Link to="/loans/home">Home Loans</Link>,
    },
    {
      key: "user/loans/auto",
      icon: <CarOutlined />,
      label: <Link to="/loans/auto">Auto Loans</Link>,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme="light"
        style={{
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        <div
          style={{
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              color: "#1890ff",
              margin: 0,
              fontSize: collapsed ? "20px" : "16px",
              fontWeight: "bold",
            }}
          >
            {collapsed ? "LMS" : "Loan System"}
          </h1>
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["/"]}
          selectedKeys={[location.pathname]}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: "0 16px",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          />
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button onClick={handleLogin}>Login</Button>
          )}
          {/* <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Button type="primary">Login</Button>
            <Avatar icon={<UserOutlined />} />
          </div> */}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
