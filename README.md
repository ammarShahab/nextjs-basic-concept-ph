React:
=> in react when user clicked any react website initially it creates dead zone which is a loading state in the mean time react frontend is getting data from backend creating dead zone. which causes poor performance and not seo friendly. also arises 2 problems FCP (First Contentful Paint) and TTI (Time To Interact)

Nextjs:
=> Renders 2 times one in server side and another in client side
=> server side rendering solves seo friendly
=> in nextjs by default it is server component but when we declare any component "use client" it will be client component.

=> Difference between library vs framework?

=>Difference between Pages Router and App outer

1. Pages Router:
   ans: page router is the original routing system based on the file system in the pages/directory
   How it works:
   i. Each file in pages/ becomes a route
   ii. File name=URL path
   iii. getServerSideProps, getStaticProps for data fetching

2. App Router (Recommended):
   ans: Newer routing system using app/directory with React server component

Key features:
i. Built in react server component
ii. Layouts, loading and error handling built in.
iii. Uses async/await directly in component

Installation

1. for customize installation "npx create-next-app@latest"
