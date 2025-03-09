import Header from "../components/Header";
import WhoIsUsing from "../components/WhoIsUsing";
import JobListings from "../components/JobListings";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <WhoIsUsing />
      <JobListings />
    </div>
  );
}
