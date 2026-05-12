"use client";

import { useEffect, useState, useRef } from "react";
import { Shield, MapPin, Phone, AlertTriangle } from "lucide-react";

const safetyFeatures = [
  {
    icon: Shield,
    title: "Đường đèo an toàn",
    description: "Được bảo trì thường xuyên, có biển báo và hộ lan đầy đủ.",
  },
  {
    icon: MapPin,
    title: "Điểm dừng nghỉ",
    description: "Nhiều điểm dừng chân an toàn dọc theo con đèo.",
  },
  {
    icon: Phone,
    title: "Liên lạc khẩn cấp",
    description: "Sóng điện thoại phủ sóng hầu hết các khu vực.",
  },
  {
    icon: AlertTriangle,
    title: "Lưu ý thời tiết",
    description: "Theo dõi dự báo thời tiết trước khi khởi hành.",
  },
];

const tips = ["Mang áo ấm", "Kiểm tra xe", "Đổ đầy xăng", "Cẩn thận sương mù"];

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % safetyFeatures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="security" ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <span className={`inline-flex items-center gap-4 text-sm text-muted-foreground mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <span className="w-12 h-px bg-foreground/20" />
            An toàn
          </span>
          
          {/* Title */}
          <h2 className={`text-5xl md:text-6xl lg:text-[100px] font-display tracking-tight leading-[0.95] mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Hành trình
            <br />
            <span className="text-muted-foreground">an toàn.</span>
          </h2>
          
          {/* Description */}
          <div className={`transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Để có một chuyến đi trọn vẹn, hãy chuẩn bị kỹ và tuân thủ các quy tắc an toàn khi chinh phục đèo Ô Quy Hồ.
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Large visual card */}
          <div className={`lg:col-span-7 relative p-8 lg:p-12 border border-foreground/10 min-h-[400px] overflow-hidden transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            {/* Background image */}
            <div className="absolute inset-0 pointer-events-none items-center justify-end hidden lg:flex">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2948&auto=format&fit=crop"
                alt="Đường đèo an toàn"
                className="absolute h-3/4 w-3/4 object-cover object-right opacity-50 rounded-lg"
              />
            </div>
            
            <div className="relative z-10">
              <span className="text-sm text-muted-foreground">Lưu ý quan trọng</span>
              <div className="mt-8">
                <span className="text-7xl lg:text-8xl font-display">4</span>
                <span className="block text-muted-foreground mt-2">Điều cần nhớ khi đi đèo</span>
              </div>
            </div>
            
            {/* Tips badges */}
            <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-2">
              {tips.map((tip, index) => (
                <span
                  key={tip}
                  className={`px-3 py-1 border border-foreground/10 text-xs text-muted-foreground transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  {tip}
                </span>
              ))}
            </div>
          </div>

          {/* Feature cards stack */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {safetyFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`p-6 border transition-all duration-500 cursor-default ${
                  activeFeature === index 
                    ? "border-foreground/30 bg-foreground/[0.04]" 
                    : "border-foreground/10"
                } ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                style={{ transitionDelay: `${index * 80}ms` }}
                onClick={() => setActiveFeature(index)}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 w-10 h-10 flex items-center justify-center border transition-colors ${
                    activeFeature === index 
                      ? "border-foreground bg-foreground text-background" 
                      : "border-foreground/20"
                  }`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
