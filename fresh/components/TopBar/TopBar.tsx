export type Props = {
  class?: string;
};

export default function TopBar(props: Props) {
  return (
    <nav
      class={`${props.class} navbar navbar-expand bg-body z-[1034] max-w-full border-b border-bs-border-color transition-all duration-300 ease-in-out`}
    >
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link"
              data-lte-toggle="sidebar"
              href="#"
              role="button"
            >
              <i class="bi bi-list"></i>
            </a>
          </li>
          <li class="nav-item d-none d-md-block">
            <a href="#" class="nav-link h-10">
              Home
            </a>
          </li>
          <li class="nav-item d-none d-md-block">
            <a href="#" class="nav-link h-10">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
