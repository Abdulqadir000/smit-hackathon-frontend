import { useState, useEffect } from "react";
import UserLayout from "./UserLayout";
import { Modal, Table, Button, Input, Select, Tag } from "antd";
import {
  UserOutlined,
  MailOutlined,
  DollarOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

function WeddingLoans() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subcategory: "",
    maxLoan: "",
    loanPeriod: "",
  });
  const [loanRequests, setLoanRequests] = useState([]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setLoanRequests([
      ...loanRequests,
      { ...formData, status: "Pending", key: loanRequests.length + 1 },
    ]);
    setIsModalOpen(false);
    setFormData({
      name: "",
      email: "",
      subcategory: "",
      maxLoan: "",
      loanPeriod: "",
    }); // Reset form data
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const changeStatus = (record, status) => {
    const updatedRequests = loanRequests.map((loan) =>
      loan.key === record.key ? { ...loan, status: status } : loan
    );
    setLoanRequests(updatedRequests);
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Subcategory", dataIndex: "subcategory", key: "subcategory" },
    { title: "Maximum Loan (PKR)", dataIndex: "maxLoan", key: "maxLoan" },
    {
      title: "Loan Period (Years)",
      dataIndex: "loanPeriod",
      key: "loanPeriod",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag
          color={
            status === "Pending"
              ? "orange"
              : status === "Approved"
              ? "green"
              : "red"
          }
        >
          {status}
        </Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (record) => (
        <div className="flex gap-2">
          <Button
            type="primary"
            size="small"
            onClick={() => changeStatus(record, "Approved")}
          >
            Approve
          </Button>
          <Button
            danger
            size="small"
            onClick={() => changeStatus(record, "Rejected")}
          >
            Reject
          </Button>
        </div>
      ),
    },
  ];

  return (
    <UserLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
            Wedding Loans
          </h1>
          <Button
            type="primary"
            size="large"
            onClick={showModal}
            className="bg-blue-600 hover:bg-blue-700 shadow-lg"
          >
            Apply for Loan
          </Button>
        </div>

        {/* Table to display loan data */}
        <div className="mt-6">
          <Table
            columns={columns}
            dataSource={loanRequests}
            rowKey="key"
            pagination={{ pageSize: 5 }}
          />
        </div>

        {/* Modal for loan application */}
        <Modal
          title={
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold">
                Wedding Loan Application
              </span>
            </div>
          }
          open={isModalOpen}
          onCancel={handleCancel}
          onOk={handleOk}
          footer={[
            <Button key="cancel" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={handleOk}>
              Submit
            </Button>,
          ]}
          width={600}
          centered
        >
          <div className="py-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <Input
                  name="name"
                  size="large"
                  placeholder="John Doe"
                  prefix={<UserOutlined className="text-gray-400" />}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  name="email"
                  size="large"
                  placeholder="john@example.com"
                  prefix={<MailOutlined className="text-gray-400" />}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subcategory
              </label>
              <Select
                name="subcategory"
                size="large"
                placeholder="Select subcategory"
                className="w-full"
                value={formData.subcategory}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, subcategory: value }))
                }
                options={[
                  { value: "Valima", label: "Valima" },
                  { value: "Furniture", label: "Furniture" },
                  { value: "Valima Food", label: "Valima Food" },
                  { value: "Jahez", label: "Jahez" },
                ]}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount
                </label>
                <Input
                  name="maxLoan"
                  size="large"
                  placeholder="50,000"
                  prefix={<DollarOutlined className="text-gray-400" />}
                  suffix="PKR"
                  value={formData.maxLoan}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Period
                </label>
                <Input
                  name="loanPeriod"
                  size="large"
                  placeholder="3"
                  prefix={<CalendarOutlined className="text-gray-400" />}
                  suffix="Years"
                  value={formData.loanPeriod}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </UserLayout>
  );
}

export default WeddingLoans;
