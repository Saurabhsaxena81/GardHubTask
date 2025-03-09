import Image from "next/image";
const jobs = [
  {
    title: "Technical Support Special.",
    company: "Google",
    location: "New Delhi, India",
    salary: "₹20,000 - ₹25,000",
    type: "HYBRID",
    companyImg: "/google.png",
  },
  {
    title: "Risk Analyst",
    company: "Deloitte",
    location: "Gurugram, India",
    salary: "₹8,00,000 per annum",
    type: "HYBRID",
    companyImg: "/delliot.png",
  },
  {
    title: "Business Development Ass.",
    company: "Weyspire",
    location: "Gurugram, India",
    salary: "₹7,00,000 per annum",
    type: "IN-OFFICE",
    companyImg: "/wayspare.png",
  },
];

export default function JobListings() {
  return (
    <section className="jobs-section">
      <div className="container">
        <div className="usingtext findjob">
          <span>Find Your Dream Job</span>
          <Image
            src="/star.png"
            alt="logo"
            width={20} /* Adjust size as needed */
            height={20}
          />{" "}
        </div>

        <div className="jobs-container">
          {jobs.map((job, index) => (
            <div key={index} className="job-card">
              <div className="job-header">
                <Image
                  src={job.companyImg}
                  alt={job.company}
                  height={45}
                  width={45}
                  className="company-logo"
                />

                <div className="job-title">
                  <span className="title">{job.title}</span>
                  <h3 className="company-name">{job.company}</h3>
                </div>
              </div>

              <span className="job-type">{job.type}</span>

              <div className="job-location">
                <Image
                  src="/MapPin.png"
                  alt="Location"
                  width={14.699884414672852}
                  height={13.997374534606934}
                />
                <span>{job.location}</span>
              </div>

              <div className="job-salary">
                <Image
                  src="/salary.png"
                  alt="Salary"
                  width={14.699884414672852}
                  height={13.997374534606934}
                  className="salary"
                />
                <span>{job.salary}</span>
              </div>

              <div className="job-buttons">
                <button className="details-btn">View details</button>
                <button className="apply-btn">Apply now</button>
              </div>
            </div>
            // <div key={index} className="job-card">
            //   <h3>{job.title}</h3>
            //   <p>
            //     <strong>{job.company}</strong>
            //   </p>
            //   <p>{job.location}</p>
            //   <p>{job.salary}</p>
            //   <span className="job-type">{job.type}</span>
            //   <div className="job-buttons">
            //     <button className="view-btn">View details</button>
            //     <button className="apply-btn">Apply now</button>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
}
