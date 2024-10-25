import '../app/globals.css'

export default function Second() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="video-background">
        <video autoPlay muted loop>
          <source src="https://i.imgur.com/OAAwjCk.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <b className="title">EMERGENCY LOCKDOWN</b>
        <p>
          Due to security breach, emergency lockdown is initiated. All employee
          please evacute the building immediately!
        </p>
        <p>
          If you encounter yourself stuck in any floor, please use the temporary
          ADMIN ACCESS CODE to follow the evacutation process
        </p>
        <br />
        <p>ATTENTION: The temporary ADMIN ACCESS CODE generated is 1010</p>
      </div>
    </div>
  )
}
