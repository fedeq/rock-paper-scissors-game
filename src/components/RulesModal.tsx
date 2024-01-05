import {Fragment} from "react";
import {Dialog, Transition} from "@headlessui/react";

export default function RulesModal({isOpen, onClose}: {isOpen: boolean; onClose: () => void}) {
  return (
    <Transition.Root as={Fragment} show={isOpen}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white p-8 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <header className="flex items-center justify-between">
                  <h1 className="text-dark_text text-4xl font-semibold uppercase">RULES</h1>
                  <button type="button" onClick={onClose}>
                    <span className="sr-only font-semibold">Close</span>
                    <svg
                      className="text-header-outline hover:text-dark_text h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 18L18 6M6 6l12 12"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </header>
                <div className="mt-8 flex items-center justify-center">
                  <RulesImage />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

function RulesImage() {
  return (
    <svg height="270" width="304" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity=".097" />
          <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="b" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity=".097" />
          <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <ellipse cx="53.189" cy="54.815" fill="#B1B4C5" rx="53.189" ry="54.815" />
        <ellipse cx="53.189" cy="52.385" fill="url(#a)" rx="53.189" ry="52.385" />
        <g transform="translate(12.357 12.421)">
          <ellipse cx="40.832" cy="41.044" fill="#E1E4ED" rx="40.832" ry="41.044" />
          <path
            d="M56.697 30.417a2.125 2.125 0 00-.904-.146c-.417.03-.755.201-.955.481-1.177 1.666-2.141 4.81-2.919 7.337-.357 1.169-.836 2.733-1.183 3.475-.362-2.08.047-9.697.206-12.63l.002-.047c.11-2.038.125-2.396.1-2.553-.174-1.118-.618-1.852-1.319-2.18-.708-.333-1.629-.186-2.62.417-.497.303-.635 1.345-1.061 6.067l-.002.02c-.235 2.595-.776 8.568-1.441 9.563-.75-1.392-1.784-9.3-2.23-12.722-.312-2.397-.494-3.774-.616-4.19-.257-.87-1.343-1.611-2.418-1.653-.895-.044-1.629.415-1.98 1.214-.655.736-.423 3.179.302 8.964.344 2.754 1.056 8.441.608 9.08-.893-.099-2.427-3.661-4.559-10.592-.598-1.942-.783-2.525-.967-2.78-.362-.891-1.593-1.578-2.696-1.5a2.314 2.314 0 00-.277.036c-.578.116-1.896.653-1.615 3.13.779 3.435 1.624 5.957 2.445 8.405l.016.05c.491 1.465.955 2.85 1.387 4.388 1.016 3.63.621 5.882.616 5.907-.034.232-.105.374-.211.423a.405.405 0 01-.143.033c-.322.023-.805-.193-1.055-.333-.568-1.098-3.4-6.33-5.967-7.055L25.15 41l-.093.008c-.942.09-1.634.45-2.057 1.068-.67.978-.393 2.224-.325 2.474l.038.09c.02.037 2.079 3.825 2.397 5.587.275 1.511 1.696 3.148 2.838 4.464l.047.054c.373.43.695.802.948 1.146 3.316 3.492 8.558 6.428 8.601 6.452.654.487 1.018.958 1.056 1.363a.595.595 0 01-.117.43l-.114.12.725.711 13.832-.98.59-2.73c1.823-7.705 1.442-14.275 1.436-14.319.007-.242.518-2.58.93-4.468l.011-.048c.82-3.763 1.838-8.444 2.034-10.225.085-.761-.398-1.46-1.23-1.779z"
            fill="#8A90AC"
            fillRule="nonzero"
          />
        </g>
        <g transform="translate(196)">
          <ellipse cx="53.686" cy="54.815" fill="#B1B4C5" rx="53.686" ry="54.815" />
          <ellipse cx="53.686" cy="52.385" fill="url(#b)" rx="53.686" ry="52.385" />
          <g transform="translate(12.473 12.421)">
            <ellipse cx="41.214" cy="41.044" fill="#E1E4ED" rx="41.214" ry="41.044" />
            <path
              d="M30.455 40.692l4.451-6.234c-1.85-.307-5.248-.375-8.031 2.397-4.388 4.37-6.165 13.809-6.535 16.093l11.15 11.105c2.008-.17 10.896-1.353 19.46-9.881.09-.184 2.177-1.72.471-3.418-.814-.81-2.162-.796-2.993.033a1.051 1.051 0 01-1.497.015 1.04 1.04 0 01.015-1.49l3.026-3.014c1.538-1.532.089-4.116-2.058-3.495l-2.477 2.112a1.065 1.065 0 01-1.497-.103c-.384-.443-.302-1.114.135-1.492 8.654-7.562 7.39-6.65 12.958-11.848 2.08-1.725-.536-4.776-2.586-3.03L40.978 40.506a1.051 1.051 0 01-1.378-.015c-.445-.383-.455-.934-.164-1.37l9.395-14.545c1.373-1.852-1.33-3.91-2.776-2.042L32.164 41.881a1.05 1.05 0 01-1.47.255 1.02 1.02 0 01-.24-1.444z"
              fill="#8A90AC"
              fillRule="nonzero"
            />
          </g>
        </g>
        <g transform="translate(98 160)">
          <ellipse cx="53.686" cy="54.815" fill="#B1B4C5" rx="53.686" ry="54.815" />
          <ellipse cx="53.686" cy="52.385" fill="url(#b)" rx="53.686" ry="52.385" />
          <g transform="translate(12.473 12.421)">
            <ellipse cx="41.214" cy="41.044" fill="#E1E4ED" rx="41.214" ry="41.044" />
            <path
              d="M57.179 35.15c-.475-5.997-7.208-5.385-7.208-5.385-2.842-5.01-7.281-1.381-7.281-1.381-3.41-4.911-7.687-.36-7.687-.36-7.373-.796-7.087 5.234-7.087 5.234-.173 1.917 1.04 7.847 1.04 7.847-1.094-3.418-3.467-.581-3.467-.581-2.917 4.502-.721 6.967-.721 6.967 3.947 4.626 12.357 10.18 12.357 10.18 3.046 1.745 1.757 3.3 1.757 3.3l18.42-3.044.424-3.494c2.8-8.472-.547-19.284-.547-19.284z"
              fill="#8A90AC"
              fillRule="nonzero"
            />
          </g>
        </g>
        <text
          fill="#B1B4C5"
          fontFamily="BarlowSemiCondensed-Bold, Barlow Semi Condensed"
          fontSize="13"
          fontStyle="condensed"
          fontWeight="bold"
        >
          <tspan x="134" y="31">
            BEATS
          </tspan>
        </text>
        <text
          fill="#B1B4C5"
          fontFamily="BarlowSemiCondensed-Bold, Barlow Semi Condensed"
          fontSize="13"
          fontStyle="condensed"
          fontWeight="bold"
        >
          <tspan x="40" y="147">
            BEATS
          </tspan>
        </text>
        <text
          fill="#B1B4C5"
          fontFamily="BarlowSemiCondensed-Bold, Barlow Semi Condensed"
          fontSize="13"
          fontStyle="condensed"
          fontWeight="bold"
        >
          <tspan x="235" y="147">
            BEATS
          </tspan>
        </text>
        <g fill="#B1B4C5" transform="matrix(-1 0 0 1 177 39)">
          <rect height="4" rx="2" width="50" y="10" />
          <path d="M41.963 2.015l8.59 8.728c.716.727.71 1.896-.013 2.616a1.833 1.833 0 01-2.6-.013l-8.59-8.728a1.855 1.855 0 01.013-2.616 1.833 1.833 0 012.6.013z" />
          <path d="M39.35 19.382l8.59-8.728a1.833 1.833 0 012.6-.013c.723.72.729 1.889.013 2.616l-8.59 8.728a1.833 1.833 0 01-2.6.013 1.855 1.855 0 01-.013-2.616z" />
        </g>
        <g fill="#B1B4C5" transform="scale(1 -1) rotate(-55 -82.574 -131.195)">
          <rect height="4" rx="2" width="50" y="10" />
          <path d="M41.963 2.015l8.59 8.728c.716.727.71 1.896-.013 2.616a1.833 1.833 0 01-2.6-.013l-8.59-8.728a1.855 1.855 0 01.013-2.616 1.833 1.833 0 012.6.013z" />
          <path d="M39.35 19.382l8.59-8.728a1.833 1.833 0 012.6-.013c.723.72.729 1.889.013 2.616l-8.59 8.728a1.833 1.833 0 01-2.6.013 1.855 1.855 0 01-.013-2.616z" />
        </g>
        <g fill="#B1B4C5" transform="rotate(-55 240.022 -103.651)">
          <rect height="4" rx="2" width="50" y="10" />
          <path d="M41.963 2.015l8.59 8.728c.716.727.71 1.896-.013 2.616a1.833 1.833 0 01-2.6-.013l-8.59-8.728a1.855 1.855 0 01.013-2.616 1.833 1.833 0 012.6.013z" />
          <path d="M39.35 19.382l8.59-8.728a1.833 1.833 0 012.6-.013c.723.72.729 1.889.013 2.616l-8.59 8.728a1.833 1.833 0 01-2.6.013 1.855 1.855 0 01-.013-2.616z" />
        </g>
      </g>
    </svg>
  );
}
