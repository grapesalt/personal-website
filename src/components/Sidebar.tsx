import { useState } from 'react'
import '../global.css'
import { AnimatePresence, motion } from 'framer-motion'

const Sidebar = () => {
  const navLinks = ['about', 'ramblings', 'projects', 'contact']
  const isMd = document.documentElement.clientWidth < 850
  const isSm = document.documentElement.clientWidth < 500

  const [show, setShow] = useState(!isMd)

  return (
    <AnimatePresence mode="wait">
      {!show ? (
        <motion.button
          key="modal"
          initial={{ y: '-200%' }}
          animate={{ y: '0%' }}
          whileTap={{ scale: 0.9 }}
          exit={{ y: '-200%' }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="fixed flex m-[20px] bg-black h-[49px] w-[100px] text-white justify-center items-center font-mono border-2 border-black hover:italic group dark:bg-[#171919] dark:text-[#E5E2DF] dark:border-[#313537]"
          onClick={() => setShow(!show)}>
          MENU{' '}
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 ml-[10px] group-hover:rotate-[360deg] duration-300 transition">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
          </svg>
        </motion.button>
      ) : (
        <motion.aside
          aria-label="Sidenav"
          key="sidebar"
          className={`${isMd ? 'fixed' : 'sticky'} top-0 left-0 w-[240px] flex flex-col h-screen`}
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}>
          <div className="overflow-y-auto py-5 px-5 h-full bg-white dark:bg-[#171919] border-r-2 border-black dark:border-[#313537]">
            <div className="grid grid-cols-2">
              <a href="/">
                <h1 className="mb-9 text-xl hover:italic dark:text-[#E5E2DF] font-bold font-[Gooper]">
                  THE
                  <br /> GRAPESALT JOURNAL
                </h1>
              </a>
              <button
                className="w-6 h-6 ml-[70px] hover:rotate-[360deg] transition duration-300"
                onClick={() => {
                  setShow(!show)
                }}>
                <svg
                  className="w-5 h-5 dark:stroke-[#E5E2DF]"
                  data-slot="icon"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path>
                </svg>
              </button>
            </div>
            <ul>
              {navLinks.map((navLink, i) => (
                <li>
                  <a
                    key={i}
                    className="font-mono italic hover:not-italic hover:bg-yellow-400 hover:bg-opacity-50 text-black dark:text-[#E5E2DF]"
                    href={`/${navLink}`}>
                    {navLink}
                  </a>
                </li>
              ))}
            </ul>

            <div className="fixed font-mono mb-10 bottom-0 grid grid-cols-3 gap-8">
              <hr className="border-[1.5px] border-black dark:border-[#313537] col-span-3" />
              <a className="font-mono dark:text-[#E5E2DF] text-center hover:bg-red-500 hover:bg-opacity-50 hover:italic">
                $$
              </a>
              <a className="font-mono dark:text-[#E5E2DF] text-center hover:bg-gray-500 hover:bg-opacity-50 hover:italic">
                GH
              </a>
              <a className="font-mono dark:text-[#E5E2DF] text-center hover:bg-orange-500 hover:bg-opacity-50 hover:italic">
                RSS
              </a>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}

export default Sidebar
