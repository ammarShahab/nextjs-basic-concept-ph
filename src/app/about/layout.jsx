// 8.0 if u want to create another layout for about page (if u want to add any kind of common layout for about page like nav) then create a layout.jsx file under the about page folder. it will be applied to the about page only. it will not be applied to any other page.
export default function AboutLayout({ children }) {
  return (
    <div>
      <h3 className="text-2xl">About Layout || More More About</h3>
      <div>{children}</div>
    </div>
  );
}
