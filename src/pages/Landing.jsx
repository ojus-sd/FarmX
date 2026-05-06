import { useNavigate } from "react-router-dom";
import hero from "../assets/image2.png";
import indiaMap from "../assets/india.png";

const cycleCards = [
  {
    title: "Low Farmer Income",
    description:
      "Middlemen often take a large share of profits, leaving farmers with limited earnings.",
  },
  {
    title: "Unfair Market Prices",
    description:
      "Farmers frequently sell crops without knowing real-time market demand and pricing.",
  },
  {
    title: "Limited Buyer Access",
    description:
      "Local selling restricts opportunities and prevents farmers from reaching larger markets.",
  },
];

const metrics = [
  { value: "1.4M+", label: "FARMERS CONNECTED" },
  { value: "₹2.8B+", label: "TRADE FACILITATED" },
  { value: "99.8%", label: "FASTER TRANSACTIONS" },
];

const footerColumns = [
  {
    title: "Marketplace",
    links: ["Sell Crops", "Buy Produce", "Pricing", "Categories"],
  },
  {
    title: "Farmer Support",
    links: ["Crop Insights", "Market Trends", "Guides"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Impact", "Press"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
];

const Landing = ({ setRole }) => {
  const navigate = useNavigate();

  const handleRoleSelect = (selectedRole) => {
    if (setRole) {
      setRole(selectedRole);
    }

    navigate(selectedRole === "farmer" ? "/farmer" : "/buyer");
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-[#0d0b06] text-white font-[Inter]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <button
            onClick={() => navigate("/")}
            className="text-lg font-semibold tracking-tight text-[#dbe3cc] cursor-pointer"
          >
            FarmX
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleRoleSelect("farmer")}
              className="rounded-sm border border-[#6f8f5a]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#d5dfc4] transition-colors hover:bg-[#6f8f5a] hover:text-[#0b1307] cursor-pointer"
            >
              Farmer
            </button>

            <button
              onClick={() => handleRoleSelect("buyer")}
              className="rounded-sm border border-[#6f8f5a]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#d5dfc4] transition-colors hover:bg-[#6f8f5a] hover:text-[#0b1307] cursor-pointer"
            >
              Buyer
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/5">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/hero.mp4"
            poster={hero}
            autoPlay
            muted
            loop
            playsInline
          />

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(20,18,10,0.18),rgba(20,18,10,0.72)_65%,rgba(13,11,6,1))]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,153,91,0.16),transparent_32%),radial-gradient(circle_at_bottom,rgba(0,0,0,0.45),transparent_48%)]" />

          <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.45em] text-[#a6b98d]">
                FARMX MARKETPLACE
              </p>

              <h1 className="mt-6 max-w-3xl text-5xl font-light leading-[0.92] text-[#fbf5e5] sm:text-6xl lg:text-7xl">
                Better Prices for{" "}
                <span className="italic text-[#dbe3cc]">Farmers</span>, Direct
                to Buyers.
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-6 text-white/72 sm:text-base">
                FarmX helps farmers sell directly to buyers without middlemen,
                ensuring fair pricing, faster payments, and better market
                access.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigate("/role-selection")}
                  className="inline-flex items-center gap-3 bg-[#7f9b5b] px-6 py-3 text-sm font-medium text-[#0b1307] transition-transform duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  Explore Marketplace
                  <span>→</span>
                </button>

                <button
                  onClick={() => scrollToSection("metrics")}
                  className="px-1 py-3 text-sm font-medium text-white/78 transition-colors hover:text-white cursor-pointer"
                >
                  View Impact
                </button>
              </div>
            </div>

            {/* RIGHT INFO CARDS */}
          </div>
        </section>

        {/* CHALLENGES */}
        <section
          id="insights"
          className="border-b border-white/5 bg-[#120f08] px-6 py-20 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.45em] text-[#a6b98d]">
                  CHALLENGES FARMERS FACE
                </p>

                <h2 className="mt-5 max-w-2xl text-3xl font-light leading-tight text-[#f5ecdb] sm:text-4xl lg:text-5xl">
                  Farmers work hard, but middlemen reduce their profits.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-white/70 lg:justify-self-end">
                Many farmers struggle with unfair pricing, delayed payments, and
                limited access to larger buyers. FarmX creates a direct and
                transparent marketplace.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {cycleCards.map((card) => (
                <div
                  key={card.title}
                  className="min-h-[220px] border border-[#36422f] bg-[#11150f] p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#7f9b5b]/40 text-sm text-[#a6b98d]">
                    •
                  </div>

                  <h3 className="mt-8 text-2xl font-light text-[#f8f0de]">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/65">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TOOLS */}

        {/* METRICS */}
        <section id="metrics" className="bg-[#0f0b06] px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h2 className="max-w-md text-3xl font-light leading-tight text-[#f6ecd7] sm:text-4xl lg:text-5xl">
                Growth Opportunities for{" "}
                <span className="text-[#a6b98d]">Every Farmer.</span>
              </h2>

              <div className="mt-10 space-y-6 border-l border-[#7f9b5b]/50 pl-5">
                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="text-3xl font-light text-white">
                      {metric.value}
                    </div>

                    <div className="mt-1 text-[10px] uppercase tracking-[0.35em] text-white/55">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[250px] w-full max-w-[380px] justify-self-center overflow-hidden bg-transparent">
              <img
                src={indiaMap}
                alt="Farming regions across India"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer
          id="footer"
          className="border-t border-white/5 bg-[#0d0b06] px-6 py-16 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1.8fr]">
              <div className="max-w-sm">
                <div className="text-2xl font-semibold text-white">FarmX</div>

                <p className="mt-5 text-sm leading-6 text-white/60">
                  Empowering farmers with fair trade, transparent pricing, and
                  direct access to buyers across markets.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {footerColumns.map((column) => (
                  <div key={column.title}>
                    <h3 className="text-[11px] uppercase tracking-[0.35em] text-[#a6b98d]">
                      {column.title}
                    </h3>

                    <ul className="mt-5 space-y-3 text-sm text-white/62">
                      {column.links.map((link) => (
                        <li
                          key={link}
                          className="cursor-pointer hover:underline"
                        >
                          {link}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.3em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
              <span>© 2026 FarmX Global. All rights reserved.</span>

              <div className="flex gap-6">
                <span className="cursor-pointer hover:underline">
                  X (Twitter)
                </span>
                <span className="cursor-pointer hover:underline">LinkedIn</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Landing;
