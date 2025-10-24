export default function Button({ text, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="relative w-[190px] h-[32px] rounded-[20px] border border-black dark:border-gray-200 overflow-hidden text-[14px] font-istok font-bold text-black dark:text-white"
    >
      {/* Background layer */}
      <span className="absolute inset-0 bg-white dark:bg-gray-800 transition-colors duration-300"></span>
      
      {/* Overlay layer */}
      <span className="absolute inset-0 bg-white/20 dark:bg-white/10 transition-colors duration-300"></span>
      
      {/* Text */}
      <span className="relative z-10">{text}</span>
    </button>
  );
}
