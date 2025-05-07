import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2017 - 2019"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">SMP Negeri 6 Samarinda</h3>
            <p>Menjadi Sekertaris Umum Organisasi Siswa Intra Sekolah, dan Menjadi anggota Paskibraka.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="2020 - 2022" iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }} icon={<FontAwesomeIcon icon={faBriefcase} />}>
            <h3 className="vertical-timeline-element-title">SMA Negeri 2 Samarinda</h3>
            <p>Menjadi anggota Majelis Perwakilan Kelas</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="2022 - Present" iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }} icon={<FontAwesomeIcon icon={faBriefcase} />}>
            <h3 className="vertical-timeline-element-title">Universitas Mulawarman</h3>
            <h4 className="vertical-timeline-element-subtitle">S1 Sistem Informasi</h4>
            <p>
              Menjadi anggota Himpunan Mahasiswa Sistem Informasi (INFORSA), Menjadi Praktisi atau Asisten laboratorium mata kuliah pemrograman web, dan Menjadi mahasiswa kampus merdeka program studi independen Pemrograman Web E-Commerce di
              PT. Arkatama Multi Solusindo
            </p>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Tokyo, Japan</h4>
            <p>
              Automation, Data Governance, Statistical Analysis
            </p>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
