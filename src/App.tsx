import Layout from "./components/Layout";

import { MobileNav } from "./components/MobileNav";
import { Details } from "./components/Details";
import { Roms } from "./components/Roms";
import { SideNav } from "./components/SideNav";
import { useLoadRoms } from "./utils/useRomsLoad";
import { useEffect } from "react";
import { Store } from "tauri-plugin-store-api";
import { open } from "@tauri-apps/api/dialog";

function App() {
  const {
    selectedConsole,
    selectedGame,
    setSelectedConsole,
    setSelectedGame,
    roms,
    getRoms,
  } = useLoadRoms();

  useEffect(() => {
    openSelectMenu();
    // await store.set("some-key", { value: 5 });
    // assert(val, { value: 5 });
    // await store.save(); // this manually saves the store, otherwise the store is only saved when your app is closed
  }, []);

  const openSelectMenu = async () => {
    const store = new Store(".settings.dat");
    const path = await store.get("selected_path");

    if (!path) {
      const selected = await open({
        directory: true,
      });
      await store.set("selected_path", selected);
      await store.save();
    }
    getRoms(path);
  };

  if (!roms.length) return null;
  return (
    <Layout
      Navigation={
        <SideNav
          roms={roms}
          setSelectedConsole={(console) => {
            setSelectedConsole(console);
            setSelectedGame(null);
          }}
          selectedConsole={selectedConsole}
        />
      }
      Roms={
        <Roms
          roms={roms}
          selectedConsole={selectedConsole}
          selectedGame={selectedGame}
          setSelectedGame={setSelectedGame}
        />
      }
      Aside={
        <Details
          setSelectedGame={setSelectedGame}
          selectedGame={selectedGame}
          selectedConsole={selectedConsole}
        />
      }
      MobileNav={
        <MobileNav
          roms={roms}
          setSelectedConsole={(console) => {
            setSelectedConsole(console);
            setSelectedGame(null);
          }}
          selectedConsole={selectedConsole}
        />
      }
    />
  );
}

export default App;
