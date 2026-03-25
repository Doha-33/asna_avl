"use client";

import { motion } from "framer-motion";
import { Truck, MousePointer2, Package, Smartphone, Gauge, Shield, MapPin, Clock, Users, Zap, Settings, BarChart } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { useDemoModal } from "../DemoModalContext";
import Link from "next/link";

export const Hero = () => {
  const { t, language } = useLanguage();
  const { openDemoModal } = useDemoModal();
  const bookDemoLink = `/${language}/pricing`;

  // Icons for inner orbit (smaller circles)
  const innerIcons = [
    { icon: Smartphone, label: "Mobile App" },
    { icon: Gauge, label: "Real-time" },
    { icon: MapPin, label: "Tracking" },
  ];

  // Icons for outer orbit (larger circles)
  const outerIcons = [
    { icon: Shield, label: "Security" },
    { icon: Clock, label: "24/7 Support" },
    { icon: Users, label: "Team" },
    { icon: Zap, label: "Fast" },
    { icon: Settings, label: "Customize" },
    { icon: BarChart, label: "Analytics" },
  ];

  return (
    <section className="relative pt-20 pb-10 overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/hero.gif')",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-start"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-gradient-dark">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-primary/70 max-w-2xl mb-8 leading-relaxed">
              {t("hero.subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <button onClick={openDemoModal} className="accent-button text-xl px-12 py-5 w-full sm:w-auto text-center rounded-2xl shadow-xl shadow-accent/20">
                {t("hero.cta.start")}
              </button>
              <Link 
                href={`/${language}/solutions`}
                className="outline-button text-xl px-12 py-5 w-full sm:w-auto rounded-2xl border-primary/10 hover:bg-primary/5 transition-all text-center flex items-center justify-center"
              >
                {t("hero.cta.more")}
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10">
                  <Truck className="text-accent w-7 h-7" />
                </div>
                <span className="font-bold text-lg text-primary">{t("hero.stat.vehicles")}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10">
                  <MousePointer2 className="text-accent w-7 h-7" />
                </div>
                <span className="font-bold text-lg text-primary">{t("hero.stat.no_tech")}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10">
                  <Package className="text-accent w-7 h-7" />
                </div>
                <span className="font-bold text-lg text-primary">{t("hero.stat.erp")}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-20 bg-accent/10 blur-[120px] rounded-full animate-pulse" />
            <div className="relative z-10 flex justify-center">
              {/* Orbit Container */}
              <div className="flex-1 flex justify-center items-center w-full py-10">
                <div className="orbit-container w-[85%] sm:w-[80%] md:w-[90%] max-w-[550px] relative">
                  <svg
                    viewBox="0 0 500 500"
                    className="orbit-svg w-full drop-shadow-lg"
                  >
                    {/* Inner Orbit Path */}
                    <circle
                      cx="250"
                      cy="250"
                      r="130"
                      className="orbit-path inner"
                      fill="none"
                      stroke="rgba(27, 22, 100, 0.15)"
                      strokeWidth="2"
                      strokeDasharray="5 5"
                    />
                    
                    {/* Outer Orbit Path */}
                    <circle
                      cx="250"
                      cy="250"
                      r="200"
                      className="orbit-path outer"
                      fill="none"
                      stroke="rgba(27, 22, 100, 0.15)"
                      strokeWidth="2"
                      strokeDasharray="5 5"
                    />

                    {/* Center Text with Brand */}
                    <circle
                      cx="250"
                      cy="250"
                      r="70"
                      fill="white"
                      stroke="rgba(27, 22, 100, 0.1)"
                      strokeWidth="2"
                      className="backdrop-blur"
                    />
                    <text
                      x="250"
                      y="260"
                      textAnchor="middle"
                      className="center-text text-xl font-bold fill-[#1B1664FC]"
                    >
                      ASNA AVL
                    </text>

                    {/* INNER ORBIT - Smaller icons, no rotation */}
                    <g className="inner-orbit-icons">
                      {innerIcons.map((item, idx) => {
                        const angles = [0, 120, 240];
                        const angle = angles[idx];
                        const radian = (angle * Math.PI) / 180;
                        const x = 250 + 130 * Math.cos(radian);
                        const y = 250 + 130 * Math.sin(radian);
                        const Icon = item.icon;
                        
                        return (
                          <foreignObject
                            key={idx}
                            x={x - 35}
                            y={y - 35}
                            width="70"
                            height="70"
                            className="orbit-item inner-item"
                          >
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-white to-primary/5 border-2 border-accent/20 flex items-center justify-center transition-all duration-300 group">
                              <Icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                            </div>
                          </foreignObject>
                        );
                      })}
                    </g>

                    {/* OUTER ORBIT - Icons, no rotation */}
                    <g className="outer-orbit-icons">
                      {outerIcons.map((item, idx) => {
                        const angles = [30, 90, 150, 210, 270, 330];
                        const angle = angles[idx];
                        const radian = (angle * Math.PI) / 180;
                        const x = 250 + 200 * Math.cos(radian);
                        const y = 250 + 200 * Math.sin(radian);
                        const Icon = item.icon;
                        
                        return (
                          <foreignObject
                            key={idx}
                            x={x - 40}
                            y={y - 40}
                            width="80"
                            height="80"
                            className="orbit-item outer-item"
                          >
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-white to-primary/5 border-2 border-primary/20 flex items-center justify-center transition-all duration-300 group">
                              <Icon className="w-9 h-9 text-primary group-hover:scale-110 transition-transform duration-300" />
                            </div>
                          </foreignObject>
                        );
                      })}
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .orbit-path {
          transition: all 0.3s ease;
        }
        
        .orbit-item {
          transition: transform 0.3s ease;
        }
        
        .orbit-item:hover {
          transform: scale(1.05);
        }
        
        .inner-item div,
        .outer-item div {
          backdrop-filter: blur(4px);
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .orbit-item {
          animation: float 3s ease-in-out infinite;
          animation-delay: calc(var(--delay, 0) * 0.2s);
        }
        
        .inner-item {
          --delay: 1;
        }
        
        .outer-item {
          --delay: 2;
        }
      `}</style>
    </section>
  );
};