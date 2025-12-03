import React from 'react';

export const SuccessView: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center animate-in fade-in zoom-in duration-700 text-center h-full py-20">
      <div className="relative">
        <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 drop-shadow-2xl text-center leading-tight mb-8 animate-pulse">
          爱你！！！！
        </h1>
        
        {/* Decorative Hearts */}
        <div className="absolute -top-20 -left-10 animate-bounce delay-100 text-red-500 text-7xl opacity-80">❤️</div>
        <div className="absolute -bottom-10 -right-10 animate-bounce delay-300 text-pink-500 text-7xl opacity-80">💖</div>
        <div className="absolute top-1/2 -right-20 animate-pulse text-yellow-400 text-5xl opacity-60">💕</div>
        <div className="absolute top-0 -right-12 animate-bounce delay-500 text-orange-400 text-6xl opacity-70">🥰</div>
      </div>

      <p className="mt-16 text-3xl text-orange-600 font-bold tracking-wider">
        (乖孩子 嘿嘿 😉)
      </p>

      <button 
        onClick={() => window.location.reload()}
        className="mt-20 px-10 py-4 bg-white text-orange-500 rounded-full font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-orange-100 text-lg"
      >
        再玩一次
      </button>
    </div>
  );
};