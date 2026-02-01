/**
 * Quiz Engine — copy this component into any artifact that needs a quiz.
 *
 * Usage:
 *   <QuizEngine questions={questions} accentColor="#a855f7" />
 *
 * Props:
 *   questions   — array of question objects (see format below)
 *   accentColor — hex colour string; use the subject accent from base.md
 *                 Default: "#a855f7" (purple)
 *
 * Question object format:
 * {
 *   question:    "Text of the question",
 *   type:        "single" | "multi",       // single = immediate on click; multi = checkboxes + Submit button
 *   options:     ["Option A", "Option B", ...],
 *   correct:     [0, 2],                    // indices into options[]. Single-select: one element. Multi: one or more.
 *   explanation: "Why this answer is correct / the others are wrong",
 *   tip:         "Optional mnemonic hint"   // omit key entirely if not applicable
 * }
 *
 * Example:
 * const questions = [
 *   {
 *     question: "Jaký je vzorec pro ideální plyn?",
 *     type: "single",
 *     options: ["pV = nRT", "pV = nR²T", "p + V = nRT", "pV = RT"],
 *     correct: [0],
 *     explanation: "Stavová rovnice ideálního plynu je pV = nRT, kde p je tlak, V objem, n množství látky, R plynová konstanta a T teplota.",
 *     tip: "Pamatuj: PV = nRT — \"Pět Voů nRT\""
 *   },
 *   {
 *     question: "Které z těchto látek jsou oxidace?",
 *     type: "multi",
 *     options: ["Fe₂O₃", "NaCl", "H₂O", "CO₂"],
 *     correct: [0, 2, 3],
 *     explanation: "Fe₂O₃ (železo + kislik), H₂O (vodík + kislik) a CO₂ (uhlík + kislik) jsou produkty oxidace. NaCl je chlorid, ne oxid."
 *   }
 * ];
 */

import { useState, useCallback } from "react";

