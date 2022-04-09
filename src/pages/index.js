import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import styled from "styled-components";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Particles from "react-tsparticles";
import styles from "./index.module.css";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Articles from "../components/Articles";

const options = {
  fpsLimit: 60,
  particles: {
    links: {
      enable: true,
      distance: 50,
    },
    move: {
      enable: true,
      speed: 3,
      outModes: {
        default: "bounce",
      },
    },
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    size: {
      value: 1,
    },
  },
};

const Background = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const particlesInit = (main) => {};
  const particlesLoaded = (container) => {};
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Background
          id="particleBg"
          init={particlesInit}
          loaded={particlesLoaded}
          options={options}
        />
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Sean's Blog">
      <HomepageHeader />
      <main>
        <Projects />
        <Articles />
        <Education />
      </main>
    </Layout>
  );
}
