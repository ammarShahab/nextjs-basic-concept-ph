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
2. when next js application starts it calls the layout.js file which contains RootLayout with children and render the page.js (which is a children) of app/layout.js
3. to create any page then create a folder under app folder with page name and create a page.jsx file (remember u should not change the name of page.jsx. it will always page.jsx name neither it will not work)

4. created a details folder and page.jsx under about folder to show details.

5. created a loading component the name of loading.jsx under src\app\loading.js which will be shown when any page is loading. its a global loading component. u can also create a custom loading component for any page

7.0 created a error file under app folder which is a global error page to show error. you can also create a custom error page for any page like loading.jsx

7.1 manually throw error. now go to the about page in the browser it will show error

7.2 show the error in ui

7.3 created a custom error page for about details page
7.4 manually throw error. now go to the about details page it will show error
7.5 show the error in ui
8.0 if u want to create another layout for about page (if u want to add any kind of common layout for about page like nav) then create a layout.jsx file under the about page folder. it will be applied to the about page only. it will not be applied to any other page.
9.0 create a link to navigation.

10. to see the details of blog page first we create the [id] folder and create the page.jsx with using async function

10.1 make some fake blog data

10.2 map over the blogsCollection

10.3 pass params to see that the id is received or not
