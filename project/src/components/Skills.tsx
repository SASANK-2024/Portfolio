import React from 'react';
import { Code2, FileCode, Palette, Server, Database, Box, Github as Git, Cloud } from 'lucide-react';
import { skills } from '../data';

const iconMap = {
  Code2,
  FileCode,
  Palette,
  Server,
  Database,
  Box,
  Git,
  Cloud
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon as keyof typeof iconMap];
            return (
              <div
                key={skill.name}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <Icon className="h-8 w-8 text-indigo-600 mb-3" />
                <h3 className="text-lg font-medium text-gray-900">{skill.name}</h3>
                <span className="text-sm text-gray-500 capitalize">{skill.category}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}