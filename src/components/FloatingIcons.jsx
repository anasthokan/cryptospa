import { motion } from "framer-motion";
import { FaBitcoin, FaEthereum, FaGlobe } from "react-icons/fa";

const icons = [
  { Icon: FaBitcoin, x: -120, y: -40 },
  { Icon: FaEthereum, x: 100, y: -80 },
  { Icon: FaGlobe, x: 0, y: 120 },
];

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map(({ Icon, x, y }, i) => (
        <motion.div
          key={i}
          className="absolute text-gold"
          style={{ left: "50%", top: "50%" }}
          animate={{
            x: [x, x + 20, x],
            y: [y, y - 20, y],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={48} />
        </motion.div>
      ))}
    </div>
  );
}
