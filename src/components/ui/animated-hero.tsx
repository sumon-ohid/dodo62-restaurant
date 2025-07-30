import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["authentic", "traditional", "spicy", "delicious", "fresh"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Notion-style doodles around headlines */}
      {/* <div className="absolute top-10 left-4 md:top-20 md:left-10 z-20">
        <motion.div
          className="text-lg md:text-2xl"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          🍜
        </motion.div>
      </div>
      
      <div className="absolute top-16 right-4 md:top-32 md:right-16 z-20">
        <motion.div
          className="text-base md:text-xl"
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          🥢
        </motion.div>
      </div>
      
      <div className="absolute bottom-20 left-4 md:bottom-32 md:left-20 z-20">
        <motion.div
          className="text-base md:text-xl"
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          🍚
        </motion.div>
      </div>
      
      <div className="absolute bottom-28 right-4 md:bottom-40 md:right-24 z-20">
        <motion.div
          className="text-sm md:text-lg"
          initial={{ scale: 0, rotate: 90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          🥘
        </motion.div>
      </div> */}

      <div className="container max-w-5xl mx-auto relative z-20 px-4">
        <div className="flex flex-col lg:flex-row gap-8 py-8 lg:py-12 items-center justify-center">
          <div className="flex-1 flex gap-0 flex-col text-center lg:text-left">
            <div className="mb-4 lg:mb-0">
              <Button variant="secondary" size="sm" className="gap-2 md:gap-4 bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200 font-handwriting text-xs md:text-sm">
                <Utensils className="w-3 h-3 md:w-4 md:h-4" />
                <span className="hidden sm:inline">Traditional Korean Recipes</span>
                <span className="sm:hidden">Korean Recipes</span>
                <MoveRight className="w-3 h-3 md:w-4 md:h-4" />
              </Button>
            </div>
            <div className="flex gap-0 flex-col">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl max-w-2xl tracking-tighter font-handwriting text-black">
                <span className="text-gray-800">dodo62</span>
                <span className="relative flex w-full justify-center lg:justify-start overflow-hidden text-center lg:text-left md:pb-0 md:pt-1">
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute font-handwriting font-semibold text-gray-700"
                      initial={{ opacity: 0, y: "-100" }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? {
                              y: 0,
                              opacity: 1,
                            }
                          : {
                              y: titleNumber > index ? -150 : 150,
                              opacity: 0,
                            }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
                <span className="text-black">Korean Cuisine</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-gray-600 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left mt-4 md:mt-6 font-handwriting">
                Experience the authentic flavors of Korea in the heart of Vienna.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-8">
              <Button size="lg" className="gap-2 md:gap-4 bg-black hover:bg-gray-800 text-white font-handwriting text-sm md:text-base">
                <PhoneCall className="w-3 h-3 md:w-4 md:h-4" />
                Call us now
              </Button>
              <Button size="lg" className="gap-2 md:gap-4 bg-gray-200 hover:bg-gray-300 text-black font-semibold border border-gray-300 font-handwriting text-sm md:text-base">
                Make Reservation
                <MoveRight className="w-3 h-3 md:w-4 md:h-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-sm md:max-w-md"
            >
              <img 
                src="/assets/hero.png" 
                alt="Korean cuisine at dodo62" 
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero }; 