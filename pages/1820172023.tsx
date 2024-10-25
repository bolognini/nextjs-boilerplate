import '../app/globals.css'

export default function Third() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="video-background">
        <video autoPlay muted loop>
          <source src="https://i.imgur.com/OAAwjCk.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <b className="title">BEYOND INT CHAR</b>
        <p>quick brown fox jumps </p>
        <p>13 16 f9 cc 39 3f 1f 63 61 c9 ff 63 69 fc 16 c6 c3 f6</p>
        <p>over the lazy dog</p>
        <p>63 9c 19 1f 1c c1 19 36 f3 91 9f 6c 63 6f</p>
        <p>0123456789</p>
        <p>96 11 cf 33 31 93 66 f1 3c 99 </p>
      </div>
    </div>
  )
}
