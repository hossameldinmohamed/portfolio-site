import bannerBg from "../assets/img/bannerbg.webp";
import React, { useRef } from "react";
import { certificatesData } from "../assets/lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import { ToastContainer } from "react-toastify";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

const ProjectSlider: React.FC = () => {
  const { ref } = useSectionInView("Certificates");
  const { language } = useLanguage();
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["1 1", "1.3 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <React.Fragment>
      <section
        className="skill-banner relative overflow-x-clip h-100% w-full flex flex-col gap-2"
        id="certificates"
        ref={ref}
      >
        <ToastContainer
          className="w-max text-3xl block p-3"
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div
          className="quote-outer-container bg-[--darkblue] -rotate-3 flex justify-center items-center scale-110 pt-32 pb-32 max-lg:pt-16 max-lg:pb-16 max-lg:-ml-44 max-lg:-mr-44 max-lg:scale-100"
          style={{
            backgroundImage: `url(${bannerBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="title-container flex flex-col gap-6 mb-24 rotate-3 justify-between items-center max-lg:w-[100vw]">
            <motion.div
              ref={animationReference}
              style={{
                scale: scaleProgess,
                opacity: opacityProgess,
                textAlign: "center",
              }}
            >
              <p className="text-[--white] mt-16 mb-6">
                <span className="text-[--orange]">&lt;</span>
                {language === "DE" ? "Zertifikate" : "Certificates"}
                <span className="text-[--orange]">/&gt;</span>
              </p>
              <h2 className="text-[--white] mb-16">
                {language === "DE" ? "Meine Zertifikate" : "My Certificates"}
              </h2>
            </motion.div>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay, Pagination]}
              className="w-[60vw] max-lg:hidden min-[1921px]:px-96"
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
            >
              {certificatesData.map((certificate, index: number) => (
                <SwiperSlide
                  key={index}
                  className="quote-outer-container bg-[--darkblue] text-[--white] flex flex-row justify-between items-center rounded-2xl p-20 text-left max-lg:hidden "
                >
                  <div className="w-2/3 flex flex-col gap-4">
                    <h2>{language === "DE" ? certificate.title.de : certificate.title.en}</h2>
                    <p className="text-white">
                      {language === "DE" ? certificate.description.de : certificate.description.en}
                    </p>
                    <p className="text-white">
                      <strong>{language === "DE" ? "Datum" : "Date"}:</strong> {language === "DE" ? certificate.date.de : certificate.date.en}
                    </p>
                    <p className="text-white">
                      <strong>{language === "DE" ? "Zertifikat-ID" : "Certificate ID"}:</strong> {certificate.certificateId}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {certificatesData.map((certificate, index: number) => (
              <article
                key={index}
                className="bg-darkblue flex flex-row gap-10 w-[80%] h-full border-lightblue border-[0.4rem] p-8 rounded-xl mb-10 min-[1024px]:hidden max-lg:w-[90%]"
              >
                <div className="w-2/3 flex flex-col gap-4">
                  <h2 className="text-white">{language === "DE" ? certificate.title.de : certificate.title.en}</h2>
                  <p className="text-white max-lg:text-4xl">
                    {language === "DE" ? certificate.description.de : certificate.description.en}
                  </p>
                  <p className="text-white">
                    <strong>{language === "DE" ? "Datum" : "Date"}:</strong> {language === "DE" ? certificate.date.de : certificate.date.en}
                  </p>
                  <p className="text-white">
                    <strong>{language === "DE" ? "Zertifikat-ID" : "Certificate ID"}:</strong> {certificate.certificateId}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ProjectSlider;
