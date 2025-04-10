
import { Button } from "@/components/ui/button";
import { BellRing, Calendar, ArrowRight } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "Mid-Term Exams Schedule",
    date: "April 15, 2025",
    description: "The mid-term examination schedule has been released. Please review the timetable for your class.",
    urgent: true,
  },
  {
    id: 2,
    title: "Annual Sports Festival",
    date: "April 22, 2025",
    description: "Join us for our annual inter-house sports competition. All parents are cordially invited.",
    urgent: false,
  },
  {
    id: 3,
    title: "Career Day Workshop",
    date: "May 5, 2025",
    description: "Professional speakers from various industries will be present to guide students on career paths.",
    urgent: false,
  }
];

const events = [
  {
    id: 1,
    title: "Parent-Teacher Meeting",
    date: "April 17, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "School Hall"
  },
  {
    id: 2,
    title: "Science Fair",
    date: "April 20, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Science Block"
  },
  {
    id: 3,
    title: "Cultural Day",
    date: "May 10, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "School Grounds"
  }
];

const Announcements = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Announcements */}
          <div className="md:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <BellRing className="h-5 w-5 text-school-primary" />
                <h2 className="heading-md">Latest Announcements</h2>
              </div>
              <Button variant="ghost" className="text-school-primary hover:text-school-secondary hover:bg-transparent p-0">
                View All
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-4">
              {announcements.map((item) => (
                <div key={item.id} className="card-school p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    {item.urgent && (
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Urgent
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm mb-3">{item.date}</p>
                  <p className="text-gray-700">{item.description}</p>
                  <div className="mt-4">
                    <a href="#" className="text-school-primary hover:text-school-secondary font-medium flex items-center">
                      Read more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Upcoming Events */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="h-5 w-5 text-school-primary" />
              <h2 className="heading-md">Upcoming Events</h2>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              {events.map((event, index) => (
                <div key={event.id} className={`${index !== 0 ? 'border-t border-gray-100 pt-4 mt-4' : ''}`}>
                  <h3 className="font-semibold">{event.title}</h3>
                  <div className="mt-2 space-y-1 text-sm">
                    <p className="text-gray-500">
                      <span className="font-medium text-gray-700">Date:</span> {event.date}
                    </p>
                    <p className="text-gray-500">
                      <span className="font-medium text-gray-700">Time:</span> {event.time}
                    </p>
                    <p className="text-gray-500">
                      <span className="font-medium text-gray-700">Location:</span> {event.location}
                    </p>
                  </div>
                </div>
              ))}
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Button className="w-full" variant="outline">
                  View Full Calendar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
