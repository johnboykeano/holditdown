// HID Website demo composition — recreates the live Field Manual page.
// Click the build items to "open" them; click chips to highlight them; toast.

const { useState } = React;

const BUILDS = [
  { name: "BuJo App", desc: "First shipped app. Bullet journal method meets ADHD brain. Untangle, photo capture, todo log." },
  { name: "holditdown.lol", desc: "This. Field Manual + second brain + BuJo, folded into one. One URL, everything in it." },
  { name: "Hold It Down Brand", desc: "Design system, aesthetic, identity. HID is the container for everything else." },
  { name: "HID Playlist", desc: "Spotify. The soundtrack to the build. Infrastructure, not background." },
  { name: "Substack", desc: "Writing arm of HID. In progress. The thinking that goes with the making." },
];

const SOUND = [
  { color: "yellow", label: "UK Garage" }, { color: "yellow", label: "Speed Garage" },
  { color: "yellow", label: "Dubstep 140" }, { color: null, label: "Burial" },
  { color: null, label: "The Streets" }, { color: "cyan", label: "Jay Dilla" },
  { color: "cyan", label: "MF Doom" }, { color: "cyan", label: "Madlib" },
  { color: "cyan", label: "Wu-Tang" }, { color: "cyan", label: "GZA · RZA" },
];
const ARCH = [
  { color: null, label: "Brutalism" }, { color: null, label: "Concrete" },
  { color: null, label: "Modernist Furniture" }, { color: null, label: "Post-Modern" },
  { color: "pink", label: "90s Rave Flyers" }, { color: "pink", label: "Post-Apocalyptic" },
];
const FILM = [
  { color: "purple", label: "Adam Curtis" }, { color: "purple", label: "The Thick of It" },
  { color: "purple", label: "House of Dynamite" },
];
const FASHION = [
  { color: "orange", label: "Paninaro" }, { color: "orange", label: "Wu-Tang" },
  { color: "orange", label: "Low Lyf · Ralph Lauren" }, { color: "orange", label: "Clark's + Jamaica" },
  { color: "orange", label: "Ivy League Prep" }, { color: "orange", label: "New York" },
  { color: "orange", label: "Milan" },
];

function Toast({ msg }) {
  if (!msg) return null;
  return (
    <div style={{
      position: "fixed", bottom: 18, left: "50%", transform: "translateX(-50%) rotate(-1deg)",
      background: "var(--ink)", color: "var(--paper-3)", border: "2.5px solid var(--ink)",
      padding: "10px 14px", fontWeight: 900, fontSize: 11, letterSpacing: "0.18em",
      textTransform: "uppercase", boxShadow: "5px 5px 0 var(--pink)", zIndex: 50,
      maxWidth: 360, textAlign: "center",
    }}>{msg}</div>
  );
}

function App() {
  const [toast, setToast] = useState(null);
  function flash(msg) {
    setToast(msg);
    setTimeout(() => setToast(t => (t === msg ? null : t)), 1800);
  }

  return (
    <main>
      <Brand />

      <Card sticker="★ Right Now ★" stickerColor="pink" title="What's Live">
        <p>Just shipped the first app. Building the second brain. Getting on top of it one page at a time.</p>
        <div className="chips">
          <span className="chip green">BuJo · Shipped</span>
          <span className="chip yellow">Field Manual · Building</span>
          <span className="chip cyan">HID Brand · Refining</span>
        </div>
      </Card>

      <Card sticker="The Build" stickerColor="cyan" title="HID Ecosystem">
        <BuildList items={BUILDS} onPick={(it) => flash(`OPENING ${it.name.toUpperCase()}`)} />
      </Card>

      <BigQuote attribution="the whole project, in one line.">
        Control my crazy chaotic ADHD anxiety depression brain.
      </BigQuote>

      <Card sticker="How The Brain Works" stickerColor="green">
        <BrainRow label="Hyperfocus Mode">
          Internal pressure ignites it. Pent-up creative energy + frustration finding a worthy channel + a powerful new tool to multiply with. When it fires: all night, no sleep, interconnected systems. The BuJo App, HID brand, playlist and Substack all came from one ignition.
        </BrainRow>
        <BrainRow label="Sustainable Mode">
          External pressure only. Real deadlines, real people waiting, public commitments, body doubling. Self-set calendar blocks don't do it — needs skin in the game.
        </BrainRow>
        <BrainRow label="The Reset Circuit">
          When scattered, the reset is a jump to a new branch — not back to the original task. The reset circuit and the sidequest circuit are the same circuit. Capture fast. Park the branch. Come back.
        </BrainRow>
        <BrainRow label="What Actually Works">
          Music. A person nearby. Mornings and evenings. Mid-day is the low — build the schedule around this, not against it.
        </BrainRow>
      </Card>

      <Card sticker="Aesthetic DNA" stickerColor="yellow">
        <ChipRow label="Sound" items={SOUND} onPick={(c) => flash(`▶ ${c.label.toUpperCase()}`)} />
        <ChipRow label="Architecture & Design" items={ARCH} onPick={(c) => flash(`+ ${c.label.toUpperCase()}`)} />
        <ChipRow label="Film & TV" items={FILM} onPick={(c) => flash(`▶ ${c.label.toUpperCase()}`)} />
        <ChipRow label="Fashion & Culture" items={FASHION} onPick={(c) => flash(`+ ${c.label.toUpperCase()}`)} />
        <p style={{marginTop: 8}}>The through-line: <strong>raw + elevated</strong>. Underground culture taking heritage and recontextualising it. Brutalism next to Ivy League. Concrete next to Milan. Lo-fi craft next to high concept.</p>
      </Card>

      <div className="two-col">
        <Card sticker="What Lights Me Up" stickerColor="green" stickerRotate={1.5}>
          <BrainRow label="Making">Building things that mean something. When the idea, the tool, and the energy arrive at the same time.</BrainRow>
          <BrainRow label="Vision & Concepts">The "what" and "why" before the "how." Seeing the shape of a thing before it exists.</BrainRow>
          <BrainRow label="Sound">A good playlist is infrastructure, not background.</BrainRow>
          <BrainRow label="Subculture">Underground movements building their own language, dress codes, architecture. Culture from pressure, not committees.</BrainRow>
        </Card>
        <Card sticker="What's Hard" stickerColor="purple" stickerRotate={-1}>
          <BrainRow label="Finishing">New ideas feel like relief, not distraction. The sidequest circuit is the reset circuit.</BrainRow>
          <BrainRow label="Mid-Day">That's the low. Build the schedule around it, not against it.</BrainRow>
          <BrainRow label="Sleep">Poor. Load-bearing. Not a character flaw.</BrainRow>
          <BrainRow label="Open-Ended Days">Broken by design. "What should I work on?" needs pressure attached, not an open calendar.</BrainRow>
        </Card>
      </div>

      <SiteFooter />

      <Toast msg={toast} />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
