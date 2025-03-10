import Image from "next/image";
export default function WhoIsUsing() {
  return (
    <section className="using-section">
      <div className="container">
        <h2 className="usingtext">Who’s using GradHub?</h2>
        <div className="using-container">
          <div className="card">
            <div className="card-text">
              <h3>Student</h3>
              <p>
                Access internships, jobs, and opportunities tailored for you.
              </p>
            </div>
            <Image
              src="/student1.png"
              alt="University"
              className="card-image"
            />
          </div>

          <div className="card">
            <div className="card-text">
              <h3>Employer</h3>
              <p>Connect students with top employers and boost growth.</p>
            </div>
            <img src="/student2.png" alt="University" className="card-image" />
          </div>
          <div className="card">
            <div className="card-text">
              <h3>University</h3>
              <p>Discover and hire top talent effortlessly.</p>
            </div>
            <img src="/student3.png" alt="University" className="card-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
