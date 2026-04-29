import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./Dialog";
import { MapPin, Calendar, DollarSign } from "lucide-react";

interface Trip {
  id: string;
  route: string;
  date: string;
  amount: number;
  status: string;
  distance?: string;
  duration?: string;
}

interface TripHistoryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userName: string;
  userType: "driver" | "client";
  userId: string;
}

// Mock trip data generator
const generateTripHistory = (): Trip[] => {
  const routes = [
    "Lagos → Abuja",
    "Abuja → Port Harcourt",
    "Lagos → Enugu",
    "Kano → Lagos",
    "Port Harcourt → Calabar",
    "Abuja → Kaduna",
    "Lagos → Ibadan",
    "Enugu → Onitsha",
  ];

  const statuses = [
    "completed",
    "completed",
    "completed",
    "completed",
    "cancelled",
  ];

  return Array.from({ length: 8 }, (_, i) => ({
    id: `TRP-${2400 - i}`,
    route: routes[i % routes.length],
    date: new Date(2026, 1, 8 - i).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    amount: Math.floor(Math.random() * 50000) + 15000,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    distance: `${Math.floor(Math.random() * 800) + 100} km`,
    duration: `${Math.floor(Math.random() * 8) + 2}h ${Math.floor(Math.random() * 60)}m`,
  }));
};

export function TripHistoryDialog({
  open,
  onOpenChange,
  userName,
  userType,
}: TripHistoryDialogProps) {
  const trips = generateTripHistory();

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

  const totalEarnings = trips
    .filter((trip) => trip.status === "completed")
    .reduce((sum, trip) => sum + trip.amount, 0);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-hidden flex flex-col bg-white">
        <DialogHeader>
          <DialogTitle>Trip History - {userName}</DialogTitle>
          <DialogDescription>
            View all trips for this {userType}
          </DialogDescription>
        </DialogHeader>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-4 py-4 border-b">
          <div className="text-center">
            <p className="text-sm text-gray-600">Total Trips</p>
            <p className="text-2xl font-bold">{trips.length}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Completed</p>
            <p className="text-2xl font-bold text-green-600">
              {trips.filter((t) => t.status === "completed").length}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Total Earnings</p>
            <p className="text-2xl font-bold text-green-600">
              ₦{totalEarnings.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Trips List */}
        <div className="flex-1 overflow-y-auto pr-2">
          <div className="space-y-3">
            {trips.map((trip) => (
              <div
                key={trip.id}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">{trip.id}</span>
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(
                          trip.status,
                        )}`}
                      >
                        {trip.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{trip.route}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">
                      ₦{trip.amount.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{trip.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{trip.distance}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-3 h-3" />
                    <span>{trip.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
