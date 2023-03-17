import { getOnlyNonRepeatedGames } from "../utils/games";
import { FSImage } from "./FSImage";

export const Roms = ({ roms, selectedConsole, setSelectedGame }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {roms
        .filter(({ data: { provider } }) => provider.System === selectedConsole)
        .map(({ data: { game: games, provider }, mediaPath }) => {
          if (games) {
            return getOnlyNonRepeatedGames(games).map((g: any) => (
              <button
                type="button"
                data-drawer-target="drawer-right-example"
                data-drawer-show="drawer-right-example"
                data-drawer-placement="right"
                aria-controls="drawer-right-example"
                key={`${g.name}_${provider.System}`}
                onClick={() => setSelectedGame({ ...g, mediaPath })}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 text-left dark:border-gray-700"
              >
                {g.thumbnail && (
                  <FSImage
                    mediaPath={mediaPath}
                    link={g.thumbnail}
                    className="rounded-t-lg"
                  />
                )}

                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {g.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                    {g.desc}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </button>
            ));
          }
        })}
    </div>
  );
};
