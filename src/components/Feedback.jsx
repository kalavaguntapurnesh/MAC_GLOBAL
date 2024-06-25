import left from "../assets/left.svg";
import right from "../assets/right.svg";

const Feedback = () => {
  return (
    <div className="pt-4 pb-16 bg-white">
      <div className="relative pt-8 pb-2">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full text-center">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="flex flex-wrap flex-col items-center">
                  <div className="flex items-center justify-center">
                    <img src={left} alt="" width={27} height={52}></img>
                    <h1 className="text-4xl font-bold tracking-normal text-colorTwo mx-1">
                      {" "}
                      Magnificent Feedback From Our Customers
                    </h1>
                    <img src={right} alt="" width={27} height={52}></img>
                  </div>
                  <div className="md:w-52 w-44 h-[1px] border-b-4 border-colorOne mt-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
