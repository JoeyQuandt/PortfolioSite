import { motion, useScroll } from "framer-motion";
import { useState, useRef, useEffect } from "react";

type NavbarProps = {
  children: React.ReactNode;
};

export default function Navbar({ children }: NavbarProps) {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((y) => {
      const difference = y - lastYRef.current;
      if (Math.abs(difference) > 50) {
        setIsHidden(difference > 0);
        lastYRef.current = y;
      }
    });

    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.header
      animate={isHidden ? "hidden" : "visible"}
      variants={{
        hidden: {
          y: "-100%",
        },
        visible: {
          y: "0%",
        },
      }}
      transition={{ duration: 0.2 }}
      className="lg:py-10 py-5 fixed top-0 left-0 w-full z-50 bg-theme-darkGrey"
    >
      <nav className="flex justify-between items-center text-theme-white layout max-md:flex-col max-md:justify-center max-md:items-center gap-4">
        {children}
      </nav>
    </motion.header>
  );
}
