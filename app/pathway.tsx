"use client";

import { useState } from "react";

const rounds = [
  { label: "01 / LISTEN", title: "What is your audience asking for?", options: ["A clearer way to choose", "Ideas they can try today", "A deeper look at the craft"] },
  { label: "02 / SHAPE", title: "What can you make with care?", options: ["A short field guide", "A considered product edit", "A small live experience"] },
  { label: "03 / LAUNCH", title: "How should the next step feel?", options: ["Easy to explore", "Useful to keep", "Personal to join"] },
];

const outcomes = [
  ["The Useful Edit", "Build a short, opinionated guide around the question your community repeats. Pair each answer with one relevant product and a clear reason it belongs."],
  ["The Field Note", "Shape your experience as a saveable note: one idea, a practical example, and a small next action readers can try straight away."],
  ["The Community Session", "Turn the strongest audience signal into a focused live session, then give attendees a curated collection to continue exploring."],
];

export function Pathway() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [complete, setComplete] = useState(false);
  const selection = answers[0] ?? 0;
  const result = outcomes[selection];
  const choose = (index: number) => setAnswers((current) => { const next = current.slice(0, step); next[step] = index; return next; });

  return <div className="relay-pathway" id="relay-pathway" aria-live="polite">
    <div className="relay-pathway-intro"><span>CREATOR RELAY / YOUR NEXT CHAPTER</span><h3>{complete ? "A bridge worth building." : "Make the idea useful."}</h3><p>{complete ? "A direction shaped around the signal you chose." : "Three quick choices turn an audience signal into a clear content-to-commerce move."}</p></div>
    <div className="relay-pathway-card">
      {!complete ? <>
        <div className="relay-pathway-top"><span>{rounds[step].label}</span><span>{String(step + 1).padStart(2, "0")} / 03</span></div>
        <div className="relay-progress"><i style={{ width: `${((step + 1) / rounds.length) * 100}%` }} /></div>
        <h4>{rounds[step].title}</h4>
        <div className="relay-options">{rounds[step].options.map((option, index) => <button key={option} className={answers[step] === index ? "selected" : ""} onClick={() => choose(index)} aria-pressed={answers[step] === index}><span>0{index + 1}</span>{option}<b>↗</b></button>)}</div>
        <div className="relay-pathway-actions"><button className="relay-back" onClick={() => step ? setStep(step - 1) : document.getElementById("top")?.scrollIntoView({ behavior: "smooth" })} disabled={step === 0}>Back</button><button className="relay-next" onClick={() => step < 2 ? setStep(step + 1) : setComplete(true)} disabled={answers[step] === undefined}>{step === 2 ? "Show my direction" : "Continue"}<span>↗</span></button></div>
      </> : <div className="relay-result"><span className="result-stamp">YOUR CREATOR ROUTE / 0{selection + 1}</span><h4>{result[0]}</h4><p>{result[1]}</p><div className="relay-result-foot"><span>EMAIL FOLLOW-UP IS PAUSED UNTIL SENDER-DOMAIN SETUP.</span><button onClick={() => { setComplete(false); setStep(0); setAnswers([]); }}>Start again ↺</button></div></div>}
    </div>
  </div>;
}
