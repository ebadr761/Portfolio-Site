export type ProjectStatus = "Complete" | "In Progress" | "Planned";

export interface Project {
  slug: string;
  title: string;
  blurb: string;
  tags: string[];
  area: "Backend" | "Frontend" | "Full-Stack" | "Embedded" | "AI/ML";
  status: ProjectStatus;
  thumb?: string;
  previewVideo?: string;
  mainVideo?: string;
  links?: { code?: string; demo?: string; paper?: string };
  body: string;
  gallery?: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "ai-chatbot-weather",
    title: "AI Developer Intern @ Quest - Multi-Agent Chatbot Systems",
    blurb: "Architected production AI chatbots processing 2,500+ daily queries using LangChain/LangGraph orchestration and n8n automation.",
    tags: ["Python", "Flask", "LangChain", "LangGraph", "n8n", "AWS", "REST APIs"],
    area: "Backend",
    status: "Complete",
    body: `During my internship at Quest, I led the architecture and deployment of two production AI systems that fundamentally changed how the company handled customer queries.

**Weather Chatbot (LangChain/LangGraph)**:
The first challenge was building a multi-agent system that could process weather-specific queries reliably. Using LangChain, I designed an agent pipeline with specialized sub-agents: one for current conditions, one for forecasts, one for alerts. LangGraph orchestrated these agents, enabling complex reasoning chains like "if tomorrow's temperature drops below freezing, check the frost alert agent."

The system processes 2,500+ queries daily with <2 second response times. To achieve this performance, I implemented intelligent caching—weather data expires hourly, but user preferences cache for days. I also built comprehensive logging to track which agent paths users took, revealing that 60% of queries were redundant (e.g., same location, same time of day), which informed our caching strategy.

**EV Advisor Chatbot (Real-Time Data Integration)**:
The second project aggregated real-time pricing data from 5 charging networks. The complexity here wasn't the chatbot itself—it was data freshness. Charging prices fluctuate minute-by-minute. I built a data pipeline that:
- Polls each network's API every 60 seconds
- Deduplicates and normalizes prices (different networks use different schemas)
- Stores in a time-series database for historical analysis
- Serves recommendations based on user location, vehicle type, and current prices

Within one month of production launch, this system achieved 300+ active users and reduced research time for users by 80% (measured by comparing manual research time vs. chatbot query time).

**DevOps & Reliability**:
When I joined, the deployment success rate was 60%. Through CI/CD pipeline implementation (GitHub Actions → AWS Lambda), comprehensive unit/integration tests (pytest + mocking), and staged rollouts, I improved this to 95%. I also participated in 20+ code reviews over 8 weeks, establishing code quality standards that stuck with the team.

This experience taught me that production systems aren't just about elegant code—they're about reliability, monitoring, and iterative improvement through data.`,
  },
  {
    slug: "stopwatch-timer-embedded",
    title: "Precision Stopwatch Timer - Embedded System",
    blurb: "High-precision embedded stopwatch system with LCD display and button controls, featuring accurate timing to millisecond resolution using interrupt-driven architecture.",
    tags: ["C", "PIC24F", "LCD Display", "Embedded Systems", "Timer Interrupts", "Hardware"],
    area: "Embedded",
    status: "Complete",
    thumb: "media/stopwatch/thumb.jpg",
    links: {
      demo: "",
      code: "https://github.com/ebadr761/SNAP-Microcontroller-Projects/tree/main/ENSF460_Project1.X",
    },
    body: `Building a precision stopwatch required deep understanding of timer peripherals and interrupt-driven programming. The core challenge: maintaining accurate time measurements while handling user inputs without drift or jitter.

**Hardware Architecture**:
Built around the PIC24F microcontroller with a 16x2 LCD display for time output. The button interface includes Start/Stop, Reset, and Lap functions. Each button uses hardware debouncing (RC circuit) to prevent false triggers from mechanical bounce.

**Timer Implementation**:
The system uses the PIC24F's Timer1 peripheral configured for 1ms interrupts. This provides millisecond-resolution timing without software delay loops that would block other operations. The interrupt service routine (ISR) increments time counters and updates the display buffer.

Key timing features:
- Millisecond-precision timing (±1ms accuracy)
- Lap time recording (stores up to 10 lap splits in SRAM)
- Display auto-scrolling through lap times
- Timer overflow handling for extended run times (99:59.999 max)

**Interrupt-Driven Design**:
Rather than polling buttons in a main loop, I used external interrupt pins. This ensures instantaneous response—pressing Start/Stop triggers an interrupt that immediately captures the exact timer value, eliminating response lag.

The ISR structure prioritizes timer updates (highest priority) over button handling (lower priority) to prevent timing drift. This design maintains accuracy even during rapid button presses.

**Power Efficiency**:
Implemented sleep mode during idle periods. The MCU only wakes for button presses or timer updates, reducing power consumption by 70% compared to a polling-based design.

**Real-World Testing**:
Validated timing accuracy against reference atomic clock signals. Over 100+ hour-long tests, maximum drift was <50ms (0.05% error), well within acceptable range for general-purpose timing applications.

This project demonstrated the importance of hardware-software co-design in embedded systems—proper peripheral configuration and interrupt handling are just as critical as algorithm design.`,
    gallery: [
      "media/stopwatch/1.jpg",
      "media/stopwatch/2.jpg",
    ],
  },
  {
    slug: "mma-tracker",
    title: "MMA Athletic Discipline Tracker",
    blurb: "Full-stack fitness tracking platform for MMA athletes to log training sessions, track progress metrics, and visualize performance trends over time.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "REST API"],
    area: "Full-Stack",
    status: "In Progress",
    thumb: "media/mma-tracker/thumb.jpg",
    links: {
      code: "https://github.com/ebadr761/mma-tracker",
      demo: "",
    },
    body: `As a martial arts practitioner, I recognized the need for a specialized training tracker that goes beyond generic fitness apps. This platform is designed specifically for MMA athletes to track striking, grappling, conditioning, and technique sessions.

**Feature Set**:
- **Training Log**: Record sessions with discipline-specific metrics (rounds, techniques practiced, sparring partners)
- **Progress Tracking**: Visualize improvement over time through charts and graphs
- **Workout Plans**: Pre-built training templates for different skill levels (beginner, intermediate, advanced)
- **Performance Analytics**: Track key metrics like training frequency, session duration, and technique proficiency

**Architecture**:
The application uses a modern full-stack architecture:

**Frontend (React)**: Single-page application with responsive design. Built custom components for session logging, data visualization (Chart.js), and calendar views. State management uses React hooks and Context API for sharing user data across components.

**Backend (Node.js/Express)**: REST API handling authentication, session CRUD operations, and analytics aggregation. Implemented JWT-based authentication to secure user data.

**Database (MongoDB)**: NoSQL database storing user profiles, training sessions, and workout templates. Schema design optimized for quick queries—frequently accessed data (recent sessions, progress metrics) is denormalized for performance.

**Key Technical Challenges**:

*Data Aggregation*: Generating weekly/monthly progress reports required efficient aggregation queries. Implemented MongoDB aggregation pipelines to compute metrics like total training hours, session frequency, and technique breakdowns.

*Real-Time Updates*: Session timers needed to persist even if the user closes the app. Implemented local storage caching and background sync to ensure no data loss.

*Mobile Responsiveness*: Athletes need to log workouts on mobile devices. Designed the UI mobile-first with touch-optimized controls and minimal data entry.

**Current Status**:
Currently in beta testing with 15 athletes from my local MMA gym. Collecting feedback on feature prioritization—most requested additions are social features (share workouts with training partners) and custom metric tracking (weight cut progress, injury logs).

This project combines my passion for martial arts with software engineering, solving a real problem in my community while building full-stack development skills.`,
    gallery: [
      "media/mma-tracker/1.jpg",
      "media/mma-tracker/2.jpg",
    ],
  },
  {
    slug: "web-design-consulting",
    title: "Web Design & Consulting at Designmen - 3 Client Websites",
    blurb: "Led end-to-end development of 3 business websites generating $45K+ in client revenue, optimized for SEO with 240% organic traffic increase.",
    tags: ["React", "JavaScript", "SQL", "SEO", "Database Design"],
    area: "Full-Stack",
    status: "Complete",
    body: `Over 16 months at Designmen Consulting, I managed the complete lifecycle of 3 business websites, from requirements gathering to deployment to ongoing optimization.

**Project Scope**:
Each site served different industries—one e-commerce platform, one SaaS product site, one service directory. Despite different purposes, they shared common patterns: complex data requirements, need for performance, and emphasis on conversion (sales or signups).

**Database Design & Management**:
I designed and managed SQL databases with 10K+ records across the 3 projects. The e-commerce site tracked products (8,000+ SKUs), orders, customers, and inventory. Proper schema design was critical—normalized to avoid redundancy, indexed for query performance, with constraints to maintain data integrity.

**SEO Strategy & Implementation**:
Each client wanted visibility in search results. I analyzed Google Search Console data to identify search intent:
- Which keywords were getting impressions but few clicks (poor title/description)? 
- Which pages were ranking on page 5-6 that could move to page 1 with minor tweaks?

Through on-page optimization (meta tags, heading structure, internal linking) and technical SEO (site speed, mobile responsiveness, structured data), I achieved:
- 4 keywords moved to first-page results
- 240% increase in organic traffic across the 3 sites
- Organic traffic now accounts for 60% of user acquisition for the top site

**Technical Delivery**:
Built on React for dynamic frontend experiences, with custom backend APIs for data management. Implemented analytics tracking to measure engagement and conversion. Set up automated deployments to ensure smooth updates without downtime.

**Business Impact**:
The 3 sites collectively generated $45K+ in client revenue since 2023. One client reported that the website redesign and SEO improvements directly contributed to 3 new contracts worth $15K each.

This project taught me that code alone doesn't drive business value—understanding user behavior, optimizing for search intent, and iteratively improving based on data does.`,
  },
];