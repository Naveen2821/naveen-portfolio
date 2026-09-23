export const projects = [
  {
    number: '01', title: 'Smart Parking System', category: 'IoT / Smart Automation', description: 'An IoT-based smart parking system designed to detect parking-slot availability in real time and provide a simple monitoring interface.', technologies: ['NodeMCU ESP8266', 'Ultrasonic Sensors', 'IoT', 'Blynk'], url: '', kind: 'parking',
  },
  {
    number: '02', title: 'HomeCure', category: 'Software / Healthcare', description: 'A healthcare assistance application focused on medication management and reminders, with backend APIs, database integration, and voice-based calling.', technologies: ['Python', 'FastAPI', 'SQLite', 'Twilio', 'REST API'], url: '', kind: 'health',
  },
  {
    number: '03', title: '2D Graphics Editor', category: 'C++ / Computer Graphics', description: 'A menu-driven 2D graphics editor for creating and manipulating graphical shapes using C++ and computer graphics concepts.', technologies: ['C++', 'Computer Graphics'], url: 'https://github.com/Naveen2821/2D-Graphics-Editor', kind: 'graphics',
  },
] as const
