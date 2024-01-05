import {Score} from "./Score";

export function Header() {
  return (
    <header className="mx-auto mt-10 flex h-32 w-full max-w-3xl items-center justify-between rounded-lg border-4 border-header-outline p-4">
      <h1 className="w-20 text-3xl font-extrabold leading-6">ROCK PAPER SCISSORS</h1>
      <div className="flex h-full w-28 flex-col items-center justify-center rounded-md bg-white text-black shadow-md">
        <span className="text-xs uppercase tracking-widest text-score-text">Score</span>
        <Score className="text-5xl text-header-outline" />
      </div>
    </header>
  );
}
