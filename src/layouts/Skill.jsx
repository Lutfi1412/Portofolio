import SkillCard from "./../../src/components/SkillCard.jsx";
import skills from "./../../src/models/Skills.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

export default function Skill() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
        My{" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills
        </span>
      </h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerGroup={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index} className="!h-auto flex items-stretch">
            <SkillCard skill={skill} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
