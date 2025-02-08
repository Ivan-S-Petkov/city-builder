import RoofIcon from "../icons/RoofIcon";
import Floor from "../ui/Floor";
import GroundFloor from "../ui/GroundFloor";
import { AnimatePresence, motion } from "framer-motion";

function Building({ house }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col min-w-[40px] w-[25%]"
    >
      <RoofIcon />
      <div className="flex flex-col-reverse">
        <AnimatePresence>
          {house.floors.map((floor, i) =>
            i === 0 ? (
              <GroundFloor key={i} color={floor} />
            ) : (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Floor key={i} color={floor} />
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default Building;
