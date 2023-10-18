import React from "react";

const Herobar = () => {
  return (
    <div
      className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <div className="relative inset-y-0 rounded-none pb-40 text-base shadow-[none] w-[calc(100%_+_2px)] max-w-full">
        <div className="flex max-w-full items-stretch justify-center text-center md:mx-auto md:w-auto lg:mx-auto xl:mx-auto lg:w-[calc(933px_+_2rem)] xl:w-[calc(1127px_+_2rem)] gap-16">
          <div className="px-4 text-center open:relative open:inline-block open:w-1/6 open:flex-col open:self-center open:px-4 open:py-4 open:align-middle md:open:w-1/3 ">
            <div className="flex flex-wrap items-start first:mt-0 ">
              <div className="inline-flex flex-col first:mt-0 last:mb-0 gap-5 ">
                <div className="text-center text-base font-bold uppercase text-white mt-5 ">
                  Market Cap{" "}
                </div>
                <div className="mt-0 text-center text-2xl font-normal uppercase leading-4 text-white ">
                  <span className="">$1.05t</span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 text-center open:relative open:inline-block open:w-1/6 open:flex-col open:self-center open:px-4 open:py-4 open:align-middle md:open:w-1/3 ">
            <div className="flex flex-wrap items-start first:mt-0 ">
              <div className="inline-flex flex-col first:mt-0 last:mb-0  gap-5">
                <div className="text-center text-base font-bold uppercase text-white mt-5 ">
                  Exchange Vol{" "}
                </div>
                <div className="mt-0 text-center text-2xl font-normal uppercase leading-4 text-white ">
                  <span className="">$87.40b</span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 text-center open:relative open:inline-block open:w-1/6 open:flex-col open:self-center open:px-4 open:py-4 open:align-middle md:open:w-1/3 ">
            <div className="flex flex-wrap items-start first:mt-0 ">
              <div className="inline-flex flex-col first:mt-0 last:mb-0 gap-5 ">
                <div className="text-center text-base font-bold uppercase text-white mt-5 ">
                  Assets{" "}
                </div>
                <div className="mt-0 text-center text-2xl font-normal uppercase leading-4 text-white ">
                  <span className="">2,295</span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 text-center open:relative open:inline-block open:w-1/6 open:flex-col open:self-center open:px-4 open:py-4 open:align-middle md:open:w-1/3 ">
            <div className="flex flex-wrap items-start first:mt-0 ">
              <div className="inline-flex flex-col first:mt-0 last:mb-0 gap-5 ">
                <div className="text-center text-base font-bold uppercase text-white mt-5 ">
                  Exchanges{" "}
                </div>
                <div className="mt-0 text-center text-2xl font-normal uppercase leading-4 text-white ">
                  <span className="">73</span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 text-center open:relative open:inline-block open:w-1/6 open:flex-col open:self-center open:px-4 open:py-4 open:align-middle md:open:w-1/3 ">
            <div className="flex flex-wrap items-start first:mt-0 ">
              <div className="inline-flex flex-col first:mt-0 last:mb-0 gap-5">
                <div className="text-center text-base font-bold uppercase text-white mt-5 ">
                  Markets{" "}
                </div>
                <div className="mt-0 text-center text-2xl font-normal uppercase leading-4 text-white ">
                  <span className="">12,563</span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 text-center open:relative open:inline-block open:w-1/6 open:flex-col open:self-center open:px-4 open:py-4 open:align-middle md:open:w-1/3 ">
            <div className="flex flex-wrap items-start first:mt-0 ">
              <div className="inline-flex flex-col first:mt-0 last:mb-0 gap-5 ">
                <div className="text-center text-base font-bold uppercase text-white mt-5 ">
                  <span className="">BTC Dom Index </span>
                </div>
                <div className="mt-0 text-center text-2xl font-normal uppercase leading-4 text-white ">
                  36.9%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herobar;
