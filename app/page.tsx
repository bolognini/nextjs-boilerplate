export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="video-background">
    <video autoPlay muted loop>
      <source src="background.mp4" type="video/mp4" />
    </video>
    
  </div>
    <div className="container">
    <p className="glitch">
      <span aria-hidden="true">The Test Library</span>
      The Test Library
      <span aria-hidden="true">The Test Library</span>
    </p>
      <p>Welcome Tester</p>
      <p>Search archived_reports and data</p>
      <p>Use the related Report Number ID</p>
      <p>https://276089230.pages.dev/(Report Number ID)</p>
    </div>
    </div>
  );
}
