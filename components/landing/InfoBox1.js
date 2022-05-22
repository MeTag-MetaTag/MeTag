import Image from 'next/image';

export default function InfoBox1({icon, title, desc}){
    return (
      <div className="w-64 laptop:w-80">
        <Image src={icon} alt="image" />
        <p className="large-bold-text">{title}</p>
        <p className="small-text">{desc}</p>
      </div>
    );
}