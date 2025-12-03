import React, { useState } from 'react';

interface QuestionViewProps {
  onAccept: () => void;
}

export const QuestionView: React.FC<QuestionViewProps> = ({ onAccept }) => {
  const [yesScale, setYesScale] = useState(1);
  const [noScale, setNoScale] = useState(1);
  const [clickCount, setClickCount] = useState(0);

  const handleNoClick = () => {
    setYesScale((prev) => prev * 1.5);
    setNoScale((prev) => Math.max(0.1, prev * 0.8)); // Prevent it from disappearing completely too fast
    setClickCount((prev) => prev + 1);
  };

  // Base font size in px
  const baseSize = 18;

  return (
    <div className="flex flex-col items-center justify-center space-y-12 text-center h-full py-10">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 drop-shadow-sm mb-6 tracking-wide leading-tight">
        愿意叫我爸爸吗？
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-8 relative w-full min-h-[100px]">
        {/* Yes Button */}
        <button
          onClick={onAccept}
          style={{
            fontSize: `${baseSize * yesScale}px`,
            padding: `${12 * yesScale}px ${24 * yesScale}px`,
            transition: 'all 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Faster transition for snappy growth
            zIndex: 50,
          }}
          className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-xl transform active:scale-95 whitespace-nowrap border-b-4 border-green-700"
        >
          愿意
        </button>

        {/* No Button */}
        <button
          onClick={handleNoClick}
          style={{
            fontSize: `${baseSize * noScale}px`,
            padding: `${12 * noScale}px ${24 * noScale}px`,
            transition: 'all 0.3s ease',
            opacity: noScale < 0.2 ? 0.5 : 1,
            display: noScale < 0.05 ? 'none' : 'block' // Hide if practically invisible
          }}
          className="bg-red-500 hover:bg-red-600 text-white font-bold rounded-full shadow-xl transform active:scale-95 whitespace-nowrap border-b-4 border-red-700"
        >
          不要
        </button>
      </div>

      <div className="h-8">
        {clickCount > 0 && (
            <p className="text-gray-500 font-semibold animate-pulse text-xl">
                {clickCount < 3 ? "再想想..." : clickCount < 5 ? "真的不要吗？🥺" : "呜呜呜... 💔"}
            </p>
        )}
      </div>
    </div>
  );
};