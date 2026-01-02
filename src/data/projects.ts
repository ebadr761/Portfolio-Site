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
    slug: "commercial-web-platforms",
    title: "Commercial Web Platforms",
    blurb: "Architected and deployed high-performance marketing platforms for international clients. Implemented custom English/Arabic (RTL) localization and achieved 3,000+ monthly active users through SEO and SSG optimizations.",
    tags: ["Next.js", "TypeScript", "i18n", "Google Analytics"],
    area: "Full-Stack",
    status: "Complete",
    links: {
      demo: "https://www.ramlyconsulting.com",
    },
    body: `Over 16 months at Designmen Consulting, I architected and deployed high-performance marketing platforms for international clients, with a focus on bilingual support and SEO optimization.

**Technical Stack**:
Built on Next.js 14 with TypeScript for type safety and developer experience. Used Static Site Generation (SSG) for maximum performance—pages pre-render at build time, resulting in near-instant load times.

**Bilingual (English/Arabic) Implementation**:
The most complex challenge was implementing full Right-to-Left (RTL) support for Arabic. This wasn't just translating text—it required:
- Bidirectional layout system (Flexbox with dir="rtl")
- Mirrored UI components (navigation, cards, modals)
- Font optimization for Arabic typefaces (reduced bundle size by 40% through subset fonts)
- URL routing strategy (/en/about vs /ar/about)

I used next-i18next for translation management, with dynamic locale detection based on user browser settings or manual selection.

**SEO & Performance Optimization**:
Achieved 3,000+ monthly active users through aggressive SEO:
- Server-side rendering for critical pages (better Google indexing)
- Structured data (JSON-LD) for rich search results
- Image optimization (Next.js Image component with WebP format)
- Core Web Vitals optimization (LCP <2.5s, FID <100ms, CLS <0.1)

Through on-page optimization and technical SEO, organic traffic accounts for 65% of user acquisition.

**Analytics Integration**:
Implemented Google Analytics 4 with custom event tracking to measure user engagement. Set up conversion funnels to track user journeys from landing page to contact form submission.

**Business Impact**:
The platforms collectively generated $45K+ in client revenue since 2023. One client reported that the website redesign directly contributed to 3 new contracts worth $15K each.

This project taught me that modern web development is about performance, accessibility, and measurable business outcomes—not just writing React components.`,
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
    slug: "fightmetrics",
    title: "FightMetrics",
    blurb: "Automated fight performance analysis tool using computer vision to track strike speed and frequency, visualizing athlete output trends over time.",
    tags: ["Python", "AI Agents", "Computer Vision"],
    area: "AI/ML",
    status: "In Progress",
    thumb: "media/fightmetrics/thumb.jpg",
    links: {
      code: "https://github.com/ebadr761/fightmetrics",
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
];