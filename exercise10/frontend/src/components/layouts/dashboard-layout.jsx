import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <aside className="fixed inset-y-0 left-0 hidden h-full w-60 flex-col border-r-2 border-yellow-400 sm:flex">
        <nav className="flex flex-col items-center gap-4">
          <a
            href="/app"
            className="flex h-20 w-full items-center justify-center border-b-2 border-yellow-400 text-2xl font-bold"
          >
            .aha
          </a>
          <ul className="flex flex-col gap-4 px-4">
            <li>
              <a href="/app">🏠 Dashboard</a>
            </li>
            <li>
              <a href="/app/courses">📚 Kursy</a>
            </li>
            {/* <li>
              <a href="/app/teachers">🧑‍🏫 Nauczyciele</a>
            </li>
            <li>
              <a href="/app/students">🧑‍🎓 Uczniowie</a>
            </li>
            <li>
              <a href="/app/schedule">📅 Plan</a>
            </li>
            <li>
              <a href="/app/materials">📄 Materiały</a>
            </li> */}
          </ul>
        </nav>
      </aside>
      <div className="flex flex-col sm:pl-60">
        <header className="sticky top-0 flex h-20 w-full flex-row items-center justify-end border-b-2 border-yellow-400 bg-white p-4">
          <a
            href="/"
            className="rounded bg-green-500 p-2 font-semibold text-white transition-all hover:scale-110 hover:bg-green-600"
          >
            Wyloguj
          </a>
        </header>
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
