import * as React from "react";
import mainImage from "../assets/Roundimage1.png"

export default function MyComponent() {
  return (
    <div className="flex flex-col items-start pt-14 pb-6 pl-20 bg-neutral-100 max-md:pl-5">
      <div className="flex gap-5 justify-between ml-4 w-full text-center max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 my-auto text-base text-neutral-400 max-md:flex-wrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/33c46bea2bc6d6f26cc495bfec9b4a58341f717f6367ad81dd2899a9e4661b06?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&"
            className="shrink-0 max-w-full aspect-[3.45] w-[139px]"
          />
          <div className="flex flex-auto gap-5 hover:cursor-pointer justify-between my-auto max-md:flex-wrap">
            <div className=" hover:text-violet-800">Talent Finder</div>
            <div className=" hover:text-violet-800">For Recruiters</div>
            <div className="justify-center font-semibold hover:text-violet-800">
              For Employers
            </div>
            <div className=" hover:text-violet-800">About Us</div>
            <div className=" hover:text-violet-800">Company</div>
          </div>
        </div>
        <div className="flex gap-4 text-lg md:flex-column font-medium">
          <div className="justify-center px-8 py-2.5 text-violet-800 rounded-xl border-2 border-violet-800 border-solid max-md:px-5">
            Log In
          </div>
          <div className="justify-center px-6 py-2.5 text-white bg-violet-800 rounded-xl max-md:px-5">
            Get Started
          </div>
        </div>
      </div>
      <div className="ml-4 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col items-start self-stretch my-auto text-sm text-violet-800 max-md:mt-10 max-md:max-w-full">
              <div className="self-stretch text-6xl font-bold max-md:max-w-full max-md:text-4xl">
                <span className="text-6xl font-semibold text-violet-800 leading-[75px]">
                  Power Up Your{" "}
                </span>
                <span className="text-6xl font-semibold text-violet-800 leading-[75px]">
                  Hiring
                </span>
                <br />
                <span className="text-5xl text-violet-800  leading-[67px]">
                  with Rework .
                </span>
              </div>
              <div className="self-stretch mt-2.5 leading-6 text-zinc-900 max-md:max-w-full">
                Empower your business with cutting-edge A.I. technology,
                simplified processes, and top-tier talent connections. Rework is
                your strategic partner in redefining how you hire{" "}
              </div>
              <div className="justify-center px-14 py-5 mt-9 text-2xl leading-7 bg-violet-800 rounded-3xl shadow-lg text-neutral-100 max-md:px-5">
                Book A Demo
              </div>
              <div className="flex gap-2.5 py-2 mt-7 rounded-xl">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/215a4dd1890a3090e604259eb749a8f9034271bdcc791c35a540f510de6b4169?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&"
                  className="shrink-0 self-start w-5 aspect-square"
                />
                <div>No credit Required</div>
              </div>
              <div className="flex gap-2.5 py-2 rounded-xl">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/215a4dd1890a3090e604259eb749a8f9034271bdcc791c35a540f510de6b4169?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&"
                  className="shrink-0 self-start w-5 aspect-square"
                />
                <div>Streamlined Recruitment Process</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex lg:w-[700px] overflow-hidden relative flex-col grow items-start px-16 pt-20 pb-3.5 min-h-[596px] max-md:px-5 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet={mainImage}
                className="object-contain absolute inset-0 size-full"
              />
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


