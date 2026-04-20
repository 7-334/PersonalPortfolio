// Projects data - stores project information for the Projects section
export interface Project {
  id: number
  title: string
  description: string
  image: string
  techStack: string[]
  link: string
  github?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: '电商管理系统',
    description: '一个完整的 B2C 电商平台，包含商品管理、订单处理、用户管理等功能模块。采用前后端分离架构，支持高并发访问。',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop',
    techStack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Redis'],
    link: 'https://example.com',
    github: 'https://github.com/example/ecommerce'
  },
  {
    id: 2,
    title: '数据分析仪表板',
    description: '企业级数据可视化平台，支持实时数据监控、多维度数据分析和自定义报表生成，帮助企业做出数据驱动的决策。',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    techStack: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL', 'AWS'],
    link: 'https://example.com',
    github: 'https://github.com/example/dashboard'
  },
  {
    id: 3,
    title: '移动应用开发框架',
    description: '基于 React Native 的跨平台移动应用开发框架，提供丰富的组件库和工具链，显著提升开发效率。',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    techStack: ['React Native', 'Expo', 'TypeScript', 'GraphQL'],
    link: 'https://example.com',
    github: 'https://github.com/example/mobile-framework'
  },
  {
    id: 4,
    title: '智能客服系统',
    description: '集成 AI 聊天机器人的智能客服系统，支持多渠道接入、智能问答和人工客服无缝切换。',
    image: 'https://images.unsplash.com/photo-1527474818846-6ec8da514f08?w=400&h=300&fit=crop',
    techStack: ['React', 'Node.js', 'Python', 'TensorFlow', 'WebSocket'],
    link: 'https://example.com',
    github: 'https://github.com/example/chatbot'
  },
  {
    id: 5,
    title: '在线教育平台',
    description: '提供直播课程、录播视频、在线考试等功能的综合性在线教育平台，支持多终端访问。',
    image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=400&h=300&fit=crop',
    techStack: ['React', 'Next.js', 'TypeScript', 'AWS', 'WebRTC'],
    link: 'https://example.com',
    github: 'https://github.com/example/education'
  },
  {
    id: 6,
    title: '个人财务管理应用',
    description: '帮助用户管理个人财务的应用，支持账单记录、预算管理、数据分析等功能，提供直观的财务视图。',
    image: 'https://images.unsplash.com/photo-1560438718-eb61ede255eb?w=400&h=300&fit=crop',
    techStack: ['React Native', 'TypeScript', 'SQLite', 'Charts.js'],
    link: 'https://example.com',
    github: 'https://github.com/example/finance-app'
  }
]