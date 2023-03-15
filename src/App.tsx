import Layout from "./components/Layout";

import { MobileNav } from "./components/MobileNav";
import { Details } from "./components/Details";
import { Roms } from "./components/Roms";
import { SideNav } from "./components/SideNav";
import { useLoadRoms } from "./utils/useRomsLoad";

function App() {
  const {
    selectedConsole,
    selectedGame,
    setSelectedConsole,
    setSelectedGame,
    roms,
  } = useLoadRoms();

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
