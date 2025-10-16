import React, { useState } from "react";

export function Step3({ increaseStep, reduceStep }) {
  const [dob, setDob] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const [errors, setErrors] = useState({
    dob: "",
    profileImage: "",
  });

  const validateDob = (date) => {
    if (!date) return "Date of birth is required.";

    return "";
  };

  const validateProfileImage = (file) => {
    if (!file) return "Profile image is required.";
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file.type)) return "Only JPG, PNG, GIF allowed.";
    return "";
  };

  const handleDobChange = (e) => {
    const value = e.target.value;
    setDob(value);
    setErrors((prev) => ({ ...prev, dob: validateDob(value) }));
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    setErrors((prev) => ({
      ...prev,
      profileImage: validateProfileImage(file),
    }));
  };

  const isValid = !errors.dob && !errors.profileImage && dob && profileImage;

  const handleContinue = () => {
    const dobError = validateDob(dob);
    const profileError = validateProfileImage(profileImage);

    setErrors({
      dob: dobError,
      profileImage: profileError,
    });

    if (!dobError && !profileError) {
      increaseStep();
    }
  };

  return (
    <div className="w-full h-full justify-center items-center flex bg-[#f4f4f4]">
      <div className="w-[480px] h-[655px]  flex flex-col justify-between items-center bg-white rounded-lg p-8">
        <div className="">
          <div className="bg-[url(./assets/main.svg)] w-[60px] h-[60px]"></div>
          <h1 className="text-[26px] font-semibold">Join Us! 😎</h1>
          <p className="font-normal text-[#838383] mt-1">
            Please provide all current information accurately.
          </p>

          <div className="flex flex-col space-y-1 w-full mt-8">
            <label
              htmlFor="dob"
              className="text-sm font-medium text-gray-700 w-[416px]"
            >
              Date of birth <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={dob}
              onChange={handleDobChange}
              className={`w-full rounded-md border px-3 py-2 placeholder-gray-400 focus:outline-none ${
                errors.dob
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              required
            />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}

            <div className="flex flex-col space-y-1 w-full mt-2">
              <label
                htmlFor="profile"
                className="text-sm font-medium text-gray-700 w-[416px]"
              >
                Profile image <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                id="IMAGE-UPLOAD"
                name="profile"
                accept="image/jpeg,image/png,image/gif"
                onChange={handleProfileImageChange}
                className={` rounded-md border px-3 py-2 placeholder-gray-400 h-min-[180px]${
                  errors.profileImage
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                required
              />
              {errors.profileImage && (
                <p className="text-red-500 text-sm">{errors.profileImage}</p>
              )}
            </div>
          </div>
        </div>

        <div className="gap-[8px] flex mt-[8px]">
          <button
            className="w-[128px] min-h-[44px] cursor-pointer border bg-white  active:bg-[#e5e5e5] hover:bg-[#e0e0e2] text-black rounded-md"
            onClick={reduceStep}
          >
            &lt; Back
          </button>
          <button
            className={`w-[280px] min-h-[44px] cursor-pointer rounded-md text-white hover:bg-[#39393a] ${
              isValid
                ? "bg-[#121416]  active:bg-[#4c4c4c]"
                : "bg-[#121416] cursor-not-allowed"
            }`}
            onClick={handleContinue}
            disabled={!isValid}
          >
            Continue 3/3 &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
