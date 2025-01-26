import React from "react";
import AdminLayout from "./adminComponent/Layout";
import { Card, Progress, Button, Table } from "antd";
import {
  UserOutlined,
  DollarOutlined,
  BarChartOutlined,
  ArrowRightOutlined,
  TeamOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

const Admin = () => {
  // Sample data for the table
  const dataSource = [
    {
      key: "1",
      name: "John Doe",
      email: "john@example.com",
      loanType: "Wedding Loan",
      amount: "₹1,00,000",
      status: "Approved",
    },
    {
      key: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      loanType: "Education Loan",
      amount: "₹50,000",
      status: "Pending",
    },
    {
      key: "3",
      name: "Alice Johnson",
      email: "alice@example.com",
      loanType: "Business Loan",
      amount: "₹2,00,000",
      status: "Rejected",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Loan Type",
      dataIndex: "loanType",
      key: "loanType",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span
          className={`px-2 py-1 rounded-full text-sm font-semibold ${
            status === "Approved"
              ? "bg-green-100 text-green-700"
              : status === "Pending"
              ? "bg-orange-100 text-orange-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Button
          type="link"
          icon={<ArrowRightOutlined />}
          className="text-blue-600"
        >
          View Details
        </Button>
      ),
    },
  ];

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome, Admin!</h1>
          <p className="text-gray-600 mt-2">
            Here's an overview of your system and recent activities.
          </p>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Total Users
                </h3>
                <p className="text-2xl font-bold text-blue-600">1,234</p>
              </div>
              <UserOutlined className="text-3xl text-blue-500" />
            </div>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Total Loans
                </h3>
                <p className="text-2xl font-bold text-green-600">₹50,00,000</p>
              </div>
              <DollarOutlined className="text-3xl text-green-500" />
            </div>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Pending Loans
                </h3>
                <p className="text-2xl font-bold text-orange-600">12</p>
              </div>
              <FileTextOutlined className="text-3xl text-orange-500" />
            </div>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Active Users
                </h3>
                <p className="text-2xl font-bold text-purple-600">1,000</p>
              </div>
              <TeamOutlined className="text-3xl text-purple-500" />
            </div>
          </Card>
        </div>

        {/* Loan Applications Table */}
        <Card className="shadow-md mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Recent Loan Applications
          </h2>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{ pageSize: 5 }}
            rowKey="key"
          />
        </Card>

        {/* System Analytics Section */}
        <Card className="shadow-md">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            System Analytics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Loan Distribution
              </h3>
              <Progress percent={40} status="active" strokeColor="#3B82F6" />
              <p className="text-gray-600 mt-2">Wedding Loans</p>
              <Progress percent={30} status="active" strokeColor="#10B981" />
              <p className="text-gray-600 mt-2">Education Loans</p>
              <Progress percent={20} status="active" strokeColor="#F59E0B" />
              <p className="text-gray-600 mt-2">Business Loans</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                User Activity
              </h3>
              <Progress percent={70} status="active" strokeColor="#3B82F6" />
              <p className="text-gray-600 mt-2">Active Users</p>
              <Progress percent={30} status="active" strokeColor="#10B981" />
              <p className="text-gray-600 mt-2">New Signups</p>
            </div>
          </div>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Admin;
