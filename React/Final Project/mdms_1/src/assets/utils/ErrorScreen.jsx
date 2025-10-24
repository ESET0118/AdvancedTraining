export default function ErrorScreen({ message = "404 NOT FOUND" }) {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div
        className="flex items-center justify-center w-[313px] h-[46px]"
        
      >
        <p
          className="font-inter font-bold text-[38px] leading-[100%] text-[#000000] text-center"
        >
          {message}
        </p>
      </div>
    </div>
  );
}
