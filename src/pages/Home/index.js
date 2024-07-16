'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  const [isCalculated, setIsCalculated] = useState(false);

  const handleCalculate = () => {
    setIsCalculated(true);
  };

  return (
    <main>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
      </nav>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col h-[80vh] w-[80vw] bg-white px-36">
          <div id="judul">
            <div className="flex flex-col gap-5 pt-10 justify-center items-center">
              <h1 className="text-4xl text-center font-bold text-[#373737]">Kalkulator gaji</h1>
              <p className="px-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eaque alias minima neque rerum?</p>
            </div>
          </div>
          <div id="konten" className="flex flex-row mt-20 gap-20">
            <div id="kiri" className="w-full">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <span className="font-semibold text-[#373737] hover:text-[#AC2982]">Nama karyawan</span>
                  <input className="p-2 w-[35rem] h-10 border-[#a1a1a1] border-[1px] rounded hover:border-[#AC2982] " type="text" name="karyawan" id="user" />
                </div>
                <div className="flex flex-row gap-20">
                  <div className="flex flex-col">
                    <span className="font-semibold text-[#373737] hover:text-[#AC2982]">Periode job</span>
                    <input className="p-2 w-[15rem] h-10 border-[#a1a1a1] border-[1px] rounded hover:border-[#AC2982]" type="text" name="job-period" id="job-period" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-[#373737] hover:text-[#AC2982]">Total job</span>
                    <input className="p-2 w-[15rem] h-10 border-[#a1a1a1] border-[1px] rounded hover:border-[#AC2982]" placeholder="e.g 50" type="number" name="total-job" id="total-job" />
                    
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[#373737] hover:text-[#AC2982]">Gross profit</span>
                  <input className="p-2 w-[15rem] h-10 border-[#a1a1a1] border-[1px] rounded hover:border-[#AC2982]" type="text" name="gross-profit" id="gross-profit" />
                </div>
                <div className="ms-[10vw] mt-10">
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
              <Image src="/desain.png" width={500} height={500} alt="" />
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
