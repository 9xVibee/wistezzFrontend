import SubmitWebsiteForm from "@/components/SubmitWebsiteForm";

const SubmitWebsite = () => {
  window.document.title = "W | Sitezz | Submit Website";

  return (
    <div className="w-full mt-24 px-20">
      <div>
        <h1 className="font-bold tracking-wide text-6xl font-lic">
          Welcome to W.Sitzz.
        </h1>
        <p className="font-bona">
          Please fill up the given below form and then submit the data so that
          we can reach out to you.{" "}
          <span className="font-semibold">PEACE!!</span>
        </p>
      </div>
      <SubmitWebsiteForm />
    </div>
  );
};

export default SubmitWebsite;
