import Image from "next/image"

export default function Memeber(props){
    return (
        <div className="flex flex-col items-center">
          <Image src={props.pfp} />
          <span className="large-bold-text">Vansh Gehlot</span>
          <span className="small-bold-text mb-16">Founder & CEO</span>
        </div>
    )
}