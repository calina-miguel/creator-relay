import "./creator-relay.css";
import "./pathway.css";
import { Pathway } from "./pathway";

export const metadata = {
  title: "Creator Relay | From audience to offer",
  description:
    "A thoughtful content-to-commerce path for creators shaping their next offer.",
};

const route = [
  {
    number: "01",
    label: "Listen",
    title: "Find the signal",
    copy: "Start with the questions, habits, and wish-list items your audience already shares.",
  },
  {
    number: "02",
    label: "Shape",
    title: "Build the bridge",
    copy: "Turn one useful idea into a guide, edit, or experience people can act on now.",
  },
  {
    number: "03",
    label: "Launch",
    title: "Make the offer",
    copy: "Give the right product a natural place in the story your community follows.",
  },
];

export default function Page() {
  return (
    <main className="relay-page">
      <header className="relay-nav">
        <a className="relay-brand" href="#top" aria-label="Creator Relay home">
          <span className="relay-mark" aria-hidden="true">C<span>R</span></span>
          <span>creator<span className="brand-light">relay</span></span>
        </a>
        <a className="nav-link" href="#route">The approach <span aria-hidden="true">↗</span></a>
      </header>

      <section className="relay-hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow enter-one"><span className="eyebrow-line" /> CONTENT-LED COMMERCE</p>
          <h1 className="enter-two">From audience<br />to <em>offer.</em></h1>
          <p className="hero-description enter-three">
            Turn what your community cares about into a useful next step - and a product that belongs in the story.
          </p>
          <a className="primary-link enter-four" href="#route">Find your bridge <span aria-hidden="true">↗</span></a>
          <p className="hero-footnote enter-four">A clear path for creator-led commerce.</p>
        </div>

        <div className="storyboard" aria-label="Listen, shape, launch">
          <div className="story-orbit orbit-a" />
          <div className="story-orbit orbit-b" />
          <div className="story-sticker sticker-top">THE COMMUNITY EDIT <span>VOL. 01</span></div>
          <div className="story-card">
            <div className="card-topline"><span>CREATOR NOTES</span><span>01 / 03</span></div>
            <div className="card-quote">“What would make this easier for you?”</div>
            <div className="quote-rule"><span /></div>
            <div className="signal-row"><span className="signal-dot" /><span>Audience signal</span><b>HEARD</b></div>
          </div>
          <div className="story-sticker sticker-bottom"><span className="sparkle" aria-hidden="true">✳</span> GOOD IDEAS<br />TRAVEL BOTH WAYS</div>
          <span className="scribble scribble-one" aria-hidden="true">↗</span>
          <span className="scribble scribble-two" aria-hidden="true">✳</span>
        </div>
        <div className="hero-index"><span>01</span><span className="index-rule" /><span>03</span></div>
      </section>

      <div className="relay-marquee" aria-hidden="true">
        <div className="marquee-track"><span>LISTEN CLOSELY</span><i>✳</i><span>MAKE IT USEFUL</span><i>✳</i><span>LET THE STORY SELL</span><i>✳</i><span>LISTEN CLOSELY</span><i>✳</i><span>MAKE IT USEFUL</span><i>✳</i><span>LET THE STORY SELL</span><i>✳</i></div>
      </div>

      <section className="relay-route" id="route">
        <div className="route-intro reveal">
          <p className="eyebrow"><span className="eyebrow-line" /> A BETTER WAY TO BUILD</p>
          <h2>Make the next<br />move <em>matter.</em></h2>
        </div>
        <div className="route-list">
          {route.map((item) => (
            <article className="route-item reveal" key={item.number}>
              <span className="route-number">{item.number}</span>
              <div className="route-title"><span>{item.label}</span><h3>{item.title}</h3></div>
              <p>{item.copy}</p>
              <span className="route-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="relay-invite" id="start">
        <div className="invite-copy reveal">
          <p className="eyebrow"><span className="eyebrow-line" /> YOUR NEXT CHAPTER</p>
          <h2>Start with<br />what they <em>love.</em></h2>
          <p>Get a focused content-to-commerce route shaped around your audience and your next idea.</p>
        </div>
        <Pathway />
      </section>

      <footer className="relay-footer"><a className="relay-brand" href="#top"><span className="relay-mark" aria-hidden="true">C<span>R</span></span><span>creator<span className="brand-light">relay</span></span></a><span>Content, with a clear next move.</span><span>© 2026 CREATOR RELAY</span></footer>
    </main>
  );
}
