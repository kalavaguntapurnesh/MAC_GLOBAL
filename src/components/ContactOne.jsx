import left from "../assets/left.svg";
import right from "../assets/right.svg";
import location from "../assets/Location.png";
import email from "../assets/email.png";
import phone from "../assets/phone.png";

const ContactOne = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-32 pb-4">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full text-center pb-6">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="mt-4 mb-8 flex flex-col flex-wrap items-center">
                  <div className="group transition duration-1000 ">
                    <h1 className="text-center font-bold text-colorTwo tracking-normal leading-relaxed text-3xl">
                     Want to Contact Us?
                    </h1>
                    <div className="bg-colorOne h-[3px] lg:w-0 w-full lg:group-hover:w-full group-hover:w-0 transition-all duration-500"></div>
                  </div>
                </div>
                <div className="">
                  <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:mt-8">
                    <div className=" flex flex-col justify-center items-center">
                      <div className=" h-20  w-full flex justify-center items-center">
                        <img
                          src={location}
                          alt=""
                          width={60}
                          height={60}
                          className="xl:hover:scale-110 transition duration-1000 ease-in-out"
                        ></img>
                      </div>
                      <div className=" h-12 flex justify-center items-center">
                        <img src={left} alt="" width={27} height={52}></img>
                        <h1 className="tracking-wider font-bold text-xl">
                          ADDRESS
                        </h1>
                        <img src={right} alt="" width={26} height={30}></img>
                      </div>

                      <div className="flex flex-col h-24  overflow-hidden items-center justify-center">
                        <h1 className="font-semibold tracking-normal lg:text-base text-sm">
                          10-3-206 / M4, 2nd Floor,KK Street,
                        </h1>
                        <h1 className="font-semibold tracking-normal lg:text-base text-sm">
                          {" "}
                          Tirupati City, Andhra Pradesh
                        </h1>
                        <h1 className="font-semibold tracking-normal lg:text-base text-sm">
                          India, 517501
                        </h1>
                      </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                      <div className=" h-20 0 w-full flex justify-center items-center">
                        <img
                          src={phone}
                          alt=""
                          width={60}
                          height={60}
                          className="xl:hover:scale-110 transition duration-1000 ease-in-out"
                        ></img>
                      </div>
                      <div className=" h-12 flex justify-center items-center">
                        <img src={left} alt="" width={27} height={52}></img>
                        <h1 className="tracking-wider font-bold text-xl">
                          PHONE
                        </h1>
                        <img src={right} alt="" width={26} height={30}></img>
                      </div>
                      <div className="flex flex-col h-24  overflow-hidden items-center justify-center">
                        <h1 className="font-semibold tracking-normal lg:text-base text-sm">
                          Office Number:
                        </h1>
                        <h1 className="font-semibold tracking-normal lg:text-base text-sm">
                          91+ 70754 95493
                        </h1>
                      </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                      <div className="h-20  w-full flex justify-center items-center">
                        <img
                          src={email}
                          alt=""
                          width={60}
                          height={60}
                          className="xl:hover:scale-110 transition duration-1000 ease-in-out"
                        ></img>
                      </div>
                      <div className=" h-12 flex justify-center items-center">
                        <img src={left} alt="" width={27} height={52}></img>
                        <h1 className="tracking-wider font-bold text-xl">
                          EMAIL
                        </h1>
                        <img src={right} alt="" width={26} height={30}></img>
                      </div>
                      <div className="flex flex-col h-24  overflow-hidden  items-center justify-center">
                        <h1 className="font-semibold tracking-normal lg:text-base text-sm">
                          <a href="">macglobalservices@gmail.com</a>
                        </h1>
                        <h1 className="font-semibold tracking-normal lg:text-base text-sm">
                          <a href="">keshavaconsultancy@gmail.com</a>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactOne;
