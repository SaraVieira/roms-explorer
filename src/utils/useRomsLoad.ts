import { invoke } from "@tauri-apps/api";
import Fuse from "fuse.js";
import { useEffect, useState } from "react";

export const useLoadRoms = () => {
  const [roms, setRoms] = useState<any>([]);
  const [selectedConsole, setSelectedConsole] = useState();
  const [selectedGame, setSelectedGame] = useState(null);

  const getRoms = async (path) => {
    const lists: string[] = await invoke("get_game_lists", { path: path });
    const allRoms = lists.map(([path, data]) => ({
      path,
      mediaPath: path,
      data: JSON.parse(data).gameList,
    }));
    const options = {
      keys: ["data.game.name"],
    };

    const fuse = new Fuse(roms, options);

    const result = fuse.search("mar", { limit: 50 });
    console.log(result);
    setRoms(allRoms);
    setSelectedConsole((allRoms || [])[0]?.data?.provider?.System);
  };

  return {
    selectedConsole,
    selectedGame,
    setSelectedConsole,
    setSelectedGame,
    roms,
    getRoms,
  };
};
