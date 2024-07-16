'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  const [isCalculated, setIsCalculated] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCalculate = () => {
    setIsCalculated(true);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <main>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                <svg
                  className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0">
                <span className="font-bold text-xl">Kalkulator Gaji</span>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link href="/Dashboard">
                    <p className="text-gray-700 hover:bg-gradient-to-r from-[#ac2982] to-[#fef081] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Dashboard
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/Dashboard">
              <p className="text-gray-700 hover:bg-gradient-to-r from-[#ac2982] to-[#fef081] hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Dashboard
              </p>
            </Link>
          </div>
        </div>
      </nav>
      <div className="flex mt-20 justify-center min-h-screen">
        <div className="flex flex-col h-auto w-full sm:w-[80vw] bg-white px-4 sm:px-36">
          <div id="judul">
            <div className="flex flex-col gap-5 justify-center items-center">
              <h1 className="text-4xl text-center font-bold text-[#373737]">Kalkulator gaji</h1>
              <p className="px-4 sm:px-10 text-center">Kalkulator gaji digunakan untuk menghitung gaji karyawan berdasarkan project yang sudah dikerjakan</p>
            </div>
          </div>
          <div id="konten" className="flex flex-col sm:flex-row mt-10 sm:mt-20 gap-10 sm:gap-20">
            <div id="kiri" className="w-full">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <span className="font-semibold text-[#373737] hover:text-[#AC2982]">Nama karyawan</span>
                  <input className="p-2 w-full sm:w-[35rem] h-10 border-[#a1a1a1] border-[1px] rounded hover:border-[#AC2982]" type="text" name="karyawan" id="user" />
                </div>
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-20">
                  <div className="flex flex-col">
                    <span className="font-semibold text-[#373737] hover:text-[#AC2982]">Periode job</span>
                    <span className="font-semibold text-[#373737] hover:text-[#AC2982]">From</span>
                    <input className="p-2 mb-10 sm:mb-2 w-full sm:w-[15rem] h-10 border-[#a1a1a1] border-[1px] rounded hover:border-[#AC2982]" type="date" name="job-period" id="job-period" />
                    <span className="font-semibold text-[#373737] hover:text-[#AC2982]">To</span>
                    <input className="p-2 w-full sm:w-[15rem] h-10 border-[#a1a1a1] border-[1px] rounded hover:border-[#AC2982]" type="date" name="job-period" id="job-period" />
                  </div>
                  <div className="flex flex-col">
                    <span className="mt-5 font-semibold text-[#373737] hover:text-[#AC2982]">Total job</span>
                    <input className="p-2 w-full sm:w-[15rem] h-10 border-[#a1a1a1] border-[1px] rounded hover:border-[#AC2982]" placeholder="e.g 50" type="number" name="total-job" id="total-job" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[#373737] hover:text-[#AC2982]">Gross profit</span>
                  <input className="p-2 w-full sm:w-[15rem] h-10 border-[#a1a1a1] border-[1px] rounded hover:border-[#AC2982]" type="text" name="gross-profit" id="gross-profit" />
                </div>
                <div className="mt-10 flex justify-center sm:justify-start">
                  <button
                    id="submit"
                    className="h-10 w-40 rounded-full bg-gradient-to-r from-[#ac2982] to-[#fef081] text-white font-bold"
                    onClick={handleCalculate}
                  >
                    Count!
                  </button>
                </div>
              </div>
            </div>
            <div id="kanan" className={`w-full flex justify-center items-center ${isCalculated ? 'hidden' : ''}`}>
              <Image src="/desain.png" width={500} height={500} alt="Desain" />
            </div>
            <div id="alt-kanan" className={`w-full flex justify-center items-center ${isCalculated ? '' : 'hidden'}`}>
              <div className="flex flex-col gap-5 justify-center items-center border-[#313131] border-2 border-dashed w-96 h-40">
                <h1 className="font-bold text-2xl text-[#373737]">Hasil hitungan</h1>
                <h2 className="font-normal text-xl text-[#373737]">Rp 100.000</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
