import { FaGithub, FaInstagram, FaLinkedin, FaMedium } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function LogosGrid() {
  return (
    <div className="bg-black py-24 sm:py-32" id="redes">
      <div className="relative isolate px-6 pt-14 lg:px-8">
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
