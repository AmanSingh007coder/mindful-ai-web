
import React, { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Award, Medal, Leaf, TreeDeciduous, Search } from 'lucide-react';
import LeaderboardCharts from "@/components/LeaderboardCharts";

// Mock data for leaderboard
const leaderboardData = [
  { rank: 1, username: "EcoWarrior", avatar: "/placeholder.svg", score: 2580, country: "Canada", badges: ["Energy Saver", "Zero Waste"] },
  { rank: 2, username: "GreenThumb", avatar: "/placeholder.svg", score: 2340, country: "USA", badges: ["Tree Planter", "Green Commuter"] },
  { rank: 3, username: "EarthGuardian", avatar: "/placeholder.svg", score: 2150, country: "Germany", badges: ["Energy Saver", "Recycling Master"] },
  { rank: 4, username: "PlanetProtector", avatar: "/placeholder.svg", score: 1950, country: "Japan", badges: ["Water Conserver", "Energy Saver"] },
  { rank: 5, username: "SustainableSage", avatar: "/placeholder.svg", score: 1820, country: "UK", badges: ["Green Commuter", "Low Carbon Diet"] },
  { rank: 6, username: "ClimateChampion", avatar: "/placeholder.svg", score: 1780, country: "France", badges: ["Recycling Master", "Energy Saver"] },
  { rank: 7, username: "EcoSavvy", avatar: "/placeholder.svg", score: 1650, country: "Australia", badges: ["Green Energy User", "Zero Waste"] },
  { rank: 8, username: "NatureNurturer", avatar: "/placeholder.svg", score: 1520, country: "Sweden", badges: ["Tree Planter", "Water Conserver"] },
  { rank: 9, username: "GreenInnovator", avatar: "/placeholder.svg", score: 1480, country: "Netherlands", badges: ["Green Commuter", "Energy Saver"] },
  { rank: 10, username: "EarthAlliance", avatar: "/placeholder.svg", score: 1350, country: "Brazil", badges: ["Recycling Master", "Tree Planter"] },
];

// Current user rank
const currentUser = { rank: 42, username: "YourUserName", score: 850, country: "India", badges: ["Energy Saver"] };

