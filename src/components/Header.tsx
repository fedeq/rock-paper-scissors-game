import {Score} from "./Score";

export function Header() {
  return (
    <header className="border-header-outline mx-auto mt-8 flex h-32 w-full max-w-3xl items-center justify-between rounded-lg border-4 p-4">
      <h1 className="w-20 text-3xl font-extrabold leading-6">ROCK PAPER SCISSORS</h1>
      <div className="flex h-full w-28 flex-col items-center justify-center rounded-md bg-white text-black shadow-md">
        <span className="text-score-text text-xs uppercase tracking-widest">Score</span>
        <Score className="text-header-outline text-5xl" />
      </div>
    </header>
  );
}
