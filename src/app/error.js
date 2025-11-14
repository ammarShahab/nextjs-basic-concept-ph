"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

// 7.0 created a error file under app folder and create a global error page to show error. you can also create a custom error page for any page like loading.jsx
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      {/*7.2 show the error in ui */}
      {error && <pre>{error.message}</pre>}
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