const Leaderboard = () => {
  const [timeFilter, setTimeFilter] = useState("all-time");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Top 3 users
  const topUsers = leaderboardData.slice(0, 3);
  
  // Filter handlers
  const handleTimeFilterChange = (value: string) => {
    setTimeFilter(value);
  };
  
  const handleCategoryFilterChange = (value: string) => {
    setCategoryFilter(value);
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Get badge color based on type
  const getBadgeColor = (badge: string) => {
    switch(badge) {
      case "Energy Saver":
        return "bg-yellow-500 text-black";
      case "Green Commuter":
        return "bg-green-500";
      case "Tree Planter":
        return "bg-emerald-600";
      case "Zero Waste":
        return "bg-purple-500";
      case "Recycling Master":
        return "bg-blue-500";
      case "Water Conserver":
        return "bg-cyan-500";
      case "Green Energy User":
        return "bg-teal-500";
      case "Low Carbon Diet":
        return "bg-lime-500";
      default:
        return "";
    }
  };

  // Get trophy icon based on rank
  const getTrophyIcon = (rank: number) => {
    switch(rank) {
      case 1:
        return <Award className="h-8 w-8 text-yellow-400" />; // Gold
      case 2:
        return <Award className="h-8 w-8 text-gray-400" />; // Silver
      case 3:
        return <Award className="h-8 w-8 text-amber-600" />; // Bronze
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Global Green Leaderboard</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Track your eco-score and climb to the top! Every sustainable action counts towards a greener future.</p>
        </div>
        
        {/* Top 3 Leaderboard Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {topUsers.map((user, index) => {
            const isFirst = index === 0;
            const isSecond = index === 1;
            const isThird = index === 2;
            
            return (
              <Card key={user.rank} className={`
                relative overflow-hidden 
                ${isFirst ? 'border-yellow-400 md:transform md:-translate-y-4' : ''}
                ${isSecond ? 'border-gray-400' : ''}
                ${isThird ? 'border-amber-600' : ''}
              `}>
                <div className="absolute top-0 right-0 p-2">
                  {getTrophyIcon(user.rank)}
                </div>
                <CardHeader className="text-center pb-0">
                  <div className="flex justify-center mb-4">
                    <Avatar className={`h-24 w-24 border-4 ${
                      isFirst ? 'border-yellow-400' : 
                      isSecond ? 'border-gray-400' : 
                      'border-amber-600'
                    }`}>
                      <AvatarImage src={user.avatar} alt={user.username} />
                      <AvatarFallback>{user.username.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-xl">{user.username}</CardTitle>
                  <CardDescription>{user.country}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold mb-2 text-primary">{user.score}</div>
                  <div className="text-sm text-muted-foreground">eco-points</div>
                  <div className="flex flex-wrap justify-center gap-1 mt-3">
                    {user.badges.map((badge, idx) => (
                      <Badge key={idx} variant="outline" className={getBadgeColor(badge)}>
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Filters & Search Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <Select value={timeFilter} onValueChange={handleTimeFilterChange}>
              <SelectTrigger>
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-time">All-Time</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select value={categoryFilter} onValueChange={handleCategoryFilterChange}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="energy-savers">Energy Savers</SelectItem>
                <SelectItem value="green-commuters">Green Commuters</SelectItem>
                <SelectItem value="tree-planters">Tree Planters</SelectItem>
                <SelectItem value="zero-waste">Zero Waste</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search users..." 
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-10"
            />
          </div>
        </div>
        
        {/* Full Leaderboard Table */}
        <div className="mb-10">
          <Card>
            <CardHeader>
              <CardTitle>Full Leaderboard</CardTitle>
              <CardDescription>See where you stand in the global eco-rankings</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16">Rank</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Eco-Score</TableHead>
                    <TableHead className="hidden md:table-cell">Location</TableHead>
                    <TableHead className="hidden md:table-cell">Badges</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leaderboardData.map((user) => (
                    <TableRow key={user.rank}>
                      <TableCell className="font-medium">{user.rank}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={user.avatar} alt={user.username} />
                            <AvatarFallback>{user.username.substring(0, 2).toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <span>{user.username}</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-semibold text-primary">{user.score}</TableCell>
                      <TableCell className="hidden md:table-cell">{user.country}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {user.badges.slice(0, 2).map((badge, idx) => (
                            <Badge key={idx} variant="outline" className={getBadgeColor(badge)}>
                              {badge}
                            </Badge>
                          ))}
                          {user.badges.length > 2 && <Badge variant="outline">+{user.badges.length - 2}</Badge>}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        
        {/* Your Rank Section */}
        <div className="mb-10">
          <Card className="border-primary/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Your Current Rank</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-secondary rounded-lg w-12 h-12 flex items-center justify-center">
                    <span className="font-bold">{currentUser.rank}</span>
                  </div>
                  <div>
                    <div className="font-medium">{currentUser.username}</div>
                    <div className="text-sm text-muted-foreground">{currentUser.country}</div>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{currentUser.score}</div>
                  <div className="text-sm text-muted-foreground text-right">eco-points</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t border-border pt-4">
              <div className="flex gap-1">
                {currentUser.badges.map((badge, idx) => (
                  <Badge key={idx} variant="outline" className={getBadgeColor(badge)}>
                    {badge}
                  </Badge>
                ))}
              </div>
              <Button size="sm" className="glow-effect">
                <TreeDeciduous className="h-4 w-4 mr-2" />
                Improve Rank
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* User Growth & Environmental Impact Graphs */}
        <div className="mb-10">
          <LeaderboardCharts />
        </div>
        
        {/* Footer Section with Eco-Tips */}
        <div className="text-center mb-10 mt-16">
          <h3 className="text-xl font-semibold mb-4 gradient-text">Eco Tips to Boost Your Score</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="bg-eco-600/10">
              <CardContent className="pt-6">
                <Leaf className="h-10 w-10 mb-4 mx-auto text-eco-400" />
                <h4 className="font-medium mb-2">Reduce Energy Consumption</h4>
                <p className="text-sm text-muted-foreground">Turn off appliances when not in use and switch to energy-efficient LED bulbs.</p>
              </CardContent>
            </Card>
            <Card className="bg-eco-600/10">
              <CardContent className="pt-6">
                <TreeDeciduous className="h-10 w-10 mb-4 mx-auto text-eco-400" />
                <h4 className="font-medium mb-2">Plant More Trees</h4>
                <p className="text-sm text-muted-foreground">Participate in community tree planting events or sponsor trees through our partners.</p>
              </CardContent>
            </Card>
            <Card className="bg-eco-600/10">
              <CardContent className="pt-6">
                <Medal className="h-10 w-10 mb-4 mx-auto text-eco-400" />
                <h4 className="font-medium mb-2">Join Eco Challenges</h4>
                <p className="text-sm text-muted-foreground">Participate in our weekly eco challenges to earn bonus points and special badges.</p>
              </CardContent>
            </Card>
          </div>
          <Button variant="secondary" className="glow-effect mt-6">
            Challenge Your Friends!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
