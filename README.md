# PIE - Personalized Investment Engine

**Production URL:** [slice.vercel.app](https://slice.vercel.app)

An AI-powered investment discovery tool that uses natural language processing to map personal hobbies to potential stock market opportunities. Built with a focus on high-fidelity motion and modern React patterns.

# How It Works
PIE translates user-provided interests through the Anthropic Claude API. By utilizing custom-tuned prompts, the engine maps qualitative data (hobbies/interests) to quantitative market data, delivering tailored investment suggestions that may compliment passion and value investment strategies through a high-performance React frontend.

## Features

- **AI-Powered Recommendations**: Leverages Claude AI to provide intelligent, personalized investment suggestions.
- **Form Validation**: Robust form handling with Conform and Zod for reliable data validation.
- **Real-Time Notifications**: Toast notifications via React Hot Toast for immediate user feedback.
- **State Management**: Efficient, lightweight global state management with Zustand.
- **Responsive Design**: Modern, mobile-first interface built with Tailwind CSS 4.
- **Smooth Animations**: Engaging UI interactions and conversational transitions using Motion.
- **Type-Safe Development**: End-to-end TypeScript support for enhanced code reliability.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI Library**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **AI Integration**: [Anthropic Claude SDK](https://docs.anthropic.com/)
- **Form Handling**: [Conform](https://conform.guide/) & [Zod](https://zod.dev/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Animations**: [Motion](https://motion.dev/)
- **Language**: TypeScript

## Key Engineering Features

- **Structured Prompt Engineering**: Utilizes a meticulously crafted system prompt to ensure the LLM returns consistent, valid stock symbols and rationale based on unstructured user input.
- **Responsive Data Flow**: Architected the interaction between the Anthropic API and the frontend to provide a seamless, low-latency user experience during the analysis phase.
- **Type-Safe API Responses**: Defined rigorous TypeScript interfaces for AI-generated content to ensure UI stability and prevent runtime errors during data rendering.

## Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn package manager
- Anthropic API key (Claude AI)

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/numenor-dev/pie.git](https://github.com/numenor-dev/pie.git)
   cd pie

2. **Install dependencies** 
   yarn install

3. **Set up environment variables**
   ANTHROPIC_API_KEY=your_api_key_here

4. **Run the development server**
   yarn next dev
   Open http://localhost:3000 in your browser to see the application.


## Scripts
**yarn next dev** - Start development server with hot reload

**yarn next build** - Build the application for production

**yarn start** - Start the production server

**yarn lint** - Run ESLint to check code quality

## Project Structure
pie/
├── app/                    # Next.js App Router (Pages & API Routes)
├── components/             # Reusable UI components
├── lib/                    # Utility functions, schemas, and AI logic
├── public/                 # Static assets (images, icons)
├── .env.local              # Local environment variables (gitignored)
├── package.json
└── tsconfig.json