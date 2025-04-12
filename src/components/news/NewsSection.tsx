
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { ArrowRight, CalendarDays, Tag, Users, Award } from "lucide-react";

// Sample news data
const newsArticles = [
  {
    id: 1,
    title: "Students Excel in National Science Competition",
    excerpt: "Our students won top honors at the National Science Competition, showcasing their innovative projects and research.",
    date: "April 10, 2025",
    category: "Academic Achievement",
    image: "/placeholder.svg",
    featured: true,
    tag: "achievement"
  },
  {
    id: 2,
    title: "New Computer Lab Opening Ceremony",
    excerpt: "Jimba Gede is proud to announce the opening of our new state-of-the-art computer laboratory equipped with the latest technology.",
    date: "April 8, 2025",
    category: "Infrastructure",
    image: "/placeholder.svg",
    featured: true,
    tag: "announcement"
  },
  {
    id: 3,
    title: "Annual Inter-House Sports Competition Results",
    excerpt: "The annual inter-house sports competition concluded with Blue House taking the overall championship trophy.",
    date: "April 5, 2025",
    category: "Sports",
    image: "/placeholder.svg",
    featured: false,
    tag: "sports"
  },
  {
    id: 4,
    title: "Parent-Teacher Association Meeting Summary",
    excerpt: "The recent PTA meeting covered important topics including the upcoming curriculum changes and facility improvements.",
    date: "April 2, 2025",
    category: "Community",
    image: "/placeholder.svg",
    featured: false,
    tag: "community"
  },
  {
    id: 5,
    title: "Students Participate in Environmental Cleanup Drive",
    excerpt: "Our students participated in a community-wide environmental cleanup initiative, demonstrating their commitment to social responsibility.",
    date: "March 28, 2025",
    category: "Community Service",
    image: "/placeholder.svg",
    featured: false,
    tag: "community"
  },
  {
    id: 6,
    title: "School Choir Wins Regional Competition",
    excerpt: "The Jimba Gede School Choir impressed judges and won first place at the Regional Choral Competition.",
    date: "March 25, 2025",
    category: "Arts",
    image: "/placeholder.svg",
    featured: false,
    tag: "achievement"
  }
];

const NewsSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredNews = activeTab === "all" 
    ? newsArticles 
    : newsArticles.filter(article => article.tag === activeTab);

  const featuredNews = newsArticles.filter(article => article.featured);
  
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-custom">
        {/* Featured News */}
        <div className="mb-12">
          <h2 className="heading-lg mb-8">Featured News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredNews.map(article => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-100">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <CalendarDays size={14} />
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <Tag size={14} />
                    <span>{article.category}</span>
                  </div>
                  <CardTitle>{article.title}</CardTitle>
                  <CardDescription>{article.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="text-school-primary hover:text-school-secondary p-0">
                    Read more <ArrowRight size={16} className="ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        {/* News Tabs */}
        <div>
          <h2 className="heading-lg mb-6">Latest News</h2>
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="bg-gray-100 p-1 mb-6">
              <TabsTrigger value="all" className="data-[state=active]:bg-white">
                All News
              </TabsTrigger>
              <TabsTrigger value="announcement" className="data-[state=active]:bg-white">
                Announcements
              </TabsTrigger>
              <TabsTrigger value="achievement" className="data-[state=active]:bg-white">
                Achievements
              </TabsTrigger>
              <TabsTrigger value="community" className="data-[state=active]:bg-white">
                Community
              </TabsTrigger>
              <TabsTrigger value="sports" className="data-[state=active]:bg-white">
                Sports
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredNews.map(article => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-video bg-gray-100">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <CalendarDays size={12} />
                        <span>{article.date}</span>
                      </div>
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="ghost" className="text-school-primary hover:text-school-secondary p-0 text-sm">
                        Read more <ArrowRight size={14} className="ml-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="announcement" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredNews.map(article => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-video bg-gray-100">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <CalendarDays size={12} />
                        <span>{article.date}</span>
                      </div>
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="ghost" className="text-school-primary hover:text-school-secondary p-0 text-sm">
                        Read more <ArrowRight size={14} className="ml-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {/* Repeat similar content structure for other tabs */}
            <TabsContent value="achievement" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredNews.map(article => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-video bg-gray-100">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <CalendarDays size={12} />
                        <span>{article.date}</span>
                      </div>
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="ghost" className="text-school-primary hover:text-school-secondary p-0 text-sm">
                        Read more <ArrowRight size={14} className="ml-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="community" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredNews.map(article => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-video bg-gray-100">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <CalendarDays size={12} />
                        <span>{article.date}</span>
                      </div>
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="ghost" className="text-school-primary hover:text-school-secondary p-0 text-sm">
                        Read more <ArrowRight size={14} className="ml-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="sports" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredNews.map(article => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-video bg-gray-100">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <CalendarDays size={12} />
                        <span>{article.date}</span>
                      </div>
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="ghost" className="text-school-primary hover:text-school-secondary p-0 text-sm">
                        Read more <ArrowRight size={14} className="ml-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