export default function QuizEngine({ questions, accentColor = "#a855f7" }) {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState({});       // { questionIndex: [selectedOptionIndices] }
  const [revealed, setRevealed] = useState({});     // { questionIndex: true } means feedback is showing
  const [pendingMulti, setPendingMulti] = useState([]); // temp checkbox state for current multi-select before Submit
  const [showResults, setShowResults] = useState(false);

  const q = questions[idx];
  const isMulti = q.type === "multi";
  const isRevealed = !!revealed[idx];
  const myAnswer = answers[idx] || [];
  const isCorrect = isRevealed && arrEqual(myAnswer, q.correct);

  // ── Score (computed from all revealed answers) ────────────────
  const score = questions.filter((q, i) => revealed[i] && arrEqual(answers[i] || [], q.correct)).length;
  const pct = Math.round((score / questions.length) * 100);

  // ── Navigation ─────────────────────────────────────────────────
  const goTo = useCallback((i) => {
    setIdx(i);
    // Restore pending checkboxes if navigating back to a multi-select that was already answered
    setPendingMulti(questions[i].type === "multi" ? (answers[i] || []) : []);
  }, [answers, questions]);

  // ── Single-select: feedback triggers immediately on click ──────
  const handleSingleSelect = useCallback((optionIdx) => {
    if (isRevealed) return;
    setAnswers(prev => ({ ...prev, [idx]: [optionIdx] }));
    setRevealed(prev => ({ ...prev, [idx]: true }));
  }, [idx, isRevealed]);

  // ── Multi-select: toggle checkboxes, then Submit ──────────────
  const toggleMulti = useCallback((optionIdx) => {
    if (isRevealed) return;
    setPendingMulti(prev =>
      prev.includes(optionIdx)
        ? prev.filter(i => i !== optionIdx)
        : [...prev, optionIdx]
    );
  }, [isRevealed]);

  const submitMulti = useCallback(() => {
    if (pendingMulti.length === 0) return;
    setAnswers(prev => ({ ...prev, [idx]: [...pendingMulti] }));
    setRevealed(prev => ({ ...prev, [idx]: true }));
  }, [idx, pendingMulti]);

  // ── Restart ────────────────────────────────────────────────────
  const restart = useCallback(() => {
    setIdx(0);
    setAnswers({});
    setRevealed({});
    setPendingMulti([]);
    setShowResults(false);
  }, []);

  // ════════════════════════════════════════════════════════════════
  // RESULTS SCREEN
  // ════════════════════════════════════════════════════════════════
  if (showResults) {
    const msg =
      pct >= 90 ? "🎉 Výborně! Máš to perfektně zvládnuté!"
      : pct >= 70 ? "👍 Dobře! Téměř máš vše zvládnuté."
      : pct >= 50 ? "😐 Mohlo by to být lepší, ale jdeš správným směrem."
      : "📚 Potřebuješ více přípravy. Nezávor — opakuj a bude to!";

    return (
      <div style={S.resultsWrap}>
        <div style={S.resultsCard}>
          <div style={S.resultsScore}>{score} / {questions.length}</div>
          <div style={S.resultsPct}>{pct} %</div>
          <div style={S.resultsMsg}>{msg}</div>
          <button style={{ ...S.btn, background: accentColor + "66", border: `1px solid ${accentColor}` }} onClick={restart}>
            Začít znovu
          </button>
        </div>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════
  // MAIN QUIZ VIEW
  // ════════════════════════════════════════════════════════════════

  // Determine which indices are "selected" for option highlighting
  const activeSet = isMulti ? (isRevealed ? myAnswer : pendingMulti) : myAnswer;

  return (
    <div style={S.wrap}>

      {/* ── Dot navigation bar (no legend — colour = meaning) ── */}
      <div style={S.dotBar}>
        {questions.map((_, i) => {
          let bg = "#4b5563"; // grey = unanswered
          if (i === idx) bg = accentColor; // current
          else if (revealed[i]) bg = arrEqual(answers[i] || [], questions[i].correct) ? "#22c55e" : "#ef4444";
          return (
            <div
              key={i}
              onClick={() => goTo(i)}
              title={`Otázka ${i + 1}`}
              style={{ ...S.dot, background: bg }}
            />
          );
        })}
      </div>

      {/* ── Question card ── */}
      <div style={S.card}>
        <div style={S.qNum}>Otázka {idx + 1} / {questions.length}</div>
        <div style={S.qText}>{q.question}</div>

        {/* Options */}
        <div style={S.optionsList}>
          {q.options.map((opt, i) => {
            // Colour logic: after reveal, green = correct, red = wrong selection; before reveal, accent = selected
            let border = "1px solid rgba(255,255,255,0.12)";
            let bg = "rgba(255,255,255,0.04)";
            if (isRevealed) {
              if (q.correct.includes(i))        { bg = "rgba(34,197,94,0.15)";  border = "1px solid #22c55e"; }
              else if (activeSet.includes(i))   { bg = "rgba(239,68,68,0.15)";  border = "1px solid #ef4444"; }
            } else if (activeSet.includes(i)) {
              bg = accentColor + "18"; border = `1px solid ${accentColor}`;
            }

            return (
              <div
                key={i}
                style={{ ...S.option, background: bg, border }}
                onClick={() => isMulti ? toggleMulti(i) : handleSingleSelect(i)}
              >
                {isMulti && <span style={S.checkbox}>{activeSet.includes(i) ? "☑" : "☐"}</span>}
                <span>{opt}</span>
              </div>
            );
          })}
        </div>

        {/* Submit button — only for multi-select, only before reveal */}
        {isMulti && !isRevealed && (
          <button
            style={{ ...S.btn, opacity: pendingMulti.length === 0 ? 0.4 : 1 }}
            onClick={submitMulti}
            disabled={pendingMulti.length === 0}
          >
            Potvrdít
          </button>
        )}

        {/* ── Feedback panel ── */}
        {isRevealed && (
          <div style={{ ...S.feedback, borderColor: isCorrect ? "#22c55e" : "#ef4444" }}>
            <div style={S.feedbackHeader}>{isCorrect ? "✅ Správně!" : "❌ Špatně"}</div>
            {!isCorrect && (
              <div style={S.feedbackCorrect}>
                Správná odpověď: {q.correct.map(i => q.options[i]).join(", ")}
              </div>
            )}
            <div style={S.feedbackExplanation}>{q.explanation}</div>
            {q.tip && <div style={S.feedbackTip}>💡 {q.tip}</div>}
          </div>
        )}
      </div>

      {/* ── Prev / Next navigation ── */}
      <div style={S.navRow}>
        <button style={S.btn} onClick={() => goTo(idx - 1)} disabled={idx === 0}>← Předchozí</button>
        {idx < questions.length - 1
          ? <button style={S.btn} onClick={() => goTo(idx + 1)}>Další →</button>
          : <button style={{ ...S.btn, background: accentColor + "55", border: `1px solid ${accentColor}` }} onClick={() => setShowResults(true)}>Výsledky →</button>
        }
      </div>
    </div>
  );
}

// ── Utility ─────────────────────────────────────────────────────
function arrEqual(a, b) {
  if (!a || !b) return false;
  const sa = [...a].sort((x, y) => x - y);
  const sb = [...b].sort((x, y) => x - y);
  return sa.length === sb.length && sa.every((v, i) => v === sb[i]);
}

// ── Styles ──────────────────────────────────────────────────────
// All timings use 0.4s per the design system. Glassmorphism card matches base.md defaults.
const S = {
  wrap:            { display: "flex", flexDirection: "column", gap: "16px", maxWidth: "680px", margin: "0 auto", padding: "16px" },
  dotBar:          { display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" },
  dot:             { width: "22px", height: "22px", borderRadius: "50%", cursor: "pointer", transition: "background 0.4s ease" },
  card:            { background: "rgba(255,255,255,0.05)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", padding: "24px", transition: "all 0.4s ease" },
  qNum:            { color: "rgba(255,255,255,0.35)", fontSize: "13px", marginBottom: "6px" },
  qText:           { color: "#fff", fontSize: "18px", fontWeight: 600, lineHeight: 1.5, marginBottom: "20px" },
  optionsList:     { display: "flex", flexDirection: "column", gap: "10px" },
  option:          { padding: "12px 16px", borderRadius: "12px", color: "#fff", cursor: "pointer", transition: "all 0.4s ease", display: "flex", alignItems: "center", gap: "10px", userSelect: "none", fontSize: "15px" },
  checkbox:        { fontSize: "18px", minWidth: "20px", color: "rgba(255,255,255,0.7)" },
  btn:             { marginTop: "12px", padding: "10px 22px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "10px", color: "#fff", cursor: "pointer", fontSize: "15px", transition: "all 0.3s ease" },
  feedback:        { marginTop: "20px", padding: "16px", borderRadius: "14px", border: "1px solid", background: "rgba(255,255,255,0.03)" },
  feedbackHeader:  { color: "#fff", fontWeight: 700, fontSize: "16px", marginBottom: "8px" },
  feedbackCorrect: { color: "#86efac", fontSize: "14px", marginBottom: "6px" },
  feedbackExplanation: { color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: 1.5 },
  feedbackTip:     { color: "#fbbf24", fontSize: "13px", marginTop: "8px", fontStyle: "italic" },
  navRow:          { display: "flex", justifyContent: "space-between" },
  resultsWrap:     { display: "flex", alignItems: "center", justifyContent: "center", minHeight: "280px" },
  resultsCard:     { textAlign: "center", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "40px 48px" },
  resultsScore:    { color: "#fff", fontSize: "52px", fontWeight: 800, lineHeight: 1.1 },
  resultsPct:      { color: "rgba(255,255,255,0.45)", fontSize: "22px", marginBottom: "16px" },
  resultsMsg:      { color: "rgba(255,255,255,0.8)", fontSize: "17px", lineHeight: 1.5, marginBottom: "24px", maxWidth: "340px", margin: "0 auto 24px" },
};
