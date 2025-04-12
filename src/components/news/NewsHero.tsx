
import React from "react";
import { CalendarDays, Bell } from "lucide-react";

const NewsHero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Bell className="h-6 w-6 text-school-primary" />
            <h1 className="heading-xl mb-0">News & Events</h1>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Stay updated with the latest news, announcements and upcoming events at Jimba Gede Secondary School.
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="flex items-center gap-1 px-4 py-2 bg-school-light text-school-primary rounded-full text-sm">
              <CalendarDays size={16} />
              <span>Academic Year 2025-2026</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsHero;
