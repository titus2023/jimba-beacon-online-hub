
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const galleryItems = [
    { 
      type: 'image', 
      title: 'School Campus', 
      category: 'Facilities',
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Nob29sJTIwY2FtcHVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    { 
      type: 'image', 
      title: 'Science Fair', 
      category: 'Events',
      image: "https://images.unsplash.com/photo-1564979045531-fa386a275b27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjaWVuY2UlMjBmYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    { 
      type: 'image', 
      title: 'Sports Day', 
      category: 'Sports',
      image: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BvcnRzJTIwZGF5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    { 
      type: 'video', 
      title: 'Cultural Performance', 
      category: 'Arts',
      image: "https://images.unsplash.com/photo-1571536802807-30aa857635f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFuY2UlMjBwZXJmb3JtYW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    { 
      type: 'image', 
      title: 'Graduation Ceremony', 
      category: 'Events',
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZHVhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    { 
      type: 'image', 
      title: 'Library', 
      category: 'Facilities',
      image: "https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2Nob29sJTIwbGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="heading-md mb-2">Our School Gallery</h2>
            <p className="text-gray-600">Capturing moments and memories from our school community.</p>
          </div>
          <Button variant="outline" asChild className="self-start md:self-auto">
            <Link to="/gallery">View Full Gallery</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-100 cursor-pointer"
            >
              {/* Actual images for gallery */}
              <div className="absolute inset-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
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
