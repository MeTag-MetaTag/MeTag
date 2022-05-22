import Image from "next/image";
export default function SponsorBox(props){
    return (
        <div className="bg-[#4a5673]/20 border-white/10 border-2 rounded-lg">
            <a href={props.href} target="_black">
                <Image src={props.src}/>
            </a>
        </div>
    )
}