import React from "react";

function MainCard({ data, status }) {
  return (
    <div
      className="rounded-2xl max-w-full grid grid-cols-12 mx-5 md:mx-24  lg:mx-16 xl:mx-24  2xl:mx-64 drop-shadow-2xl "
      style={{ backgroundColor: "white" }}
    >
      <div className="col-span-12 lg:col-span-5">
        <p
          className="absolute rounded-2xl px-5 py-1.5 left-5 z-20 top-5 font-bold text-white text-sm"
          style={{ backgroundColor: "#CB912C" }}
        >
          {status}
        </p>
        <img
          className="z-2  pb-6 md:pb-0 lg:pb-0 overflow-hidden h-3/4 lg:h-full rounded-t-2xl  lg:rounded-r-none lg:rounded-tl-2xl"
          style={{ width: "100%" }}
          src={'images/'+data.imgName}
        />
      </div>
      <div className="col-span-12 lg:col-span-7 -my-36 grid-rows-5 lg:mt-6 mb-5 mx-8 lg:mx-10 ">
        <p className="font-custom font-bold text-4xl mt-10 lg:my-3 ">
          {data.name}
        </p>
        <div className="flex min-w-full my-3">
          <img src="images/Vector.svg" style={{ color: "#0F524B" }} />
          <p className="font-custom font-regular text-lg lg:text-2xl mx-2">
            {data.location}
          </p>
        </div>
        <div className="grid grid-cols-12 w-full my-6 flex items-center">
          <div
            className="px-auto h-2 rounded-2xl my-3 col-span-8 lg:col-span-6"
            style={{ backgroundColor: "#e7eeed", width: "90%" }}
          >
            <div
              className="rounded-2xl  h-2"
              style={{
                backgroundColor: "#0F524B",
                width: `${data.percentFunded}%`,
              }}
            />
          </div>
          <p
            className="col-span-4 lg:col-span-6 font-bold"
            style={{ color: "#0F524B", float: "right" }}
          >
            {data.percentFunded}% funded
          </p>
        </div>

        <div className="grid lg:grid-cols-2 grid-rows-3 gap-x-12 gap-4 w-full">
          <div
            className="min-w-full pb-2"
            style={{ borderBottomWidth: "2px", borderColor: "#e6e6e6" }}
          >
            <p className="text-lg">
              Area
              <p style={{ float: "right" }} className="font-black">
                {data.area}
              </p>
            </p>
          </div>
          <div
            className="min-w-full pb-2"
            style={{ borderBottomWidth: "2px", borderColor: "#e6e6e6" }}
          >
            <p className="text-lg">
              Return Target
              <p style={{ float: "right" }} className="font-black">
                {data.returnTarget}%
              </p>
            </p>
          </div>
          <div
            className="min-w-full pb-2"
            style={{ borderBottomWidth: "2px", borderColor: "#e6e6e6" }}
          >
            <p className="text-lg">
              Price psf
              <p style={{ float: "right" }} className="font-black">
                ₹{data.pricePsf}
              </p>
            </p>
          </div>
          <div
            className="min-w-full pb-2"
            style={{ borderBottomWidth: "2px", borderColor: "#e6e6e6" }}
          >
            <p className="text-lg">
              Funding Status
              <p style={{ float: "right" }} className="font-black">
                {data.fundingStatus}%
              </p>
            </p>
          </div>
          <div
            className="min-w-full pb-2"
            style={{ borderBottomWidth: "2px", borderColor: "#e6e6e6" }}
          >
            <p className="text-lg">
              Yield
              <p style={{ float: "right" }} className="font-black">
                {data.yield}
              </p>
            </p>
          </div>
        </div>
        <div className="mt-8 lg:mt-6">
          <button
            className="h-20 rounded-2xl w-full lg:w-1/2 flex justify-center items-center"
            style={{ backgroundColor: "#CB912C" }}
          >
            <p className="text-white font-black flex">
              {" "}
              Invest now <img className="mx-2" src="images/arrow-right.svg" />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
