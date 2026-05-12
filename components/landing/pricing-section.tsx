"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Check, Zap } from "lucide-react";

const tours = [
  {
    name: "Khám phá",
    description: "Dành cho du khách tự túc",
    price: { daily: 500, weekend: 400 },
    features: [
      "Bản đồ chi tiết",
      "Điểm check-in nổi bật",
      "Gợi ý lịch trình 1 ngày",
      "Thông tin ẩm thực",
      "Số điện thoại khẩn cấp",
    ],
    cta: "Tải miễn phí",
    highlight: false,
    isFree: true,
  },
  {
    name: "Trải nghiệm",
    description: "Tour có hướng dẫn viên",
    price: { daily: 1500, weekend: 1200 },
    features: [
      "Hướng dẫn viên địa phương",
      "Xe đưa đón",
      "Ăn trưa đặc sản",
      "Bảo hiểm du lịch",
      "Check-in cổng trời",
      "Thăm bản làng",
      "Quà tặng lưu niệm",
    ],
    cta: "Đặt tour ngay",
    highlight: true,
    isFree: false,
  },
  {
    name: "Phiêu lưu",
    description: "Tour cắm trại qua đêm",
    price: { daily: null, weekend: null },
    features: [
      "Tất cả dịch vụ Trải nghiệm",
      "Lều trại cao cấp",
      "Tiệc BBQ buổi tối",
      "Săn mây bình minh",
      "Hướng dẫn chụp ảnh",
      "2 ngày 1 đêm",
      "Nhóm tối đa 10 người",
      "Phục vụ riêng",
    ],
    cta: "Liên hệ tư vấn",
    highlight: false,
    isFree: false,
  },
];

export function PricingSection() {
  const [isWeekend, setIsWeekend] = useState(false);
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
    <section id="pricing" ref={sectionRef} className="relative py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-3 text-sm text-muted-foreground mb-8">
              <span className="w-12 h-px bg-foreground/30" />
              Dịch vụ
            </span>
            <h2 className={`text-5xl md:text-6xl lg:text-[100px] font-display tracking-tight leading-[0.95] transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              Tour du lịch
              <br />
              <span className="text-stroke">trọn gói.</span>
            </h2>
          </div>
          
          <div className="lg:col-span-5 relative p-0 h-96 lg:h-auto">
            {/* Image */}
            <div className={`absolute inset-0 pointer-events-none transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}>
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2940&auto=format&fit=crop"
                alt="Tour du lịch"
                className="w-full h-full object-cover object-center rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Tour cards */}
        <div className="relative">
          <div className="grid lg:grid-cols-3 gap-4 lg:gap-0">
            {tours.map((tour, index) => (
              <div
                key={tour.name}
                className={`relative bg-background border transition-all duration-700 ${
                  tour.highlight 
                    ? "border-foreground lg:-mx-2 lg:z-10 lg:scale-105" 
                    : "border-foreground/10 lg:first:-mr-2 lg:last:-ml-2"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Popular badge */}
                {tour.highlight && (
                  <div className="absolute -top-4 left-8 right-8 flex justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-xs uppercase tracking-widest">
                      <Zap className="w-3 h-3" />
                      Phổ biến nhất
                    </span>
                  </div>
                )}

                <div className="p-8 lg:p-10">
                  {/* Tour header */}
                  <div className="mb-8 pb-8 border-b border-foreground/10">
                    <span className="text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-display mt-2">{tour.name}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{tour.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    {tour.isFree ? (
                      <span className="text-4xl font-display">Miễn phí</span>
                    ) : tour.price.daily !== null ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl lg:text-6xl font-display">
                          {(isWeekend ? tour.price.weekend : tour.price.daily)?.toLocaleString('vi-VN')}K
                        </span>
                        <span className="text-muted-foreground text-sm">/người</span>
                      </div>
                    ) : (
                      <span className="text-4xl font-display">Liên hệ</span>
                    )}
                    {!tour.isFree && tour.price.daily !== null && (
                      <p className="text-xs text-muted-foreground mt-2">
                        {isWeekend ? "Giá cuối tuần" : "Giá ngày thường"}
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-10">
                    {tour.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#4ade80] mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${
                      tour.highlight
                        ? "bg-foreground text-background hover:bg-foreground/90"
                        : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                    }`}
                  >
                    {tour.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className={`mt-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pt-12 border-t border-foreground/10 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#4ade80]" />
              Đặt trước 3 ngày
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#4ade80]" />
              Hủy miễn phí 24h
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#4ade80]" />
              Thanh toán linh hoạt
            </span>
          </div>
          <a href="#" className="text-sm underline underline-offset-4 hover:text-foreground transition-colors">
            So sánh tất cả gói tour
          </a>
        </div>
      </div>

      <style jsx>{`
        .text-stroke {
          -webkit-text-stroke: 1.5px currentColor;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
}
