"use client";

import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  "Khám phá": [
    { name: "Điểm đến", href: "#features" },
    { name: "Hành trình", href: "#how-it-works" },
    // { name: "Dịch vụ tour", href: "#pricing" },
    { name: "Ẩm thực", href: "#integrations" },
  ],
  "Thông tin": [
    { name: "Vị trí địa lý", href: "#infra" },
    { name: "Thời tiết", href: "#" },
    { name: "Giao thông", href: "#" },
    { name: "Lưu trú", href: "#" },
  ],
  // "Liên hệ": [
  //   { name: "Về chúng tôi", href: "#" },
  //   { name: "Hỗ trợ", href: "#" },
  //   { name: "Góp ý", href: "#" },
  // ],
  // "Pháp lý": [
  //   { name: "Điều khoản", href: "#" },
  //   { name: "Bảo mật", href: "#" },
  //   { name: "An toàn", href: "#security" },
  // ],
};

const socialLinks = [
  // { name: "Facebook", href: "#" },
  // { name: "Instagram", href: "#" },
  // { name: "YouTube", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="relative bg-card">
      {/* Panoramic banner image */}
      <div className="relative w-full h-[340px] md:h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2940&auto=format&fit=crop"
          alt="Đèo Ô Quy Hồ"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient fade to background at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card" />
        {/* Subtle dark vignette on sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-card/40 via-transparent to-card/40" />
      </div>

      {/* Footer content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display text-foreground">Ô Quy Hồ</span>
                <span className="text-xs text-muted-foreground">Lai Châu</span>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs text-sm">
                Đèo Ô Quy Hồ - Thiên đường trên mây, một trong tứ đại đỉnh đèo Tây Bắc Việt Nam.
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium text-foreground mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 Hoàng Đình Đạt & Lê Nguyễn Thành Luân.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4ade80]" />
              Sản phẩm STEM - Tin học
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
