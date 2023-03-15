import { invoke } from "@tauri-apps/api";
import { useEffect, useState } from "react";

export const useLoadRoms = () => {
  const [roms, setRoms] = useState<any>([]);
  const [selectedConsole, setSelectedConsole] = useState();
  const [selectedGame, setSelectedGame] = useState(null);

  const getRoms = async () => {
    const lists: string[] = await invoke("get_game_lists");
    const allRoms = lists.map(([path, data]) => ({
      path,
      mediaPath: path,
      data: JSON.parse(data).gameList,
    }));
    setRoms(allRoms);
    setSelectedConsole(allRoms[0].data.provider[0].System[0]);
  };

  useEffect(() => {
    getRoms();
  }, []);

  return {
    selectedConsole,
    selectedGame,
    setSelectedConsole,
    setSelectedGame,
    roms,
  };
};
