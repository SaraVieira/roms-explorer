import clsx from "clsx";
import { getOnlyNonRepeatedGames } from "../utils/games";
import { FSImage } from "./FSImage";

export const Roms = ({
  roms,
  selectedConsole,
  setSelectedGame,
  selectedGame,
}) => {
  return roms
    .filter(({ data: { provider } }) => provider.System === selectedConsole)
    .map(({ data: { game: games, provider }, mediaPath }) => {
      if (games) {
        return getOnlyNonRepeatedGames(games).map((g: any) => (
          <li
            key={`${g.name}_${provider.System}`}
            className="relative"
            onClick={() => setSelectedGame({ ...g, mediaPath })}
          >
            <div
              className={clsx(
                (selectedGame?.name || []) === g.name
                  ? "ring-2 ring-indigo-500 ring-offset-2"
                  : "focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100",
                "aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100"
              )}
            >
              {g.thumbnail && (
                <FSImage
                  mediaPath={mediaPath}
                  link={g.thumbnail}
                  className={clsx(
                    (selectedGame?.name || []) === g.name
                      ? ""
                      : "group-hover:opacity-75",
                    "pointer-events-none object-cover"
                  )}
                />
              )}
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for {g.name}</span>
              </button>
            </div>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
              {g.name}
            </p>
            <p className="pointer-events-none block text-sm font-medium text-gray-500">
              {g.name}
            </p>
          </li>
        ));
      }
    });
};
