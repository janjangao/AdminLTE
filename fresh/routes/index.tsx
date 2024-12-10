import Bootstrap from "../components/Bootstrap.tsx";

export default function Home() {
  return (
    <>
      <Bootstrap />
      <head>
        <link rel="stylesheet" href="/adminlte.css" />
      </head>
      <body class="bg-body-tertiary">
        <div class="app-wrapper"></div>
      </body>
    </>
  );
}
