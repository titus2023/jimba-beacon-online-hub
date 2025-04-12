
import React from "react";

const leadershipTeam = [
  {
    name: "Dr. Samuel Okafor",
    position: "Principal",
    bio: "Dr. Okafor has over 20 years of experience in education leadership. He holds a Ph.D. in Educational Administration from the University of Lagos and is committed to fostering academic excellence.",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWZyaWNhbiUyMG1hbiUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "Mrs. Aisha Mohammed",
    position: "Vice Principal, Academics",
    bio: "With a Master's in Curriculum Development, Mrs. Mohammed oversees the academic programs and ensures they meet national standards while preparing students for global opportunities.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "Mr. Daniel Chukwu",
    position: "Vice Principal, Administration",
    bio: "Mr. Chukwu manages the school's administrative functions, facilities, and support staff. He has extensive experience in educational management.",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFmcmljYW4lMjBtYW4lMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "Mrs. Grace Adeyemi",
    position: "Head of Counseling",
    bio: "A certified counseling psychologist, Mrs. Adeyemi provides guidance to students on academic choices and personal development.",
    image: "https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGFmcmljYW4lMjB3b21hbiUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
];

const boardMembers = [
  {
    name: "Chief Oluwasegun Adeleke",
    position: "Board Chairman",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFmcmljYW4lMjBtYW4lMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "Prof. Ngozi Eze",
    position: "Board Secretary",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGFmcmljYW4lMjB3b21hbiUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "Dr. Emmanuel Ibrahim",
    position: "Board Member",
    image: "https://images.unsplash.com/photo-1578496479531-32d94c571cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFmcmljYW4lMjBtYW4lMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "Mrs. Folake Johnson",
    position: "Board Member",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGFmcmljYW4lMjB3b21hbiUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "Mr. Hakeem Bello",
    position: "Board Member",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGFmcmljYW4lMjBtYW4lMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
  },
];

const Leadership = () => {
  return (
    <section className="section-padding bg-white" id="leadership">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-md mb-4">School Leadership</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our school is led by experienced educators and administrators who are committed to 
            providing the best possible education and environment for our students.
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-center mb-8">Administrative Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                {/* Leadership photos */}
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-lg mb-1">{leader.name}</h4>
                  <p className="text-school-primary text-sm mb-3">{leader.position}</p>
                  <p className="text-gray-600 text-sm">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-center mb-8">Board of Governors</h3>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {boardMembers.map((member, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-md shadow-sm">
                  {/* Board member avatars */}
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{member.name}</h4>
                    <p className="text-gray-500 text-sm">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
