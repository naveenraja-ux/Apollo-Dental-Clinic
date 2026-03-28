import React from "react";
import { motion } from "motion/react";

const DENTAL_PATHS = [
  "M680-875q66 0 113 47t47 113q0 11-1.5 29.5T834-643l-55 403q-5 38-34.5 62T677-154q-23 0-42.5-10T602-192L495-348q-2-4-6.5-5.5T479-355q-4 0-16 9L359-195q-14 20-34.5 30.5T281-154q-38 0-67-24.5T180-241l-54-402q-3-24-4.5-42.5T120-715q0-66 47-113t113-47q36 0 57.5 9.5T379-845q20 11 42.5 20.5T480-815q36 0 58.5-9.5T581-845q20-11 42-20.5t57-9.5Zm0 80q-23 0-40.5 9.5T601-765q-21 11-49 20.5t-72 9.5q-44 0-72-9.5T359-765q-21-11-38.5-20.5T280-795q-33 0-56.5 23.5T200-715q0 8 1 23t4 35l55 405q1 8 7 12.5t14 4.5q5 0 9-2t6-6l101-148q14-20 36-32t47-12q25 0 47 12t36 32l103 151q2 3 5 4.5t7 1.5q8 0 14.5-4.5T700-251l55-406q3-20 4-35t1-23q0-33-23.5-56.5T680-795ZM480-515Z",
  "M200-80v-360h80v-184L144-760l160-160 56 56-104 104 104 104v216h80v360H200Zm320 0v-360h80v-125q-52-14-86-56t-34-99q0-66 47-113t113-47q66 0 113 47t47 113q0 57-34 99t-86 56v125h80v360H520Zm120-560q33 0 56.5-23.5T720-720q0-33-23.5-56.5T640-800q-33 0-56.5 23.5T560-720q0 33 23.5 56.5T640-640ZM280-160h80v-200h-80v200Zm320 0h80v-200h-80v200Zm-320 0h80-80Zm320 0h80-80Z",
  "M200-80 40-520l200-120v-240h160v240l200 120L440-80H200Zm480 0q-17 0-28.5-11.5T640-120q0-17 11.5-28.5T680-160h120v-80H680q-17 0-28.5-11.5T640-280q0-17 11.5-28.5T680-320h120v-80H680q-17 0-28.5-11.5T640-440q0-17 11.5-28.5T680-480h120v-80H680q-17 0-28.5-11.5T640-600q0-17 11.5-28.5T680-640h120v-80H680q-17 0-28.5-11.5T640-760q0-17 11.5-28.5T680-800h160q33 0 56.5 23.5T920-720v560q0 33-23.5 56.5T840-80H680Zm-424-80h128l118-326-124-74H262l-124 74 118 326Zm64-200Z",
  "M80-120v-360q0-33 23.5-56.5T160-560h200v80q0 50 35 85t85 35q50 0 85-35t35-85v-80h200q33 0 56.5 23.5T880-480v360H80Zm80-80h640v-280H680q0 83-58.5 141.5T480-280q-83 0-141.5-58.5T280-480H160v280Zm320-240q-17 0-28.5-11.5T440-480q0-109 25-215t109-175q13-11 29-9.5t27 14.5q11 13 9.5 29T625-809q-70 59-87.5 148T520-480q0 17-11.5 28.5T480-440Zm-228.5 91.5Q260-357 260-370t-8.5-21.5Q243-400 230-400t-21.5 8.5Q200-383 200-370t8.5 21.5Q217-340 230-340t21.5-8.5Zm40 100Q300-257 300-270t-8.5-21.5Q283-300 270-300t-21.5 8.5Q240-283 240-270t8.5 21.5Q257-240 270-240t21.5-8.5Zm460-100Q760-357 760-370t-8.5-21.5Q743-400 730-400t-21.5 8.5Q700-383 700-370t8.5 21.5Q717-340 730-340t21.5-8.5ZM160-200h640-640Z",
  "M480-80q-73-9-145-39.5T206.5-207Q150-264 115-351T80-560v-40h40q51 0 105 13t101 39q12-86 54.5-176.5T480-880q57 65 99.5 155.5T634-548q47-26 101-39t105-13h40v40q0 122-35 209t-91.5 144q-56.5 57-128 87.5T480-80Zm-2-82q-11-166-98.5-251T162-518q11 171 101.5 255T478-162Zm2-254q15-22 36.5-45.5T558-502q-2-57-22.5-119T480-742q-35 59-55.5 121T402-502q20 17 42 40.5t36 45.5Zm78 236q37-12 77-35t74.5-62.5q34.5-39.5 59-98.5T798-518q-94 14-165 62.5T524-332q12 32 20.5 70t13.5 82Zm-78-236Zm78 236Zm-80 18Zm46-170ZM480-80Z",
  "M560-640q-17 0-28.5-11.5T520-680q0-17 11.5-28.5T560-720q17 0 28.5 11.5T600-680q0 17-11.5 28.5T560-640Zm240 0q-17 0-28.5-11.5T760-680q0-17 11.5-28.5T800-720q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640Zm-120-80q-17 0-28.5-11.5T640-760q0-17 11.5-28.5T680-800q17 0 28.5 11.5T720-760q0 17-11.5 28.5T680-720Zm120-80q-17 0-28.5-11.5T760-840q0-17 11.5-28.5T800-880q17 0 28.5 11.5T840-840q0 17-11.5 28.5T800-800ZM680-560q-17 0-28.5-11.5T640-600q0-17 11.5-28.5T680-640q17 0 28.5 11.5T720-600q0 17-11.5 28.5T680-560Zm120 80q-17 0-28.5-11.5T760-520q0-17 11.5-28.5T800-560q17 0 28.5 11.5T840-520q0 17-11.5 28.5T800-480ZM200-200h240v-320H200v320Zm-80 80v-400q0-33 23.5-56.5T200-600h240q33 0 56.5 23.5T520-520v400H120Zm80-480v-160q0-33 23.5-56.5T280-840h160v240h-80v-160h-80v160h-80Zm0 400h240-240Z"
];

