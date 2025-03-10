"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import LandingPage from "@/app/LandingPage";

export default function Loader() {
  const [showContent, setShowContent] = useState(false); // Controls transition to landing page
  const [showSplitting, setShowSplitting] = useState(true); // Controls half-ellipse splitting
  const [ellipseAnimationStarted, setEllipseAnimationStarted] = useState(false); // Controls ellipse animation
  const [logoAnimationStarted, setLogoAnimationStarted] = useState(false); // Controls logo animation

  useEffect(() => {
    // Start ellipse animation immediately
    setEllipseAnimationStarted(true);
    // Hide splitting ellipses after their animation
    setTimeout(() => setShowSplitting(false), 1500); // 1.5s total for splitting
    // Start logo animation after ellipse animation ends (5s)
    setTimeout(() => setLogoAnimationStarted(true), 5000); // 5s delay
    // Transition to landing page after all animations with a buffer
    setTimeout(() => setShowContent(true), 7000); // Total duration: 7s + 200ms buffer
  }, []);

  const handleEllipseAnimationEnd = (event) => {
    if (event.animationName === "moveEllipse") {
      setLogoAnimationStarted(true); // Trigger logo animation on ellipse completion
    }
  };

  return (
    <>
      {!showContent ? (
        <div className="loader-container">
          {/* Frame Image */}
          <Image
            src="/frame.png"
            alt="Frame Logo"
            width={350}
            height={317}
            className="main-logo"
          />
          {/* Half-Ellipses and Logo Container */}
          {showSplitting && (
            <div className="animation-bottom">
              <Image
                src="/Ellipse1.png"
                alt="left"
                width={28}
                height={27}
                className="left-ellipse"
              />
              <Image
                src="/logo.svg"
                alt="Gradhub Logo"
                width={150}
                height={50}
                className="gradhubLogo"
              />
              <Image
                src="/Ellipse2.png"
                alt="Right Half-Ellipse"
                width={28}
                height={27}
                className="right-ellipse"
              />
            </div>
          )}
          {/* Moving Ellipse */}
          <Image
            src="/ellipse.png"
            alt="Moving Ellipse"
            width={28}
            height={27}
            className={`ellipse ${ellipseAnimationStarted ? "animate" : ""}`}
            onAnimationEnd={handleEllipseAnimationEnd} // Detect ellipse animation end
          />
        </div>
      ) : (
        <LandingPage />
      )}
    </>
  );
}
