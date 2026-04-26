// HID Website UI Kit · components
// Source: johnboykeano/holditdown index.html

const { useState } = React;

function Brand({ logoSrc = "../../assets/holditdown-logo-clean.png",
                 flyerSrc = "../../assets/HID_FLYER.png",
                 tagline = "Unblur Your Head.",
                 meta = "Johnboy's Mind · Vol.1 · holditdown.lol" }) {
  return (
    <div className="brand">
      <div className="brand-inner">
        <div className="brand-left">
          <img src={logoSrc} alt="Hold It Down" className="logo-img" />
          <p className="tagline">{tagline}</p>
          <p className="meta">{meta}</p>
        </div>
        <img src={flyerSrc} alt="HID — Dropping Soon" className="flyer-img" />
      </div>
    </div>
  );
}

function Sticker({ color = "pink", rotate, children }) {
  const style = rotate != null ? { transform: `rotate(${rotate}deg)` } : null;
  return <div className={`sticker ${color}`} style={style}>{children}</div>;
}

function Card({ sticker, stickerColor = "pink", stickerRotate, title, children }) {
  return (
    <div className="card">
      {sticker && <Sticker color={stickerColor} rotate={stickerRotate}>{sticker}</Sticker>}
      <div className="card-body">
        {title && <div className="card-title">{title}</div>}
        {children}
      </div>
    </div>
  );
}

function Chip({ color, active, onClick, children }) {
  const cls = ["chip", color, active ? "is-active" : ""].filter(Boolean).join(" ");
  return <span className={cls} onClick={onClick}>{children}</span>;
}

function ChipRow({ label, items, onPick }) {
  return (
    <div className="influence-section">
      {label && <div className="influence-label">{label}</div>}
      <div className="chips">
        {items.map((it, i) => (
          <Chip key={i} color={it.color} onClick={() => onPick && onPick(it)}>
            {it.label}
          </Chip>
        ))}
      </div>
    </div>
  );
}

function BuildList({ items, onPick }) {
  return (
    <div className="build-list">
      {items.map((it, i) => (
        <div className="build-item" key={i} onClick={() => onPick && onPick(it)}>
          <span className="build-num">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <div className="build-name">{it.name}</div>
            <div className="build-desc">{it.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function BrainRow({ label, children }) {
  return (
    <div className="brain-row">
      <div className="brain-label">{label}</div>
      <div className="brain-text">{children}</div>
    </div>
  );
}

function BigQuote({ children, attribution }) {
  return (
    <div className="big-quote">
      "{children}"
      {attribution && <> — {attribution}</>}
    </div>
  );
}

function SiteFooter({ year = 2026, location = "Manchester · 0161",
                      stampLabel = "Hold It Down",
                      faviconSrc = "../../favicon.svg" }) {
  return (
    <div className="site-footer">
      <span>© {year} a hold it down productions dub</span>
      <span>{location}</span>
      <span className="stamp">
        <img src={faviconSrc} width="20" height="20" alt="" aria-hidden="true" style={{display:"block"}} />
        {stampLabel}
      </span>
    </div>
  );
}

Object.assign(window, {
  Brand, Sticker, Card, Chip, ChipRow, BuildList, BrainRow, BigQuote, SiteFooter,
});
