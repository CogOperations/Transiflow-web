import {
  ArrowDownRight,
  ArrowUpRight,
  Car,
  List,
  Users,
  Wallet,
} from "lucide-react";
import {
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "../../components/common/AdminCard";

const revenueData = [
  { month: "Jan", revenue: 2400000, trips: 145 },
  { month: "Feb", revenue: 2100000, trips: 132 },
  { month: "Mar", revenue: 2800000, trips: 168 },
  { month: "Apr", revenue: 3200000, trips: 195 },
  { month: "May", revenue: 2900000, trips: 178 },
  { month: "Jun", revenue: 3500000, trips: 210 },
];

const tripStatusData = [
  { name: "Completed", value: 850, color: "#10b981" },
  { name: "In Progress", value: 45, color: "#3b82f6" },
  { name: "Cancelled", value: 32, color: "#ef4444" },
];

const recentTrips = [
  {
    id: "TRP-2408",
    route: "Lagos → Abuja",
    driver: "Emeka Okonkwo",
    client: "Aisha Mohammed",
    status: "completed",
    amount: "₦45,000",
  },
  {
    id: "TRP-2407",
    route: "Abuja → Port Harcourt",
    driver: "Chidi Eze",
    client: "Tunde Adeyemi",
    status: "in-progress",
    amount: "₦52,000",
  },
  {
    id: "TRP-2406",
    route: "Lagos → Enugu",
    driver: "Fatima Yusuf",
    client: "Ngozi Okeke",
    status: "completed",
    amount: "₦38,000",
  },
  {
    id: "TRP-2405",
    route: "Kano → Lagos",
    driver: "Yinka Adebayo",
    client: "Ibrahim Musa",
    status: "completed",
    amount: "₦65,000",
  },
];

export function OverviewPage() {
  return (
    <div className="container mx-auto px-4 py-6 overflow-y-scroll">
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold mt-1">₦17.9M</p>
                <div className="flex items-center gap-1 mt-2">
                  <ArrowUpRight className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600">+12.5%</span>
                  <span className="text-xs text-gray-500">vs last month</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <Wallet className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Trips</p>
                <p className="text-2xl font-bold mt-1">927</p>
                <div className="flex items-center gap-1 mt-2">
                  <ArrowUpRight className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600">+8.2%</span>
                  <span className="text-xs text-gray-500">vs last month</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <List className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Drivers</p>
                <p className="text-2xl font-bold mt-1">284</p>
                <div className="flex items-center gap-1 mt-2">
                  <ArrowDownRight className="w-4 h-4 text-red-600" />
                  <span className="text-sm text-red-600">-2.4%</span>
                  <span className="text-xs text-gray-500">vs last month</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Car className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Clients</p>
                <p className="text-2xl font-bold mt-1">1,842</p>
                <div className="flex items-center gap-1 mt-2">
                  <ArrowUpRight className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600">+15.3%</span>
                  <span className="text-xs text-gray-500">vs last month</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="p-6 lg:col-span-2">
            <h3 className="font-semibold mb-4">Revenue & Trips Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis yAxisId="left" stroke="#10b981" />
                <YAxis yAxisId="right" orientation="right" stroke="#3b82f6" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                  }}
                />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="revenue"
                  stroke="#10b981"
                  strokeWidth={2}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="trips"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Trip Status</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={tripStatusData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label
                >
                  {tripStatusData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Recent Trips */}
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Recent Trips</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm text-gray-600">
                    Trip ID
                  </th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">
                    Route
                  </th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">
                    Driver
                  </th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">
                    Client
                  </th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 text-sm text-gray-600">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentTrips.map((trip) => (
                  <tr key={trip.id} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-sm">{trip.id}</td>
                    <td className="py-3 px-4 text-sm">{trip.route}</td>
                    <td className="py-3 px-4 text-sm">{trip.driver}</td>
                    <td className="py-3 px-4 text-sm">{trip.client}</td>
                    <td className="py-3 px-4 text-sm capitalize">
                      {trip.status}
                    </td>
                    <td className="py-3 px-4 text-sm font-medium">
                      {trip.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}