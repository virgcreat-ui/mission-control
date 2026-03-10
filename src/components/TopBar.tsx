import { Search, Bell } from "lucide-react";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-40 flex h-14 lg:h-16 w-full items-center justify-between px-4 lg:px-6 bg-bg-primary/80 backdrop-blur-xl border-b border-border">
      {/* Mobile: title only */}
      <div className="lg:hidden">
        <span className="text-sm font-black tracking-[0.15em] text-white uppercase">Mission Control</span>
      </div>

      {/* Desktop: search bar */}
      <div className="hidden lg:block flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-tertiary group-focus-within:text-accent transition-colors" />
          <input
            type="text"
            placeholder="Search OS..."
            className="w-full h-10 bg-bg-card border border-border rounded-xl pl-10 pr-4 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all placeholder:text-text-tertiary"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 lg:gap-4">
        <button className="relative p-2 rounded-xl text-text-secondary hover:text-text-primary hover:bg-bg-card transition-all">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-error rounded-full ring-2 ring-bg-primary" />
        </button>

        <div className="hidden lg:flex items-center gap-3 pl-2 border-l border-border">
          <div className="flex flex-col items-end">
            <span className="text-xs font-semibold text-text-primary">Virgil Reinhard</span>
            <span className="text-[10px] text-text-tertiary">CEO</span>
          </div>
          <button className="h-9 w-9 rounded-full overflow-hidden ring-2 ring-accent/30 hover:ring-accent/60 transition-all">
            <img
              src="/avatars/omega.png"
              alt="Virgil"
              className="h-full w-full object-cover"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
