# Practice Challenge: Toy Tales

You've got a friend in need! Again!

Andy has misplaced of his toys (again) and need your help to organize them.

## Setup

All the information about Andy's toys can be found in the `db.json` file. We'll
be using `json-server` to create a RESTful API for our database.

Run `npm install` to install our dependencies.

Then, run `npm run server` to start up `json-server` on `http://localhost:3001`.

In another tab, run `npm run dev` to start up our React app at `http://localhost:3000`.

In another tab, run `npm run test` to run the test suite.

Before you start building out the application, the first step that you should
take is to examint the current code and component hierarchy. This will tell you 
how components can pass data to each other as well as where that information should 
be stored.

## Deliverables

- _When our application loads_, make a GET request to `/toys` to fetch the toy
  array. Given your component tree, think about which component should be
  responsible for the array. After you have put the data in the proper
  component, your next job is to render the `ToyCard` components on the page.

- _When the `ToyForm` is submitted_, make a POST request to `/toys` to save a
  new toy to the server. Using the ideas of controlled form and inverse data
  flow, think about how to render a new `ToyCard` for the toy that you created.

- _When the `Donate to Goodwill` button is clicked_, make a DELETE request to
  `/toys/:id` with the ID of the toy that was clicked to delete the toy from the
  server. The `ToyCard` that you clicked on should also be removed from the DOM.

- _When the like button is clicked_, make a PATCH request to `/toys/:id` with
  the id of the toy that was clicked, along with the new number of likes (this
  should be sent in the body of the PATCH request, as a object:
  `{ likes: 10 }`), to update the toy on the server. Clicking on the button
  should also increase the number of likes on the DOM.

---

### React Toy Tales

## Introduction

  This lab focused on using React components, props, and state to connect a frontend to a local JSON server.
  The app displays a list of toys, lets you add new ones, delete existing ones, and like them — all while syncing changes with the backend.

## Learning Goals

  Use useState and useEffect to manage data and side effects.
  Fetch data from a local API (db.json) and render it dynamically.
  Pass functions as props between components to manage user interactions.
  Keep frontend and backend data in sync with proper REST methods.

# What I Did

 Built component structure and data flow:
  -App → main state + fetch logic
  -Header → top banner
  -ToyForm → controlled form for new toys
  -ToyContainer → maps all toys into ToyCard
  -ToyCard → individual toy display, like/delete buttons
  -Fetched toy data from http://localhost:3000/toys.
  -Added full CRUD operations:
  -Create: Add new toy (POST)
  -Read: Fetch toys (GET)
  -Update: Like button (PATCH)
  -Delete: Remove toy (DELETE)

## Challenges & Fixes

  Port confusion: Switched from port 3000 to 3001 for a while when fetch kept failing. Turned out the JSON server just wasn’t running yet —        switching back to 3000 fixed it. Good reminder to always check your backend first.

  Blank screen issue: Had a period where nothing rendered. Found out it was from a missing export and fetch URL mismatch. Using DevTools and       console logs helped narrow it down fast.

  State updates: I learned the importance of using the callback version of setToys() for updates like “likes,” so React doesn’t overwrite state    with old data.

## Takeaways

  This was one of those labs that looks simple but teaches a lot once things start breaking.
  It forced me to slow down and understand how React talks to the backend, and how to track changes through components.
  The repetition of passing props through multiple files made the flow of data click for me — parent → child → callback → update → re-render.

## Build Notes

  Set up fetch request in App.jsx
  Added toy cards with delete and like buttons
  Connected onLike handler between components
  Fixed fetch endpoint mismatches
  Confirmed server working on port 3000

# What I Learned

  This lab really hammered in how state and backend sync work in React.
  I used to think fetch issues were always code-related, but now I double-check my server and endpoints before touching anything.
  It also helped me get more comfortable chaining .then() and updating state in place.
  If I did it again, I’d add small visual cues (like loading states or like animations) to make debugging easier — but overall, I finally          understand how everything connects from JSON → fetch → state → render.
 
