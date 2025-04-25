
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { BarChart2, Trophy, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Leaderboard = () => {
  const topUsers = [
    { rank: 1, name: "Alex Green", score: 2500, country: "USA" },
    { rank: 2, name: "Sarah Echo", score: 2200, country: "Canada" },
    { rank: 3, name: "Michael Earth", score: 2000, country: "UK" },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Global Green Leaderboard
          </h1>
          <p className="text-muted-foreground">Track your eco-score and climb to the top!</p>
        </div>

        {/* Top 3 Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {topUsers.map((user) => (
            <div key={user.rank} className={`p-6 rounded-lg border backdrop-blur-sm 
              ${user.rank === 1 ? 'bg-yellow-500/10 border-yellow-500/50' : 
                user.rank === 2 ? 'bg-gray-300/10 border-gray-300/50' : 
                'bg-orange-700/10 border-orange-700/50'}`}>
              <div className="flex items-center justify-between mb-4">
                <Trophy className={`w-8 h-8 
                  ${user.rank === 1 ? 'text-yellow-500' : 
                    user.rank === 2 ? 'text-gray-300' : 
                    'text-orange-700'}`} />
                <span className="text-2xl font-bold">{user.rank}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{user.name}</h3>
              <p className="text-muted-foreground">Score: {user.score}</p>
              <p className="text-sm text-muted-foreground">{user.country}</p>
            </div>
          ))}
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search users..."
              className="w-full pl-10 pr-4 py-2 rounded-md border bg-background"
            />
          </div>
          <Button variant="outline">
            <BarChart2 className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        {/* Leaderboard Table */}
        <div className="rounded-lg border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Country</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 4}</TableCell>
                  <TableCell>User {index + 4}</TableCell>
                  <TableCell>{2000 - (index * 100)}</TableCell>
                  <TableCell>Country {index + 4}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
