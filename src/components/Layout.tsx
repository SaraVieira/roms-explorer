export default function Layout({ Navigation, Roms, Aside }) {
  return (
    <>
      {Navigation}
      <div className="p-4 sm:ml-64">{Roms}</div>
      {/* Details sidebar */}
      {Aside}
    </>
  );
}
