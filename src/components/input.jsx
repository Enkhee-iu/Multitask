export const Input = ({ label, value, onChange, placeholder }) => {
  return (
    <div className=" flex flex-col gap-2 cursor-pointer ">
      <label className="text-sm font-semibold text-[14px]" htmlFor={label}>
        {label}
      </label>
      <input
        className="border rounded-[8px] border-[#cbd5e1] hover:border-[#0ca5e9]  w-[416px] h-[44px] p-[12px] "
        id={label}
        placeholder={placeholder}
      />
    </div>
  );
};
