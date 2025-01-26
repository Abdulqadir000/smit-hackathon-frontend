import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useState } from "react";
import AdminLayout from "./Layout";

const LoanAppointment = () => {
  // Sample loan data
  const [loans, setLoans] = useState([
    {
      id: 1,
      category: "Personal Loan",
      subcategory: "Medical",
      amount: 50000,
      guarantor: { name: "John Doe", contact: "john@example.com" },
      userInfo: { name: "Alice", email: "alice@example.com" },
    },
    {
      id: 2,
      category: "Business Loan",
      subcategory: "Startup",
      amount: 200000,
      guarantor: { name: "Jane Smith", contact: "jane@example.com" },
      userInfo: { name: "Bob", email: "bob@example.com" },
    },
  ]);

  // Sample appointment slots
  const [appointmentSlots, setAppointmentSlots] = useState([
    { id: 1, date: "2023-10-25", time: "10:00 AM", available: true },
    { id: 2, date: "2023-10-25", time: "11:00 AM", available: false },
    { id: 3, date: "2023-10-26", time: "02:00 PM", available: true },
  ]);

  // Function to schedule an appointment
  const scheduleAppointment = (slotId) => {
    setAppointmentSlots((prevSlots) =>
      prevSlots.map((slot) =>
        slot.id === slotId ? { ...slot, available: false } : slot
      )
    );
    alert("Appointment scheduled successfully!");
  };

  return (
    <AdminLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">
          Loan and Appointment Management
        </h1>

        {/* Loan Details Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Loan Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {loans.map((loan) => (
              <Card key={loan.id}>
                <CardHeader>
                  <CardTitle>{loan.category}</CardTitle>
                  <CardDescription>{loan.subcategory}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">Loan Amount: ₹{loan.amount}</p>
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">Guarantor:</p>
                    <p>{loan.guarantor.name}</p>
                    <p>{loan.guarantor.contact}</p>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">User Info:</p>
                    <p>{loan.userInfo.name}</p>
                    <p>{loan.userInfo.email}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Appointment Scheduling Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Appointment Scheduling</h2>
          <Table>
            <TableCaption>Available Appointment Slots</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointmentSlots.map((slot) => (
                <TableRow key={slot.id}>
                  <TableCell>{slot.date}</TableCell>
                  <TableCell>{slot.time}</TableCell>
                  <TableCell>
                    <Badge variant={slot.available ? "success" : "destructive"}>
                      {slot.available ? "Available" : "Booked"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {slot.available && (
                      <Button onClick={() => scheduleAppointment(slot.id)}>
                        Schedule
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default LoanAppointment;
