import React from 'react';
import { Button } from '@threeaio/react-ui';
// Import your components here as they are developed
// import { ComponentName } from '@threeaio/react-ui';

/**
 * Main application component for showcasing react-ui components
 * 
 * @returns {JSX.Element} The rendered application
 */
const App: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">@threeaio/react-ui Component Examples</h1>
      <div className="space-y-4">
        <div className="space-x-2">
          <Button>Default Button</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>
    </div>
  );
};

export default App; 