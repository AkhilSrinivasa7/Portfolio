import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  
  // Smooth spring that immediately tracks page scroll without lag
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 35,
    restDelta: 0.001,
  });

  return (
    <div className="fixed left-0 top-0 z-[100] h-[3px] w-full bg-white/5 pointer-events-none">
      <motion.div
        className="h-full w-full bg-gradient-to-r from-red-600 via-amber-400 to-yellow-300 shadow-[0_0_14px_#eeba30]"
        style={{
          scaleX,
          transformOrigin: "0%",
        }}
      />
    </div>
  );
}
