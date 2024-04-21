import React, { useState } from "react";

const Check = () => {
  const [checkOne, setCheckOne] = useState(true);
  const [checkTwo, setCheckTwo] = useState(false);
  const [checkThree, setCheckTree] = useState(false);
  const [checkFour, setCheckFour] = useState(false);

  const clickCheckOne = () => {
    setCheckOne(true);
    setCheckTwo(false);
    setCheckFour(false);
    setCheckTree(false);
  };
  const clickCheckTwo = () => {
    setCheckOne(false);
    setCheckTwo(true);
    setCheckTree(false);
    setCheckFour(false);
  };
  const clickCheckThree = () => {
    setCheckTree(true);
    setCheckOne(false);
    setCheckTwo(false);
    setCheckFour(false);
  };
  const clickCheckFour = () => {
    setCheckTree(false);
    setCheckOne(false);
    setCheckTwo(false);
    setCheckFour(true);
  };
  return (
    <div className="h-[100vh] w-full bg-purple-600">
      <div className="container mx-auto flex h-[100%] items-center justify-center">
        {checkOne && (
          <div className=" flex  w-[900px] gap-40 rounded-xl  bg-white   p-[50px]">
            <div className=" flex flex-col gap-3">
              <button
                onClick={clickCheckOne}
                className="flex items-center gap-3 text-[25px] font-semibold"
              >
                {" "}
                <div className=" flex h-[25px] w-[25px]  items-center justify-center rounded-[50%] bg-blue-700 text-[20px] text-[white]">
                  1
                </div>
                Choose Title
              </button>
              <button
                onClick={clickCheckTwo}
                className="flex items-center gap-3 text-[25px]  font-semibold text-[grey] hover:text-black"
              >
                <div className=" flex h-[25px] w-[25px]  items-center justify-center  rounded-[50%]  text-[20px]">
                  2
                </div>
                Choose description
              </button>
              <button
                disabled
                onClick={clickCheckThree}
                className="flex items-center gap-3 text-[25px]  font-semibold text-[grey] hover:text-black"
              >
                <div className=" flex h-[25px] w-[25px] items-center justify-center rounded-[50%]  text-[20px]">
                  3
                </div>
                Confirm data
              </button>
            </div>
            <div className="flex flex-col gap-10">
              <h1 className="text-[20px] font-semibold">
                Choose title content
              </h1>
              <button
                onClick={clickCheckTwo}
                className=" rounded-lg bg-gray-200 px-4 py-3 font-semibold"
              >
                Submit title
              </button>
            </div>
          </div>
        )}
        {checkTwo && (
          <div className=" flex  w-[900px] gap-40 rounded-xl bg-white  p-[50px] ">
            <div className=" flex flex-col gap-3">
              <button
                onClick={clickCheckOne}
                className="flex items-center gap-3 text-[25px] font-semibold"
              >
                {" "}
                <div className=" flex h-[25px] w-[25px] items-center justify-center rounded-[50%] bg-blue-700 text-[20px] text-[white]">
                  1
                </div>
                Choose Title
              </button>
              <button
                onClick={clickCheckTwo}
                className="flex items-center gap-3 text-[25px]  font-semibold text-[black] hover:text-black"
              >
                <div className=" flex h-[25px] w-[25px] items-center justify-center rounded-[50%] bg-blue-700 text-[20px] text-[white]">
                  2
                </div>
                Choose description
              </button>
              <button
                onClick={clickCheckThree}
                className="flex items-center gap-3 text-[25px]  font-semibold text-[grey] hover:text-black"
              >
                <div className=" flex h-[25px] w-[25px] items-center justify-center rounded-[50%]  text-[20px]">
                  3
                </div>
                Confirm data
              </button>
            </div>
            <div className="flex flex-col gap-10">
              <h1 className="text-[20px] font-semibold">
                Choose description content
              </h1>
              <div className="flex gap-3">
                <button
                  onClick={clickCheckOne}
                  className=" rounded-lg bg-gray-200 px-4 py-3 font-semibold"
                >
                  Back
                </button>
                <button
                  onClick={clickCheckThree}
                  className=" rounded-lg bg-gray-200 px-4 py-3 font-semibold"
                >
                  Submit description
                </button>
              </div>
            </div>
          </div>
        )}
        {checkThree && (
          <>
            <div className=" flex  w-[900px] gap-40 rounded-xl bg-white  p-[50px] ">
              <div className=" flex flex-col gap-3">
                <button
                  disabled
                  onClick={clickCheckOne}
                  className="flex items-center gap-3 text-[25px] font-semibold hover:text-black"
                >
                  {" "}
                  <div className=" flex h-[25px] w-[25px] items-center justify-center rounded-[50%] bg-blue-700 text-[20px] text-[white]">
                    1
                  </div>
                  Choose Title
                </button>
                <button
                  onClick={clickCheckTwo}
                  className="flex items-center gap-3 text-[25px]  font-semibold text-[black] hover:text-black"
                >
                  <div className=" flex h-[25px] w-[25px] items-center justify-center rounded-[50%] bg-blue-700 text-[20px]  text-[white]">
                    2
                  </div>
                  Choose description
                </button>
                <button
                  disabled
                  onClick={clickCheckThree}
                  className="flex items-center gap-3 text-[25px] font-semibold text-[black]"
                >
                  <div className=" flex h-[25px] w-[25px] items-center justify-center rounded-[50%]  bg-blue-700 text-[20px] text-[white]">
                    3
                  </div>
                  Confirm data
                </button>
              </div>

              <div className="flex flex-col gap-10">
                <h1 className=" text-[20px] font-semibold">
                  Are you happy now?
                </h1>
                <div className="flex gap-3">
                  <button
                    onClick={clickCheckTwo}
                    className=" rounded-lg bg-gray-200 px-4 py-3 font-semibold"
                  >
                    No, go back
                  </button>
                  <button
                    onClick={clickCheckFour}
                    className=" rounded-lg bg-gray-200 px-4 py-3 font-semibold"
                  >
                    Yes, go ahead
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        {checkFour && (
          <>
            <div className=" flex  w-[900px] gap-40 rounded-xl bg-white  p-[50px] ">
              <div className=" flex flex-col gap-3">
                <button
                  disabled
                  onClick={clickCheckOne}
                  className="flex items-center gap-3 text-[25px] font-semibold"
                >
                  {" "}
                  <div className=" flex h-[25px] w-[25px] items-center justify-center rounded-[50%] bg-blue-700 text-[20px] text-[white]">
                    1
                  </div>
                  Choose Title
                </button>
                <button
                  disabled
                  onClick={clickCheckTwo}
                  className="flex items-center gap-3 text-[25px] font-semibold text-[black]"
                >
                  <div className=" flex h-[25px] w-[25px] items-center justify-center rounded-[50%] bg-blue-700 text-[20px] text-white">
                    2
                  </div>
                  Choose description
                </button>
                <button
                  onClick={clickCheckThree}
                  className="flex items-center gap-3 text-[25px] font-semibold text-[black]"
                >
                  <div className=" flex h-[25px] w-[25px] items-center justify-center rounded-[50%]  bg-blue-700 text-[20px] text-white">
                    3
                  </div>
                  Confirm data
                </button>
              </div>
              <div className="flex flex-col gap-10">
                <h1 className="text-[20px] font-semibold">
                  Ok,we're done. <br /> Thanks for sending us your data?
                </h1>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Check;
