function Header() {
  return (
    <header>
      <video src="./video.mp4" loop autoPlay muted></video>
      <h1>We Provide <br/> <span>IT Solutions</span>
To Your Business!</h1>

      <div className="row">
        <button className="btn" style={{ cursor: "pointer" }}>
          Get Started
        </button>

        <button className="btn" style={{ cursor: "pointer" }}>
          Let's Talk
        </button>
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
