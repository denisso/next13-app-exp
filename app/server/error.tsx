"use client";

export default function Error({
  error,
}: {
  error: Error;
}) {
  return (
    <div>
      <h2>Server error</h2>
      <div>{error.message}</div>
    </div>
  );
}
