/* eslint-disable @next/next/no-img-element */
"use client";

import { NextPage } from 'next';
import React, { useRef } from "react";
import styles from "@/app/styles/project.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Scrollbar } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

interface ProjectPageProps {
  handleProjectClick: (project: string) => void;
}

const ProjectPage: NextPage<ProjectPageProps> = ({ handleProjectClick }) => {
  const handleDetailClick = (project: string) => {
    handleProjectClick(project);
  };

  const scrollToBox4 = () => {
    const box4Element = document.getElementById("box4");
    if (box4Element) {
      box4Element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    { name: "TOURMAPS", imageUrl: "/tourmapsmain.png", alt: "TOURMAPS", description: "Solo project" },
    { name: "BOARD", imageUrl: "/boardmain.png", alt: "BOARD", description: "Solo project" },
    { name: "ERP-PROJECT", imageUrl: "/erp.png", alt: "ERPPROJECT", description: "Team project" },
    { name: "ERP-PROJECTgg", imageUrl: "/tourmapsmain.png", alt: "ERPPROJECT", description: "Team project" },
    { name: "ERP-PROJECT", imageUrl: "/erp.png", alt: "ERPPROJECT", description: "Team project" },
    { name: "ERP-PROJECTgg", imageUrl: "/tourmapsmain.png", alt: "ERPPROJECT", description: "Team project" }
  ];

  SwiperCore.use([Navigation, Scrollbar]);

  return (
    <div className={styles.project}>
      <Swiper
        className={styles.swiperslider}
        spaceBetween={0} // 슬라이스 사이 간격
        slidesPerView={3} // 보여질 슬라이스 수
        navigation={true} // prev, next button
        scrollbar={true}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <Image
                  src={project.imageUrl}
                  alt={project.alt}
                  width={300}
                  height={300}
                  onClick={() => handleDetailClick(project.name)}
                />
              </div>
              <div className={styles.caption}>
                <p>0{index + 1}</p>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                <a
                  href="#box4"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDetailClick(project.name);
                    scrollToBox4(); // 자세히 보기 클릭 시 box4로 스크롤
                  }}
                >
                  자세히 보기 &gt;
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectPage;
