"use client";

import { useState, useEffect, useRef } from "react";

const activities = [
  { 
    title: "Săn mây bình minh", 
    description: "Thức dậy sớm để ngắm biển mây bồng bềnh lúc 5h sáng."
  },
  { 
    title: "Check-in cổng trời", 
    description: "Điểm check-in nổi tiếng nhất với view 360 độ tuyệt đẹp."
  },
  { 
    title: "Cắm trại qua đêm", 
    description: "Trải nghiệm đêm giữa núi rừng với bầu trời đầy sao."
  },
  { 
    title: "Khám phá bản làng", 
    description: "Giao lưu văn hóa với đồng bào H'Mông, Dao địa phương."
  },
];

export function DevelopersSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="developers" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div
        className={`absolute bottom-0 right-0 w-[55%] h-[85%] pointer-events-none transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%C4%90%C3%A8o_%C3%94_Quy_H%E1%BB%93_2.jfif-SnG4OAm5OuFLarpRjw0PH3bi1qXzAu.jpeg"
          alt="Toàn cảnh đèo Ô Quy Hồ"
          className="w-full h-full object-cover object-left-top rounded-lg"
        />
        {/* Fade left edge */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        {/* Fade top edge */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent" />
      </div>

      {/* All text content sits on top */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Hoạt động
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-[100px] font-display tracking-tight leading-[0.95]">
            Trải nghiệm
            <br />
            <span className="text-muted-foreground">đáng nhớ.</span>
          </h2>
        </div>

        {/* Description + Activities */}
        <div
          className={`max-w-[50%] transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-md">
            Đèo Ô Quy Hồ không chỉ là điểm check-in mà còn là nơi để bạn trải nghiệm 
            những hoạt động thú vị giữa thiên nhiên hùng vĩ.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <div
                key={activity.title}
                className={`transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 50 + 200}ms` }}
              >
                <h3 className="font-medium mb-1">{activity.title}</h3>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
