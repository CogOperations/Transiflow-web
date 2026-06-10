import { Button } from "@/components/admin/ui/Button";
import { Card } from "@/components/admin/ui/Card";
import { Input } from "@/components/admin/ui/Input";
import { Download, Search } from "lucide-react";
import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/admin/ui/Tabs";

/* =========================
   Static Data
========================= */

const monthlyData = [
  { month: "Jan", revenue: 2400000, payout: 1800000, commission: 600000 },
  { month: "Feb", revenue: 2100000, payout: 1575000, commission: 525000 },
  { month: "Mar", revenue: 2800000, payout: 2100000, commission: 700000 },
  { month: "Apr", revenue: 3200000, payout: 2400000, commission: 800000 },
  { month: "May", revenue: 2900000, payout: 2175000, commission: 725000 },
  { month: "Jun", revenue: 3500000, payout: 2625000, commission: 875000 },
];

const driverTransactions = [
  {
    id: "TXN-D-1234",
    driver: "Emeka Okonkwo",
    type: "withdrawal",
    amount: 85000,
    status: "completed",
    date: "2026-02-08 10:30 AM",
    balance: 40000,
  },
  {
    id: "TXN-D-1233",
    driver: "Fatima Yusuf",
    type: "earning",
    amount: 38000,
    status: "completed",
    date: "2026-02-08 09:15 AM",
    balance: 156000,
  },
];

const clientTransactions = [
  {
    id: "TXN-C-5678",
    client: "Aisha Mohammed",
    type: "topup",
    amount: 50000,
    status: "completed",
    date: "2026-02-08 11:00 AM",
    balance: 45000,
  },
  {
    id: "TXN-C-5677",
    client: "Tunde Adeyemi",
    type: "debit",
    amount: 52000,
    status: "completed",
    date: "2026-02-08 09:00 AM",
    balance: 26000,
  },
];

/* =========================
   Helpers
========================= */

const tooltipStyle = {
  backgroundColor: "#fff",
  border: "1px solid #e5e7eb",
};

const formatMillions = (value) => `₦${(value / 1000000).toFixed(1)}M`;

const getStatusColor = (status) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800";
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    case "failed":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

/* =========================
   Component
========================= */

export function WalletPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("drivers");

  const filteredDrivers = useMemo(() => {
    return driverTransactions.filter(
      (txn) =>
        txn.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        txn.driver.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const filteredClients = useMemo(() => {
    return clientTransactions.filter(
      (txn) =>
        txn.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        txn.client.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="space-y-6 container mx-auto px-4 py-6 overflow-y-scroll">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Wallet & Finance</h2>
        <Button className="bg-primary hover:bg-green-700 text-white">
          <Download className="w-4 h-4 mr-2" />
          Export Transactions
        </Button>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Monthly Revenue Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend />
              <Bar dataKey="revenue" fill="#10b981" />
              <Bar dataKey="payout" fill="#3b82f6" />
              <Bar dataKey="commission" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Commission Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip contentStyle={tooltipStyle} />
              <Line
                type="monotone"
                dataKey="commission"
                stroke="#f59e0b"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Transactions */}
      <Card className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="drivers">Driver Wallets</TabsTrigger>
              <TabsTrigger value="clients">Client Wallets</TabsTrigger>
            </TabsList>

            <div className="relative w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <TabsContent value="drivers">
            <Table transactions={filteredDrivers} type="driver" />
          </TabsContent>

          <TabsContent value="clients">
            <Table transactions={filteredClients} type="client" />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}

/* =========================
   Generic Table
========================= */

function Table({ transactions, type }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 text-sm">Transaction ID</th>
            <th className="text-left py-3 px-4 text-sm">Name</th>
            <th className="text-left py-3 px-4 text-sm">Type</th>
            <th className="text-left py-3 px-4 text-sm">Amount</th>
            <th className="text-left py-3 px-4 text-sm">Balance</th>
            <th className="text-left py-3 px-4 text-sm">Status</th>
            <th className="text-left py-3 px-4 text-sm">Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((txn) => {
            const name = type === "driver" ? txn.driver : txn.client;
            const isNegative =
              txn.type === "withdrawal" || txn.type === "debit";

            return (
              <tr
                key={txn.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-3 px-4 text-sm font-medium">{txn.id}</td>
                <td className="py-3 px-4 text-sm">{name}</td>
                <td className="py-3 px-4 text-sm capitalize">{txn.type}</td>
                <td className="py-3 px-4 text-sm">
                  {isNegative ? "-" : "+"}₦{txn.amount.toLocaleString()}
                </td>
                <td className="py-3 px-4 text-sm">
                  ₦{txn.balance.toLocaleString()}
                </td>
                <td className="py-3 px-4 text-sm">
                  <span
                    className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(
                      txn.status
                    )}`}
                  >
                    {txn.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-gray-600">
                  {txn.date}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}