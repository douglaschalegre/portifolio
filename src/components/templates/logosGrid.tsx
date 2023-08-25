import { FaGithub, FaInstagram, FaLinkedin, FaMedium } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function LogosGrid() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-36"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-5rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/3 rotate-[210deg] bg-gradient-to-tr from-orange-500 to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex justify-center text-lg font-semibold leading-8">
            <h2>Me encontre nas redes</h2>
          </div>
          <div className="-mx-6 mt-10 grid grid-cols-1 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-lg md:grid-cols-2">
            <div className="bg-zinc-900 p-8 shadow-inner shadow-gray-900 hover:bg-zinc-900/90 sm:p-10">
              <a
                href="https://www.instagram.com/dev.douglas/"
                target="_blank"
                className="flex h-full w-full items-center justify-center gap-x-1 font-semibold"
              >
                <div className="">
                  <FaInstagram className="text-white" />
                </div>
                <div>
                  <p className="">dev.douglas</p>
                </div>
              </a>
            </div>
            <div className="bg-zinc-900 p-8 shadow-inner shadow-gray-900 hover:bg-zinc-900/90 sm:p-10">
              <a
                href="https://www.linkedin.com/in/douglaschalegre/"
                target="_blank"
                className="flex h-full w-full items-center justify-center gap-x-1 font-semibold"
              >
                <div className="">
                  <FaLinkedin className="text-white" />
                </div>
                <div>
                  <p>Douglas Chalegre</p>
                </div>
              </a>
            </div>
            <div className="bg-zinc-900 p-8 shadow-inner shadow-gray-900 hover:bg-zinc-900/90 sm:p-10">
              <a
                href="https://github.com/douglaschalegre"
                target="_blank"
                className="flex h-full w-full items-center justify-center gap-x-1 font-semibold"
              >
                <div className="">
                  <FaGithub className="text-white" />
                </div>
                <div>
                  <p>douglaschalegre</p>
                </div>
              </a>
            </div>
            <div className="bg-zinc-900 p-8 shadow-inner shadow-gray-900 hover:bg-zinc-900/90 sm:p-10">
              <a
                href="https://medium.com/@douglaschalegre"
                target="_blank"
                className="flex h-full w-full items-center justify-center gap-x-1 font-semibold"
              >
                <div className="">
                  <FaMedium className="text-white" />
                </div>
                <div>
                  <p>douglaschalegre</p>
                </div>
              </a>
            </div>
            <div className="bg-zinc-900 p-8 shadow-inner shadow-gray-900 hover:bg-zinc-900/90 sm:p-10 md:col-span-2">
              <a
                href="mailto:douglas.chalegre@gmail.com"
                target="_blank"
                className="flex h-full w-full items-center justify-center gap-x-1 font-semibold"
              >
                <div className="">
                  <HiOutlineMail className="text-white" />
                </div>
                <div>
                  <p>douglas.chalegre@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
