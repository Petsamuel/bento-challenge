import img1 from "../assets/images/illustration-ai-content.webp";
import img2 from "../assets/images/illustration-audience-growth.webp";
import img3 from "../assets/images/illustration-consistent-schedule.webp";
import img4 from "../assets/images/illustration-create-post.webp";
import img5 from "../assets/images/illustration-five-stars.webp";
import img6 from "../assets/images/illustration-grow-followers.webp";
import img7 from "../assets/images/illustration-multiple-platforms.webp";
import img8 from "../assets/images/illustration-schedule-posts.webp";

export const LandingPage = () => {
  return (
    <div className="lg:m-4 font-DmSans bg-white">
      <div className="grid lg:grid-cols-4 md:grid-cols-2  lg:grid-rows-2 auto-rows-auto lg:h-[180svh]  lg:gap-10 gap-5  lg:overflow-hidden relative w-full w-dvh">
        <div className="bg-yellows-100 lg:col-span-1 lg:row-auto rounded-xl flex items-center lg:h-[33rem]   ">
          <div className="p-6 flex flex-col justify-center items-center gap-8">
            <p className="font-medium text-5xl">
              Create and schedule content{" "}
              <span className="text-purples-500 italic">quicker.</span>
            </p>
            <img
              src={img4}
              alt="img-4"
              className="object-contain lg:w-[10rem] "
            />
          </div>
        </div>
        <div className="bg-purples-500 lg:col-span-2 rounded-xl lg:row-auto flex items-center lg:overflow-hidden   row-start-1">
          <div className="p-6 flex flex-col justify-center items-center place-content-center  gap-4 text-white">
            <h1 className="text-7xl font-medium  text-center">
              {" "}
              Social Media <span className="text-yellows-500">10x</span> Faster
              with AI{" "}
            </h1>
            <div className="flex flex-col justify-center items-center">
              <img
                src={img5}
                alt="img-5"
                className="object-contain lg:w-[10rem] "
              />
              <p className="font-normal text-lg">Over 4,000 5-star reviews</p>
            </div>
          </div>
        </div>
        <div className="bg-purple-100 lg:col-span-1 lg:row-span-2 rounded-xl lg:overflow-hidden row-start-4">
          <div className="p-6 flex flex-col justify-between gap-4 items-center  w-full">
            <p className="font-medium text-4xl text-balance my-4">
              Schedule to social media.
            </p>
            <img
              src={img8}
              alt="img-6"
              className="object-cover flex justify-end  ml-[18rem] min-w-[30rem] "
            />
            <p className="font-normal pt-[1rem] text-balance text-xl w-full">
              Optimize post timings to publish content at the perfect time for
              your audience.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-xl  rounded-xl lg:overflow-hidden lg:col-start-2 lg:col-end-2 row-start-2">
          <div className="p-5 flex flex-col justify-center items-center gap-4 my-4 w-full">
            <img
              src={img7}
              alt=""
              className="object-cover flex justify-end w-[30rem] ml-[8rem] rounded-full shadow-sm"
            />
            <p className="text-5xl font-medium">
              Manage multiple accounts and platforms.
            </p>
          </div>
        </div>
        <div className="bg-yellows-500  rounded-xl shadow-lg lg:overflow-hidden lg:row-auto row-start-3">
          <div className="p-6 flex flex-col justify-center items-center gap-8  my-4">
            <p className="text-4xl mb-4 font-medium ">
              {" "}
              Maintain a consistent posting schedule.
            </p>
            <img src={img3} alt="" className="object-cover w-[30rem] " />
          </div>
        </div>
        <div className="bg-yellows-500 lg:col-span-1  rounded-xl lg:overflow-hidden lg:row-start-2 lg:row-end-4  lg:mt-[10rem]">
          <div className="p-6 flex flex-col justify-center items-center gap-8 font-medium text-5xl text-balance">
            <p>Write your content using AI.</p>
            <img src={img1} className="object-cover  max-w-[16rem]" />
          </div>
        </div>
        <div className="bg-white shadow-xl rounded-xl shadom-sm py-4 row-start-6">
          <div className="p-6 flex flex-col  gap-4 ">
            <div className="flex flex-col font-medium text-7xl text-balance gap-4">
              <h1 className="">{">"}56% </h1>
              <h3 className="text-xl">faster audience growth</h3>
            </div>
            <img
              src={img2}
              alt=""
              className="object-cover flex justify-end w-[12rem] pt-4"
            />
          </div>
        </div>
        <div className="bg-purples-500 lg:col-span-2 rounded-xl row-start-5">
          <div className="p-6 flex items-center gap-4 text-white text-4xl font-medium ">
            <img src={img6} alt="" className="object-contain w-[18rem] " />
            <p>Grow followers with non-stop content.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
