import { Input } from "./input";
export function Step1({ increaseStep }) {
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
            <Input
              label={"First name *"}
              placeholder={"Write your first name"}
            />
            <Input label={"Last name *"} placeholder={"Write your last name"} />
            <Input label={"Username *"} placeholder={"Write your username"} />
          </div>
          <button
            className="w-[416px] min-h-[44px] cursor-pointer  gap-[8px] bg-[#121416] hover:bg-[#39393a] active:bg-[#4c4c4c] text-[#FFFFFF] rounded-md mt-36 "
            onClick={increaseStep}
          >
            Continue 1/3 &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
