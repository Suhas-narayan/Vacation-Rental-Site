"use client";

import { useState, useEffect } from "react";
import { logout } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Home, 
  MapPin, 
  Calendar, 
  LogOut, 
  User, 
  CreditCard 
} from "lucide-react";

export default function Dashboard() {
  const router = useRouter();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Fetch user details - replace with your actual user fetching logic
    const fetchUserDetails = async () => {
      // Example: const user = await getCurrentUser();
      // setUserName(user.name);
      setUserName("John Doe"); // Placeholder
    };

    fetchUserDetails();
  }, []);

  const handleLogout = async () => {
    await logout();
    router.push("/signin");
  };

  const dashboardItems = [
    { 
      icon: <Home className="text-blue-500" size={24} />, 
      title: "My Properties", 
      description: "Manage your vacation rentals" 
    },
    { 
      icon: <MapPin className="text-green-500" size={24} />, 
      title: "Bookings", 
      description: "View and manage your bookings" 
    },
    { 
      icon: <Calendar className="text-purple-500" size={24} />, 
      title: "Calendar", 
      description: "Check availability and schedules" 
    },
    { 
      icon: <CreditCard className="text-orange-500" size={24} />, 
      title: "Payments", 
      description: "Financial overview" 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <User size={40} className="text-gray-600" />
            <div>
              <h1 className="text-2xl font-bold">Welcome, {userName}</h1>
              <p className="text-gray-500">Vacation Rental Dashboard</p>
            </div>
          </div>
          <Button 
            variant="destructive" 
            onClick={handleLogout}
            className="flex items-center space-x-2"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardItems.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                {item.icon}
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}