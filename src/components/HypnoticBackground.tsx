const HypnoticBackground = () => {
  // Generate the hypnotic radial pattern with curved checkerboard arcs
  const generatePattern = () => {
    const rings = 20;
    const segments = 24;
    const paths: JSX.Element[] = [];
    
    for (let ring = 0; ring < rings; ring++) {
      const innerRadius = ring * 80;
      const outerRadius = (ring + 1) * 80;
      
      for (let seg = 0; seg < segments; seg++) {
        // Add wave effect to create the warped/hypnotic look
        const waveOffset = Math.sin(ring * 0.3) * 8;
        const startAngle = (seg * 360 / segments + waveOffset) * (Math.PI / 180);
        const endAngle = ((seg + 1) * 360 / segments + waveOffset) * (Math.PI / 180);
        
        // Alternating pattern
        const isColored = (ring + seg) % 2 === 0;
        
        const x1Inner = Math.cos(startAngle) * innerRadius;
        const y1Inner = Math.sin(startAngle) * innerRadius;
        const x2Inner = Math.cos(endAngle) * innerRadius;
        const y2Inner = Math.sin(endAngle) * innerRadius;
        
        const x1Outer = Math.cos(startAngle) * outerRadius;
        const y1Outer = Math.sin(startAngle) * outerRadius;
        const x2Outer = Math.cos(endAngle) * outerRadius;
        const y2Outer = Math.sin(endAngle) * outerRadius;
        
        const largeArcFlag = 0;
        
        const path = `
          M ${x1Inner} ${y1Inner}
          A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 1 ${x2Inner} ${y2Inner}
          L ${x2Outer} ${y2Outer}
          A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 0 ${x1Outer} ${y1Outer}
          Z
        `;
        
        paths.push(
          <path
            key={`${ring}-${seg}`}
            d={path}
            fill={isColored ? '#7B2C26' : '#FFFFFF'}
          />
        );
      }
    }
    
    return paths;
  };

  return (
    <div className="fixed inset-0 overflow-hidden">
      <svg
        className="absolute"
        style={{
          width: '200vmax',
          height: '200vmax',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        viewBox="-1600 -1600 3200 3200"
        preserveAspectRatio="xMidYMid slice"
      >
        {generatePattern()}
      </svg>
    </div>
  );
};

export default HypnoticBackground;
