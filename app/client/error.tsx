"use client";

export default function Error({
  error,

}: {
  error: Error;

}) {
  return (
    <div>
      <h2>Client error</h2>
      <div>{error.message}</div>
    </div>
  );
}
