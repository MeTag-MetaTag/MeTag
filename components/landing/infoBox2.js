import Image from "next/image";

export default function InfoBox1({ icon, title, desc, emoji }) {
  return (
    <div
      className="flex flex-row items-start mb-6 space-x-4
                        laptop:mb-8"
    >
      <div
        className=" border-2 rounded-xl border-white/40
                            laptop:p-3"
      >
        <div className="w-[24.15px] h-[21.42px]">
          <Image src={icon} alt="image" />
        </div>
      </div>
      <div>
        <div className="flex">
          <p className="large-bold-text">{title}</p>
          <div className="w-[24.15px] h-[21.42px] mt-1 ml-2">
            <Image src={emoji} alt="image" />
          </div>
        </div>
        <p className="small-text">{desc}</p>
      </div>
    </div>
  );
}
