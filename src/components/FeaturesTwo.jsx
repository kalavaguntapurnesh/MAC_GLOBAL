import serviceOne from "../assets/serviceOne.jpg";

const FeaturesTwo = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-8 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px] ">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <div className=" flex items-center justify-center ">
                  <h3 className="lg:text-start text-center lg:text-4xl text-3xl font-bold tracking-normal text-colorTwo dark:text-black">
                    Why MAC is superior than fellow{" "}
                    <span className="text-colorOne">competitors ?</span>
                  </h3>
                </div>
                <div className="pt-2">
                  <p className="text-lg lg:block hidden font-normal text-colorTwo">
                    It is because of these following five reasons:
                  </p>
                </div>

                <div className="flex md:justify-start justify-center flex-col mt-8">
                  <div className=" mb-3">
                    <div className="grid grid-cols-6 ">
                      <div className="flex justify-center items-center col-span-1">
                        <h1 className="font-semibold text-4xl text-colorTwo">
                          1
                        </h1>
                      </div>
                      <div className="col-span-5 flex justify-start items-start">
                        <div>
                          <h1 className="text-colorTwo text-base">
                            First, select the desired eSports product in the
                            product overview and open it in our 3D configurator
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" mb-3">
                    <div className="grid grid-cols-6">
                      <div className="flex justify-center items-center col-span-1">
                        <h1 className="font-semibold text-4xl text-colorTwo">
                          2
                        </h1>
                      </div>
                      <div className="col-span-5 flex justify-start items-start">
                        <div>
                          <h1 className="text-colorTwo text-base">
                            Then you can choose between different custom eSports
                            jersey designs, which you can then refine according
                            to your own preferences.
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" mb-3">
                    <div className="grid grid-cols-6">
                      <div className="flex justify-center items-center col-span-1">
                        <h1 className="font-semibold text-4xl text-colorTwo">
                          3
                        </h1>
                      </div>
                      <div className="col-span-5 flex justify-start items-center">
                        <div>
                          <h1 className="text-colorTwo text-base">
                            You can add patterns and colour gradients to give
                            your eSports jersey an extra special touch.
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" mb-4">
                    <div className="grid grid-cols-6">
                      <div className="flex justify-center items-center col-span-1">
                        <h1 className="font-semibold text-4xl text-colorTwo">
                          4
                        </h1>
                      </div>
                      <div className="col-span-5 flex justify-start items-center">
                        <div>
                          <h1 className="text-colorTwo text-base">
                            Team logos, badges, player numbers and names can be
                            easily added via drag & drop or via the menu bar.
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=" mb-3">
                    <div className="grid grid-cols-6">
                      <div className="flex justify-center items-center col-span-1">
                        <h1 className="font-semibold text-4xl text-colorTwo">
                          5
                        </h1>
                      </div>
                      <div className="col-span-5 flex justify-start items-center">
                        <div>
                          <h1 className="text-colorTwo text-base">
                            Once you've designed your custom eSports jersey, you
                            can use our voting function to have your friends
                            choose their favourite eSports jersey design.
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex justify-center items-center">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesTwo;
