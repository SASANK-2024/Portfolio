import React from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, Circle } from 'lucide-react';
import { personalDetails } from '../config/personal';

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
            <Circle className="h-3 w-3 fill-green-500 text-green-500" />
            <span className="text-sm text-gray-600">{personalDetails.availability}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-indigo-600">{personalDetails.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">{personalDetails.title}</h2>
          <p className="text-xl text-gray-600 mb-6">{personalDetails.description}</p>
          <div className="flex items-center gap-2 justify-center md:justify-start mb-8">
            <MapPin className="h-5 w-5 text-gray-600" />
            <span className="text-gray-600">{personalDetails.location}</span>
          </div>
          <div className="flex gap-4 justify-center md:justify-start mb-8">
            <a
              href="#contact"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Download Resume
            </a>
          </div>
          <div className="flex gap-6 justify-center md:justify-start">
            <a
              href={personalDetails.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={personalDetails.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={personalDetails.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${personalDetails.email}`}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative">
            <img
              src={personalDetails.profileImage}
              alt={personalDetails.name}
              className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full ring-1 ring-gray-900/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}