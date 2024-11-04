// import React, { useState, useEffect, useRef } from "react";
// import Button from "./Button";
// import axios from "axios";
// import { Highlight, themes } from "prism-react-renderer";
// import { useLanguage } from "../context/language-context";
// //import { ToastContainer, toast } from "react-toastify";
// import { useTheme } from "../context/theme-context";
// import { motion, useScroll, useTransform } from "framer-motion";
// import "react-toastify/dist/ReactToastify.css";

// const Contact: React.FC = () => {
//   const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "";

//   const [name, setName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [subject, setSubject] = useState<string>("");
//   const [message, setMessage] = useState<string>("");
//   const [cursor, setCursor] = useState<string>("");
//   const [lastUpdatedField, setLastUpdatedField] = useState<string | null>(null);
//   // const { ref } = useSectionInView("Contact");
//   const { language } = useLanguage();
//   const { theme } = useTheme();
//   const [error, setError] = useState<string | any>(null);

//   const animationReference = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: animationReference,
//     offset: ["0 1", "1.33 1"],
//   });
//   const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
//   const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

//   const notifySentForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
//     setError(null);
//     console.log(error);

//     e.preventDefault();
//     const data = new FormData(e.currentTarget);

//     try {
//       const response = await axios.post(apiBaseUrl, data);
//       console.log(response);
//      // toast.success("Email sent successfully");
//     } catch (error) {
//       console.log(error);
//     //  toast.error("Failed to send email");
//       setError("An Error occurred, try again later");
//     }
//   };

//   const handleInputFocus = (fieldName: string) => {
//     setCursor(`${fieldName}${cursor}`);
//   };

//   const wordWrap = (
//     text: string,
//     maxLineLength: number,
//     indentation: string
//   ) => {
//     const words = text.split(" ");
//     let lines: string[] = [];
//     let currentLine = "";

//     words.forEach((word) => {
//       if (currentLine.length + word.length <= maxLineLength) {
//         currentLine += word + " ";
//       } else {
//         lines.push(currentLine.trim());
//         currentLine = `${indentation}${word} `;
//       }
//     });

//     if (currentLine) {
//       lines.push(currentLine.trim());
//     }

//     return lines.join("\n");
//   };

//   const handleInputChange = (
//     e:
//       | React.ChangeEvent<HTMLInputElement>
//       | React.ChangeEvent<HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;

//     if (name === "name") {
//       setName(value);
//     } else if (name === "email") {
//       setEmail(value);
//     } else if (name === "subject") {
//       setSubject(value);
//     } else if (name === "message") {
//       setMessage(value);
//     }

//     setLastUpdatedField(name);
//   };

//   const [cursorBlink, setCursorBlink] = useState<boolean>(true);

//   useEffect(() => {
//     const blinkInterval = setInterval(() => {
//       setCursorBlink((prev) => !prev);
//     }, 400);

//     return () => {
//       clearInterval(blinkInterval);
//     };
//   }, []);

//   const codeSnippet = `
// import  { useState } from "react";

// // 🌈 Spreading Stardust: 
// // Crafting Cosmic Email 🌌

// const [sender, setSender] = "${name}${
//     lastUpdatedField === "name" ? (cursorBlink ? "|" : " ") : ""
//   }🚀";
// const [recipient, setRecipient] = "${email}${
//     lastUpdatedField === "email" ? (cursorBlink ? "|" : " ") : ""
//   }📧";
// const [subject, setSubject] = \n"${subject}${
//     lastUpdatedField === "subject" ? (cursorBlink ? "|" : " ") : ""
//   }✨";
// const [message, setMessage] = 
// \`Hello, intrepid traveler! 👋\n
// Across the cosmos, a message for you:\n
// "${wordWrap(message, 40, " ")}${
//     lastUpdatedField === "message" ? (cursorBlink ? "|" : " ") : ""
//   }"\n
// Wishing you stardust dreams,\n
// ${name}${lastUpdatedField === "name" ? (cursorBlink ? "|" : " ") : ""}
// \``;

//   return (
//     <React.Fragment>
//       <section
//         className="contact-container w-full min-[1921px]:px-[55rem] mt-16"
//         id="contact"
//       >
//         <div
//           className="title-container flex flex-col gap-6 justify-center items-center py-16  max-lg:p-16"
//           // ref={ref}
//         >
//           <motion.div
//             ref={animationReference}
//             style={{
//               scale: scaleProgess,
//               opacity: opacityProgess,
//               textAlign: "center",
//             }}
//           >
//             <p className="text-[--black] mb-6">
//               <span className="text-[--orange]">&lt;</span>
//               {language === "DE" ? "Kontakt" : "Contact"}
//               <span className="text-[--orange]">/&gt;</span>
//             </p>

