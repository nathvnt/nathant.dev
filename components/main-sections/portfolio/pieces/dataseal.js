export default function Dataseal() {

  return (
    <div className="w-[90%] mx-auto text-[16px] p-6 rounded-md bg-black bg-opacity-65  border-2 border-emerald-600 ">
      <div className="w-[90%] mx-auto px-4 pb-4 flex flex-col gap-5">
        <span>
          DataSeal is a project I worked on as a full-stack software engineer. The goal of this project was to help ensure online privacy
          for customers by developing a suite of custom automated data collection and removal tools integrated into a client facing web application.
        </span>

        <span>Website: <a href="https://dataseal.io/" target="_blank">https://dataseal.io/</a></span>
      </div>

      <div className="w-[90%] mx-auto"> 
        <img src="/ds.png" className="rounded-lg shadow-lg mx-auto block"/>
      </div>
    </div>
  );
}
