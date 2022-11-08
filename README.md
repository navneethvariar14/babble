# BABBLE CHAT

This is a chat application created using [Next.js](https://reactjs.org/docs/getting-started.html) and [Firebase](https://firebase.google.com/docs)

## Front-End

The front-end is done using Next.js and [Typescript](https://www.typescriptlang.org/). Various React Hooks like useState, useRef, useContext, useReduce etc. were used for the development of the project. You can refer more more about React Hooks in the [documentation](https://reactjs.org/docs/hooks-intro.html). Styling is done with using [Tailwind](https://tailwindcss.com/)

## Back-End

The backend is hosted on firebase and firestore. Authentication is also done using firebase authentication and the storage is done using firestore firebase. The structure of firestore database is:
<img src="./public/images/ss1.png"/>

## Deployed on Vercel

Babble is hosted [here](https://babble-chat.ml/).
Create a new account or sign in to your existing account. Have fun Babbling!

## Getting Started

Clone the repository:

```bash
git clone https://github.com/navneethvarair14/babble.git
```

Then install dependencies:

```bash
npm i
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
