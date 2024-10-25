import '../app/globals.css'

export default function Second() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="video-background">
        <video autoPlay muted loop>
          <source src="https://i.imgur.com/ySiFZHm.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <b>EMERGENCY LOCKDOWN ASSESSMENT</b>
        <p>
          Due to security breach. Emergency lockdown is initiated. All employee
          to follow the protocol.
        </p>
        <p>
          Elevator access is limited to Lobby (1st Floor) and Office (60th
          Floor)
        </p>
        <p>
          For testers who are approved to enter the Server Room, you need to
          input the designated SERVER FLOOR NUMBER followed by ADMIN ACCESS CODE
        </p>
        <p>ATTENTION: The ADMIN ACCESS CODE generated today is 4159</p>
      </div>
    </div>
  )
}
