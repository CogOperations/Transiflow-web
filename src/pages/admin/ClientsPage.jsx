import { useState } from "react";
import { Card } from "../../components/admin/ui/Card";
import { Input } from "../../components/admin/ui/Input";
import { Button } from "../../components/admin/ui/Button";
import {
  Search,
  Filter,
  UserPlus,
  Eye,
  Phone,
  Mail,
  MapPin,
  Wallet,
  History,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/admin/ui/Select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../components/admin/ui/Dialog";
import { WalletManagementDialog } from "@/components/admin/ui/WalletManagementDialog";
import { TripHistoryDialog } from "@/components/admin/ui/TripsHistoryDialog";

const allClients = [
  {
    id: "CLT-001",
    name: "Aisha Mohammed",
    phone: "+234 803 456 7890",
    email: "aisha.mohammed@mail.com",
    location: "Lagos",
    status: "active",
    totalTrips: 28,
    totalSpent: 985000,
    walletBalance: 45000,
    joinDate: "2024-01-15",
    lastTrip: "2026-02-07",
  },
  {
    id: "CLT-002",
    name: "Tunde Adeyemi",
    phone: "+234 805 678 9012",
    email: "tunde.adeyemi@mail.com",
    location: "Abuja",
    status: "active",
    totalTrips: 42,
    totalSpent: 1567000,
    walletBalance: 78000,
    joinDate: "2023-11-20",
    lastTrip: "2026-02-08",
  },
  {
    id: "CLT-003",
    name: "Ngozi Okeke",
    phone: "+234 807 890 1234",
    email: "ngozi.okeke@mail.com",
    location: "Enugu",
    status: "active",
    totalTrips: 19,
    totalSpent: 687000,
    walletBalance: 23000,
    joinDate: "2024-03-10",
    lastTrip: "2026-02-06",
  },
  {
    id: "CLT-004",
    name: "Ibrahim Musa",
    phone: "+234 809 012 3456",
    email: "ibrahim.musa@mail.com",
    location: "Kano",
    status: "active",
    totalTrips: 56,
    totalSpent: 2134000,
    walletBalance: 125000,
    joinDate: "2023-09-05",
    lastTrip: "2026-02-05",
  },
  {
    id: "CLT-005",
    name: "Oladele Johnson",
    phone: "+234 811 234 5678",
    email: "oladele.johnson@mail.com",
    location: "Port Harcourt",
    status: "inactive",
    totalTrips: 8,
    totalSpent: 234000,
    walletBalance: 5000,
    joinDate: "2025-06-12",
    lastTrip: "2025-12-20",
  },
  {
    id: "CLT-006",
    name: "Sarah Bello",
    phone: "+234 813 456 7890",
    email: "sarah.bello@mail.com",
    location: "Kaduna",
    status: "active",
    totalTrips: 34,
    totalSpent: 1245000,
    walletBalance: 67000,
    joinDate: "2024-02-28",
    lastTrip: "2026-02-03",
  },
  {
    id: "CLT-007",
    name: "Chioma Eze",
    phone: "+234 815 678 9012",
    email: "chioma.eze@mail.com",
    location: "Lagos",
    status: "active",
    totalTrips: 67,
    totalSpent: 2567000,
    walletBalance: 156000,
    joinDate: "2023-08-14",
    lastTrip: "2026-02-02",
  },
  {
    id: "CLT-008",
    name: "Ahmed Hassan",
    phone: "+234 817 890 1234",
    email: "ahmed.hassan@mail.com",
    location: "Onitsha",
    status: "active",
    totalTrips: 23,
    totalSpent: 834000,
    walletBalance: 34000,
    joinDate: "2024-04-22",
    lastTrip: "2026-02-01",
  },
  {
    id: "CLT-009",
    name: "Blessing Okoro",
    phone: "+234 819 012 3456",
    email: "blessing.okoro@mail.com",
    location: "Lagos",
    status: "blocked",
    totalTrips: 12,
    totalSpent: 456000,
    walletBalance: 0,
    joinDate: "2025-05-10",
    lastTrip: "2025-11-15",
  },
  {
    id: "CLT-010",
    name: "David Obi",
    phone: "+234 820 123 4567",
    email: "david.obi@mail.com",
    location: "Calabar",
    status: "active",
    totalTrips: 15,
    totalSpent: 542000,
    walletBalance: 28000,
    joinDate: "2024-07-08",
    lastTrip: "2026-01-28",
  },
];

export function ClientsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedClient, setSelectedClient] = useState(null);
  const [walletDialogOpen, setWalletDialogOpen] = useState(false);
  const [tripHistoryDialogOpen, setTripHistoryDialogOpen] = useState(false);
  const [activeClient, setActiveClient] = useState(null);

  const filteredClients = allClients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.phone.includes(searchQuery) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || client.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-gray-100 text-gray-800";
      case "blocked":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6 container mx-auto px-4 py-6 overflow-y-scroll">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Client Management</h2>
          <p className="text-sm text-gray-600 mt-1">
            Manage clients and their accounts
          </p>
        </div>

        <Button className="bg-green-600 hover:bg-green-700">
          <UserPlus className="w-4 h-4 mr-2" />
          Add New Client
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-sm text-gray-600">Total Clients</p>
          <p className="text-2xl font-bold mt-1">{allClients.length}</p>
        </Card>

        <Card className="p-4">
          <p className="text-sm text-gray-600">Active Clients</p>
          <p className="text-2xl font-bold mt-1">
            {allClients.filter((c) => c.status === "active").length}
          </p>
        </Card>

        <Card className="p-4">
          <p className="text-sm text-gray-600">Total Spent</p>
          <p className="text-2xl font-bold mt-1">
            ₦{(allClients.reduce((s, c) => s + c.totalSpent, 0) / 1000000).toFixed(1)}M
          </p>
        </Card>

        <Card className="p-4">
          <p className="text-sm text-gray-600">Wallet Balances</p>
          <p className="text-2xl font-bold mt-1">
            ₦{(allClients.reduce((s, c) => s + c.walletBalance, 0) / 1000).toFixed(0)}K
          </p>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search by name, ID, email, or phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-45">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="blocked">Blocked</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Table */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Client ID</th>
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">Contact</th>
                <th className="text-left p-3">Location</th>
                <th className="text-left p-3">Trips</th>
                <th className="text-left p-3">Spent</th>
                <th className="text-left p-3">Wallet</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredClients.map((client) => (
                <tr key={client.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">{client.id}</td>
                  <td className="p-3">{client.name}</td>
                  <td className="p-3">
                    <div>
                      <p className="font-medium">{client.phone}</p>
                      <p className="text-xs text-gray-500">{client.email}</p>
                    </div>
                  </td>
                  <td className="p-3">{client.location}</td>
                  <td className="p-3">{client.totalTrips}</td>
                  <td className="p-3 font-medium">
                    ₦{(client.totalSpent / 1000).toFixed(0)}K
                  </td>
                  <td className="p-3 font-medium text-green-600">
                    ₦{client.walletBalance.toLocaleString()}
                  </td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(client.status)}`}>
                      {client.status}
                    </span>
                  </td>

                  <td className="p-3">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" onClick={() => setSelectedClient(client)}>
                        <Eye className="w-4 h-4" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setActiveClient(client);
                          setTripHistoryDialogOpen(true);
                        }}
                      >
                        <History className="w-4 h-4 text-blue-600" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setActiveClient(client);
                          setWalletDialogOpen(true);
                        }}
                      >
                        <Wallet className="w-4 h-4 text-green-600" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Wallet Dialog */}
      {activeClient && (
        <WalletManagementDialog
          open={walletDialogOpen}
          onOpenChange={setWalletDialogOpen}
          userType="client"
          userName={activeClient.name}
          currentBalance={activeClient.walletBalance}
          userId={activeClient.id}
        />
      )}

      {/* Trip History Dialog */}
      {activeClient && (
        <TripHistoryDialog
          open={tripHistoryDialogOpen}
          onOpenChange={setTripHistoryDialogOpen}
          userName={activeClient.name}
          userType="client"
          userId={activeClient.id}
        />
      )}

      {/* Details Dialog */}
      <Dialog open={!!selectedClient} onOpenChange={() => setSelectedClient(null)}>
        <DialogContent className="max-w-2xl bg-white">
          <DialogHeader>
            <DialogTitle>Client Details - {selectedClient?.id}</DialogTitle>
            <DialogDescription>
              View client profile and transaction history
            </DialogDescription>
          </DialogHeader>

          {selectedClient && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl font-semibold">
                  {selectedClient.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-semibold text-lg">{selectedClient.name}</h3>
                  <p className="text-sm text-gray-600">{selectedClient.email}</p>
                </div>

                <span className={`px-3 py-1 rounded-full text-sm capitalize ${getStatusColor(selectedClient.status)}`}>
                  {selectedClient.status}
                </span>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3">Contact Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-medium">{selectedClient.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium">{selectedClient.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Location</p>
                      <p className="font-medium">{selectedClient.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3">Account Info</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Join Date</p>
                    <p className="font-medium">{selectedClient.joinDate}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600">Last Trip</p>
                    <p className="font-medium">{selectedClient.lastTrip}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3">Activity</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Trips</p>
                    <p className="text-2xl font-bold">{selectedClient.totalTrips}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600">Spent</p>
                    <p className="text-2xl font-bold">
                      ₦{(selectedClient.totalSpent / 1000).toFixed(0)}K
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600">Wallet</p>
                    <p className="text-2xl font-bold text-green-600">
                      ₦{selectedClient.walletBalance.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}