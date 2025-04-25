
import React from 'react';
import { BarChart2, Share2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UserPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <div className="flex items-center gap-6 mb-12">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-400 to-blue-500" />
          <h1 className="text-3xl font-bold">EcoWarrior123</h1>
        </div>

        {/* Impact Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 rounded-lg border backdrop-blur-sm bg-card">
            <h2 className="text-xl font-semibold mb-4">Recent Actions</h2>
            <div className="space-y-4">
              {[
                { action: "Used public transport", points: 50 },
                { action: "Reduced energy consumption", points: 30 },
                { action: "Recycled materials", points: 20 }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 rounded-md bg-muted/50">
                  <span>{item.action}</span>
                  <span className="text-green-400">+{item.points} points</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-lg border backdrop-blur-sm bg-card">
            <h2 className="text-xl font-semibold mb-4">Eco-Saver Stats</h2>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">150kg</div>
              <div className="text-muted-foreground">Total CO₂ Saved</div>
              <div className="mt-4 p-3 rounded-md bg-green-500/10 border border-green-500/20">
                🎉 You saved 3kg CO₂ today!
              </div>
            </div>
          </div>
        </div>

        {/* Eco Card */}
        <div className="mb-12">
          <div className="p-6 rounded-lg border backdrop-blur-sm bg-gradient-to-r from-green-400/10 to-blue-500/10 border-green-500/20">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">My Eco Journey 🌍</h3>
                <p className="text-muted-foreground">150kg CO₂ saved and counting!</p>
              </div>
              <div className="space-x-2">
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              "Making a difference, one eco-action at a time."
            </div>
          </div>
        </div>

        {/* Progress Graph */}
        <div className="p-6 rounded-lg border backdrop-blur-sm bg-card mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">CO₂ Savings Over Time</h2>
            <Button variant="outline" size="sm">
              <BarChart2 className="mr-2 h-4 w-4" />
              Monthly
            </Button>
          </div>
          <div className="h-64 bg-muted/20 rounded-md flex items-center justify-center">
            <span className="text-muted-foreground">Graph Placeholder</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
