
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { User, Leaf, Energy, Water, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Mock data for demonstration
const mockData = [
  { month: "Jan", co2: 45 },
  { month: "Feb", co2: 72 },
  { month: "Mar", co2: 89 },
  { month: "Apr", co2: 102 },
  { month: "May", co2: 130 },
  { month: "Jun", co2: 156 },
];

const ecoActions = [
  { action: "Used public transport", points: 50, category: "transport" },
  { action: "Switched to LED lights", points: 30, category: "energy" },
  { action: "Reduced water usage", points: 25, category: "water" },
  { action: "Composted waste", points: 40, category: "waste" },
];

const UserPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredActions = selectedCategory === "all" 
    ? ecoActions 
    : ecoActions.filter(action => action.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Profile Header */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/placeholder.svg" alt="User Profile" />
            <AvatarFallback>
              <User className="h-12 w-12" />
            </AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold gradient-text">EcoWarrior123</h1>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="container mx-auto px-4 py-8">
        <Card className="glass-morphism">
          <CardHeader>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold gradient-text">Recent Actions</h2>
              <div className="flex gap-2">
                <Button
                  variant={selectedCategory === "all" ? "default" : "ghost"}
                  onClick={() => setSelectedCategory("all")}
                  className="glow-effect"
                >
                  <Leaf className="mr-2 h-4 w-4" />
                  All
                </Button>
                <Button
                  variant={selectedCategory === "energy" ? "default" : "ghost"}
                  onClick={() => setSelectedCategory("energy")}
                  className="glow-effect"
                >
                  <Energy className="mr-2 h-4 w-4" />
                  Energy
                </Button>
                <Button
                  variant={selectedCategory === "water" ? "default" : "ghost"}
                  onClick={() => setSelectedCategory("water")}
                  className="glow-effect"
                >
                  <Droplet className="mr-2 h-4 w-4" />
                  Water
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredActions.map((action, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors"
                >
                  <span>{action.action}</span>
                  <Badge variant="secondary" className="glow-effect">
                    +{action.points} points
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Eco-Saver Stats */}
      <section className="container mx-auto px-4 py-8">
        <Card className="glass-morphism">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold gradient-text">Total CO₂ Saved</h2>
              <p className="text-4xl font-bold text-primary">156 kg</p>
              <div className="animate-fade-in bg-secondary/30 p-4 rounded-lg">
                <p className="text-lg">
                  🎉 You saved 3kg CO₂ today!
                </p>
              </div>
              <div className="animate-fade-in bg-secondary/30 p-4 rounded-lg mt-4">
                <p className="text-lg">
                  🌿 Monthly milestone reached: 100kg CO₂ saved!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Progress Graph */}
      <section className="container mx-auto px-4 py-8">
        <Card className="glass-morphism">
          <CardHeader>
            <h2 className="text-xl font-semibold gradient-text">CO₂ Savings Over Time</h2>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer
                className="w-full h-full"
                config={{
                  co2: {
                    label: "CO₂ Saved (kg)",
                    theme: {
                      light: "#10b981",
                      dark: "#10b981",
                    },
                  },
                }}
              >
                <LineChart data={mockData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip />
                  <Line
                    type="monotone"
                    dataKey="co2"
                    stroke="var(--color-co2)"
                    strokeWidth={2}
                    dot={{ fill: "var(--color-co2)" }}
                  />
                </LineChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer Quote */}
      <section className="container mx-auto px-4 py-8 text-center">
        <p className="text-lg font-medium gradient-text italic">
          "Small steps = Big change"
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <Button variant="outline" className="glow-effect">
            Share Profile
          </Button>
          <Button variant="outline" className="glow-effect">
            Download Eco-Card
          </Button>
        </div>
      </section>
    </div>
  );
};

export default UserPage;
