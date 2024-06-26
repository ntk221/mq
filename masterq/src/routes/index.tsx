// routes/index.ts
import { Hono } from "hono";
import { renderToString } from "react-dom/server";

const router = new Hono();

router.get("*", (c) => {
  const html = renderToString(
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          rel="stylesheet"
          href="https://cdn.simplecss.org/simple.min.css"
        />
        {import.meta.env.PROD ? (
          <>
            <script type="module" src="/static/client.js"></script>
          </>
        ) : (
          <>
            <script type="module" src="/src/client.tsx"></script>
          </>
        )}
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>
  );

  return c.html(html);
});

export default router;
