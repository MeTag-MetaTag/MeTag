import events from "../../public/img/landing/events.svg";
import collaborative from "../../public/img/landing/collaborative.svg";
import diverse from "../../public/img/landing/diverse.svg";
import feedback from "../../public/img/landing/feedback.svg";
import InfoTicket from "./InfoTicket";
import SlackForm from "./SlideForm";
import Image from 'next/image';
import slackImg from '../../public/img/join/slackImg.svg';
import slackImgSmall from '../../public/img/join/slackImgSmall.svg'


export default function InfoBox(props){
    return (
        <div className="flex justify-center mt-10">
            <div className="laptop:hidden flex flex-col justify-center items-center
                            rounded-xl bg-black/40 max-w-lg">
                <div className="mt-10 text-center">
                    <p className="large-bold-text">Join a community of creators in our</p>
                    <h6 className="flex items-center mb-16 px-2">Awesome Slack Community<span className="ml-2 flex items-center"><Image className="text-black" src={slackImgSmall}/></span></h6>
                </div>
                <SlackForm/>
                <div className="mt-12">
                    <InfoTicket img={diverse} title="Diverse Community" description=""/>
                    <InfoTicket img={collaborative} title="Collaborative Knowledge" description=""/>
                    <InfoTicket img={feedback} title="Instant Feedback" description=""/>
                    <InfoTicket img={events} title="Skill-Building Events" description=""/>
                </div>
            </div>
            <div className="hidden laptop:flex laptop:justify-between laptop:m-7 max-w-[1700px]">
                <div className="px-14 py-10 bg-black/40 rounded-2xl">
                    <p className="large-bold-text">Join a community of creators in our</p>
                    <h6 className="mb-12 flex items-center">Awesome Slack Community <span className="ml-7 flex items-center"><Image className="text-black" src={slackImg}/></span></h6>
                    <div className="laptop:grid laptop:grid-rows-2 laptop:grid-cols-2 laptop:gap-10">
                        <InfoTicket img={diverse} title="Diverse Community" description="You’re not alone. Learn and get help from our friendly community of beginner and experienced developers."/>
                        <InfoTicket img={collaborative} title="Collaborative Knowledge" description="Exclusive exposure to industry experts & an opportunity to learn from them."/>
                        <InfoTicket img={feedback} title="Instant Feedback" description="Your code is tested as soon as you submit it, so you always know if you're on the right track."/>
                        <InfoTicket img={events} title="Skill-Building Events" description="Participate in high-quality, engaging events and learn skills."/>
                    </div>
                </div>
                <SlackForm/>
            </div>
        </div>
    )
}