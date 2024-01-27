export default function Footer() {
  return (
    <footer className="h-18 flex w-full items-center justify-center p-3">
      <div className=" flex w-11/12 max-w-7xl flex-col items-center justify-center gap-y-1 text-center text-xs">
        <p>
          Developed and designed with love ❤️
          <a
            href="https://kellyws.me"
            rel="noopener noreferrer"
            target="_blank"
            className="transition-all hover:font-bold hover:underline"
            title="Visit Kelly Lee's personal website"
            aria-label="Kelly Lee's personal website"
          >
            Kelly Lee
          </a>
        </p>
        <p className="text-center">
          Based on a tutorial by{' '}
          <a
            href="https://academy.dream-coding.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:font-bold hover:underline"
            title="Visit Dream Coding Academy"
            aria-label="Dream Coding Academy"
          >
            Dream Coding
          </a>
        </p>
      </div>
    </footer>
  );
}
