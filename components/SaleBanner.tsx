'use client'

type props = {
    sale: boolean
}

const SaleBanner = ({sale}: props) => {
  return (
    <div className="h-[30px] w-[100%]">
      {sale === true ? (
        <div
          className="
        bg-orange-400 text-white w-full h-[30px] flex items-center justify-center"
        >
          SALG
        </div>
      ) : (
        <div
          className="
          bg-gray-800 text-white w-full h-[30px] flex items-center justify-center"
        ></div>
      )}
    </div>
  );
};

export default SaleBanner;
