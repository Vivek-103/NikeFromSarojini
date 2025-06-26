const Button = ({ label, iconUrl, backgroundColor = "bg-coral-red", textColor = "text-white", borderColor = "border-coral-red", fullWidth = false }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-6 py-4 border font-montserrat text-sm leading-none rounded-full
        ${backgroundColor} ${textColor} ${borderColor} ${fullWidth ? 'w-full' : ''}`}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
