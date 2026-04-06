import type { Metadata } from 'next';
import { DM_Mono, Fraunces } from 'next/font/google';
import BingoCard from './BingoCard';
import './event.css';

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
});

export const metadata: Metadata = {
  title: "Tonight — Curio Builder's Hub",
  description: "For tonight's attendees.",
  robots: { index: false, follow: false },
};

// ─── Data ──────────────────────────────────────────────────────────────────

const LOOKING_FOR_BETA_TESTERS = [
  { name: 'Kai', build: 'smaller world!!!' },
  { name: 'Zain', build: 'Seva — AI care coordination for autism & ADHD' },
  { name: 'Krrish', build: 'Flayrs — AI Twitter/X growth coach' },
  { name: 'Aashni', build: 'MIDO — Family Governance OS' },
  { name: 'Eitan', build: 'Meal planning copilot' },
  { name: 'Stephen R', build: 'PhonoLogic — AI reading for dyslexia (launching May 11!)' },
];

const WANT_PRODUCT_FEEDBACK = [
  { name: 'Seunga', build: 'AI personal stylist app' },
  { name: 'Zain', build: 'Seva — prototype ready to show' },
  { name: 'Abe', build: 'toothfairy — AI dental assistant' },
  { name: 'Kartik', build: 'learnatocto.com' },
  { name: 'Aadee', build: 'Astaria — prediction markets (check their copy!)' },
  { name: 'Krrish', build: 'Flayrs — early stage, wants real reactions' },
  { name: 'Aashni', build: 'MIDO — wants family business user interviews' },
];

const FEELING_THE_SOLO_GRIND = [
  { name: 'Tim', build: 'Golf event management software — "outreach every day is lonely"' },
  { name: 'Stephen R', build: 'PhonoLogic — wants community, not just advice' },
  { name: 'Craig', build: 'TraceMem — just wants to build around people' },
  { name: 'Umar', build: 'AI SaaS — solo vs co-founder question on his mind' },
  { name: 'Anthony', build: 'AI agent for furniture retailers — looking for a tech co-founder' },
];

const WANT_TO_DEMO = [
  { name: 'Elena', build: 'clawup.org — privacy AI layer, bring any AI to your workplace' },
  { name: 'Athika', build: 'oneheartprotocol.com — wants to pitch her idea' },
  { name: 'Daniel T', build: 'Finance software — beliefs into market bets' },
  { name: 'Zain', build: 'Seva — prototype ready' },
  { name: 'Ruhao', build: 'Stealth startup — possibly demoing' },
  { name: 'Aashni', build: 'MIDO — family governance platform' },
];

const CAN_TEACH = [
  { name: 'Vimal', build: 'Running a Claude Code workshop — ask him about it' },
  { name: 'Kartik', build: 'learnatocto.com — loves teaching, happy to share' },
  { name: 'Sebastian', build: 'Trafikk — offers design process & creative feedback' },
  { name: 'Hieu', build: 'Offers a marketing lens on early-stage building' },
  { name: 'Harish', build: 'Agentic software factory — filtering signal from noise in AI' },
  { name: 'Kevin', build: 'Bitcoin infra — help founders work with AI agents' },
];

const WANT_GTM = [
  { name: 'Umar', build: 'Bootstrap vs fund? Solo vs co-founder? He wants to talk it out' },
  { name: 'Miguel', build: 'AI platform for athletes — how to get user feedback early' },
  { name: 'Mohib', build: 'BiteMap — managing burnout + finding new customers' },
  { name: 'Arthur', build: '311 App — wants fundraising & marketing ideas' },
];

// ─── Sub-components ─────────────────────────────────────────────────────────

function Person({ name, build }: { name: string; build: string }) {
  return (
    <div className="match-person">
      <span className="match-person-name">{name}</span>
      <span className="match-person-build">{build}</span>
    </div>
  );
}

function MatchBlock({
  title,
  tag,
  tagLight,
  people,
}: {
  title: string;
  tag: string;
  tagLight?: boolean;
  people: { name: string; build: string }[];
}) {
  return (
    <div className="match-block">
      <div className="match-block-title">
        {title}{' '}
        <span className={`match-tag${tagLight ? ' light' : ''}`}>{tag}</span>
      </div>
      {people.map(p => (
        <Person key={`${p.name}-${p.build}`} name={p.name} build={p.build} />
      ))}
    </div>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function EventPage() {
  return (
    <div className={`${dmMono.variable} ${fraunces.variable} event-page`}>
      <header className="event-header">
        <div className="event-logo">
          <strong>Curio Builder&apos;s Hub</strong>
          Founder &amp; Builder Lounge
        </div>
        <div className="event-info">
          Cowork · Coffee · Chat
          <br />
          April 2026 · Toronto
        </div>
      </header>

      {/* ── BINGO ── */}
      <BingoCard />

      {/* ── Divider ── */}
      <div className="section-divider">
        <span>✦ ✦ ✦</span>
      </div>

      {/* ── Matching ── */}
      <section className="match-section">
        <h1 className="match-title">This person needs you.</h1>
        <p className="match-subtitle">
          Tonight&apos;s attendees, sorted by what they&apos;re looking for. Go find them.
        </p>
        <p className="match-intro">
          Walk up, say hi, and lead with what you can offer. Everyone here registered and answered
          what they need — so the hard part is already done. You just have to show up to the
          conversation.
        </p>

        <div className="match-grid">
          <MatchBlock
            title="Looking for beta testers"
            tag="Needs you"
            people={LOOKING_FOR_BETA_TESTERS}
          />
          <MatchBlock
            title="Want product feedback"
            tag="Needs you"
            people={WANT_PRODUCT_FEEDBACK}
          />
          <MatchBlock
            title="Feeling the solo grind"
            tag="Needs you"
            people={FEELING_THE_SOLO_GRIND}
          />
          <MatchBlock
            title="Want to demo tonight"
            tag="Go see them"
            people={WANT_TO_DEMO}
          />
          <MatchBlock
            title="Can teach / offer help"
            tag="Can help you"
            tagLight
            people={CAN_TEACH}
          />
          <MatchBlock
            title="Want GTM & growth convos"
            tag="Needs you"
            people={WANT_GTM}
          />
        </div>
      </section>

      <footer className="event-footer">
        <div className="event-footer-note">
          All details sourced from tonight&apos;s Luma registrations. If something&apos;s off —
          just introduce yourself and ask. That&apos;s the whole point.
        </div>
        <div className="event-footer-stamp">curio.community</div>
      </footer>
    </div>
  );
}
