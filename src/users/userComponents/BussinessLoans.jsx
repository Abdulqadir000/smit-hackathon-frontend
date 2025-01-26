import { useState } from "react";
import UserLayout from "./UserLayout";
import { Modal, Input, Select, Button } from 'antd';
import { BankOutlined, UserOutlined, MailOutlined, DollarOutlined, CalendarOutlined } from '@ant-design/icons';

function BussinessLoans() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <UserLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
            Business Startup Loans
          </h1>
          <Button 
            type="primary" 
            size="large"
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 shadow-lg"
          >
            Apply Now
          </Button>
        </div>

        <Modal
          title={(
            <div className="flex items-center gap-3">
              <BankOutlined className="text-blue-600 text-xl" />
              <span className="text-xl font-semibold">Business Loan Application</span>
            </div>
          )}
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
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
                  size="large"
                  placeholder="John Doe"
                  prefix={<UserOutlined className="text-gray-400" />}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  size="large"
                  placeholder="john@business.com"
                  prefix={<MailOutlined className="text-gray-400" />}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Purpose
              </label>
              <Select
                size="large"
                placeholder="Select loan category"
                className="w-full"
                options={[
                  { value: 'stall', label: 'Buy Stall' },
                  { value: 'rent', label: 'Advance Rent for Shop' },
                  { value: 'assets', label: 'Shop Assets' },
                  { value: 'machinery', label: 'Shop Machinery' },
                ]}
                suffixIcon={<span className="text-gray-400">▼</span>}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount
                </label>
                <Input
                  size="large"
                  placeholder="50,000"
                  prefix={<DollarOutlined className="text-gray-400" />}
                  suffix="PKR"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Period
                </label>
                <Input
                  size="large"
                  placeholder="3"
                  prefix={<CalendarOutlined className="text-gray-400" />}
                  suffix="Years"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-6">
              <Button
                size="large"
                onClick={() => setIsModalOpen(false)}
                className="border-gray-300 text-gray-700"
              >
                Cancel
              </Button>
              <Button
                type="primary"
                size="large"
                className="bg-blue-600 hover:bg-blue-700"
              >
                Submit Application
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </UserLayout>
  );
}

export default BussinessLoans;