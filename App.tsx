import React, { useState } from 'react';
import { Heart } from 'lucide-react'; // Simulating icon usage, though we will use SVG directly for zero-dep
import { SuccessView } from './components/SuccessView';
import { QuestionView } from './components/QuestionView';

const App: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccept = () => {
    setIsAccepted(true);
  };

  return (
    // Use h-[100dvh] ensures it fits mobile screens perfectly even with browser bars
    <div className="h-[100dvh] w-screen bg-pink-100 flex items-center justify-center overflow-hidden font-sans touch-none">
      <div className="w-full max-w-4xl p-4">
        {isAccepted ? (
          <SuccessView />
        ) : (
          <QuestionView onAccept={handleAccept} />
        )}
      </div>
    </div>
  );
};

export default App;