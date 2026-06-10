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
  Car,
  Star,
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

const allDrivers = [
  {
    id: "DRV-001",
    name: "Emeka Okonkwo",
    phone: "+234 801 234 5678",
    email: "emeka.okonkwo@mail.com",
    vehicleNo: "LAG-234-KJ",
    vehicleType: "Toyota Hiace",
    status: "active",
    rating: 4.8,
    totalTrips: 342,
    walletBalance: 125000,
    joinDate: "2024-03-15",
    licenseNo: "LAG/2021/45678",
  },
  {
    id: "DRV-002",
    name: "Chidi Eze",
    phone: "+234 802 345 6789",
    email: "chidi.eze@mail.com",
    vehicleNo: "ABJ-567-MN",
    vehicleType: "Mercedes Sprinter",
    status: "active",
    rating: 4.9,
    totalTrips: 289,
    walletBalance: 98000,
    joinDate: "2024-01-20",
    licenseNo: "ABJ/2020/12345",
  },
  {
    id: "DRV-003",
    name: "Fatima Yusuf",
    phone: "+234 806 789 0123",
    email: "fatima.yusuf@mail.com",
    vehicleNo: "LAG-890-PQ",
    vehicleType: "Toyota Coaster",
    status: "active",
    rating: 4.7,
    totalTrips: 256,
    walletBalance: 156000,
    joinDate: "2024-02-10",
    licenseNo: "LAG/2021/78901",
  },
  {
    id: "DRV-004",
    name: "Yinka Adebayo",
    phone: "+234 808 901 2345",
    email: "yinka.adebayo@mail.com",
    vehicleNo: "KAN-123-RS",
    vehicleType: "Nissan Civilian",
    status: "active",
    rating: 4.6,
    totalTrips: 198,
    walletBalance: 87500,
    joinDate: "2024-05-01",
    licenseNo: "KAN/2022/34567",
  },
  {
    id: "DRV-005",
    name: "Blessing Nwankwo",
    phone: "+234 810 123 4567",
    email: "blessing.nwankwo@mail.com",
    vehicleNo: "PHC-456-TU",
    vehicleType: "Toyota Hiace",
    status: "inactive",
    rating: 4.5,
    totalTrips: 167,
    walletBalance: 45000,
    joinDate: "2024-06-15",
    licenseNo: "PHC/2021/56789",
  },
  {
    id: "DRV-006",
    name: "Musa Abdullahi",
    phone: "+234 812 345 6789",
    email: "musa.abdullahi@mail.com",
    vehicleNo: "ABJ-789-VW",
    vehicleType: "Mercedes Sprinter",
    status: "active",
    rating: 4.8,
    totalTrips: 312,
    walletBalance: 134000,
    joinDate: "2023-11-05",
    licenseNo: "ABJ/2020/67890",
  },
  {
    id: "DRV-007",
    name: "Kenneth Okafor",
    phone: "+234 814 567 8901",
    email: "kenneth.okafor@mail.com",
    vehicleNo: "LAG-012-XY",
    vehicleType: "Toyota Coaster",
    status: "suspended",
    rating: 3.9,
    totalTrips: 89,
    walletBalance: 23000,
    joinDate: "2025-08-20",
    licenseNo: "LAG/2022/89012",
  },
  {
    id: "DRV-008",
    name: "Grace Udo",
    phone: "+234 816 789 0123",
    email: "grace.udo@mail.com",
    vehicleNo: "ENU-345-ZA",
    vehicleType: "Nissan Civilian",
    status: "active",
    rating: 4.9,
    totalTrips: 401,
    walletBalance: 189000,
    joinDate: "2023-09-12",
    licenseNo: "ENU/2020/90123",
  },
];

