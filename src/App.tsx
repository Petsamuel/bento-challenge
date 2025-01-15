import "./App.css";

function App() {
  return (
    <div className="m-4">
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 lg:grid-rows-12 gap-4 h-[180svh]">
        {/* cols-1 */}
        <div className="lg:col-span-1   lg:row-span-6 md:row-span-2  place-content-center items-center ">
          <img
            src={"https://photo-grid-xi.vercel.app/assets/sea-B7vGIZvm.webp"}
            alt={"img-1"}
            className="object-cover h-full  rounded-2xl  w-full"
          />
        </div>
        <div className="lg:col-span-3 lg:row-span-6 md:row-span-3  place-content-center items-center  ">
          <img
            src={
              "https://photo-grid-xi.vercel.app/assets/chun-li-BpwPOov9.webp"
            }
            alt={"img-2"}
            className="object-cover h-full  rounded-2xl w-full"
          />
        </div>
        <div className="lg:col-span-1 lg:row-span-6  md:row-span-2   place-content-center items-center ">
          <img
            src={"https://photo-grid-xi.vercel.app/assets/var-DRAoKdZB.webp"}
            alt={"3"}
            className="object-cover  h-full  rounded-2xl w-full"
          />
        </div>
        <div className="lg:col-span-1  lg:row-span-3 md:row-span-2  place-content-center items-center ">
          <img
            src={
              "https://photo-grid-xi.vercel.app/assets/restaurant-DDiWP-jG.webp"
            }
            alt={"4"}
            className="object-cover h-full  rounded-2xl w-full"
          />
        </div>
        <div className="lg:col-span-1 lg:row-span-6  md:row-span-4   place-content-center items-center ">
          <img
            src={
              "https://photo-grid-xi.vercel.app/assets/astronaut-gOCFgbpq.webp"
            }
            alt={"5"}
            className="object-cover h-full  rounded-2xl w-full"
          />
        </div>
        <div className="lg:col-span-3 lg:row-span-3 md:row-span-2  place-content-center items-center ">
          <img
            src={
              "https://photo-grid-xi.vercel.app/assets/bedroom-DTV6Z5Pv.webp"
            }
            alt={"6"}
            className="object-cover h-full  rounded-2xl w-full"
          />
        </div>
        <div className="lg:col-span-1  lg:row-span-3 md:row-span-3  place-content-center items-center ">
          <img
            src={
              "https://photo-grid-xi.vercel.app/assets/var-baddie-D6LsFdTV.webp"
            }
            alt={"7"}
            className="object-cover h-full  rounded-2xl w-full"
          />
        </div>
        <div className="lg:col-start-3 lg:col-end-6 lg:row-span-3  md:row-span-2 place-content-center items-center ">
          <img
            src={
              "https://photo-grid-xi.vercel.app/assets/dark-mannequin-CKI6McgY.webp"
            }
            alt={"8"}
            className="object-cover h-full  rounded-2xl w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