//             <h2 className="text-[--black] text-center">
//               {language === "DE"
//                 ? "Beschreibung auf Deutsch"
//                 : "Description in English"}
//             </h2>
//           </motion.div>
//         </div>
//         <div className="flex flex-row justify-center items-start px-32 pt-32 mb-32 max-lg:flex-col max-lg:p-10">
//           <div className="w-1/2  bg-[--darkblue] text-[--white] flex flex-col justify-center items-start gap-24 rounded-2xl p-20 border-solid border-[0.4rem] border-[--lightblue] hover:border-orange duration-500 transition-all  quote-outer-container text-left max-lg:hidden cursor-progress">
//             <Highlight
//               code={codeSnippet}
//               language="tsx"
//               theme={themes.nightOwl}
//             >
//               {({ className, style, tokens, getLineProps, getTokenProps }) => (
//                 <pre className={`${className} text-4xl `} style={style}>
//                   {tokens.map((line, i) => (
//                     <div {...getLineProps({ line, key: i })}>
//                       {line.map((token, key) => (
//                         <span {...getTokenProps({ token, key })} />
//                       ))}
//                     </div>
//                   ))}
//                 </pre>
//               )}
//             </Highlight>
//           </div>
//           <form
//             className="flex flex-col gap-6 justify-center items-center  px-32 w-1/2 max-lg:w-full max-lg:p-10"
//             onSubmit={notifySentForm}
//             autoComplete="off"
//           >
//             <input
//               type="text"
//               placeholder={language === "DE" ? "Name" : "Name"}
//               name="name"
//               value={name}
//               required
//               onFocus={() => {
//                 handleInputFocus("name");
//                 setLastUpdatedField("name");
//               }}
//               onMouseEnter={() => {
//                 handleInputFocus("name");
//                 setLastUpdatedField("name");
//               }}
//               onChange={handleInputChange}
//               className={`${
//                 theme === "dark"
//                   ? "bg-[--blackblue] dark-mode-shadow "
//                   : "bg-[--icewhite] dark-shadow "
//               }`}
//             />
//             <input
//               type="email"
//               placeholder={language === "DE" ? "Email" : "Email"}
//               name="email"
//               value={email}
//               required
//               onFocus={() => {
//                 handleInputFocus("email");
//                 setLastUpdatedField("email");
//               }}
//               onMouseEnter={() => {
//                 handleInputFocus("email");
//                 setLastUpdatedField("email");
//               }}
//               onChange={handleInputChange}
//               className={`${
//                 theme === "dark"
//                   ? "bg-[--blackblue] dark-mode-shadow "
//                   : "bg-[--icewhite] dark-shadow "
//               }`}
//             />
//             <input
//               type="text"
//               placeholder={language === "DE" ? "Betreff" : "Subject"}
//               name="subject"
//               value={subject}
//               required
//               onFocus={() => {
//                 handleInputFocus("subject");
//                 setLastUpdatedField("subject");
//               }}
//               onMouseEnter={() => {
//                 handleInputFocus("subject");
//                 setLastUpdatedField("subject");
//               }}
//               onChange={handleInputChange}
//               className={`${
//                 theme === "dark"
//                   ? "bg-[--blackblue] dark-mode-shadow "
//                   : "bg-[--icewhite] dark-shadow "
//               }`}
//             />
//             <textarea
//               rows={5}
//               placeholder={language === "DE" ? "Nachricht" : "Message"}
//               name="message"
//               value={message}
//               required
//               onFocus={() => {
//                 handleInputFocus("message");
//                 setLastUpdatedField("message");
//               }}
//               onMouseEnter={() => {
//                 handleInputFocus("message");
//                 setLastUpdatedField("message");
//               }}
//               onChange={handleInputChange}
//               className={`${
//                 theme === "dark"
//                   ? "bg-[--blackblue] dark-mode-shadow"
//                   : "bg-[--icewhite] dark-shadow"
//               }`}
//             />
//             <div className="privacy-checkbox flex gap-16">
//               <label
//                 className="block w-2 h-2 cursor-pointer"
//                 htmlFor="checkbox-label"
//               >
//                 <input
//                   type="checkbox"
//                   required
//                   name="checkbox-label"
//                   id="checkbox-label"
//                 />
//                 <span className="checkbox"></span>
//               </label>
//               <p>
//                 {language === "DE"
//                   ? "Ich stimme der Datenschutzerklärung zu"
//                   : "I agree to the privacy policy"}
//               </p>
//             </div>
//             <p>
//               {language === "DE"
//                 ? "Ihre Daten werden vertraulich behandelt"
//                 : "Your data will be treated confidentially"}
//             </p>
//             <Button
//               value={language === "DE" ? "Senden" : "Send"}
//               //iconSVG={null}
//               buttoncolor="blue"
//               iconcolor="white"
//               type="submit"
//               elementType="input"
//             />
       
//           </form>
//         </div>
//       </section>
//     </React.Fragment>
//   );
// };

// export default Contact;