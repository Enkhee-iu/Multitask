// import React, { useState } from "react";
// import { Input } from "./input";
// export function Step2({ increaseStep, reduceStep }) {
//   return (
//     <div className="w-full h-full justify-center items-center flex bg-[#f4f4f4]">
//       <div className="w-[480px] h-[655px] flex flex-col justify-start items-center bg-white rounded-lg">
//         <div className="w-[416px] h-[358px] flex flex-col justify-start items-start gap-[20px] pt-[32px]">
//           <div>
//             <div className="bg-[url(./assets/main.svg)] w-[60px] h-[60px]  "></div>
//             <h1 className="text-[26px] font-semibold">Join Us! 😎</h1>
//             <p className="font-normal text-[#838383] mt-1 ">
//               Please provide all current information accurately.
//             </p>
//           </div>

//           <div className="gap-[8px] flex flex-col mt-1 ">
//             <Input label={"Email *"} placeholder={"Write your Email"} />
//             <Input
//               label={"Phone Number *"}
//               placeholder={"Write your Phone Number"}
//             />
//             <Input label={"Password *"} placeholder={"Write your Password"} />
//             <Input
//               label={"Confirm password *"}
//               placeholder={"Write your Confirm password"}
//             />
//           </div>
//           <div className="gap-[8px] flex">
//             <button
//               className="w-[128px] min-h-[44px] cursor-pointer border  gap-[8px] bg-[#ffffff] hover:bg-[#efefef] active:bg-[#e5e5e5] text-[#000000] rounded-md mt-15 "
//               onClick={reduceStep}
//             >
//               &lt; Back
//             </button>
//             <button
//               className="w-[280px] min-h-[44px] cursor-pointer   gap-[8px] bg-[#121416] hover:bg-[#39393a] active:bg-[#4c4c4c] text-[#FFFFFF] rounded-md mt-15 "
//               onClick={increaseStep}
//             >
//               Continue 2/3 &gt;
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Input } from "./input";

export function Step2({ increaseStep, reduceStep }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // Валидейшн функцууд
  const validateEmail = (email) => {
    if (!email.trim()) return "Cannot be empty.";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) ? "" : "Invalid email format.";
  };

  const validatePhone = (phone) => {
    if (!phone.trim()) return "Cannot be empty.";
    const regex = /^[0-9]{8,}$/;
    return regex.test(phone) ? "" : "Invalid phone number.";
  };

  const validatePassword = (pass) => {
    if (!pass.trim()) return "Cannot be empty.";
    if (pass.length < 6) return "Password must be at least 6 characters.";
    return "";
  };

  const validateConfirmPassword = (confirm) => {
    if (!confirm.trim()) return "Cannot be empty.";
    if (confirm !== password) return "Passwords do not match.";
    return "";
  };

  // Input-ууд өөрчлөгдөх үед алдаа шалгах
  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
  };

  const handlePhone = (e) => {
    const value = e.target.value;
    setPhone(value);
    setErrors((prev) => ({ ...prev, phone: validatePhone(value) }));
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setErrors((prev) => ({
      ...prev,
      password: validatePassword(value),
      confirmPassword: validateConfirmPassword(confirmPassword),
    }));
  };

  const handleConfirmPassword = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setErrors((prev) => ({
      ...prev,
      confirmPassword: validateConfirmPassword(value),
    }));
  };

  const isValid =
    !errors.email &&
    !errors.phone &&
    !errors.password &&
    !errors.confirmPassword &&
    email.trim() &&
    phone.trim() &&
    password.trim() &&
    confirmPassword.trim();

  const handleContinue = () => {
    const emailError = validateEmail(email);
    const phoneError = validatePhone(phone);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(confirmPassword);

    setErrors({
      email: emailError,
      phone: phoneError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
    });

    if (!emailError && !phoneError && !passwordError && !confirmPasswordError) {
      increaseStep();
    }
  };

  return (
    <div className="w-full h-full justify-center items-center flex bg-[#f4f4f4]">
      <div className="w-[480px] h-[655px] flex flex-col justify-start items-center bg-white rounded-lg">
        <div className="w-[416px] flex flex-col justify-start items-start gap-[20px] pt-[32px]">
          <div>
            <div className="bg-[url(./assets/main.svg)] w-[60px] h-[60px]"></div>
            <h1 className="text-[26px] font-semibold">Join Us! 😎</h1>
            <p className="font-normal text-[#838383] mt-1">
              Please provide all current information accurately.
            </p>
          </div>

          <div className="gap-[8px] flex flex-col mt-1 w-full">
            <Input
              label="Email *"
              placeholder="Write your Email"
              value={email}
              onChange={handleEmail}
              onBlur={() =>
                setErrors((prev) => ({
                  ...prev,
                  email: validateEmail(email),
                }))
              }
              error={errors.email}
            />

            <Input
              label="Phone Number *"
              placeholder="Write your Phone Number"
              value={phone}
              onChange={handlePhone}
              onBlur={() =>
                setErrors((prev) => ({
                  ...prev,
                  phone: validatePhone(phone),
                }))
              }
              error={errors.phone}
            />

            <Input
              label="Password *"
              placeholder="Write your Password"
              type="password"
              value={password}
              onChange={handlePassword}
              onBlur={() =>
                setErrors((prev) => ({
                  ...prev,
                  password: validatePassword(password),
                }))
              }
              error={errors.password}
            />

            <Input
              label="Confirm password *"
              placeholder="Write your Confirm password"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPassword}
              onBlur={() =>
                setErrors((prev) => ({
                  ...prev,
                  confirmPassword: validateConfirmPassword(confirmPassword),
                }))
              }
              error={errors.confirmPassword}
            />
          </div>

          <div className="gap-[8px] flex mt-10">
            <button
              className="w-[128px] min-h-[44px] cursor-pointer border bg-white hover:bg-[#efefef] active:bg-[#e5e5e5] text-black rounded-md"
              onClick={reduceStep}
            >
              &lt; Back
            </button>

            <button
              onClick={handleContinue}
              disabled={!isValid}
              className={`w-[280px] min-h-[44px] rounded-md text-white font-medium transition 
                ${
                  isValid
                    ? "bg-[#121416] hover:bg-[#39393a] active:bg-[#4c4c4c]"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
            >
              Continue 2/3 &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
