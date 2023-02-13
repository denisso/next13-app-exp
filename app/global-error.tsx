"use client";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <head>
        <style>
          {`
            .errorBox {
              display: flex;
              flex-direction: column;
              margin: 0 auto;
              width: 400px;
            }
            .buttons {
              display: flex;
              gap: 1rem;
            }
            .button {
              color: white;
              font-weight: 900;
              border: none;
              background: #668cff;
              padding: 0.5rem 0.7rem;
              border-radius: 0.5rem;

            }
            .button:hover {
              background: #4d79ff;
            }
          `}
        </style>
      </head>
      <body>
        <div className="errorBox">
          <h2>Something went wrong!</h2>
          <div>{error.message}</div>
          <div className="buttons">
            <button onClick={() => reset()} className="button">
              Try again
            </button>
            <Link href="/" className="button">
              Go to home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
