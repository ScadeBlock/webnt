"use client";

import { useEffect, useState, useRef } from "react";
import { Utensils, Coffee, Fish, Soup, Beef, Cookie, Apple, Leaf, Wheat, Citrus, ChefHat, CookingPot } from "lucide-react";

const cuisines = [
  { name: "Thắng cố", category: "Đặc sản", icon: Soup },
  { name: "Cá suối nướng", category: "Hải sản", icon: Fish },
  { name: "Xôi ngũ sắc", category: "Truyền thống", icon: Wheat },
  { name: "Gà đen", category: "Đặc sản", icon: Beef },
  { name: "Rau rừng", category: "Rau củ", icon: Leaf },
  { name: "Mận Tam Hoa", category: "Trái cây", icon: Apple },
  { name: "Bánh dày", category: "Bánh", icon: Cookie },
  { name: "Rượu táo mèo", category: "Đồ uống", icon: Coffee },
  { name: "Thịt trâu gác bếp", category: "Đặc sản", icon: Beef },
  { name: "Măng rừng", category: "Rau củ", icon: Citrus },
  { name: "Cơm lam", category: "Truyền thống", icon: ChefHat },
  { name: "Canh da trâu", category: "Món nước", icon: CookingPot },
];

export function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
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
    <section id="integrations" ref={sectionRef} className="relative overflow-hidden">
      {/* Header */}
      <div className="relative z-10 pt-32 lg:pt-40 text-center">
        <span className={`inline-flex items-center gap-4 text-sm text-muted-foreground mb-8 transition-all duration-700 justify-center ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <span className="w-12 h-px bg-foreground/20" />
          Ẩm thực
          <span className="w-12 h-px bg-foreground/20" />
        </span>

        <h2 className={`text-5xl md:text-6xl lg:text-[100px] font-display tracking-tight leading-[0.95] transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          Hương vị
          <br />
          <span className="text-muted-foreground">Tây Bắc.</span>
        </h2>

        <p className={`mt-8 text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto transition-all duration-1000 delay-100 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          Khám phá nền ẩm thực độc đáo của vùng cao Tây Bắc với những món ăn truyền thống 
          được chế biến từ nguyên liệu tươi ngon của núi rừng.
        </p>
      </div>

      {/* Full-width image */}
      <div className={`relative left-1/2 -translate-x-1/2 w-screen -mt-16 transition-all duration-1000 delay-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop"
          alt="Ẩm thực Tây Bắc"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Cuisine grid */}
      <div className="relative z-10 mt-0 lg:-mt-24 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {cuisines.map((cuisine, index) => {
            const IconComponent = cuisine.icon;
            return (
              <div
                key={cuisine.name}
                className={`group relative overflow-hidden p-6 lg:p-8 border transition-all duration-500 cursor-default ${
                  hoveredIndex === index
                    ? "border-foreground bg-foreground/[0.04] scale-[1.02]"
                    : "border-foreground/10 hover:border-foreground/30"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  transitionDelay: `${index * 30 + 300}ms`,
                }}
                onMouseEnter={(e) => {
                  setHoveredIndex(index);
                  const rect = e.currentTarget.getBoundingClientRect();
                  setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setMousePos(null);
                }}
              >
                {/* Cursor-following halo */}
                {hoveredIndex === index && mousePos && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-0"
                    style={{
                      background: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(103, 232, 249, 0.15) 0%, transparent 70%)`,
                    }}
                  />
                )}
                {/* Category tag */}
                <span className={`absolute top-3 right-3 text-[10px] px-2 py-0.5 transition-colors ${
                  hoveredIndex === index
                    ? "bg-foreground text-background"
                    : "bg-foreground/10 text-muted-foreground"
                }`}>
                  {cuisine.category}
                </span>

                {/* Icon */}
                <div className={`w-10 h-10 mb-6 flex items-center justify-center transition-colors ${
                  hoveredIndex === index ? "text-[#67e8f9]" : "text-foreground/60"
                }`}>
                  <IconComponent className="w-6 h-6" />
                </div>

                <span className="font-medium block">{cuisine.name}</span>

                {/* Animated underline */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground/20 overflow-hidden">
                  <div className={`h-full bg-foreground transition-all duration-500 ${
                    hoveredIndex === index ? "w-full" : "w-0"
                  }`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom stats row */}
        <div className={`flex flex-wrap items-center justify-between gap-8 pt-12 border-t border-foreground/10 transition-all duration-1000 delay-500 pb-32 lg:pb-40 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <div className="flex flex-wrap gap-12">
            {[
              { value: "50+", label: "Món đặc sản" },
              { value: "5", label: "Dân tộc ẩm thực" },
              { value: "100%", label: "Nguyên liệu tươi" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-3">
                <span className="text-3xl font-display">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          <a href="#" className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            Xem tất cả món ăn
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
