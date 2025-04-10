
import React from "react";

const History = () => {
  return (
    <section className="section-padding bg-white" id="history">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-md mb-6">Our History</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Founded in 1985, Jimba Gede Secondary School began as a small institution with just five classrooms and 120 students. 
                Under the visionary leadership of our founder, Dr. Elizabeth Adeyemi, the school was established with the mission to 
                provide quality education to the local community.
              </p>
              <p>
                Over the decades, we have grown tremendously, expanding our facilities, enhancing our academic programs, and building 
                a reputation for excellence. By 1995, our student population had grown to 500, and we had added new science laboratories 
                and a library.
              </p>
              <p>
                In 2005, we underwent a major renovation and expansion project, adding modern classrooms, computer laboratories, 
                and sports facilities. Today, Jimba Gede Secondary School stands as one of the leading educational institutions in 
                the region, with over 1,200 students and a track record of academic excellence and holistic development.
              </p>
              <p>
                Throughout our journey, we have remained committed to our founding principles: academic excellence, character development, 
                and community service. These principles continue to guide our approach to education as we prepare students to meet the 
                challenges of the 21st century.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            {/* Placeholder for historical images */}
            <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-lg">School History Timeline</span>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-16 text-center">
                    <span className="bg-school-primary text-white px-2 py-1 rounded text-sm">1985</span>
                  </div>
                  <p className="text-gray-700 flex-1">School founded with 5 classrooms</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-16 text-center">
                    <span className="bg-school-primary text-white px-2 py-1 rounded text-sm">1995</span>
                  </div>
                  <p className="text-gray-700 flex-1">Expansion to accommodate 500 students</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-16 text-center">
                    <span className="bg-school-primary text-white px-2 py-1 rounded text-sm">2005</span>
                  </div>
                  <p className="text-gray-700 flex-1">Major renovation and addition of modern facilities</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-16 text-center">
                    <span className="bg-school-primary text-white px-2 py-1 rounded text-sm">2015</span>
                  </div>
                  <p className="text-gray-700 flex-1">Achieved national recognition for academic excellence</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-16 text-center">
                    <span className="bg-school-primary text-white px-2 py-1 rounded text-sm">Today</span>
                  </div>
                  <p className="text-gray-700 flex-1">Leading institution with over 1,200 students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
