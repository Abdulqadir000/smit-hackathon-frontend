import AdminLayout from "./Layout";

const Dashboards = () => {
  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <p className="text-gray-600">
          Welcome to your loan management dashboard. Here you can view your loan
          statistics and manage your user applications.
        </p>
      </div>
    </AdminLayout>
  );
};

export default Dashboards;