interface FloatingIconProps {
  path: string;
  delay: number;
  duration: number;
  initialX: number;
  initialY: number;
  scale: number;
  opacity: number;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ 
  path, 
  delay, 
  duration, 
  initialX, 
  initialY, 
  scale, 
  opacity 
}) => {
  return (
    <motion.div
      initial={{ 
        x: `${initialX}vw`, 
        y: `${initialY}vh`, 
        opacity: 0, 
        scale: scale * 0.8,
        rotate: 0 
      }}
      animate={{ 
        y: [`${initialY}vh`, `${initialY - 5}vh`, `${initialY}vh`],
        opacity: [0, opacity, opacity, 0],
        rotate: [0, 10, -10, 0],
        scale: [scale * 0.8, scale, scale * 0.8]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
      className="absolute pointer-events-none z-0"
      style={{ color: "#800080" }}
    >
      <svg 
        viewBox="0 -960 960 960" 
        width="40" 
        height="40" 
        fill="currentColor" 
        className="opacity-20"
      >
        <path d={path} />
      </svg>
    </motion.div>
  );
};

export const FloatingDentalIcons: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const icons = React.useMemo(() => {
    const count = isMobile ? 6 : 15;
    return [...Array(count)].map((_, i) => ({
      id: i,
      path: DENTAL_PATHS[i % DENTAL_PATHS.length],
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      scale: 0.5 + Math.random() * 0.5,
      opacity: 0.1 + Math.random() * 0.2,
    }));
  }, [isMobile]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {icons.map((icon) => (
        <FloatingIcon key={icon.id} {...icon} />
      ))}
    </div>
  );
};
