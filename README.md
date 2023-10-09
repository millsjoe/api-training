# API-Training
This is a simple API example for training purposes that uses [Next Js](https://nextjs.org/). It makes use of the API routes to build a very simple API.
## How to build for local development

- ensure you have node & npm installed `node -v` will confirm
- `npm install`
- `npm run dev`

This will run the project on `localhost:3000` as default 
## What should I do?
There's a `src/pages/api/template.ts` file to give you an idea of how the routing may work. Once you've added stuff to this you test your API by going to `localhost:3000/api/template`.
The route correlates to the filename, so changing that will impact your route


## Why do I get an error on the homepage?
You won't have any of those sweet sweet API keys being used for the database. Ignore it, you can create and modify api routes that don't use the database.


