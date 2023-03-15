import clsx from "clsx";
import { getNavItems } from "../utils/games";

export const SideNav = ({ roms, setSelectedConsole, selectedConsole }) => {
  return (
    <ul className="menu bg-base-100 w-56 grow shrink-0  top-0 sticky max-w-[200px]">
      {getNavItems(roms).map(({ console }) => (
        <button
          key={console}
          onClick={() => setSelectedConsole(console)}
          className={clsx(
            console === selectedConsole
              ? "bg-indigo-800 text-white"
              : "text-indigo-100 hover:bg-indigo-800 hover:text-white",
            "group flex w-full rounded-md p-3 text-xs font-medium text-left"
          )}
          aria-current={console === selectedConsole ? "page" : undefined}
        >
          <span className="mt-2">{console}</span>
        </button>
      ))}
    </ul>
  );
};
