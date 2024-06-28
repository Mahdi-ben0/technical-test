import { Outlet } from "react-router-dom";

export default function Login() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen overflow-x-hidden">
      <div className="p-6 md:p-14">
        <Outlet />
      </div>
      <div className="bg-[#56CCF2] h-full hidden flex-col items-center pt-10 space-y-10 md:flex">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl text-white font-semibold">
            We give the best experience &#128521;
          </h1>
          <h2 className="text-xl text-white">
            Dedicated virtual consulting platform for docotrs and <br />{" "}
            patients to help them consult across vatious channels
          </h2>
        </div>

        <div className="relative z-20">
          <div className="flex gap-x-4 p-4 w-fit max-w-[410px] min-h-36 bg-white rounded-xl">
            <div>
              <span className="mt-1 rounded-3xl w-5 h-5 block bg-slate-600" />
              <span>4.5</span>
            </div>
            <div className="">
              <span className="font-bold">Eleanor Pena</span>
              <p className="text-sm text-gray-600">
                "This wa my first time booking through doctrin made the
                experience worth it, my friend and i heighly recommended this
                app, Thank you for the great experience"
              </p>
            </div>
          </div>
          <div className="absolute -z-10 top-2/4 -right-3/4 flex gap-x-4 p-4 w-fit max-w-[410px] min-h-36 bg-white rounded-xl">
            <div>
              <span className="mt-1 rounded-3xl w-5 h-5 block bg-slate-600" />
              <span>4.5</span>
            </div>
            <div className="">
              <span className="font-bold">Eleanor Pena</span>
              <p className="text-sm text-gray-600">
                "This wa my first time booking through doctrin made the
                experience worth it, my friend and i heighly recommended this
                app, Thank you for the great experience"
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img className="w-full" src="/doctors-image.png" />
        </div>
      </div>
    </div>
  );
}
