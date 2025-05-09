
import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg mb-6">Crafted With Passion,<br />Designed With Purpose</h2>
            <p className="mb-4 text-gray-700">
              At Vasukii E-com, each creation is born from a deep love for artisanal craftsmanship. Our founder, Emma, has spent years perfecting techniques handed down through generations.
            </p>
            <p className="mb-6 text-gray-700">
              We believe in slow fashion and thoughtful home decor—pieces that tell a story and bring warmth to your everyday life. Every stitch, every detail is considered with care and intention.
            </p>
            <Link to="/about" className="btn-primary inline-block">
              Read Our Story
            </Link>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581375321224-79da6fd32f6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Artisan working on handcrafted dress" 
              className="rounded-sm w-full h-auto object-cover shadow-xl"
              style={{ height: "500px" }}
            />
            <div className="absolute -bottom-6 -left-6 bg-boutique-sage text-white p-6 rounded-sm shadow-lg">
              <p className="font-serif italic">"Every piece tells a unique story."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
