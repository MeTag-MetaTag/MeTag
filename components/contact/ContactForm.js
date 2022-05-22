// import Image from "next/image";
// import emailTop from "../../public/img/contact/emailTop.svg";
// import emailBig from "../../public/img/contact/emailBig.svg";
// import Footer from "../Footer";
// // import Footer1 from "../Footer1";

// export default function Contact(props){
//     return (
//       <div className="flex items-center justify-center">
//         <div
//           className="flex flex-col items-center mx-4 mt-4 mb-16 p-5 border-2 border-white rounded-xl
//             laptop:grid laptop:grid-cols-2 laptop:m-24 laptop:p-16 max-w-[1700px]"
//         >
//           <div className="laptop:hidden">
//             <Image src={emailTop} alt="image" />
//           </div>
//           <div className="laptop:oder-2">
//             <div className="text-center mb-6 mt-8">
//               <h1 className="m-auto text-left font-inter font-bold text-gradient-1 block laptop:text-[34px] text-[20px] capitalize">
//                 Our Team is Here to Help! <span className="text-black">💬</span>
//               </h1>
//               <p className="sub-heading-2 m-auto font-normal laptop:text-left text-center">
//                 You can reach out to us for any feedback or suggestion. We will
//                 always be ready to help.
//               </p>
//             </div>
//             <form action="https://formspree.io/f/xknyqeza" method="POST">
//               <div className="laptop:grid laptop:grid-cols-2 gap-10">
//                 <div className="mt-4">
//                   <label className="form-text" htmlFor="firstName">
//                     First Name
//                   </label>
//                   <input
//                     id="firstName"
//                     name="firstName"
//                     type="text"
//                     className="input-form"
//                     required
//                   />
//                 </div>
//                 <div className="mt-4">
//                   <label className="form-text" htmlFor="lastName">
//                     Last Name
//                   </label>
//                   <input
//                     id="lastName"
//                     name="lastName"
//                     type="text"
//                     className="input-form"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="laptop:grid laptop:grid-cols-2 gap-10">
//                 <div className="mt-4">
//                   <label className="form-text" htmlFor="email">
//                     Email
//                   </label>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     className="input-form"
//                     required
//                   />
//                 </div>
//                 <div className="mt-4">
//                   <label className="form-text" htmlFor="subject">
//                     Subject
//                   </label>
//                   <select id="subject" className="input-form">
//                     <option className="sub-heading-1" value="donation">
//                       Donation
//                     </option>
//                     <option className="sub-heading-1" value="sponsorship">
//                       Sponsorship
//                     </option>
//                     <option className="sub-heading-1" value="teamIntake">
//                       Team Intake
//                     </option>
//                     <option className="sub-heading-1" value="feedback">
//                       Feedback
//                     </option>
//                     <option className="sub-heading-1" value="generalQuery">
//                       General Query
//                     </option>
//                     <option className="sub-heading-1" value="toFounder">
//                       To Founder
//                     </option>
//                   </select>
//                 </div>
//               </div>
//               <div className="mt-4">
//                 <label htmlFor="message" className="form-text block">
//                   Leave Us A Message
//                 </label>
//                 <textarea id="message" name="message" className="input-form" />
//               </div>
//               <button className="primary px-[30px] border-gradient-1  text-[14px] h-[45px] laptop:text-[16px] laptop:h-[45px] bg-transparent m-auto mt-6">
//                 Submit
//               </button>
//             </form>
//           </div>
//           <div className="hidden laptop:block ml-16 text-center">
//             <Image src={emailBig} alt="image" />
//           </div>
//         </div>
//       </div>
//     );
// }