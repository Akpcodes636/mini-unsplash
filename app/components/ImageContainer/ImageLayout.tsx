"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface UnsplashImage {
  id: string;
  urls: { regular: string };
  alt_description: string;
  user: { name: string; location?: string };
}

const ImageLayout: FC = () => {
  const [gallery, setGallery] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const ACCESS_KEY = "yxNlVOzRLE85uufXp5V-QoSwLkesmNOacuE6HWQW1Ow";
        const res = await fetch("https://api.unsplash.com/photos", {
          headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
        });

        if (!res.ok) throw new Error(`API error: ${res.status}`);

        const data = await res.json();
        setGallery(data);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGallery();
  }, []);

  return (
    <div className="px-4 -mt-20">
      <div className="container">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, index) => (
              <Skeleton key={index} height={400} className="w-full rounded-[8px]" />
            ))}
          </div>
        ) : (
          <div className="columns-1 sm:columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {gallery.map((photo) => (
              <div key={photo.id} className="relative w-full break-inside-avoid">
                <div className="w-full rounded-[8px] overflow-hidden">
                  <Image
                    src={photo.urls.regular}
                    alt={photo.alt_description || "Unsplash image"}
                    width={500} // Responsive width
                    height={700} // Responsive height (adjust as needed)
                    className="object-cover w-full h-auto rounded-[8px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h2 className="font-semibold">{photo.user.name}</h2>
                    <p className="text-sm opacity-80">{photo.user.location || "Unknown location"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageLayout;
