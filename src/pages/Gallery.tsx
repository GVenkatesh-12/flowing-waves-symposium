
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Image, ImageIcon } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle 
} from "@/components/ui/dialog";

const PhotoGallery = () => {
  const [openImage, setOpenImage] = useState<null | {src: string, alt: string, caption: string}>(null);

  // Sample gallery images for 2020
  const gallery2020 = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      alt: "Conference collaboration session 2020",
      caption: "Panel discussion on sustainable energy"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
      alt: "Research exhibition 2020",
      caption: "Research poster presentations"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", 
      alt: "Technical workshop 2020",
      caption: "Hands-on session on signal processing"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
      alt: "University campus during conference 2020",
      caption: "Evening reception at the university"
    }
  ];

  // Sample gallery images for 2022
  const gallery2022 = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
      alt: "Opening ceremony 2022",
      caption: "Inaugural address by the chief guest"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      alt: "Award ceremony 2022",
      caption: "Best paper award presentation"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
      alt: "Conference dinner 2022",
      caption: "Cultural program during the gala dinner"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      alt: "Technical presentation 2022",
      caption: "Keynote session on cyber security"
    }
  ];

  // Handle opening the image in a lightbox
  const handleImageClick = (image: {src: string, alt: string, caption: string}) => {
    setOpenImage(image);
  };

  // Close the lightbox dialog
  const handleCloseDialog = () => {
    setOpenImage(null);
  };

  // Render gallery images in a grid
  const renderGalleryGrid = (images: any[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {images.map((image) => (
        <div key={image.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
          <div 
            className="cursor-pointer"
            onClick={() => handleImageClick(image)}
          >
            <AspectRatio ratio={4/3}>
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </AspectRatio>
          </div>
          <div className="p-3 bg-white">
            <p className="text-sm text-gray-600">{image.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );

  // Render gallery carousel for mobile view
  const renderGalleryCarousel = (images: any[]) => (
    <div className="mb-8">
      <Carousel className="w-full max-w-xs sm:max-w-md mx-auto">
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.id}>
              <Card>
                <CardContent className="p-1">
                  <div
                    className="cursor-pointer"
                    onClick={() => handleImageClick(image)}
                  >
                    <AspectRatio ratio={4/3}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </AspectRatio>
                  </div>
                  <div className="p-2 text-center">
                    <p className="text-sm text-gray-600">{image.caption}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-5xl">
      <div className="glassmorphism p-6 sm:p-8 rounded-xl">
        <div className="flex items-center gap-3 mb-6">
          <Image className="h-6 w-6 text-conference-blue" />
          <h1 className="text-3xl md:text-4xl font-bold text-conference-navy">Photo Gallery</h1>
        </div>
        
        <p className="text-gray-700 mb-8">
          Explore moments from our previous symposiums. Browse through collections from iSSSC 2020 and iSSSC 2022.
        </p>
        
        <Tabs defaultValue="2022" className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2 mb-8">
            <TabsTrigger value="2020" className="text-base">iSSSC 2020</TabsTrigger>
            <TabsTrigger value="2022" className="text-base">iSSSC 2022</TabsTrigger>
          </TabsList>
          
          <TabsContent value="2020">
            <h2 className="text-2xl font-bold text-conference-blue mb-4 flex items-center gap-2">
              <ImageIcon className="h-5 w-5" />
              iSSSC 2020 Memories
            </h2>
            
            {/* Responsive display: Grid for larger screens, Carousel for mobile */}
            <div className="hidden sm:block">
              {renderGalleryGrid(gallery2020)}
            </div>
            <div className="block sm:hidden">
              {renderGalleryCarousel(gallery2020)}
            </div>
          </TabsContent>
          
          <TabsContent value="2022">
            <h2 className="text-2xl font-bold text-conference-blue mb-4 flex items-center gap-2">
              <ImageIcon className="h-5 w-5" />
              iSSSC 2022 Highlights
            </h2>
            
            {/* Responsive display: Grid for larger screens, Carousel for mobile */}
            <div className="hidden sm:block">
              {renderGalleryGrid(gallery2022)}
            </div>
            <div className="block sm:hidden">
              {renderGalleryCarousel(gallery2022)}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={openImage !== null} onOpenChange={handleCloseDialog}>
        <DialogContent className="max-w-4xl w-full p-1 sm:p-2 bg-white">
          {openImage && (
            <>
              <div className="relative w-full">
                <img 
                  src={openImage.src} 
                  alt={openImage.alt} 
                  className="w-full h-auto object-contain max-h-[70vh]" 
                />
              </div>
              <div className="p-4 text-center">
                <DialogTitle className="text-lg font-medium">{openImage.alt}</DialogTitle>
                <DialogDescription className="text-sm mt-1">
                  {openImage.caption}
                </DialogDescription>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PhotoGallery;
