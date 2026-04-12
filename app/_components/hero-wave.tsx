const wavePaths = [
  "M0 314 C160 260 320 368 480 314 S800 260 960 314 S1280 368 1440 314 C1600 260 1760 368 1920 314 S2240 260 2400 314 S2720 368 2880 314",
  "M0 286 C180 230 300 322 480 286 S780 232 960 286 S1260 342 1440 286 C1620 230 1740 322 1920 286 S2220 232 2400 286 S2700 342 2880 286",
  "M0 342 C140 386 340 294 480 342 S820 386 960 342 S1300 294 1440 342 C1580 386 1780 294 1920 342 S2260 386 2400 342 S2740 294 2880 342"
];

export default function HeroWave() {
  return (
    <div className="hero-wave" aria-hidden="true">
      <svg className="hero-wave__layer hero-wave__layer--back" viewBox="0 0 2880 430" preserveAspectRatio="none">
        <path className="hero-wave__fill" d={`${wavePaths[1]} L2880 0 L0 0 Z`} />
        <path className="hero-wave__line" d={wavePaths[1]} />
      </svg>
      <svg className="hero-wave__layer hero-wave__layer--middle" viewBox="0 0 2880 430" preserveAspectRatio="none">
        <path className="hero-wave__fill" d={`${wavePaths[0]} L2880 0 L0 0 Z`} />
        <path className="hero-wave__line" d={wavePaths[0]} />
      </svg>
      <svg className="hero-wave__layer hero-wave__layer--front" viewBox="0 0 2880 430" preserveAspectRatio="none">
        <path className="hero-wave__line" d={wavePaths[2]} />
      </svg>
    </div>
  );
}
