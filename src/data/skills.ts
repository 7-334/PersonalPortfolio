// Skills data - stores skill information for the About section
export interface Skill {
  name: string
  icon: string
  level: string
}

export const skills: Skill[] = [
  { name: 'React', icon: '⚛️', level: '高级' },
  { name: 'TypeScript', icon: '📘', level: '高级' },
  { name: 'JavaScript', icon: '🟨', level: '高级' },
  { name: 'Node.js', icon: '🟢', level: '中级' },
  { name: 'Python', icon: '🐍', level: '中级' },
  { name: 'Tailwind CSS', icon: '🎨', level: '高级' },
  { name: 'HTML/CSS', icon: '🌐', level: '高级' },
  { name: 'Git', icon: '🔧', level: '高级' },
  { name: 'Docker', icon: '🐳', level: '中级' },
  { name: 'AWS', icon: '☁️', level: '初级' },
  { name: 'MongoDB', icon: '🍃', level: '中级' },
  { name: 'PostgreSQL', icon: '🐘', level: '中级' },
]