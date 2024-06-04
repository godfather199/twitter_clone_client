
function FormTextField({ placeholder, type, register, error, label }) {
  return (
    <div className="flex flex-col">
      {/* Input field */}
      <input
        type={type}
        placeholder={placeholder}
        {...register(label)}
        className=""
      />

      {/* Error message */}
      <span className="">{error}</span>
    </div>
  );
}

export default FormTextField