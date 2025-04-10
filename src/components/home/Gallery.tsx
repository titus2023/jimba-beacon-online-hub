
import { Button } from "@/components/ui/button";
import { Camera, Play } from "lucide-react";

const Gallery = () => {
  const galleryItems = [
    { type: 'image', title: 'School Campus', category: 'Facilities' },
    { type: 'image', title: 'Science Fair', category: 'Events' },
    { type: 'image', title: 'Sports Day', category: 'Sports' },
    { type: 'video', title: 'Cultural Performance', category: 'Arts' },
    { type: 'image', title: 'Graduation Ceremony', category: 'Events' },
    { type: 'image', title: 'Library', category: 'Facilities' },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="heading-md mb-2">Our School Gallery</h2>
            <p className="text-gray-600">Capturing moments and memories from our school community.</p>
          </div>
          <Button variant="outline" className="self-start md:self-auto">
            View Full Gallery
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-100 cursor-pointer"
            >
              {/* Placeholder for gallery images/videos */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                {item.type === 'video' ? (
                  <Play className="h-12 w-12 text-gray-400" />
                ) : (
                  <Camera className="h-12 w-12 text-gray-400" />
                )}
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-sm font-medium text-school-secondary">{item.category}</span>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
