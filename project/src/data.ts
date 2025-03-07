import { Project, Skill } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with React and Node.js, featuring user authentication, product management, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://example.com/ecommerce',
    githubUrl: 'https://github.com/example/ecommerce'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://example.com/taskapp',
    githubUrl: 'https://github.com/example/taskapp'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A weather dashboard that provides real-time weather information and forecasts using multiple weather APIs.',
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://example.com/weather',
    githubUrl: 'https://github.com/example/weather'
  }
];

export const skills: Skill[] = [
  { name: 'React', category: 'frontend', icon: 'Code2' },
  { name: 'TypeScript', category: 'frontend', icon: 'FileCode' },
  { name: 'Tailwind CSS', category: 'frontend', icon: 'Palette' },
  { name: 'Node.js', category: 'backend', icon: 'Server' },
  { name: 'PostgreSQL', category: 'backend', icon: 'Database' },
  { name: 'Docker', category: 'tools', icon: 'Box' },
  { name: 'Git', category: 'tools', icon: 'Git' },
  { name: 'AWS', category: 'tools', icon: 'Cloud' }
];