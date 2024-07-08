


function FormTextField({ placeholder, type, register, error, label }) {
  return (
    <div className="flex flex-col  gap-3" >
      {/* Input field */}
      <input
        type={type}
        placeholder={placeholder}
        {...register(label)}
        className="outline-none text-lg text-gray-400 font-light border-2 border-blue-400 p-4 rounded-[2rem] shadow-lg "
      />

      {/* Error message */}
      <span className="text-md font-semibold text-red-500">{error}</span>
    </div>
  );
}

export default FormTextField