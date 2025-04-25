
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Avatar1 from "@/components/ui/avatar1.jpg"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, Droplet, Trash2, Share2, Download, QrCode } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for the chart
const mockData = [
  { month: 'Jan', co2: 30 },
  { month: 'Feb', co2: 45 },
  { month: 'Mar', co2: 35 },
  { month: 'Apr', co2: 60 },
  { month: 'May', co2: 48 },
  { month: 'Jun', co2: 75 },
];

const UserPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-20 pb-12">
        {/* Profile Header */}
        <div className="mb-12 text-center">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <img
              src={Avatar1}
              alt="Profile"
              className="rounded-full border-4 border-eco-400/30"
            />
          </div>
          <h1 className="text-2xl font-bold gradient-text mb-2">EcoWarrior</h1>
        </div>

        {/* Impact Summary Section */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-400" />
                Energy Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-400">-250 kWh</p>
              <p className="text-sm text-muted-foreground">Saved this month</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Droplet className="h-5 w-5 text-blue-400" />
                Water Savings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-400">1,200 L</p>
              <p className="text-sm text-muted-foreground">Conserved this month</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Trash2 className="h-5 w-5 text-purple-400" />
                Waste Reduced
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-purple-400">45 kg</p>
              <p className="text-sm text-muted-foreground">Less waste generated</p>
            </CardContent>
          </Card>
        </div>

        {/* Eco-Saver Stats */}
        <Card className="mb-12 bg-gradient-to-br from-eco-900/50 to-eco-800/30 backdrop-blur border-eco-700">
          <CardHeader>
            <CardTitle>Total Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gradient mb-2">365 kg CO₂</h3>
              <p className="text-eco-400">Total Carbon Emissions Saved</p>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="bg-green-500/10 text-green-400">
                  🎉 3kg CO₂ saved today!
                </Badge>
                <Badge variant="outline" className="bg-eco-500/10 text-eco-400">
                  🌿 Monthly milestone reached!
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Eco Card */}
        <Card className="mb-12 bg-gradient-to-br from-eco-800/50 to-eco-900/30 backdrop-blur">
          <CardHeader>
            <CardTitle>Share Your Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-6 border border-eco-700/50 rounded-lg bg-eco-900/50 backdrop-blur">
              <h3 className="text-2xl font-bold text-gradient mb-4">EcoWarrior's Green Journey 🌍</h3>
              <p className="text-xl mb-4">365 kg CO₂ Saved</p>
              <p className="text-eco-400 italic">"On my way to a greener future!"</p>
              <div className="mt-6 flex gap-4 justify-center">
                <Button variant="outline" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
                <Button variant="outline" className="gap-2">
                  <QrCode className="h-4 w-4" />
                  QR Code
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress Graph */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>CO₂ Savings Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="monthly" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
              </TabsList>
              <TabsContent value="monthly" className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockData}>
                    <XAxis dataKey="month" stroke="#888888" />
                    <YAxis stroke="#888888" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="co2"
                      stroke="#34ca8e"
                      strokeWidth={2}
                      dot={{ fill: "#34ca8e" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>
              <TabsContent value="yearly" className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockData}>
                    <XAxis dataKey="month" stroke="#888888" />
                    <YAxis stroke="#888888" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="co2"
                      stroke="#34ca8e"
                      strokeWidth={2}
                      dot={{ fill: "#34ca8e" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Footer Quote */}
        <div className="text-center">
          <p className="text-lg font-medium text-eco-400 mb-4">
            "Small steps = Big change"
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="sm">
              Twitter
            </Button>
            <Button variant="ghost" size="sm">
              LinkedIn
            </Button>
            <Button variant="ghost" size="sm">
              Facebook
            </Button>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default UserPage;