export function DriversPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [walletDialogOpen, setWalletDialogOpen] = useState(false);
  const [tripHistoryDialogOpen, setTripHistoryDialogOpen] = useState(false);
  const [activeDriver, setActiveDriver] = useState(null);

  const filteredDrivers = allDrivers.filter((driver) => {
    const matchesSearch =
      driver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      driver.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      driver.vehicleNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      driver.phone.includes(searchQuery);

    const matchesStatus =
      statusFilter === "all" || driver.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-gray-100 text-gray-800";
      case "suspended":
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
          <h2 className="text-2xl font-semibold">Driver Management</h2>
          <p className="text-sm text-gray-600 mt-1">
            Manage drivers and their vehicles
          </p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <UserPlus className="w-4 h-4 mr-2" />
          Add New Driver
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4">
          <p className="text-sm text-gray-600">Active Drivers</p>
          <p className="text-2xl font-bold mt-1">
            {allDrivers.filter((d) => d.status === "active").length}
          </p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-600">Inactive Drivers</p>
          <p className="text-2xl font-bold mt-1">
            {allDrivers.filter((d) => d.status === "inactive").length}
          </p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-600">Suspended</p>
          <p className="text-2xl font-bold mt-1">
            {allDrivers.filter((d) => d.status === "suspended").length}
          </p>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search by name, ID, vehicle number, or phone..."
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
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Drivers Table */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Driver ID</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Phone</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Vehicle</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Rating</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Total Trips</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Wallet</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredDrivers.map((driver) => (
                <tr key={driver.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm font-medium">{driver.id}</td>
                  <td className="py-3 px-4 text-sm">{driver.name}</td>
                  <td className="py-3 px-4 text-sm">{driver.phone}</td>
                  <td className="py-3 px-4 text-sm">
                    <div>
                      <p className="font-medium">{driver.vehicleNo}</p>
                      <p className="text-xs text-gray-500">{driver.vehicleType}</p>
                    </div>
                  </td>

                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{driver.rating}</span>
                    </div>
                  </td>

                  <td className="py-3 px-4 text-sm">{driver.totalTrips}</td>

                  <td className="py-3 px-4 text-sm font-medium">
                    ₦{driver.walletBalance.toLocaleString()}
                  </td>

                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(
                        driver.status
                      )}`}
                    >
                      {driver.status}
                    </span>
                  </td>

                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm" onClick={() => setSelectedDriver(driver)}>
                        <Eye className="w-4 h-4" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setActiveDriver(driver);
                          setTripHistoryDialogOpen(true);
                        }}
                      >
                        <History className="w-4 h-4 text-blue-600" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setActiveDriver(driver);
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
      {activeDriver && (
        <WalletManagementDialog
          open={walletDialogOpen}
          onOpenChange={setWalletDialogOpen}
          userType="driver"
          userName={activeDriver.name}
          currentBalance={activeDriver.walletBalance}
          userId={activeDriver.id}
        />
      )}

      {/* Trip History Dialog */}
      {activeDriver && (
        <TripHistoryDialog
          open={tripHistoryDialogOpen}
          onOpenChange={setTripHistoryDialogOpen}
          userName={activeDriver.name}
          userType="driver"
          userId={activeDriver.id}
        />
      )}

      {/* Driver Details Dialog */}
      <Dialog open={!!selectedDriver} onOpenChange={() => setSelectedDriver(null)}>
        <DialogContent className="max-w-2xl bg-white">
          <DialogHeader>
            <DialogTitle>Driver Details - {selectedDriver?.id}</DialogTitle>
            <DialogDescription>
              View complete driver profile and performance metrics
            </DialogDescription>
          </DialogHeader>

          {selectedDriver && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl font-semibold">
                  {selectedDriver.name.charAt(0)}
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{selectedDriver.name}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{selectedDriver.rating}</span>
                    <span className="text-sm text-gray-500">
                      ({selectedDriver.totalTrips} trips)
                    </span>
                  </div>
                </div>

                <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusColor(selectedDriver.status)}`}>
                  {selectedDriver.status}
                </span>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3">Contact Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-medium">{selectedDriver.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium">{selectedDriver.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Car className="w-4 h-4" />
                  Vehicle Information
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Vehicle Number</p>
                    <p className="font-medium">{selectedDriver.vehicleNo}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600">Vehicle Type</p>
                    <p className="font-medium">{selectedDriver.vehicleType}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600">License Number</p>
                    <p className="font-medium">{selectedDriver.licenseNo}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600">Join Date</p>
                    <p className="font-medium">{selectedDriver.joinDate}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3">Performance & Wallet</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Total Trips</p>
                    <p className="text-2xl font-bold">{selectedDriver.totalTrips}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600">Wallet Balance</p>
                    <p className="text-2xl font-bold text-green-600">
                      ₦{selectedDriver.walletBalance.toLocaleString()}
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