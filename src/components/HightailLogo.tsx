const HightailLogo = () => {
  return (
    <div className="w-40 h-40 bg-wine flex flex-col items-center justify-center">
      {/* Stars */}
      <div className="flex gap-1 mb-1">
        <span className="text-yellow-400 text-xs">★</span>
        <span className="text-yellow-400 text-xs">★</span>
      </div>
      
      {/* EST. 2020 */}
      <div className="text-wine-foreground text-[8px] tracking-widest mb-0.5">
        EST. 2020
      </div>
      
      {/* HIGHTAIL */}
      <div className="text-wine-foreground text-2xl font-bold tracking-wider font-display">
        HIGHTAIL
      </div>
      
      {/* VODKA */}
      <div className="text-wine-foreground text-[10px] tracking-[0.3em] mb-1">
        VODKA
      </div>
      
      {/* Tagline */}
      <div className="text-wine-foreground text-[6px] tracking-wider mb-2">
        CHANGE YOUR POISON CHANGE YOUR POISON
      </div>
      
      {/* Longhorn Icon */}
      <svg
        className="w-12 h-6"
        viewBox="0 0 60 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Longhorn horns */}
        <path
          d="M30 20 C30 12, 20 8, 5 4 C8 6, 10 10, 30 16"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M30 20 C30 12, 40 8, 55 4 C52 6, 50 10, 30 16"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Center skull detail */}
        <ellipse cx="30" cy="18" rx="3" ry="2" fill="white" />
      </svg>
    </div>
  );
};

export default HightailLogo;
