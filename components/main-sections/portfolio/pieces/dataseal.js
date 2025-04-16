export default function Dataseal() {

  return (
    <div className="w-[100%] mx-auto text-[12px] lg:text-[16px] p-2 lg:p-6 rounded-md bg-black bg-opacity-65  border-2 border-emerald-600">
      <div className="sm:w-[95%] lg:w-[90%] mx-auto px-4 pb-4 flex flex-col gap-5">
        <span>
          DataSeal is a project I worked on, employed as a full-stack software engineer. The goal of this project was to help ensure online privacy
          for customers by developing a suite of custom automated data collection and removal tools integrated into a client facing web application.
        </span>

        <span className="text-[14px] lg:text-[18px] font-semibold">
          Website: 
          <a 
            href="https://dataseal.io/" 
            target="_blank"
            className="underline text-blue-600 font-semibold ml-2"
          >
            https://dataseal.io/
          </a>
        </span>
      </div>

      <div className="w-[95%] mx-auto my-4"> 
        <img src="/ds.png" className="rounded-lg shadow-lg mx-auto block"/>
      </div>
    </div>
  );
}
