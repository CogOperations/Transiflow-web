import { Button } from "@/components/admin/ui/Button";
import { Card } from "@/components/admin/ui/Card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/admin/ui/Dialog";
import { Input } from "@/components/admin/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/admin/ui/Select";
import {
  Calendar,
  Download,
  Eye,
  Filter,
  MapPin,
  Search
} from "lucide-react";
import { useState } from "react";

const allTrips = [
  {
    id: "TRP-2408",
    route: "Lagos → Abuja",
    driver: {
      name: "Emeka Okonkwo",
      phone: "+234 801 234 5678",
      vehicleNo: "LAG-234-KJ",
    },
    client: { name: "Aisha Mohammed", phone: "+234 803 456 7890" },
    status: "completed",
    amount: 45000,
    date: "2026-02-07",
    time: "08:30 AM",
    duration: "8h 45m",
    distance: "762 km",
    paymentMethod: "Wallet",
  },
  {
    id: "TRP-2407",
    route: "Abuja → Port Harcourt",
    driver: {
      name: "Chidi Eze",
      phone: "+234 802 345 6789",
      vehicleNo: "ABJ-567-MN",
    },
    client: { name: "Tunde Adeyemi", phone: "+234 805 678 9012" },
    status: "in-progress",
    amount: 52000,
    date: "2026-02-08",
    time: "09:00 AM",
    duration: "In transit",
    distance: "645 km",
    paymentMethod: "Card",
  },
  {
    id: "TRP-2406",
    route: "Lagos → Enugu",
    driver: {
      name: "Fatima Yusuf",
      phone: "+234 806 789 0123",
      vehicleNo: "LAG-890-PQ",
    },
    client: { name: "Ngozi Okeke", phone: "+234 807 890 1234" },
    status: "completed",
    amount: 38000,
    date: "2026-02-06",
    time: "07:00 AM",
    duration: "7h 20m",
    distance: "589 km",
    paymentMethod: "Wallet",
  },
  {
    id: "TRP-2405",
    route: "Kano → Lagos",
    driver: {
      name: "Yinka Adebayo",
      phone: "+234 808 901 2345",
      vehicleNo: "KAN-123-RS",
    },
    client: { name: "Ibrahim Musa", phone: "+234 809 012 3456" },
    status: "completed",
    amount: 65000,
    date: "2026-02-05",
    time: "06:00 AM",
    duration: "10h 15m",
    distance: "998 km",
    paymentMethod: "Cash",
  },
  {
    id: "TRP-2404",
    route: "Port Harcourt → Calabar",
    driver: {
      name: "Blessing Nwankwo",
      phone: "+234 810 123 4567",
      vehicleNo: "PHC-456-TU",
    },
    client: { name: "Oladele Johnson", phone: "+234 811 234 5678" },
    status: "cancelled",
    amount: 28000,
    date: "2026-02-04",
    time: "10:30 AM",
    duration: "-",
    distance: "215 km",
    paymentMethod: "Wallet",
  },
  {
    id: "TRP-2403",
    route: "Abuja → Kaduna",
    driver: {
      name: "Musa Abdullahi",
      phone: "+234 812 345 6789",
      vehicleNo: "ABJ-789-VW",
    },
    client: { name: "Sarah Bello", phone: "+234 813 456 7890" },
    status: "completed",
    amount: 18000,
    date: "2026-02-03",
    time: "02:00 PM",
    duration: "2h 30m",
    distance: "187 km",
    paymentMethod: "Card",
  },
  {
    id: "TRP-2402",
    route: "Lagos → Ibadan",
    driver: {
      name: "Kenneth Okafor",
      phone: "+234 814 567 8901",
      vehicleNo: "LAG-012-XY",
    },
    client: { name: "Chioma Eze", phone: "+234 815 678 9012" },
    status: "completed",
    amount: 12000,
    date: "2026-02-02",
    time: "11:00 AM",
    duration: "1h 45m",
    distance: "128 km",
    paymentMethod: "Wallet",
  },
  {
    id: "TRP-2401",
    route: "Enugu → Onitsha",
    driver: {
      name: "Grace Udo",
      phone: "+234 816 789 0123",
      vehicleNo: "ENU-345-ZA",
    },
    client: { name: "Ahmed Hassan", phone: "+234 817 890 1234" },
    status: "completed",
    amount: 15000,
    date: "2026-02-01",
    time: "08:00 AM",
    duration: "1h 50m",
    distance: "102 km",
    paymentMethod: "Cash",
  },
];

export function TripsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedTrip, setSelectedTrip] = useState<(typeof allTrips)[0] | null>(
    null,
  );

  const filteredTrips = allTrips.filter((trip) => {
    const matchesSearch =
      trip.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trip.route.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trip.driver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trip.client.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || trip.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "in-progress":
        return "In Progress";
      case "completed":
        return "Completed";
      case "cancelled":
        return "Cancelled";
      default:
        return status;
    }
  };

  return (
    <div className="space-y-6 container mx-auto px-4 py-6 overflow-y-scroll">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Trip Management</h2>
          <p className="text-sm text-gray-600 mt-1">
            View and manage all trips
          </p>
        </div>
        <Button className="bg-primary hover:bg-green-700 text-white">
          <Download className="w-4 h-4 mr-2" />
          Export Trips
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search by trip ID, route, driver, or client..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-45">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Trips Table */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                  Trip ID
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                  Route
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                  Driver
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                  Client
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                  Date
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                  Amount
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredTrips.map((trip) => (
                <tr
                  key={trip.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-3 px-4 text-sm font-medium">{trip.id}</td>
                  <td className="py-3 px-4 text-sm">{trip.route}</td>
                  <td className="py-3 px-4 text-sm">{trip.driver.name}</td>
                  <td className="py-3 px-4 text-sm">{trip.client.name}</td>
                  <td className="py-3 px-4 text-sm">{trip.date}</td>
                  <td className="py-3 px-4 text-sm font-medium">
                    ₦{trip.amount.toLocaleString()}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        trip.status,
                      )}`}
                    >
                      {getStatusLabel(trip.status)}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedTrip(trip)}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Trip Details Dialog */}
      <Dialog open={!!selectedTrip} onOpenChange={() => setSelectedTrip(null)}>
        <DialogContent className="max-w-2xl bg-white">
          <DialogHeader>
            <DialogTitle>Trip Details - {selectedTrip?.id}</DialogTitle>
          </DialogHeader>
          {selectedTrip && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Status</p>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      selectedTrip.status,
                    )}`}
                  >
                    {getStatusLabel(selectedTrip.status)}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Amount</p>
                  <p className="text-lg font-semibold">
                    ₦{selectedTrip.amount.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Route Details
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Route</p>
                    <p className="font-medium">{selectedTrip.route}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Distance</p>
                    <p className="font-medium">{selectedTrip.distance}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-medium">{selectedTrip.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Payment Method</p>
                    <p className="font-medium">{selectedTrip.paymentMethod}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Time Details
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="font-medium">{selectedTrip.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Time</p>
                    <p className="font-medium">{selectedTrip.time}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3">Driver Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Name</p>
                    <p className="font-medium">{selectedTrip.driver.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-medium">{selectedTrip.driver.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Vehicle Number</p>
                    <p className="font-medium">
                      {selectedTrip.driver.vehicleNo}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3">Client Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Name</p>
                    <p className="font-medium">{selectedTrip.client.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-medium">{selectedTrip.client.phone}</p>
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
