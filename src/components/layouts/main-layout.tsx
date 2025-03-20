import { Link, NavLink, Outlet } from "react-router-dom";
import { Brain, Github, Info } from "lucide-react";

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <Brain className="h-6 w-6 text-primary" />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              SAT Humanizer
            </span>
            <span className="hidden md:inline text-sm text-muted-foreground">
              by Peddisetty
            </span>
          </Link>
          <nav className="flex items-center gap-4">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-sm hover:text-foreground transition-colors ${
                  isActive ? "text-foreground font-medium" : "text-muted-foreground"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm hover:text-foreground transition-colors ${
                  isActive ? "text-foreground font-medium" : "text-muted-foreground"
                }`
              }
            >
              About
            </NavLink>
            <a
              href="https://github.com/peddisetty"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              <span className="hidden md:inline">GitHub</span>
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t bg-background/95 backdrop-blur">
        <div className="container py-6 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} SAT Humanizer. Developed by Peddisetty.
            </p>
          </div>
          <div className="mt-4 flex justify-center md:mt-0 space-x-6">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <Info className="h-4 w-4" />
              <span>About</span>
            </Link>
            <a
              href="https://github.com/peddisetty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
