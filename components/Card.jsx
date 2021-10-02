import React from "react";

function Card({ data, status }) {
  return (
    <div
      className="rounded-2xl max-w-full grid grid-cols-12 drop-shadow-2xl  "
      style={{ backgroundColor: "white" }}
    >
      <div className="col-span-12 ">
        <p
          className="absolute rounded-2xl px-5 py-1.5 left-5 z-20 top-5 font-bold text-white text-sm"
          style={{ backgroundColor: "#0F524B" }}
        >
          {status}
        </p>
        <img
          className="z-2   pb-6 md:pb-0 lg:pb-12 overflow-hidden  rounded-t-2xl  "
          style={{ width: "100%" }}
          src={"images/" + data.imgName}
        />
      </div>
      <div className="col-span-12 -my-6 grid-rows-5  mb-5 mx-8 ">
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
            className="px-auto h-2 rounded-2xl my-3 col-span-8 "
            style={{ backgroundColor: "#e7eeed", width: "90%" }}
          >
            <div
              className="rounded-2xl  h-2"
              style={{
                backgroundColor: "#0F524B",
                width: `${data.percentFunded}`,
              }}
            />
          </div>
          <p
            className="col-span-4 font-bold"
            style={{ color: "#0F524B", float: "right" }}
          >
            {data.percentFunded}% funded
          </p>
        </div>

        <div className="grid grid-rows-3 gap-x-12 gap-4 w-full">
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
        <div className="mt-8 ">
          <button
            className="h-20 rounded-2xl w-full flex justify-center items-center"
            style={{ backgroundColor: "#0F524B" }}
          >
            <p className="text-white font-black flex">
              {" "}
              View Opportunity{" "}
              <img className="mx-2" src="images/arrow-right.svg" />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
