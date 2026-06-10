import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./Dialog";

import { Button } from "./Button";
import { Input } from "./Input";
import { Label } from "./Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Select";

import { Wallet, Plus, Minus, TrendingUp, TrendingDown } from "lucide-react";
import { toast } from "sonner";

export function WalletManagementDialog({
  open,
  onOpenChange,
  userType,
  userName,
  currentBalance,
}) {
  const [transactionType, setTransactionType] = useState("credit");
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");

  const handleTransaction = () => {
    if (!amount || parseFloat(amount) <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    const transactionAmount = parseFloat(amount);
    const action = transactionType === "credit" ? "credited" : "debited";

    toast.success(
      `₦${transactionAmount.toLocaleString()} ${action} to ${userName}'s wallet successfully`
    );

    setAmount("");
    setReason("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-white">
        <DialogHeader>
          <DialogTitle>Manage Wallet - {userName}</DialogTitle>
          <DialogDescription>
            Add or deduct funds from{" "}
            {userType === "driver" ? "driver's" : "client's"} wallet
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Current Balance */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wallet className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-600">Current Balance</span>
              </div>
              <span className="text-2xl font-bold text-green-600">
                ₦{currentBalance.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Transaction Type */}
          <div className="space-y-2">
            <Label>Transaction Type</Label>
            <Select
              value={transactionType}
              onValueChange={(value) => setTransactionType(value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="credit">
                  <div className="flex items-center gap-2">
                    <Plus className="w-4 h-4 text-green-600" />
                    <span>Credit (Add Money)</span>
                  </div>
                </SelectItem>

                <SelectItem value="debit">
                  <div className="flex items-center gap-2">
                    <Minus className="w-4 h-4 text-red-600" />
                    <span>Debit (Deduct Money)</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Amount */}
          <div className="space-y-2">
            <Label>Amount (₦)</Label>
            <Input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="0"
              step="1000"
            />
          </div>

          {/* Reason */}
          <div className="space-y-2">
            <Label>Reason (Optional)</Label>
            <Input
              placeholder="E.g., Bonus, Refund, Penalty, etc."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>

          {/* Preview */}
          {amount && parseFloat(amount) > 0 && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">New Balance</span>
                <div className="flex items-center gap-2">
                  {transactionType === "credit" ? (
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-600" />
                  )}

                  <span className="text-lg font-semibold">
                    ₦
                    {(
                      transactionType === "credit"
                        ? currentBalance + parseFloat(amount)
                        : currentBalance - parseFloat(amount)
                    ).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button
              className={`flex-1 ${
                transactionType === "credit"
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-red-600 hover:bg-red-700"
              }`}
              onClick={handleTransaction}
            >
              {transactionType === "credit"
                ? "Credit Wallet"
                : "Debit Wallet"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}