import { useState, useEffect } from "react";
import doctorImg from "../../assets/doctor.jpg";
import heartImg from "../../assets/heart.jpg";
import surgeryImg from "../../assets/surgery.jpg";

export default function ImageSlider() {
  const images = [doctorImg, heartImg, surgeryImg];
  const [current, setCurrent] = useState(0);

  // Automatically change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="object-cover w-full h-full"
          />
          {/* Optional dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      ))}

      {/* Text overlay */}
      <div className="absolute bottom-10 left-10 text-white z-10">
        <h2 className="text-2xl md:text-3xl font-semibold">
          EverYoung Clinic
        </h2>
        <p className="text-gray-200 text-sm mt-1">
          Caring for your health.
        </p>
      </div>

      {/* Optional indicator dots */}
      <div className="absolute bottom-5 right-5 flex gap-2 z-10">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
