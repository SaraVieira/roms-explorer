import { XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { getDate } from "../utils/games";
import { FSImage } from "./FSImage";

const Stars = ({ rating }) => {
  return (
    <div className="flex items-center">
      <svg
        aria-hidden="true"
        className={clsx(
          "w-5 h-5 ",
          rating >= 1 ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"
        )}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>First star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg
        aria-hidden="true"
        className={clsx(
          "w-5 h-5 ",
          rating >= 2 ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"
        )}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Second star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg
        aria-hidden="true"
        className={clsx(
          "w-5 h-5 ",
          rating >= 3 ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"
        )}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Third star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg
        aria-hidden="true"
        className={clsx(
          "w-5 h-5 ",
          rating >= 4 ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"
        )}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Fourth star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg
        aria-hidden="true"
        className={clsx(
          "w-5 h-5 ",
          rating >= 4.8 ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"
        )}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Fifth star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
        {rating} out of 5
      </p>
    </div>
  );
};

export const Details = ({ selectedGame, selectedConsole, setSelectedGame }) => {
  if (!selectedGame) return null;
  console.log(selectedGame);
  return (
    // <aside className="hidden w-96  border-l border-gray-200 relative bg-white p-8 lg:block">
    //   <button onClick={() => setSelectedGame(null)}>
    //     <XMarkIcon className="w-6 absolute right-6 top-6" />
    //   </button>
    //   <div className="mt-6 space-y-6 pb-16">
    //     <div>
    //       <div className="aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg">
    //         {selectedGame.image && (
    //           <FSImage
    //             mediaPath={selectedGame.mediaPath}
    //             link={selectedGame.image}
    //             className="object-fit"
    //             key={selectedGame.name}
    //           />
    //         )}
    //       </div>
    //       <div className="mt-4 flex items-start justify-between">
    //         <div>
    //           <h2 className="text-lg font-medium text-gray-900">
    //             <span className="sr-only">Details for </span>
    //             {selectedGame.name}
    //           </h2>
    //           <Stars rating={selectedGame.rating * 5} />
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <h3 className="font-medium text-gray-900">Information</h3>
    //       <dl className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
    //         <div className="flex justify-between py-3 text-sm font-medium">
    //           <dt className="text-gray-500">Genre</dt>
    //           <dd className="whitespace-nowrap text-gray-900">
    //             {selectedGame.genre}
    //           </dd>
    //         </div>
    //         <div className="flex justify-between py-3 text-sm font-medium">
    //           <dt className="text-gray-500">Released Date</dt>
    //           <dd className="whitespace-nowrap text-gray-900">
    //             {getDate(selectedGame.releasedate)}
    //           </dd>
    //         </div>
    //         <div className="flex justify-between py-3 text-sm font-medium">
    //           <dt className="text-gray-500">Developer</dt>
    //           <dd className="whitespace-nowrap text-gray-900">
    //             {selectedGame.developer}
    //           </dd>
    //         </div>
    //         <div className="flex justify-between py-3 text-sm font-medium">
    //           <dt className="text-gray-500">Publisher</dt>
    //           <dd className="whitespace-nowrap text-gray-900">
    //             {selectedGame.publisher}
    //           </dd>
    //         </div>
    //       </dl>
    //     </div>

    //     <div>
    //       <h3 className="font-medium text-gray-900">Description</h3>
    //       <div className="mt-2 flex items-center justify-between">
    //         <p className="text-sm italic text-gray-500">{selectedGame.desc}</p>
    //       </div>
    //     </div>
    //     {/* <div>
    //       <h3 className="font-medium text-gray-900">Shared with</h3>
    //       <ul
    //         role="list"
    //         className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200"
    //       >
    //         {currentFile.sharedWith.map((person) => (
    //           <li
    //             key={person.id}
    //             className="flex items-center justify-between py-3"
    //           >
    //             <div className="flex items-center">
    //               <img
    //                 src={person.imageUrl}
    //                 alt=""
    //                 className="h-8 w-8 rounded-full"
    //               />
    //               <p className="ml-4 text-sm font-medium text-gray-900">
    //                 {person.name}
    //               </p>
    //             </div>
    //             <button
    //               type="button"
    //               className="ml-6 rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    //             >
    //               Remove<span className="sr-only"> {person.name}</span>
    //             </button>
    //           </li>
    //         ))}
    //         <li className="flex items-center justify-between py-2">
    //           <button
    //             type="button"
    //             className="group -ml-1 flex items-center rounded-md bg-white p-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //           >
    //             <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400">
    //               <PlusIcon className="h-5 w-5" aria-hidden="true" />
    //             </span>
    //             <span className="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500">
    //               Share
    //             </span>
    //           </button>
    //         </li>
    //       </ul>
    //     </div> */}
    //     <div className="flex gap-x-3">
    //       <button
    //         type="button"
    //         className="flex-1 rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //       >
    //         Download
    //       </button>
    //       <button
    //         type="button"
    //         className="flex-1 rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    //       >
    //         Delete
    //       </button>
    //     </div>
    //   </div>
    // </aside>
    <>
      <div
        id="drawer-right-example"
        className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800"
        tabIndex={-1}
        aria-labelledby="drawer-right-label"
      >
        <h5
          id="drawer-right-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          <svg
            className="w-5 h-5 mr-2"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg>
          Right drawer
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-right-example"
          aria-controls="drawer-right-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          Supercharge your hiring by taking advantage of our{" "}
          <a
            href="#"
            className="text-blue-600 underline dark:text-blue-500 hover:no-underline"
          >
            limited-time sale
          </a>{" "}
          for Flowbite Docs + Job Board. Unlimited access to over 190K
          top-ranked candidates and the #1 design job board.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Learn more
          </a>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Get access{" "}
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};
