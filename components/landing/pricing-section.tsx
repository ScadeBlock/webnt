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
 
    </section>
  );
}
