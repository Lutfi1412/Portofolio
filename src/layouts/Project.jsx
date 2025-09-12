import ProjectCard from "./../../src/components/ProjectCard.jsx";
import ProjectsModel from "./../../src/models/Projects.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

export default function Project() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
        Featured{" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Projects
        </span>
      </h2>

      <div className="space-y-12">
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Web Projects</h2>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{
              delay: 4000,
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
            {ProjectsModel.map((project, index) =>
              project.web.map((item, itemIndex) => (
                <SwiperSlide
                  key={`mobile-${index}-${itemIndex}`} // dijamin unik
                  className="!h-auto flex items-stretch"
                >
                  <ProjectCard project={item} />
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-6">
            Mobile Projects
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
            {ProjectsModel.map((project, index) =>
              project.mobile.map((item, itemIndex) => (
                <SwiperSlide
                  key={`mobile-${index}-${itemIndex}`} // dijamin unik
                  className="!h-auto flex items-stretch"
                >
                  <ProjectCard project={item} />
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">
            Backend Projects
          </h2>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{
              delay: 4000,
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
            {ProjectsModel.map((project, index) =>
              project.be.map((item, itemIndex) => (
                <SwiperSlide
                  key={`mobile-${index}-${itemIndex}`} // dijamin unik
                  className="!h-auto flex items-stretch"
                >
                  <ProjectCard project={item} />
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">
            Machine Learning Projects
          </h2>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{
              delay: 4000,
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
            {ProjectsModel.map((project, index) =>
              project.ml.map((item, itemIndex) => (
                <SwiperSlide
                  key={`mobile-${index}-${itemIndex}`} // dijamin unik
                  className="!h-auto flex items-stretch"
                >
                  <ProjectCard project={item} />
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
