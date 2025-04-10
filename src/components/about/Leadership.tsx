
import React from "react";

const leadershipTeam = [
  {
    name: "Dr. Samuel Okafor",
    position: "Principal",
    bio: "Dr. Okafor has over 20 years of experience in education leadership. He holds a Ph.D. in Educational Administration from the University of Lagos and is committed to fostering academic excellence.",
  },
  {
    name: "Mrs. Aisha Mohammed",
    position: "Vice Principal, Academics",
    bio: "With a Master's in Curriculum Development, Mrs. Mohammed oversees the academic programs and ensures they meet national standards while preparing students for global opportunities.",
  },
  {
    name: "Mr. Daniel Chukwu",
    position: "Vice Principal, Administration",
    bio: "Mr. Chukwu manages the school's administrative functions, facilities, and support staff. He has extensive experience in educational management.",
  },
  {
    name: "Mrs. Grace Adeyemi",
    position: "Head of Counseling",
    bio: "A certified counseling psychologist, Mrs. Adeyemi provides guidance to students on academic choices and personal development.",
  },
];

const boardMembers = [
  {
    name: "Chief Oluwasegun Adeleke",
    position: "Board Chairman",
  },
  {
    name: "Prof. Ngozi Eze",
    position: "Board Secretary",
  },
  {
    name: "Dr. Emmanuel Ibrahim",
    position: "Board Member",
  },
  {
    name: "Mrs. Folake Johnson",
    position: "Board Member",
  },
  {
    name: "Mr. Hakeem Bello",
    position: "Board Member",
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
                {/* Placeholder for leadership photos */}
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-400">{leader.name.charAt(0)}</span>
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
                  {/* Placeholder for board member avatars */}
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                    <span className="text-lg font-bold text-gray-400">{member.name.charAt(0)}</span>
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
