'use client';

import { useState, useEffect, useRef } from 'react';

const SQUARES: (string | null)[] = [
  'Building in healthtech or wellness',
  'Looking for a co-founder or tech partner',
  'Has a day job AND is building on the side',
  'Building with AI agents',
  'Has a live product you can try right now',
  'Looking for beta testers',
  'Building in edtech or learning tools',
  'Building in crypto or web3',
  'Came from outside Canada to build',
  'Hosting a workshop or event soon',
  'Building in fintech or trading',
  'Building a community or social app',
  null, // FREE square (index 12)
  'Doing outreach solo and feeling it',
  'Building a content or creator tool',
  'Wants feedback on their website copy',
  "Won't say what they're building yet",
  'Building for fleet or logistics',
  'Building for athletes or sports',
  'Planning to demo tonight',
  'Non-technical founder using AI to build',
  'Attended 3+ founder events this month',
  "Building something you'd actually pay for",
  'Wants to connect with health founders',
  'Can offer design or creative advice',
];

const FREE_INDEX = 12;

const WIN_LINES: number[][] = [
  // rows
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  // columns
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
  // diagonals
  [0, 6, 12, 18, 24],
  [4, 8, 12, 16, 20],
];

function getWinnerCells(names: string[]): Set<number> {
  const isFilled = (i: number) => i === FREE_INDEX || names[i].trim() !== '';
  const winners = new Set<number>();
  WIN_LINES.forEach(line => {
    if (line.every(isFilled)) line.forEach(i => winners.add(i));
  });
  return winners;
}

export default function BingoCard() {
  const [names, setNames] = useState<string[]>(new Array(25).fill(''));
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [inputVal, setInputVal] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const winners = getWinnerCells(names);
  const filled = names.filter(n => n.trim() !== '').length;
  const hasWin = winners.size > 0;

  useEffect(() => {
    if (activeIdx !== null) {
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [activeIdx]);

  function openModal(i: number) {
    setActiveIdx(i);
    setInputVal(names[i]);
  }

  function closeModal() {
    setActiveIdx(null);
    setInputVal('');
  }

  function confirmName() {
    if (activeIdx !== null) {
      const next = [...names];
      next[activeIdx] = inputVal.trim();
      setNames(next);
    }
    closeModal();
  }

  function clearCell() {
    if (activeIdx !== null) {
      const next = [...names];
      next[activeIdx] = '';
      setNames(next);
    }
    closeModal();
  }

  function resetAll() {
    if (confirm('Reset the whole card?')) {
      setNames(new Array(25).fill(''));
    }
  }

  return (
    <section className="bingo-section">
      <h1 className="bingo-title">Founder BINGO</h1>
      <p className="bingo-subtitle">
        Tap a square → find someone who fits → type their name. Get 5 in a row!
      </p>

      <div className="bingo-letters">
        {['B', 'I', 'N', 'G', 'O'].map(l => (
          <div key={l} className="bingo-letter">{l}</div>
        ))}
      </div>

      <div className="bingo-grid">
        {SQUARES.map((txt, i) => {
          if (i === FREE_INDEX) {
            return (
              <div key={i} className="bingo-cell bingo-free">
                <div>
                  FREE
                  <br />
                  <span style={{ fontSize: '10px', fontStyle: 'normal', opacity: 0.7 }}>
                    You showed up.
                  </span>
                </div>
              </div>
            );
          }

          const isWinner = winners.has(i);
          const hasName = names[i].trim() !== '';
          const cellClass = [
            'bingo-cell',
            isWinner ? 'bingo-winner' : hasName ? 'bingo-marked' : '',
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <div key={i} className={cellClass} onClick={() => openModal(i)}>
              <div className="bingo-cell-prompt">{txt}</div>
              {hasName && (
                <>
                  <div className="bingo-cell-name">{names[i]}</div>
                  <div className="bingo-cell-edit-hint">tap to edit</div>
                </>
              )}
            </div>
          );
        })}
      </div>

      <div className={`bingo-status${hasWin ? ' bingo-win' : ''}`}>
        {hasWin
          ? '🎉 BINGO! Go find Paola and claim your prize!'
          : `${filled} of 24 found — go introduce yourself!`}
      </div>

      <div className="bingo-reset-row">
        <button className="bingo-reset-btn" onClick={resetAll}>
          Reset card
        </button>
      </div>

      <div className="bingo-rules">
        <p>
          <strong>How to play:</strong> Tap a square, find someone who fits, type their first name.
          Can&apos;t reuse the same person. Get 5 in a row (across, down, or diagonal) and find
          Paola to claim your prize!
        </p>
      </div>

      {/* Modal */}
      {activeIdx !== null && (
        <div
          className="bingo-overlay"
          onClick={e => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="bingo-modal">
            <h2 className="bingo-modal-title">
              {names[activeIdx] ? 'Edit this square' : 'Found one?'}
            </h2>
            <p className="bingo-modal-prompt">{SQUARES[activeIdx]}</p>
            <input
              ref={inputRef}
              type="text"
              className="bingo-modal-input"
              placeholder="Their first name..."
              maxLength={30}
              autoComplete="off"
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') confirmName();
                if (e.key === 'Escape') closeModal();
              }}
            />
            <div className="bingo-modal-btns">
              <button className="bingo-btn-cancel" onClick={closeModal}>
                Cancel
              </button>
              {names[activeIdx] && (
                <button className="bingo-btn-clear" onClick={clearCell}>
                  Clear
                </button>
              )}
              <button className="bingo-btn-confirm" onClick={confirmName}>
                ✓ Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
