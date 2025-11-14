// 8.0 if u want to create another layout for about layout page then create a layout.jsx file under that page folder and import that layout in the page.jsx file. it will be applied to that page only. it will not be applied to any other page.
export default function AboutLayout({ children }) {
  return (
    <div>
      <h3 className="text-2xl">About Layout || More More About</h3>
      <div>{children}</div>
    </div>
  );
}
