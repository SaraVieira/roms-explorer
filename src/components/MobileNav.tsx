import clsx from "clsx";
import { getNavItems } from "../utils/games";

export const MobileNav = ({ roms, setSelectedConsole, selectedConsole }) => {
  return getNavItems(roms).map(({ console }) => (
    <button
      key={console}
      onClick={() => setSelectedConsole(console)}
      className={clsx(
        console === selectedConsole
          ? "bg-indigo-800 text-white"
          : "text-indigo-100 hover:bg-indigo-800 hover:text-white",
        "group flex items-center rounded-md py-2 px-3 text-sm font-medium"
      )}
      aria-current={console === selectedConsole ? "page" : undefined}
    >
      <span>{console}</span>
    </button>
  ));
};
