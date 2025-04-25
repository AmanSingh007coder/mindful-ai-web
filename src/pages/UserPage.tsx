
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Zap, Droplet, Trash2, Share2, Download, Award, BarChart3 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Navbar from "@/components/Navbar";
import { toast } from "@/components/ui/sonner";

const data = [
  { name: 'Jan', co2: 40 },
  { name: 'Feb', co2: 30 },
  { name: 'Mar', co2: 50 },
  { name: 'Apr', co2: 35 },
  { name: 'May', co2: 65 },
  { name: 'Jun', co2: 45 },
  { name: 'Jul', co2: 55 },
];

const yearlyData = [
  { name: '2023 Q1', co2: 120 },
  { name: '2023 Q2', co2: 145 },
  { name: '2023 Q3', co2: 135 },
  { name: '2023 Q4', co2: 190 },
  { name: '2024 Q1', co2: 210 },
  { name: '2024 Q2', co2: 250 },
];

const UserPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [graphView, setGraphView] = useState("monthly");

  const userActions = [
    { id: 1, action: "Used public transport", points: 50, category: "energy" },
    { id: 2, action: "Recycled plastic waste", points: 20, category: "waste" },
    { id: 3, action: "Used reusable water bottle", points: 15, category: "water" },
    { id: 4, action: "Reduced heating by 2°C", points: 30, category: "energy" },
    { id: 5, action: "Composted food waste", points: 25, category: "waste" },
    { id: 6, action: "Installed low-flow showerhead", points: 40, category: "water" },
  ];

  const filteredActions = activeFilter === "all" 
    ? userActions 
    : userActions.filter(action => action.category === activeFilter);

  const handleShare = () => {
    toast.success("Eco-card shared successfully!");
  };

  const handleDownload = () => {
    toast.success("Eco-card downloaded successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-emerald-100 dark:from-gray-900 dark:to-emerald-950">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-20 pb-10">
        {/* Profile Header */}
        <div className="flex items-center justify-center mb-8">
          <div className="text-center">
            <Avatar className="h-24 w-24 mx-auto mb-4 ring-4 ring-green-400 dark:ring-emerald-500">
              <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300">Jane Doe</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="md:col-span-1 space-y-6">
            {/* Impact Summary */}
            <Card className="border-green-200 dark:border-green-800 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 text-emerald-500" />
                  <span>Impact Summary</span>
                </CardTitle>
                <CardDescription>Your recent eco-friendly actions</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid grid-cols-4 mb-4">
                    <TabsTrigger value="all" onClick={() => setActiveFilter("all")}>All</TabsTrigger>
                    <TabsTrigger value="energy" onClick={() => setActiveFilter("energy")}>
                      <Zap size={14} className="mr-1" /> Energy
                    </TabsTrigger>
                    <TabsTrigger value="water" onClick={() => setActiveFilter("water")}>
                      <Droplet size={14} className="mr-1" /> Water
                    </TabsTrigger>
                    <TabsTrigger value="waste" onClick={() => setActiveFilter("waste")}>
                      <Trash2 size={14} className="mr-1" /> Waste
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all" className="space-y-4">
                    {filteredActions.map((action) => (
                      <div key={action.id} className="flex justify-between items-center p-3 rounded-lg bg-green-50 dark:bg-emerald-950/30">
                        <span>{action.action}</span>
                        <Badge variant="outline" className="bg-green-100 text-green-700 dark:bg-emerald-900 dark:text-emerald-200">
                          +{action.points} points
                        </Badge>
                      </div>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="energy" className="space-y-4">
                    {filteredActions.map((action) => (
                      <div key={action.id} className="flex justify-between items-center p-3 rounded-lg bg-green-50 dark:bg-emerald-950/30">
                        <span>{action.action}</span>
                        <Badge variant="outline" className="bg-green-100 text-green-700 dark:bg-emerald-900 dark:text-emerald-200">
                          +{action.points} points
                        </Badge>
                      </div>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="water" className="space-y-4">
                    {filteredActions.map((action) => (
                      <div key={action.id} className="flex justify-between items-center p-3 rounded-lg bg-green-50 dark:bg-emerald-950/30">
                        <span>{action.action}</span>
                        <Badge variant="outline" className="bg-green-100 text-green-700 dark:bg-emerald-900 dark:text-emerald-200">
                          +{action.points} points
                        </Badge>
                      </div>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="waste" className="space-y-4">
                    {filteredActions.map((action) => (
                      <div key={action.id} className="flex justify-between items-center p-3 rounded-lg bg-green-50 dark:bg-emerald-950/30">
                        <span>{action.action}</span>
                        <Badge variant="outline" className="bg-green-100 text-green-700 dark:bg-emerald-900 dark:text-emerald-200">
                          +{action.points} points
                        </Badge>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Eco-Saver Stats Panel */}
            <Card className="border-green-200 dark:border-green-800 shadow-md overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-700 dark:to-emerald-800 text-white">
                <CardTitle className="flex items-center">
                  <Zap className="mr-2" />
                  <span>Eco-Saver Stats</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <h3 className="text-4xl font-bold text-green-600 dark:text-green-400">243 kg</h3>
                  <p className="text-gray-500 dark:text-gray-400">Total CO₂ Saved</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Monthly Goal: 100kg</span>
                    <span>78%</span>
                  </div>
                  <Progress value={78} className="h-2 bg-gray-200 dark:bg-gray-700" />
                </div>
                
                <div className="rounded-lg p-4 bg-green-100 dark:bg-emerald-900/40 border border-green-200 dark:border-emerald-800 mb-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-green-500 dark:bg-green-600 h-8 w-8 rounded-full flex items-center justify-center text-white">
                      🎉
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-green-800 dark:text-green-200">You saved 3kg CO₂ today!</p>
                      <p className="text-sm text-green-600 dark:text-green-300">Keep up the good work</p>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg p-4 bg-emerald-100 dark:bg-emerald-900/40 border border-emerald-200 dark:border-emerald-800">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-emerald-500 dark:bg-emerald-600 h-8 w-8 rounded-full flex items-center justify-center text-white">
                      🌿
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-emerald-800 dark:text-emerald-200">Monthly milestone reached: 78kg CO₂ saved!</p>
                      <p className="text-sm text-emerald-600 dark:text-emerald-300">22kg to go for your goal</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-6">
            {/* Eco-Card */}
            <Card className="border-green-200 dark:border-green-800 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 dark:from-green-600 dark:to-emerald-700 p-6 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Jane Doe</h2>
                    <p className="text-green-100 dark:text-green-200 mb-4 italic">"On my green journey 🌍"</p>
                    
                    <div className="flex items-center space-x-2">
                      <Award className="text-yellow-300" size={24} />
                      <span className="text-xl font-semibold">243 kg CO₂ saved</span>
                    </div>
                    
                    <div className="mt-3">
                      <Badge className="bg-white/20 backdrop-blur-sm text-white border-none">Top 10% Eco-Saver</Badge>
                    </div>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://example.com/jane" alt="QR Code" className="w-20 h-20" />
                  </div>
                </div>
              </div>
              
              <CardFooter className="bg-white dark:bg-gray-800 p-4 flex justify-between">
                <Button variant="outline" onClick={handleShare} className="flex items-center">
                  <Share2 className="mr-2 h-4 w-4" /> Share
                </Button>
                <Button onClick={handleDownload} className="flex items-center bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800">
                  <Download className="mr-2 h-4 w-4" /> Download Card
                </Button>
              </CardFooter>
            </Card>
            
            {/* Progress Graph */}
            <Card className="border-green-200 dark:border-green-800 shadow-md">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>CO₂ Savings Progress</CardTitle>
                  <div className="flex space-x-2">
                    <Button 
                      variant={graphView === "monthly" ? "default" : "outline"} 
                      size="sm"
                      onClick={() => setGraphView("monthly")}
                      className={graphView === "monthly" ? "bg-green-600 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800" : ""}
                    >
                      Monthly
                    </Button>
                    <Button 
                      variant={graphView === "yearly" ? "default" : "outline"} 
                      size="sm"
                      onClick={() => setGraphView("yearly")}
                      className={graphView === "yearly" ? "bg-green-600 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800" : ""}
                    >
                      Yearly
                    </Button>
                  </div>
                </div>
                <CardDescription>Track your carbon footprint reduction over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={graphView === "monthly" ? data : yearlyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
                      <XAxis dataKey="name" stroke="#6b7280" />
                      <YAxis stroke="#6b7280" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                          borderRadius: '0.5rem',
                          border: '1px solid #e2e8f0'
                        }} 
                        formatter={(value) => [`${value} kg`, 'CO₂ Saved']}
                        labelFormatter={(name) => `${name}`}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="co2" 
                        stroke="#10b981" 
                        strokeWidth={3}
                        dot={{ stroke: '#047857', strokeWidth: 2, r: 4, fill: '#10b981' }}
                        activeDot={{ r: 6, stroke: '#047857', strokeWidth: 2, fill: '#10b981' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-10 text-center">
          <Separator className="mb-6" />
          <p className="text-xl font-medium italic mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-500 dark:from-green-400 dark:to-teal-300">
            "Small steps = Big change"
          </p>
          
          <div className="flex justify-center space-x-4 pt-2">
            <Button variant="outline" size="icon" onClick={() => toast.success("Shared on Twitter!")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
              </svg>
            </Button>
            <Button variant="outline" size="icon" onClick={() => toast.success("Shared on Instagram!")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
              </svg>
            </Button>
            <Button variant="outline" size="icon" onClick={() => toast.success("Shared on Facebook!")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserPage;
