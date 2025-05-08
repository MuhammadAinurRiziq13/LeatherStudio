"use client";

import { useEffect, useState } from "react";
import Navbar from "@components/sections/navbar";
import Footer from "@/components/sections/footer";
import Announcement from "@components/sections/announcement";
import { features } from "@/constants/features";

export default function About() {
  const [getRandomImage, setRandomImage] = useState<((w: number, h: number) => string) | null>(null);

  useEffect(() => {
    setRandomImage(() => (width: number, height: number) => {
      const randomSeed = Math.floor(Math.random() * 1000);
      return `https://picsum.photos/seed/${randomSeed}/${width}/${height}`;
    });
  }, []);

  if (!getRandomImage) return null;
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Announcement Bar*/}
      <Announcement />

      {/*Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 pt-16 pb-24">
        {/* Header */}
        <header className="mb-24 relative overflow-hidden">
          <div className="absolute -right-32 -top-20 w-96 h-96 bg-yellow-50 rounded-full opacity-40 blur-3xl"></div>
          <div className="absolute -left-16 top-20 w-32 h-32 bg-yellow-100 rounded-full opacity-20 blur-2xl"></div>

          <div className="relative z-10">
            <div className="inline-block bg-yellow-500/90 text-white text-sm px-4 py-1 mb-4 tracking-wider rounded-sm">OUR HERITAGE</div>
            <h1 className="text-4xl md:text-6xl font-medium mb-6 leading-tight">
              The art of <span className="text-yellow-600/90">leather</span> <br /> craftsmanship
            </h1>
            <div className="w-32 h-0.5 bg-yellow-600/70"></div>
          </div>
        </header>

        {/* About Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-28">
          <div className="order-2 md:order-1 flex flex-col justify-center">
            <div className="mb-1 text-sm font-medium text-yellow-600/90 tracking-wider">OUR JOURNEY</div>
            <h2 className="text-3xl font-medium mb-6 text-gray-900">
              Crafting <span className="text-yellow-600/90">Legacy</span> Through Leather
            </h2>

            <div className="space-y-5 text-gray-600">
              <p className="leading-relaxed">Founded in 2015, Leather Studio began with a vision to bridge traditional craftsmanship with contemporary design, creating leather goods that stand the test of time.</p>
              <p className="leading-relaxed">Our artisans, with their decades of experience, meticulously handcraft each piece using techniques passed down through generations, blending them with modern innovations.</p>
              <p className="leading-relaxed">We champion slow fashion and sustainability, crafting pieces that develop unique character as they accompany you through life&apos;s journeys.</p>
            </div>

            <div className="mt-8">
              <a
                href="/collections"
                className="
          inline-flex items-center
          border border-gray-900 
          text-gray-900 
          px-6 py-2.5
          rounded-full
          hover:bg-gray-900 
          hover:text-white 
          transition-all 
          duration-300
          group
        "
              >
                <span>Discover Our Work</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="aspect-[4/5] overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={getRandomImage(800, 1000)} alt="Leather craftsman at work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute top-6 -left-6 w-16 h-16 border border-yellow-600/70 bg-white/50 backdrop-blur-sm"></div>
            <div className="absolute bottom-6 -right-6 w-16 h-16 border border-yellow-600/70 bg-white/50 backdrop-blur-sm"></div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-yellow-600/80"></div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-32 relative">
          <div className="absolute -z-10 bottom-0 left-1/4 w-96 h-96 bg-yellow-50 rounded-full opacity-40 blur-3xl"></div>
          <div className="absolute -z-10 top-1/3 right-1/4 w-64 h-64 bg-yellow-100 rounded-full opacity-20 blur-2xl"></div>

          <h2 className="text-3xl font-medium mb-16 text-center">
            Our <span className="text-yellow-600/90">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center group relative p-6 border-b border-transparent hover:border-yellow-600/70 transition-all duration-300">
                <div className="mb-6 text-gray-600 group-hover:text-yellow-600/90 transition-colors duration-300 text-3xl">{feature.icon}</div>
                <h3 className="text-lg font-medium mb-3 group-hover:text-yellow-600/90 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                <div className="mt-4 w-0 group-hover:w-12 h-0.5 bg-yellow-600/80 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Founder Quote */}
        <section className="py-16 px-4 md:px-12 bg-gray-800 text-white relative mb-32">
          <div className="absolute top-0 left-0 w-24 h-0.5 bg-yellow-600/80"></div>
          <div className="absolute bottom-0 right-0 w-24 h-0.5 bg-yellow-600/80"></div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-yellow-600/70 text-6xl font-serif opacity-30 mb-4">"</p>
            <blockquote className="text-xl md:text-2xl font-light mb-8 leading-relaxed">We don&apos;t just make leather goods. We create companions for life&apos;s journey—objects that become more beautiful with time and use.</blockquote>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-yellow-600/80 p-0.5">
                <img src={getRandomImage(100, 100)} alt="Marco Giannini" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="text-left">
                <p className="font-medium">Marco Giannini</p>
                <p className="text-yellow-600/80 text-sm">Founder & Master Craftsman</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-28">
          <h2 className="text-3xl font-medium mb-16 text-center">
            Our <span className="text-yellow-600/90">Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="aspect-square relative overflow-hidden shadow-lg">
                <img src={getRandomImage(500, 500)} alt="Material selection" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg font-medium mb-1">Material Selection</h3>
                  <p className="text-xs text-gray-200">We source the finest ethically-produced leathers from the world&apos;s most prestigious tanneries.</p>
                </div>
              </div>
              <div className="mt-6 flex items-center">
                <span className="text-yellow-600/90 text-2xl font-medium mr-3">01</span>
                <p className="text-sm uppercase tracking-wider">Material Selection</p>
              </div>
              <div className="mt-2 h-0.5 bg-gray-200 group-hover:bg-yellow-600/80 transition-colors duration-500"></div>
            </div>
            <div className="group">
              <div className="aspect-square relative overflow-hidden shadow-lg">
                <img src={getRandomImage(500, 500)} alt="Handcrafted process" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg font-medium mb-1">Handcrafted Process</h3>
                  <p className="text-xs text-gray-200">Every piece is meticulously crafted by hand using traditional techniques passed down through generations.</p>
                </div>
              </div>
              <div className="mt-6 flex items-center">
                <span className="text-yellow-600/90 text-2xl font-medium mr-3">02</span>
                <p className="text-sm uppercase tracking-wider">Handcrafted Process</p>
              </div>
              <div className="mt-2 h-0.5 bg-gray-200 group-hover:bg-yellow-600/80 transition-colors duration-500"></div>
            </div>
            <div className="group">
              <div className="aspect-square relative overflow-hidden shadow-lg">
                <img src={getRandomImage(500, 500)} alt="Quality inspection" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg font-medium mb-1">Quality Inspection</h3>
                  <p className="text-xs text-gray-200">Each product undergoes rigorous quality control to ensure it meets our exacting standards.</p>
                </div>
              </div>
              <div className="mt-6 flex items-center">
                <span className="text-yellow-600/90 text-2xl font-medium mr-3">03</span>
                <p className="text-sm uppercase tracking-wider">Quality Inspection</p>
              </div>
              <div className="mt-2 h-0.5 bg-gray-200 group-hover:bg-yellow-600/80 transition-colors duration-500"></div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-yellow-600/90 text-white py-16 px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-medium mb-4">Experience the difference</h2>
            <p className="mb-8 max-w-2xl mx-auto leading-relaxed">Our leather goods are made to be experienced. Visit our showroom to see, touch, and feel the quality of our craftsmanship.</p>
            <a href="/contact" className="inline-block py-3 px-10 bg-white text-yellow-600 font-medium hover:bg-gray-800 hover:text-white transition-colors duration-300 shadow-lg">
              Visit Our Showroom
            </a>
          </div>
          <div className="absolute top-0 left-0 w-full h-2 bg-black/10"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-black/10"></div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
