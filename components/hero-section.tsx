"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const carRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (carRef.current) {
        const rect = carRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const rotateX = (e.clientY - centerY) / 15
        const rotateY = (e.clientX - centerX) / 15

        carRef.current.style.transform = `perspective(1200px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateZ(50px)`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-accent/10"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-slide-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              Shine Beyond
              <span className="text-accent block">Clean</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Experience the ultimate in luxury car care at Kang Plaza. Our premium services transform your vehicle into
              a masterpiece of cleanliness and shine.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group">
                Book Your Service
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                View Packages
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div
                ref={carRef}
                className="relative w-96 h-96 transition-transform duration-300 ease-out"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1200px",
                }}
              >
                {/* Car Base/Chassis - Lower and wider for sports car look */}
                <div
                  className="absolute inset-x-4 bottom-16 h-20 bg-gradient-to-r from-red-800 via-red-700 to-red-800 rounded-xl shadow-2xl"
                  style={{ transform: "translateZ(-20px)" }}
                >
                  <div className="absolute inset-2 bg-red-900 rounded-lg opacity-80"></div>
                </div>

                {/* Main Car Body - Sleeker, lower profile for sports car */}
                <div
                  className="absolute inset-x-2 top-20 bottom-20 bg-gradient-to-br from-red-600 via-red-500 to-red-700 rounded-2xl shadow-2xl"
                  style={{ transform: "translateZ(0px)" }}
                >
                  {/* Aggressive body lines */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent rounded-2xl"></div>

                  {/* Side air vents */}
                  <div className="absolute left-4 top-1/2 w-8 h-2 bg-slate-900 rounded-sm"></div>
                  <div className="absolute left-4 top-1/2 mt-3 w-8 h-2 bg-slate-900 rounded-sm"></div>
                  <div className="absolute right-4 top-1/2 w-8 h-2 bg-slate-900 rounded-sm"></div>
                  <div className="absolute right-4 top-1/2 mt-3 w-8 h-2 bg-slate-900 rounded-sm"></div>

                  {/* Racing stripes */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-full bg-white/20 rounded-2xl"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-full bg-white/40 rounded-2xl"></div>
                </div>

                {/* Windshield - More angled for sports car */}
                <div
                  className="absolute inset-x-6 top-24 h-24 bg-gradient-to-b from-slate-800/80 via-slate-700/60 to-slate-900/80 rounded-lg shadow-inner backdrop-blur-sm"
                  style={{ transform: "translateZ(25px) rotateX(-10deg)" }}
                >
                  <div className="absolute inset-0 border-2 border-slate-800 rounded-lg"></div>
                </div>

                {/* Hood - More aggressive with air intake */}
                <div
                  className="absolute inset-x-4 top-16 h-16 bg-gradient-to-b from-red-500 to-red-600 rounded-t-2xl shadow-lg"
                  style={{ transform: "translateZ(30px)" }}
                >
                  {/* Hood scoop/air intake */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-slate-900 rounded-lg shadow-inner"></div>
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-slate-800 rounded-md"></div>
                </div>

                {/* Aggressive Headlights - Sharper, more angular */}
                <div
                  className="absolute top-18 left-0 w-16 h-6 bg-gradient-to-r from-blue-200 to-white rounded-r-full shadow-lg"
                  style={{ transform: "translateZ(35px)" }}
                >
                  <div className="absolute inset-1 bg-blue-100 rounded-r-full"></div>
                  <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full animate-pulse"></div>
                </div>
                <div
                  className="absolute top-18 right-0 w-16 h-6 bg-gradient-to-l from-blue-200 to-white rounded-l-full shadow-lg"
                  style={{ transform: "translateZ(35px)" }}
                >
                  <div className="absolute inset-1 bg-blue-100 rounded-l-full"></div>
                  <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full animate-pulse"></div>
                </div>

                {/* Front Splitter/Bumper - More aggressive */}
                <div
                  className="absolute top-28 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-lg shadow-lg"
                  style={{ transform: "translateX(-50%) translateZ(40px)" }}
                >
                  <div className="absolute inset-1 bg-gradient-to-r from-slate-800 to-slate-700 rounded-md"></div>
                  {/* Front splitter fins */}
                  <div className="absolute -bottom-1 left-2 w-4 h-2 bg-slate-800 rounded-b-lg"></div>
                  <div className="absolute -bottom-1 right-2 w-4 h-2 bg-slate-800 rounded-b-lg"></div>
                </div>

                {/* Performance Wheels - Larger, more detailed */}
                <div
                  className="absolute bottom-12 left-2 w-24 h-24 bg-slate-900 rounded-full shadow-2xl"
                  style={{ transform: "translateZ(-10px)" }}
                >
                  <div className="absolute inset-2 bg-slate-700 rounded-full">
                    <div className="absolute inset-2 bg-slate-500 rounded-full animate-spin">
                      {/* 5-spoke wheel design */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-slate-300 rounded-full rotate-0"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-slate-300 rounded-full rotate-72"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-slate-300 rounded-full rotate-144"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-slate-300 rounded-full rotate-216"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-slate-300 rounded-full rotate-288"></div>
                    </div>
                  </div>
                  {/* Performance tire with red brake caliper */}
                  <div className="absolute inset-0 border-4 border-slate-800 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-2 bg-red-600 rounded-sm"></div>
                </div>
                <div
                  className="absolute bottom-12 right-2 w-24 h-24 bg-slate-900 rounded-full shadow-2xl"
                  style={{ transform: "translateZ(-10px)" }}
                >
                  <div className="absolute inset-2 bg-slate-700 rounded-full">
                    <div className="absolute inset-2 bg-slate-500 rounded-full animate-spin">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-slate-300 rounded-full rotate-0"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-slate-300 rounded-full rotate-72"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-slate-300 rounded-full rotate-144"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-slate-300 rounded-full rotate-216"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-slate-300 rounded-full rotate-288"></div>
                    </div>
                  </div>
                  <div className="absolute inset-0 border-4 border-slate-800 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-2 bg-red-600 rounded-sm"></div>
                </div>

                {/* Rear Spoiler */}
                <div
                  className="absolute top-12 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-red-700 rounded-sm shadow-lg"
                  style={{ transform: "translateX(-50%) translateZ(20px)" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600 rounded-sm"></div>
                </div>

                {/* Water Droplets with 3D positioning */}
                <div
                  className="absolute -top-4 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce shadow-lg"
                  style={{ transform: "translateZ(50px)" }}
                ></div>
                <div
                  className="absolute -top-2 right-1/3 w-2 h-2 bg-blue-300 rounded-full animate-bounce delay-300 shadow-md"
                  style={{ transform: "translateZ(45px)" }}
                ></div>
                <div
                  className="absolute top-1/4 -right-2 w-2 h-2 bg-blue-200 rounded-full animate-bounce delay-500 shadow-md"
                  style={{ transform: "translateZ(40px)" }}
                ></div>

                {/* Soap Bubbles with 3D effect */}
                <div
                  className="absolute -left-8 top-1/3 w-8 h-8 bg-white/60 rounded-full animate-float shadow-lg"
                  style={{ transform: "translateZ(60px)" }}
                ></div>
                <div
                  className="absolute -right-6 bottom-1/4 w-6 h-6 bg-white/40 rounded-full animate-float delay-1000 shadow-md"
                  style={{ transform: "translateZ(55px)" }}
                ></div>
                <div
                  className="absolute left-1/2 -bottom-4 w-4 h-4 bg-white/50 rounded-full animate-float delay-500 shadow-md"
                  style={{ transform: "translateZ(50px)" }}
                ></div>
              </div>

              {/* Enhanced 3D Reflection */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-80 h-12 bg-gradient-to-r from-transparent via-red-500/20 to-transparent rounded-full blur-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
