import france from "../assets/FRANCE.png";
import usa from "../assets/USA.png";
import canada from "../assets/CANADA.png";
import germany from "../assets/GERMANY.png";
import uk from "../assets/UK.png";
import australia from "../assets/australia.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const Countries = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-8 md:pb-12 pb-4">
        <div className="w-full">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="w-full px-4 mx-auto max-w-[1400px]"
          >
            <div className="justify-center w-full text-center ">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="flex flex-wrap flex-col items-center pb-3">
                  <div className="flex items-center justify-center">
                    <h1 className="text-3xl font-semibold tracking-normal text-colorTwo mx-1">
                      {" "}
                      Our Study Abroad Service
                    </h1>
                  </div>
                  <div className="w-44 h-1 border-b-[3px] border-colorOne mt-[1px]"></div>
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-800 my-4">
                <p className="font-medium leading-relaxed md:text-[17px] text-[16px] text-center tracking-wide">
                  We offer overseas education services to top countries in the
                  rundown of international education. Are you looking for abroad
                  education services, MAC Global Services will encapsulate all
                  from counselling to visa stamping. We offer services to study
                  in countries like,
                </p>
              </div>
              <div className=" grid lg:grid-cols-5 lg:gap-6 gap-4 md:grid-cols-3 grid-cols-2 mx-auto items-center justify-center content-center">
                <div className="flex flex-col items-center justify-center cursor-pointer">
                  <img
                    src={usa}
                    alt=""
                    className="rounded-lg md:w-[200px] md:h-[200px] h-[180px] w-[180px]"
                  ></img>
                  <div>
                    <h4 className="font-bold uppercase text-blue-900 hover:text-blue-500 transition duration-1000 ease-in-out leading-relaxed tracking-wide">
                      USA
                    </h4>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center cursor-pointer">
                  <img
                    src={canada}
                    alt=""
                    width={200}
                    height={200}
                    className="rounded-lg md:w-[200px] md:h-[200px] h-[180px] w-[180px]"
                  ></img>
                  <div>
                    <h4 className="font-bold uppercase text-blue-900 hover:text-blue-500 transition duration-1000 ease-in-out leading-relaxed tracking-wide">
                      CANADA
                    </h4>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center cursor-pointer">
                  <img
                    src={uk}
                    alt=""
                    width={200}
                    height={200}
                    className="rounded-xl md:w-[200px] md:h-[200px] h-[180px] w-[180px]"
                  ></img>
                  <div>
                    <h4 className="font-bold uppercase text-blue-900 hover:text-blue-500 transition duration-1000 ease-in-out leading-relaxed tracking-wide">
                      UK
                    </h4>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                  <img
                    src={germany}
                    alt=""
                    width={200}
                    height={200}
                    className="rounded-lg md:w-[200px] md:h-[200px] h-[180px] w-[180px]"
                  ></img>
                  <div>
                    <h4 className="font-bold uppercase text-blue-900 hover:text-blue-500 transition duration-1000 ease-in-out leading-relaxed tracking-wide">
                      GERMANY
                    </h4>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                  <img
                    src={france}
                    alt=""
                    width={200}
                    height={200}
                    className="rounded-lg md:w-[200px] md:h-[200px] h-[180px] w-[180px]"
                  ></img>
                  <div>
                    <h4 className="font-bold uppercase text-blue-900 hover:text-blue-500 transition duration-1000 ease-in-out leading-relaxed tracking-wide">
                      FRANCE
                    </h4>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center lg:hidden cursor-pointer">
                  <img
                    src={australia}
                    alt=""
                    width={200}
                    height={200}
                    className="rounded-xl md:w-[200px] md:h-[200px] h-[180px] w-[180px]"
                  ></img>
                  <div>
                    <h4 className="font-bold uppercase text-blue-900 hover:text-blue-500 transition duration-1000 ease-in-out leading-relaxed tracking-wide">
                      Australia
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
