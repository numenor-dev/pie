# PIE - Personalized Investment Engine
Production URL: __[slice.vercel.app](https://slice.vercel.app/)__

An AI-powered investment discovery tool that uses natural language processing to map personal hobbies to potential stock market opportunities. Built with a focus on high-fidelity motion and modern React patterns.

## How It Works
PIE translates user-provided interests through the Anthropic Claude API. By utilizing custom-tuned prompts, the engine maps qualitative data (hobbies/interests) to quantitative market data, delivering tailored investment suggestions that may compliment passion and value investment strategies through a high-performance React frontend.

## Features

* __AI-Powered Recommendations:__ Leverages Claude AI to provide intelligent, personalized investment suggestions.
* __Form Validation:__ Robust form handling with Conform and Zod for reliable data validation.
* __Real-Time Notifications:__ Toast notifications via React Hot Toast for immediate user feedback.
* __State Management:__ Efficient, lightweight global state management with Zustand.
* __Responsive Design:__ Modern, mobile-first interface built with Tailwind CSS 4.
* __Smooth Animations:__ Engaging UI interactions and conversational transitions using Motion.
* __Type-Safe Development:__ End-to-end TypeScript support for enhanced code reliability.

## Tech Stack

* __Framework:__ __[Next.js](https://nextjs.org/)__ (App Router)
* __UI Library:__ __[React](https://react.dev/)__
* __Styling:__ __[Tailwind CSS](https://tailwindcss.com/)__
* __AI Integration:__ __[Anthropic Claude SDK](https://docs.anthropic.com/)__
* __Form Handling:__ __[Conform](https://conform.guide/)__ & __[Zod](https://zod.dev/)__
* __State Management:__ __[Zustand](https://github.com/pmndrs/zustand)__
* __Animations:__ __[Motion](https://motion.dev/)__
* __Language:__ TypeScript

## Key Engineering Features

* __Structured Prompt Engineering:__ Utilizes a meticulously crafted system prompt to ensure the LLM returns consistent, valid stock symbols and rationale based on unstructured user input.
* __Responsive Data Flow:__ Architected the interaction between the Anthropic API and the frontend to provide a seamless, low-latency user experience during the analysis phase.
* __Type-Safe API Responses:__ Defined rigorous TypeScript interfaces for AI-generated content to ensure UI stability and prevent runtime errors during data rendering.

## Getting Started
### Prerequisites

* Node.js 18+
* Yarn package manager
* Anthropic API key (Claude AI)

### Installation

1. Clone the repository:
```
git clone https://github.com/numenor-dev/pie.git
cd pie
```
2. Install dependencies: `yarn install`
3. Set up environment variables: `ANTHROPIC_API_KEY=your_api_key_here`
4. Run the development server: `yarn next dev`

Open __http://localhost:3000__ in your browser to see the application.

## Scripts
`yarn next dev` - Start development server with hot reload

`yarn next build` - Build the application for production

`yarn start` - Start the production server

`yarn lint` - Run ESLint to check code quality

## Project Structure
```
pie/
├── app/                    # Next.js App Router (pages & API routes)
├── components/             # Reusable UI components
├── lib/                    # Utility functions, schemas, and AI logic
├── public/                 # Static assets (images, icons)
├── .env.local              # Local environment variables (gitignored)
├── package.json
└── tsconfig.json
```