
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            attract: {
              distance: 200,
              duration: 0.4,
              factor: 5,
            },
            connect: {
              distance: 80,
              links: {
                opacity: 0.5,
              },
              radius: 60,
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#8b5cf6", "#a855f7", "#9333ea"],
          },
          links: {
            color: "#8b5cf6",
            distance: 150,
            enable: false,
            opacity: 0.4,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: {
              min: 0.5,
              max: 2,
            },
            straight: false,
          },
          number: {
            density: {
              enable: true,
              width: 1920,
              height: 1080,
            },
            value: 40,
          },
          opacity: {
            value: {
              min: 0.2,
              max: 0.45,
            },
            animation: {
              enable: true,
              speed: 0.8,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { 
              min: 1, 
              max: 3 
            },
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
          },
        },
        detectRetina: true,
        smooth: true,
      }}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default ParticleBackground;
