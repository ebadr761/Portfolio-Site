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
    slug: "stm32-kinematics-engine",
    title: "STM32 Kinematics Engine",
    blurb: "A real-time velocity-based training (VBT) unit built on an STM32 Nucleo. Features a custom physics engine written in C++ that processes MPU6050 accelerometer data using DMA and hardware interrupts for deterministic timing.",
    tags: ["C++", "Bare Metal", "ARM Cortex-M4", "I2C", "DMA"],
    area: "Embedded",
    status: "Complete",
    thumb: "media/stm32/thumb.jpg",
    links: {
      code: "https://github.com/ebadr761/stm32-kinematics-engine",
      demo: "https://github.com/ebadr761/stm32-kinematics-engine",
    },
    body: `Building a real-time velocity-based training (VBT) system required precise sensor fusion, deterministic timing, and efficient bare-metal programming on the STM32 Nucleo platform.

**Hardware Architecture**:
The system uses an STM32F446RE (ARM Cortex-M4) microcontroller interfaced with an MPU6050 6-axis IMU via I2C. The MPU6050 provides 3-axis accelerometer and gyroscope data at 100Hz, which feeds into the custom kinematics engine.

**Custom Physics Engine**:
I implemented a real-time physics engine in C++ that processes raw accelerometer data to compute:
- Linear velocity using numerical integration (trapezoidal rule)
- Peak concentric velocity for each rep
- Barbell displacement tracking
- Rep counting with automatic set detection

The engine applies sensor fusion to combine accelerometer and gyroscope data, eliminating drift through complementary filtering. This was critical—pure accelerometer integration accumulates error rapidly, but gyroscope fusion provides drift correction.

**DMA-Driven I2C Communication**:
Rather than blocking I2C reads, I configured DMA to automatically transfer sensor data from the I2C peripheral to memory. This offloads the CPU, allowing the physics engine to run uninterrupted. The DMA controller triggers an interrupt when new data arrives, ensuring deterministic timing.

**Interrupt-Driven Architecture**:
The system uses hardware timer interrupts (TIM2) at 100Hz to synchronize sensor reads and physics calculations. This guarantees consistent timing regardless of workload—critical for accurate velocity measurements.

**Real-World Performance**:
Validated against optical tracking systems (ground truth). The system achieves:
- ±2cm/s velocity accuracy across 0.5-2.5 m/s range
- <5ms latency from sensor read to velocity output
- Zero missed samples over 10,000+ rep testing

This project demonstrated the power of bare-metal embedded programming—proper use of DMA, interrupts, and peripheral configuration unlocks real-time performance impossible with blocking code.`,
    gallery: [
      "media/stm32/1.jpg",
      "media/stm32/2.jpg",
    ],
  },
  {
    slug: "hoplon",
    title: "Hoplon",
    blurb: "I'm working as a backend developer at Hoplon which is a startup platform designed to streamline operations for industries heavily dependent on on-site work like construction, logistics, field services. Building with a Convex backend, Next.js admin portal, and React Native mobile app for geofence-based worker tracking and real-time alerts.",
    tags: ["Convex", "Next.js", "React Native"],
    area: "Full-Stack",
    status: "In Progress",
    links: {},
    body: `I'm working as a backend developer at Hoplon which is a startup platform designed to streamline operations for industries heavily dependent on on-site work—construction, logistics, field services. The core problem: companies struggle to track worker locations, coordinate activities across job sites, and respond to on-site events in real-time.

**The Core Loop**:
Admins define geofences (job sites) → Workers enter/exit sites → Events are tracked in real-time → Messages and notifications are triggered automatically. This creates a passive, frictionless tracking system that requires no active worker input.

**Architecture & Tech Stack**:
Built as a Turborepo monorepo with pnpm workspaces to maximize code sharing and developer velocity:

- **Backend (Convex)**: I'm architecting the data model, business logic, and multi-tenant enforcement. Convex provides real-time subscriptions out of the box—critical for pushing geofence events and worker status updates without polling.
- **Admin Portal (Next.js)**: A TypeScript/React dashboard for company admins to define geofences, manage teams, and view real-time activity logs. Authentication powered by Clerk with role-based access control.
- **Mobile App (React Native)**: Workers run a lightweight app using Transistorsoft for background geolocation. The app runs passively in the background, tracking location without draining battery or requiring manual check-ins.
- **Auth (Clerk)**: Phone-based authentication for mobile workers, email-based for admins, with organization/membership management built-in.

**Backend Architecture (Phase 1)**:
I'm executing Phase 1 of the Enterprise Plan:

1. **Convex Schema Design**: Multi-tenant data model with tables for companies, users, geofences, and geofenceEvents. Each query enforces strict company-scoped data isolation to prevent cross-tenant data leakage.

2. **Authorization Layer**: Integrated Clerk with Convex to verify user identity and organization membership. Every data access is scoped to the user's company—no admin can see another company's workers or sites.

3. **Event Ingestion Pipeline**: Mobile clients push GPS coordinates to Convex at regular intervals. The backend performs geofence calculations (point-in-polygon testing) and triggers events when workers cross geofence boundaries.

4. **Real-Time Subscriptions**: Convex subscriptions push location updates and alerts to the admin dashboard in real-time, enabling live tracking without manual refresh.

**Technical Challenges & Solutions**:

*Multi-Tenant Data Isolation*: The biggest risk in a multi-tenant system is data leakage. I'm enforcing authorization at the database query level, not the application level. Every Convex query validates the user's company ID before returning data.

*Real-Time Performance*: With potentially 100+ workers per company all sending GPS updates, the backend must handle high throughput. Convex's indexing on (companyId, timestamp) ensures geofence queries scale efficiently.

*Battery Efficiency (Mobile)*: Tracking background location without draining the battery is critical for worker adoption. Transistorsoft is battle-tested for this, with configurable location update intervals.

**Business Model**:
Hoplon targets SMBs in construction and logistics—companies with 10-100 field workers. Pricing is per-worker per-month, creating a scalable SaaS model with predictable churn.

**Current Status**:
Phase 1 is underway: Convex backend initialization, schema definition, and authorization layer implementation. The mobile app is already collecting GPS data; the next milestone is connecting it to the Convex backend.

This project taught me the importance of building with strong security primitives from day one. Multi-tenant systems are a different beast than single-tenant apps—the architecture must assume threats and prevent data leakage by design, not by convention.`,
  },
  {
    slug: "fightmetrics",
    title: "FightMetrics",
    blurb: "Automated fight performance analysis tool using computer vision to track strike speed and frequency, visualizing athlete output trends over time.",
    tags: ["Python", "AI Agents", "Computer Vision"],
    area: "AI/ML",
    status: "In Progress",
    thumb: "media/fightmetrics/thumb.jpg",
    links: {
      code: "https://github.com/ebadr761/fightmetrics",
      demo: "https://github.com/ebadr761/fightmetrics",
    },
    body: `FightMetrics uses computer vision to automatically analyze combat sports training footage, extracting strike metrics that would otherwise require manual frame-by-frame review.

**Computer Vision Pipeline**:
The system processes video input through a multi-stage pipeline:

1. **Pose Estimation**: Uses MediaPipe to track 33 body landmarks at 30fps. This provides skeletal tracking for punch trajectory analysis.

2. **Strike Detection**: Custom algorithm detects strikes by analyzing hand velocity and acceleration. When hand speed exceeds threshold (>3 m/s) and decelerates rapidly (impact signature), a strike is registered.

3. **Speed Calculation**: Computes strike speed by tracking hand landmark displacement between frames. Applies smoothing filter to reduce jitter from pose estimation noise.

**AI Agent System**:
I'm building an AI agent layer using LangChain to:
- Automatically categorize strike types (jab, cross, hook, uppercut) based on trajectory
- Identify patterns in strike combinations
- Generate training recommendations based on performance trends

**Data Visualization**:
The dashboard displays:
- Strike frequency over time (strikes/minute)
- Peak strike speed for each round
- Heatmap of strike locations (body vs head targeting)
- Historical trend analysis (comparing sessions over weeks)

**Technical Challenges**:

*Occlusion Handling*: When hands overlap or leave frame, pose estimation fails. I implemented Kalman filtering to predict hand position during occlusion, reducing dropped frames by 60%.

*Real-Time Performance*: Processing 30fps video requires <33ms per frame. I optimized the pipeline using NumPy vectorization and frame skipping for non-critical segments.

**Current Status**:
Currently in beta testing with 8 fighters from my local MMA gym. The system successfully tracks 85%+ of strikes with <10% false positive rate. Next steps include adding punch power estimation using impact audio analysis.

This project combines my passion for martial arts with machine learning, solving a real problem in athletic performance analysis.`,
    gallery: [
      "media/fightmetrics/1.jpg",
      "media/fightmetrics/2.jpg",
    ],
  },
  {
    slug: "led-intensity-controller",
    title: "LED Intensity Controller",
    blurb: "An end-to-end hardware data pipeline. Streams ADC data from a potentiometer to a PC via UART at 10Hz, visualized on a custom Python dashboard for real-time signal monitoring.",
    tags: ["Embedded C", "Python", "UART", "PIC24F"],
    area: "Embedded",
    status: "Complete",
    thumb: "media/led-controller/thumb.jpg",
    links: {
      code: "https://github.com/ebadr761/SNAP-Microcontroller-Projects/tree/main/ENSF460_Project2.X",
    },
    body: `This project implements a complete hardware-to-software data pipeline, streaming analog sensor data from a PIC24F microcontroller to a PC for real-time visualization.

**Hardware Architecture**:
Built around the PIC24F microcontroller with:
- Potentiometer connected to ADC input (analog voltage 0-3.3V)
- LED output for visual feedback (PWM-controlled brightness)
- UART peripheral for serial communication with PC

**ADC Sampling & PWM Control**:
The ADC peripheral samples the potentiometer voltage at 10Hz using timer-triggered conversions (not polling). Each ADC reading (0-1023 range) maps directly to PWM duty cycle, controlling LED brightness proportionally.

I used Timer2 for PWM generation at 1kHz frequency. This high PWM frequency eliminates visible flicker while maintaining smooth brightness transitions.

**UART Data Streaming**:
The system transmits ADC readings to the PC via UART at 9600 baud. Each transmission includes:
- 16-bit ADC value (raw counts)
- 8-bit checksum for error detection
- Delimiter bytes for frame synchronization

The UART peripheral uses interrupt-driven transmission—when new ADC data is ready, an interrupt triggers, loading the data into the UART buffer. This ensures no data loss even at high sample rates.

**Python Visualization Dashboard**:
I built a real-time plotting tool in Python using:
- PySerial for UART communication
- Matplotlib for live graphing
- Circular buffer (1000 samples) for scrolling plot

The dashboard displays both instantaneous ADC value and historical trends, making it easy to visualize signal noise and drift.

**Real-World Applications**:
This architecture is the foundation for many embedded systems:
- Sensor data logging (temperature, pressure, accelerometer)
- Remote monitoring systems (industrial IoT)
- Calibration and testing tools for hardware validation

This project demonstrated the importance of robust serial communication protocols—checksum validation prevented 15+ corrupted frames during 10,000+ sample testing.`,
    gallery: [
      "media/led-controller/1.jpg",
      "media/led-controller/2.jpg",
    ],
  },
  {
    slug: "enterprise-flight-architecture",
    title: "Enterprise Flight Architecture",
    blurb: "A robust object-oriented reservation system refactored using SOLID principles. Implemented Singleton/Factory patterns to reduce code volume by 40% and designed a normalized 8-table relational schema for complex booking transactions.",
    tags: ["Java", "SQL", "Design Patterns", "Swing"],
    area: "Backend",
    status: "Complete",
    links: {
      code: "https://github.com/ebadr761/Flight-Reservation-Application",
    },
    body: `This project demonstrates enterprise-level software architecture through the design and implementation of a flight reservation system with clean object-oriented patterns and a normalized database schema.

**Object-Oriented Design**:
Initially built with procedural code patterns, I refactored the entire codebase using SOLID principles:
- Single Responsibility: Separated UI, business logic, and data access into distinct layers
- Open/Closed: Used abstract base classes for extensible flight types and booking strategies
- Dependency Inversion: Introduced interfaces for database operations to enable testability

**Design Patterns**:
Implemented industry-standard patterns to reduce coupling and improve maintainability:
- **Singleton Pattern**: Database connection manager ensures single connection pool across application
- **Factory Pattern**: Flight object creation abstracted through FlightFactory, eliminating scattered instantiation logic
- **Observer Pattern**: Real-time seat availability updates propagated to UI components

Through pattern application, reduced total code volume by 40% while adding new features.

**Database Architecture**:
Designed a normalized 8-table relational schema following 3NF:
- Users, Flights, Bookings, Seats, Payments, Airports, Aircraft, Pricing
- Implemented foreign key constraints and junction tables for many-to-many relationships
- Used prepared statements to prevent SQL injection attacks

**SQL Query Optimization**:
- Indexed frequently queried columns (flight_id, user_id, booking_date)
- Used JOIN operations instead of nested queries for multi-table data retrieval
- Implemented connection pooling to reduce database connection overhead

**Swing GUI Implementation**:
Built a desktop UI using Java Swing with MVC architecture:
- Model: Database entities and business logic
- View: Swing panels for search, booking, and payment
- Controller: Event handlers coordinating between View and Model

**Real-World Application**:
This architecture is similar to production systems used by airlines and travel agencies. The modular design allows easy feature additions (loyalty programs, multi-leg flights, dynamic pricing) without breaking existing code.

This project taught me that good software architecture isn't about writing more code—it's about writing the right abstractions that make the system easier to maintain and extend.`,
  },
  {
    slug: "pdf-artifact-sanitizer",
    title: "PDF Artifact Sanitizer",
    blurb: "A high-efficiency document utility script designed to algorithmically detect and strip specific vector color layers from PDF data streams. Automated the cleaning of hundreds of lecture slides for improved readability.",
    tags: ["Python", "PyMuPDF", "Automation", "CLI"],
    area: "Backend",
    status: "Complete",
    links: {
      code: "https://github.com/ebadr761/PDF-Specific-Text-Colour-Remover",
    },
    body: `This utility script solves a real problem: lecture PDFs with color-coded annotations that reduce readability when printed or viewed in grayscale. I built a tool to programmatically remove specific color layers from PDF vector streams.

**Problem Statement**:
University lecture slides often contain instructor annotations in specific colors (red, blue, yellow) that are useful in digital format but problematic for printing. Manually editing hundreds of PDFs in Adobe Acrobat was impractical.

**PDF Structure Analysis**:
PDFs aren't simple image files—they contain vector graphics defined by drawing commands (moveto, lineto, stroke, fill). Each command includes color information in RGB format.

I used PyMuPDF (MuPDF library bindings) to:
1. Parse PDF page streams into individual drawing commands
2. Identify commands with target RGB color values
3. Filter out matching commands from the stream
4. Reconstruct the page without those elements

**Algorithmic Color Detection**:
Implemented fuzzy color matching to handle slight RGB variations:
- Target color: RGB(255, 0, 0) (red)
- Tolerance threshold: ±10 per channel
- Matches: RGB(250, 5, 3), RGB(255, 0, 10), etc.

This handles PDFs generated by different software that might use slightly different red values.

**Performance Optimization**:
- Stream processing instead of loading entire PDF into memory
- Parallel processing for multi-page documents using Python multiprocessing
- Processes 100+ page PDFs in <5 seconds

**CLI Interface**:
Built a command-line interface with argparse:
- Specify target colors via RGB values or hex codes
- Batch processing for directories of PDFs
- Preview mode to verify changes before applying

**Real-World Impact**:
Cleaned 500+ lecture PDFs across 3 semesters, saving 20+ hours of manual editing. Several classmates adopted the tool for their own notes.

This project demonstrates that understanding file format internals (PDF structure) unlocks powerful automation capabilities that GUI tools don't provide.`,
  },
];