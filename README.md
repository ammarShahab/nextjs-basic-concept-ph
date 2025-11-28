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

A. What are the Rendering Options (SSR, SSG, ISR) or Next js rendering strategies?
Ans:

⭐ 1. SSR – Server-Side Rendering

HTML is generated on every request.
Always fetches fresh data.

Use when:
✔ Live data (dashboard, admin panel, real-time prices)
✔ User-specific data (auth-based content)

Example (Next.js App Router)
export const dynamic = "force-dynamic"; // enable SSR

export default async function Page() {
const res = await fetch("https://api.example.com/users", {
cache: "no-store", // no caching
});

const data = await res.json();
return <div>{JSON.stringify(data)}</div>;
}

What happens?
i. User visits page → server fetches data → sends fresh HTML
ii. Happens every time

Use case:
i. Best for real time or dynamic content i.e user dashboard

Limitation:
i. Low performance

Flow: request => server => data fetch => render html in server => then render html in browser
Note: as two types of rendering that's why performance is slow.

⭐ 2. SSG – Static Site Generation

HTML is generated once during build time.
Fastest performance.

Use when:
✔ Data that doesn’t change often
✔ Blogs, documentation, landing pages

Example
export const dynamic = "force-static"; // default behavior

export default async function Page() {
const res = await fetch("https://api.example.com/posts");
const data = await res.json();

return <div>{JSON.stringify(data)}</div>;
}

What happens?
i. HTML generated at build time (npm run build)
ii. Served instantly from CDN
iii. Does not fetch new data unless rebuild

Limitation:
i. frequently changed dynamic data cannot be handled properly

Flow: request => hits CDN(Content Delivery Network) => pre-render the html => send to browser

⭐ 3. ISR – Incremental Static Regeneration also known as Hybrid Rendering (Combination of SSG and SSR)

Static page that updates automatically after an interval.
You get performance of SSG but with auto refresh.

Use when:
✔ Blogs updated sometimes
✔ E-commerce products
✔ News articles

Example
export const revalidate = 60; // rebuild page every 60 seconds

export default async function Page() {
const res = await fetch("https://api.example.com/news");
const data = await res.json();

return <div>{JSON.stringify(data)}</div>;
}

Flow:
request => CDN => (Old Html) if doesn't exist any data then go to another request following
|
|  
|==> go to data source => background rebuild after x seconds => then replace old CDN HTML (Old Html)

What happens?
i. Page is static initially
ii. After x seconds, the next visitor triggers background regeneration
iii. Updated page is shown to everyone

⭐ 4. CSR – Client Side Rendering
Performance:
i. First load is slow
ii. update is fast

Best for: Dashboard, chat apps, Analytics

Flow: Request => Fetch Data => parse backend data => Render in browser

What is RSC - React Server Component?
Flow: server fetches the data => serializable payload (i.e data is send as chunk) => in client side minimum js is loaded which increase the performance

B. Next js caching flow?
=> Next.js improves your application's performance and reduces costs (cost is depends on per request call so to reduce the cost by using caching) by caching rendering work and data requests.

What is the 3W(What, When, Where) & 3H(How, How Often, How long) framework?
=>It is used for engineering purpose which is a rendering decision guide.

3W:
What => What data is needed (Static/ Dynamic)
When => When data is changed (never, sometimes, always)
Where => Where it is rendered (server side or client side)

3H:
How => How data will fetch (build time, run time, client fetch)
How often => How often does it change (second, minutes, days)
How long => How long should u cache (short, medium, forever)

Following are different caching mechanisms and their purpose:

| Mechanism               | What                       | Where  | Purpose                                         | Duration                        |
| ----------------------- | -------------------------- | ------ | ----------------------------------------------- | ------------------------------- |
| **Request Memoization** | Return values of functions | Server | Re-use data in a React Component tree           | Per-request lifecycle           |
| **Data Cache**          | Data                       | Server | Store data across user requests and deployments | Persistent (can be revalidated) |
| **Full Route Cache**    | HTML and RSC payload       | Server | Reduce rendering cost and improve performance   | Persistent (can be revalidated) |
| **Router Cache**        | RSC Payload                | Client | Reduce server requests on navigation            | User session or time-based      |

Request Memoization:
The fetch method which is used in Next.js is customized by Next.js. Using fetch when u hit any url it will memorize the data on first hit. If u hit second time in the same url it will not send the request in server because after second hit the data will come from the request memoization where the data is cached.

Example:

async function getItem() {
// The `fetch` function is automatically memoized and the result
// is cached
const res = await fetch('https://.../item/1')
return res.json()
}

// This function is called twice, but only executed the first time
const item = await getItem() // cache MISS

// The second call could be anywhere in your route
const item = await getItem() // cache HIT

Following is the flow chart of request memoization

Route: `/a`

               SERVER

───────────────────────────────────────────────
In-memory Request Memoization
(stores function returns)
───────────────────────────────────────────────

Data Flow (Single Render Pass)

1. fetch('/item/1') → MISS (request memoization) → HIT (Data Source) → SET (memoize)
2. fetch('/item/1') → HIT (memoized)
3. fetch('/item/1') → HIT (memoized)

### Summary

- First fetch = **MISS** memoization, then hits the data source, then memoized.
- Subsequent fetches in the same render pass = **HIT** from memoization.
- No additional server or data source calls occur during the same request cycle.

There is so many features in nextjs u need to explore
