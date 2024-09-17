import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";
import banner5 from "../../../assets/images/banner/5.jpg";
import banner6 from "../../../assets/images/banner/6.jpg";
const Banner = () => {
  return (
    <div className="carousel w-full md:h-[600px]">
      {/* slider 1 */}
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={banner1} className="w-full rounded-xl " />
        <div className="absolute rounded-xl bottom-0 gap-5 flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full pl-12 items-center">
          <div className="text-white space-y-7 w-1/2">
            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="rounded-md px-3.5 py-3 bg-[#FF3811] text-white font-medium mr-5 ">Discover More</button>
              <button className="rounded-md px-3.5 py-2.5 m-1 overflow-hidden relative group  border-2 font-medium border-white text-white hover:bg-white hover:text-black ">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 gap-5 flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide6"
            className="btn btn-circle hover:bg-[#FF3811] hover:text-white"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle hover:bg-[#FF3811] hover:text-white"
          >
            ❯
          </a>
        </div>
      </div>
      {/* slider 2 */}
      <div id="slide2" className="carousel-item relative w-full">
      <img src={banner2} className="w-full rounded-xl " />
        <div className="absolute rounded-xl bottom-0 gap-5 flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full pl-12 items-center">
          <div className="text-white space-y-7 w-1/2">
            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="rounded-md px-3.5 py-3 bg-[#FF3811] text-white font-medium mr-5 ">Discover More</button>
              <button className="rounded-md px-3.5 py-2.5 m-1 overflow-hidden relative group  border-2 font-medium border-white text-white hover:bg-white hover:text-black ">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 gap-5 flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide1"
            className="btn btn-circle hover:bg-[#FF3811] hover:text-white "
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle hover:bg-[#FF3811] hover:text-white"
          >
            ❯
          </a>
        </div>
      </div>
      {/* slider 3 */}
      <div id="slide3" className="carousel-item relative w-full">
      <img src={banner3} className="w-full rounded-xl " />
        <div className="absolute rounded-xl bottom-0 gap-5 flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full pl-12 items-center">
          <div className="text-white space-y-7 w-1/2">
            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="rounded-md px-3.5 py-3 bg-[#FF3811] text-white font-medium mr-5 ">Discover More</button>
              <button className="rounded-md px-3.5 py-2.5 m-1 overflow-hidden relative group  border-2 font-medium border-white text-white hover:bg-white hover:text-black ">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 gap-5 flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide2"
            className="btn btn-circle hover:bg-[#FF3811] hover:text-white"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle hover:bg-[#FF3811] hover:text-white"
          >
            ❯
          </a>
        </div>
      </div>
      {/* slider 4 */}
      <div id="slide4" className="carousel-item relative w-full">
      <img src={banner4} className="w-full rounded-xl " />
        <div className="absolute rounded-xl bottom-0 gap-5 flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full pl-12 items-center">
          <div className="text-white space-y-7 w-1/2">
            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="rounded-md px-3.5 py-3 bg-[#FF3811] text-white font-medium mr-5 ">Discover More</button>
              <button className="rounded-md px-3.5 py-2.5 m-1 overflow-hidden relative group  border-2 font-medium border-white text-white hover:bg-white hover:text-black ">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 gap-5 flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide3"
            className="btn btn-circle hover:bg-[#FF3811] hover:text-white"
          >
            ❮
          </a>
          <a
            href="#slide5"
            className="btn btn-circle hover:bg-[#FF3811] hover:text-white"
          >
            ❯
          </a>
        </div>
      </div>
      {/* slider 5 */}
      <div id="slide5" className="carousel-item relative w-full">
      <img src={banner5} className="w-full rounded-xl " />
        <div className="absolute rounded-xl bottom-0 gap-5 flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full pl-12 items-center">
          <div className="text-white space-y-7 w-1/2">
            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="rounded-md px-3.5 py-3 bg-[#FF3811] text-white font-medium mr-5 ">Discover More</button>
              <button className="rounded-md px-3.5 py-2.5 m-1 overflow-hidden relative group  border-2 font-medium border-white text-white hover:bg-white hover:text-black ">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 gap-5 flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide4"
            className="btn btn-circle hover:bg-[#FF3811] hover:text-white"
          >
            ❮
          </a>
          <a
            href="#slide6"
            className="btn btn-circle hover:bg-[#FF3811] hover:text-white"
          >
            ❯
          </a>
        </div>
      </div>
      {/* slider 6 */}
      <div id="slide6" className="carousel-item relative w-full">
      <img src={banner6} className="w-full rounded-xl " />
        <div className="absolute rounded-xl bottom-0 gap-5 flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full pl-12 items-center">
          <div className="text-white space-y-7 w-1/2">
            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="rounded-md px-3.5 py-3 bg-[#FF3811] text-white font-medium mr-5 ">Discover More</button>
              <button className="rounded-md px-3.5 py-2.5 m-1 overflow-hidden relative group  border-2 font-medium border-white text-white hover:bg-white hover:text-black ">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 gap-5 flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide5"
            className="btn btn-circle hover:bg-[#FF3811] hover:text-white"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle hover:bg-[#FF3811] hover:text-white"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
