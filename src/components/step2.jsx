import { Input } from "./input";
export function Step2({ increaseStep, reduceStep }) {
  return (
    <div className="w-full h-full justify-center items-center flex bg-[#f4f4f4]">
      <div className="w-[480px] h-[655px] flex flex-col justify-start items-center bg-white rounded-lg">
        <div className="w-[416px] h-[358px] flex flex-col justify-start items-start gap-[20px] pt-[32px]">
          <div>
            <div className="bg-[url(./assets/main.svg)] w-[60px] h-[60px]  "></div>
            <h1 className="text-[26px] font-semibold">Join Us! 😎</h1>
            <p className="font-normal text-[#838383] mt-1 ">
              Please provide all current information accurately.
            </p>
          </div>

          <div className="gap-[8px] flex flex-col mt-1 ">
            <Input label={"Email *"} placeholder={"Write your Email"} />
            <Input
              label={"Phone Number *"}
              placeholder={"Write your Phone Number"}
            />
            <Input label={"Password *"} placeholder={"Write your Password"} />
            <Input
              label={"Confirm password *"}
              placeholder={"Write your Confirm password"}
            />
          </div>
          <div className="gap-[8px] flex">
            <button
              className="w-[128px] min-h-[44px] cursor-pointer border  gap-[8px] bg-[#ffffff] hover:bg-[#efefef] active:bg-[#e5e5e5] text-[#000000] rounded-md mt-15 "
              onClick={reduceStep}
            >
              &lt; Back
            </button>
            <button
              className="w-[280px] min-h-[44px] cursor-pointer   gap-[8px] bg-[#121416] hover:bg-[#39393a] active:bg-[#4c4c4c] text-[#FFFFFF] rounded-md mt-15 "
              onClick={increaseStep}
            >
              Continue 2/3 &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
