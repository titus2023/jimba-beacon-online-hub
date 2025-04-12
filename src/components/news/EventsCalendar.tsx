
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarClock, MapPin, Clock, Users } from "lucide-react";

const EventsCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Sample events data
  const events = [
    {
      id: 1,
      title: "Parent-Teacher Conference",
      date: new Date(2025, 3, 17), // April 17, 2025
      time: "2:00 PM - 5:00 PM",
      location: "School Main Hall",
      description: "Discuss student progress and address any concerns with teachers.",
      attendees: "Parents and Teachers"
    },
    {
      id: 2,
      title: "Annual Science Fair",
      date: new Date(2025, 3, 25), // April 25, 2025
      time: "10:00 AM - 3:00 PM",
      location: "Science Block",
      description: "Students showcase their innovative science projects.",
      attendees: "Students, Teachers, Parents"
    },
    {
      id: 3,
      title: "Career Guidance Workshop",
      date: new Date(2025, 4, 5), // May 5, 2025
      time: "11:00 AM - 1:00 PM",
      location: "Auditorium",
      description: "Professional career counselors will guide students on future career paths.",
      attendees: "Senior Students"
    }
  ];
  
  // Filter events for the selected date
  const selectedDateEvents = events.filter(event => 
    date && 
    event.date.getDate() === date.getDate() && 
    event.date.getMonth() === date.getMonth() && 
    event.date.getFullYear() === date.getFullYear()
  );

  // Find dates with events for highlighting
  const eventDates = events.map(event => event.date);
  
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-10">Upcoming Events</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarClock className="h-5 w-5 text-school-primary" />
                  <span>School Calendar</span>
                </CardTitle>
                <CardDescription>Select a date to view events</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border shadow-sm"
                />
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>
                  {date ? (
                    <>Events for {date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</>
                  ) : (
                    <>Select a date</>
                  )}
                </CardTitle>
                <CardDescription>
                  {selectedDateEvents.length > 0 
                    ? `${selectedDateEvents.length} events scheduled` 
                    : 'No events scheduled for this date'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedDateEvents.length > 0 ? (
                  <div className="space-y-6">
                    {selectedDateEvents.map(event => (
                      <div key={event.id} className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="flex items-center gap-2 text-sm">
                            <Clock size={16} className="text-school-primary" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin size={16} className="text-school-primary" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Users size={16} className="text-school-primary" />
                            <span>{event.attendees}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No events found for the selected date.</p>
                    <p className="text-sm text-gray-400 mt-2">Try selecting a different date.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;
