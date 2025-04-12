
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Staff data
const staffData = {
  administration: [
    {
      name: "Dr. Samuel Okafor",
      position: "Principal",
      department: "Administration",
      email: "samuel.okafor@jimbagede.edu",
      phone: "+234 801 234 5678",
      bio: "Dr. Okafor has over 20 years of experience in education leadership. He holds a Ph.D. in Educational Administration from the University of Lagos.",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWZyaWNhbiUyMG1hbiUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      name: "Mrs. Aisha Mohammed",
      position: "Vice Principal, Academics",
      department: "Administration",
      email: "aisha.mohammed@jimbagede.edu",
      phone: "+234 802 345 6789",
      bio: "With a Master's in Curriculum Development, Mrs. Mohammed oversees the academic programs and ensures they meet national standards.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    {
      name: "Mr. Daniel Chukwu",
      position: "Vice Principal, Administration",
      department: "Administration",
      email: "daniel.chukwu@jimbagede.edu",
      phone: "+234 803 456 7890",
      bio: "Mr. Chukwu manages the school's administrative functions, facilities, and support staff.",
      image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFmcmljYW4lMjBtYW4lMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    }
  ],
  academic: [
    {
      name: "Mrs. Elizabeth Adekunle",
      position: "Head of Mathematics",
      department: "Mathematics",
      email: "elizabeth.adekunle@jimbagede.edu",
      phone: "+234 804 567 8901",
      bio: "Mrs. Adekunle has been teaching mathematics for 15 years and holds a Master's degree in Mathematics Education.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFmcmljYW4lMjB3b21hbiUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      name: "Mr. Oluwafemi Johnson",
      position: "Head of Science",
      department: "Science",
      email: "femi.johnson@jimbagede.edu",
      phone: "+234 805 678 9012",
      bio: "Mr. Johnson specializes in Physics and Chemistry and has led many students to success in national science competitions.",
      image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGFmcmljYW4lMjBtYW4lMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      name: "Ms. Chioma Nwosu",
      position: "Head of Languages",
      department: "Languages",
      email: "chioma.nwosu@jimbagede.edu",
      phone: "+234 806 789 0123",
      bio: "Ms. Nwosu is fluent in English, French, and three Nigerian languages and leads our language department with innovation.",
      image: "https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGFmcmljYW4lMjB3b21hbiUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      name: "Mr. Ibrahim Bello",
      position: "Head of Social Sciences",
      department: "Social Sciences",
      email: "ibrahim.bello@jimbagede.edu",
      phone: "+234 807 890 1234",
      bio: "Mr. Bello brings history to life through interactive teaching methods and real-world connections.",
      image: "https://images.unsplash.com/photo-1578496479531-32d94c571cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFmcmljYW4lMjBtYW4lMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    }
  ],
  support: [
    {
      name: "Mrs. Grace Adeyemi",
      position: "Head of Counseling",
      department: "Student Services",
      email: "grace.adeyemi@jimbagede.edu",
      phone: "+234 808 901 2345",
      bio: "A certified counseling psychologist, Mrs. Adeyemi provides guidance to students on academic choices and personal development.",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGFmcmljYW4lMjB3b21hbiUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      name: "Mr. Emeka Nnamdi",
      position: "Head of ICT",
      department: "Technology",
      email: "emeka.nnamdi@jimbagede.edu",
      phone: "+234 809 012 3456",
      bio: "Mr. Nnamdi ensures our technology infrastructure supports both administrative functions and student learning needs.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFmcmljYW4lMjBtYW4lMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      name: "Mrs. Folake Johnson",
      position: "School Nurse",
      department: "Health Services",
      email: "folake.johnson@jimbagede.edu",
      phone: "+234 810 123 4567",
      bio: "Mrs. Johnson oversees all health-related matters, from routine checkups to emergency care and health education.",
      image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGFmcmljYW4lMjB3b21hbiUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    }
  ]
};

const StaffCategories = () => {
  const [activeTab, setActiveTab] = useState("administration");

  const renderStaffCards = (staffList) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {staffList.map((staff, index) => (
          <Card key={index} className="overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
            <div className="aspect-[3/2] overflow-hidden">
              <img 
                src={staff.image} 
                alt={staff.name} 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-lg">{staff.name}</h3>
                  <p className="text-school-primary text-sm">{staff.position}</p>
                </div>
                <Avatar className="h-10 w-10 border-2 border-school-primary">
                  <AvatarImage src={staff.image} alt={staff.name} />
                  <AvatarFallback>{staff.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </div>
              <p className="text-sm text-gray-500 mb-4">Department: {staff.department}</p>
              <p className="text-gray-600 text-sm mb-4">{staff.bio}</p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm"><span className="font-medium">Email:</span> {staff.email}</p>
                <p className="text-sm"><span className="font-medium">Phone:</span> {staff.phone}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="mb-12">
      <div className="mb-8">
        <h2 className="heading-md text-center mb-2">Meet Our Team</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center">
          Our school employs qualified professionals who are experts in their respective fields and 
          dedicated to providing the highest quality education to our students.
        </p>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-gray-100">
            <TabsTrigger value="administration">Administration</TabsTrigger>
            <TabsTrigger value="academic">Academic Staff</TabsTrigger>
            <TabsTrigger value="support">Support Staff</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="administration">
          {renderStaffCards(staffData.administration)}
        </TabsContent>
        
        <TabsContent value="academic">
          {renderStaffCards(staffData.academic)}
        </TabsContent>
        
        <TabsContent value="support">
          {renderStaffCards(staffData.support)}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StaffCategories;
