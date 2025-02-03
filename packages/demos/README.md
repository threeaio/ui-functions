# @threeaio/demos

Interactive demo pages for @threeaio libraries.

## Available Demos

### Oscillator Demo
A visual demonstration of the `@threeaio/oscillator` package showing different waveform types and their parameters in real-time.

Features:
- 11 different waveform types (sine, triangle, sawtooth, etc.)
- Configurable parameters for each waveform type
- Real-time visualization
- BPM and phase shift controls
- Dark theme interface

## Development

### Prerequisites
- Node.js >= 16
- pnpm >= 7

### Setup
```bash
# Install dependencies
pnpm install
```

### Running Demos
```bash
# Start development server
pnpm dev

# Build for production
pnpm build
```

The development server will be available at:
- Oscillator Demo: http://localhost:3000/oscillator.html

### Project Structure
```
demos/
├── public/           # Static files and built JS
│   ├── js/          # Built JavaScript files
│   └── *.html       # Demo pages
├── src/             # Source files
│   └── oscillator/  # Oscillator demo source
└── package.json
```

## Adding New Demos

1. Create a new directory in `src/` for your demo
2. Add your TypeScript files
3. Update `tsup.config.ts` with new entry point
4. Create HTML file in `public/`
5. Add demo to this README

## License

ISC © Nikolaj Sokolowski
