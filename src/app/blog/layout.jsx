export default function BlogLayout({ children }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-amber-300">
        Using Blog Page Layout
      </h3>
      <div>{children}</div>
    </div>
  );
}
