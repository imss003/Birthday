import React, { useLayoutEffect, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import gsap from "gsap";
import StoryUI from "./StoryUI";
import PhotoAlbum from "./PhotoAlbum";

const BirthdayUI = () => {
  const containerRef = useRef();
  const textRef = useRef();
  const cakeLeftRef = useRef();
  const cakeRightRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from([cakeLeftRef.current, cakeRightRef.current], {
        opacity: 0,
        y: -50,
        scale: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 0.5,
      });

      gsap.from(textRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power2.out",
        delay: 0.8,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full bg-gradient-to-br from-pink-300 via-yellow-200 to-orange-200 text-gray-900 font-mono">
      <div className="min-h-screen w-full flex items-center justify-center relative px-4" ref={containerRef}>
        <div className="relative bg-white/80 backdrop-blur-md border-4 border-white/50 shadow-2xl rounded-3xl p-6 sm:p-10 w-full max-w-4xl flex flex-col items-center gap-6 text-center">
          <div className="absolute top-0 left-0 w-full h-full z-0 opacity-40 pointer-events-none">
            <DotLottieReact
              src="https://lottie.host/ce677923-fa76-453d-a330-40c72f0e0342/m7OcvxWMdp.lottie"
              loop
              autoplay
            />
          </div>

          <div className="relative z-10 flex items-center justify-center gap-4 flex-wrap">
            <div className="w-[80px] sm:w-[120px]" ref={cakeLeftRef}>
              <DotLottieReact
                src="https://lottie.host/b9929c9c-c0a4-4855-9c65-5fa001af43aa/z5HsdBKci5.lottie"
                loop
                autoplay
              />
            </div>
            <p className="text-3xl sm:text-5xl font-bold text-pink-600 drop-shadow-lg" ref={textRef}>
              Happy Birthday Meri Pyari si Bachi
            </p>
            <div className="w-[80px] sm:w-[120px]" ref={cakeRightRef}>
              <DotLottieReact
                src="https://lottie.host/b9929c9c-c0a4-4855-9c65-5fa001af43aa/z5HsdBKci5.lottie"
                loop
                autoplay
              />
            </div>
          </div>

          <p className="text-lg sm:text-xl font-medium text-yellow-700">
            18 ki ho gayi meri pyari si bachi, ab to shadi kar sakte hai na 😁
          </p>
        </div>
      </div>

      {/* Photo album section */}
      <PhotoAlbum />

      {/* Story section */}
      <StoryUI />
    </div>
  );
};

export default BirthdayUI;
