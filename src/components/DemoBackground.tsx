import { motion } from "framer-motion";
import DotField from "./DotField";

export function DemoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 bg-black">
      {/* Interactive React Bits DotField background canvas */}
      <div className="absolute inset-0 w-full h-full opacity-90">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="#FFFFFF"
          gradientTo="#E2E8F0"
          glowColor="#FFFFFF"
        />
      </div>
    </div>
  );
}
