import { Input } from "./input";
export function Step3({ increaseStep, reduceStep }) {
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

          <div class="flex flex-col space-y-1">
            <label
              for="dob"
              class="text-sm font-medium text-gray-700 w-[416px] "
            >
              Date of birth <span class="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              required
              class="w-full rounded-md border border-gray-300 px-3 py-2 

           text-gray-700 placeholder-gray-400 focus:border-blue-500 

           focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label
              for="dob"
              class="text-sm font-medium text-gray-700 w-[416px] "
            >
              Profile image <span class="text-red-500">*</span>
            </label>
          </div>
          <div className="w-[416px] min-h-[180px] bg-[#7F7F800D] rounded-xs flex gap-8px">
            <div className="flex justify-center items-center">
              <img src="./assets/icon.svg" alt="" />
              <input
                className="w-[416px] min-h-[180px]"
                type="file"
                id="profile"
                name="Add Image"
                accept="image"
              />
            </div>
          </div>

          <div className="gap-[8px] flex">
            <button
              className="w-[128px] min-h-[44px] cursor-pointer border  gap-[8px] bg-[#ffffff] hover:bg-[#efefef] active:bg-[#e5e5e5] text-[#000000] rounded-md mt-15 "
              onClick={reduceStep}
            >
              &lt; Back
            </button>
            <button
              className="w-[280px] min-h-[44px] cursor-pointer  gap-[8px] bg-[#121416] hover:bg-[#39393a] active:bg-[#4c4c4c] text-[#FFFFFF] rounded-md mt-15 "
              onClick={increaseStep}
            >
              Continue 3/3 &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
