import "./HomepageSection.css";
function HomepageSection() {
  return (
    <section className="hero">
      <h1>
        Free Entry Test Prep for <br />
        <em className="emphasis">IBA Karachi, MDCAT, ECAT, LUMS, FAST , NAT and many more</em>
      </h1>
      <p className="hero-sub">
        OpenPrep is built by Pakistani university students who already cracked
        these exams and want to make sure you do too.
        <strong className="hero-sub strong">
          Right now we fully cover IBA Karachi and MDCAT — every question comes
          with a detailed explanation so you understand the why, not just the
          answer.
        </strong>
        ECAT, LUMS, FAST, NET and more are on the way. If you're a university
        student and want to help others, reach out — no experience needed, just
        the willingness to help others.
      </p>
      <div className="hero-actions">
        <a href="/practice" className="btn-primary">Start Practicing</a>
      </div>
    </section>
  );
}

export default HomepageSection;