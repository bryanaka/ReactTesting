# File Architecture

Just some tidbits about the file architecture

## src

### App.js

Main App file

### Components: `src/components`

This is where the globally used or cross-cutting components live. Any component that doesn't belong to a given route can be here.

### Routes: `src/routes`

This is where page components live underneath their own directory. Components specific to a given page should also live within the directory of the respective page.

For example, About page component lives in `src/routes/about` along with any other components specific to the about page. `src/routes/about/index.jsx` is in charge pf exporting what components should be considered "public" outside its own route. In an ideal world, it only exports the top level about page component.

The page component should be the default export from `src/routes/<route name>/index.jsx`.

Pages should be exported from `src/routes/index.jsx`.

