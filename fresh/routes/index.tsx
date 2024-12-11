/* Frameworks */
import Bootstrap from "../components/Bootstrap.tsx";
import Adminlte from "../components/Adminlte.tsx";

/* Components */
import TopBar from "../components/TopBar/TopBar.tsx";

export default function Index() {
  return (
    <>
      <Bootstrap />
      <Adminlte />
      <body class="bg-body-tertiary">
        <div class="app-wrapper">
          <TopBar class="app-header" />
        </div>
      </body>
    </>
  );
}
