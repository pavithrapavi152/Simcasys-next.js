"use client";

import ResumeForm from "./ResumeForm";

export default function JoinUs() {
  const handleApply = () => {
    document.getElementById("resume-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          <div>
            <p className="text-gray-400">Join us</p>

            <h2 className="text-6xl font-bold">
              Become part
              <br />
              <span className="text-green-600">of our team</span>
            </h2>

            <p className="mt-8 text-gray-600">We foster creativity...</p>

            <div className="flex gap-5 mt-10">
              <div className="border rounded-xl p-5">
                <p>Email us your resume at</p>

                <p className="font-bold">contact@simcasys.com</p>
              </div>

              <button
                onClick={handleApply}
                className="bg-white border border-black text-black px-8 rounded-xl"
              >
                Apply for the Job
              </button>
            </div>
          </div>

          <div>
            <img src="/join-us.jpg" alt="Join Us" />
          </div>
        </div>
      </section>

      <ResumeForm />
    </>
  );
}
