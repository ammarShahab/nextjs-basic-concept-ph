"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

// 7.4 created a custom error page for about details page
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      {/* 7.5 show the error in ui */}
      {error && <pre>{error.message}</pre>}
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
