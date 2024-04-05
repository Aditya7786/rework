

function Page3() {
  return (
    <div className="flex justify-center items-center px-16 py-20 bg-neutral-100 max-md:px-5">
      <div className="flex flex-col items-center mt-6 w-full max-w-[1198px] max-md:max-w-full">
        <div className="text-4xl font-semibold text-center text-violet-800 capitalize leading-[50px] max-md:max-w-full">
          How Our System <span className="">Operates</span>
        </div>
        <div className="self-stretch mt-28 rounded-lg max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-between self-stretch px-8 pt-8 pb-16 w-full bg-white max-md:px-5">
                <div className="text-2xl font-semibold leading-7 text-black">
                  Upload Documents
                </div>
                <div className="mt-16 text-lg text-zinc-600 max-md:mt-10">
                  Shortlist the most qualified candidate and upload their
                  details for the top companies
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-between self-stretch px-8 pt-8 pb-16 w-full bg-violet-100 max-md:px-5">
                <div className="text-2xl font-semibold leading-7 text-zinc-900">
                  Sign Up
                </div>
                <div className="mt-16 text-lg text-zinc-600 max-md:mt-10">
                  Follow the link below to sign up and get access of the current
                  job postings
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-between self-stretch px-8 pt-8 pb-16 w-full bg-white max-md:px-5">
                <div className="text-2xl font-semibold leading-7 text-black">
                  Get Rewards
                </div>
                <div className="mt-16 text-lg text-zinc-600 max-md:mt-10">
                  As soon as the candidate gets selected you get your benefits
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center px-8 py-4 mt-24 text-lg font-medium text-center text-violet-800 rounded-xl border-2 border-violet-800 border-solid shadow-2xl bg-neutral-100 max-md:px-5 max-md:mt-10">
          Get Started
        </div>
      </div>
    </div>
  );
}
export default Page3;
