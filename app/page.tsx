export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="video-background">
        <video autoPlay muted loop>
          <source src="https://i.imgur.com/OAAwjCk.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <p className="glitch">
          <span aria-hidden="true">BEYOND INTRANET</span>
          BEYOND INTRANET
          <span aria-hidden="true">BEYOND INTRANET</span>
        </p>
        <p>Welcome Crew Member</p>
        <p>Please use your Report Number ID to access the desired report</p>
        <p>
          https://nextjs-boilerplate-green-five-84.vercel.app/(Report Number ID)
        </p>
      </div>
    </div>
  )
}
