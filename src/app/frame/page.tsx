"use client";
import Image from "next/image";
import { groupedBlocksData } from "@/app/data";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12 bg-gray-50 min-h-screen">
      <div className="space-y-2 border-b pb-6 border-gray-200">
        <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
          Miliki Frame: Usimamizi na Ukodishaji wa Fremu za Biashara
        </h1>
        <p className="text-base text-gray-500 max-w-3xl leading-relaxed">
          Kagua na udhibiti orodha ya fremu zilizopangwa kwa majina ya block na namba zake za usajili (Registration Numbers).
        </p>
      </div>
      {groupedBlocksData.map((block, blockIndex) => (
        <div key={blockIndex} className="space-y-4">
          <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">{block.blockName}</h2>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-0.5">
                Namba ya Usajili: <span className="text-blue-600 font-mono font-bold">{block.registrationNumber}</span>
              </p>
            </div>
            <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full self-start sm:self-auto">
              Zipo: {block.frames.length} Fremu
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {block.frames.map((frame) => (
              <div key={frame.id} className="group rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:border-gray-300">
                <div className="relative aspect-4/3 w-full bg-gray-100 overflow-hidden border-b border-gray-100">
                  <Image
                    src={frame.image}
                    alt={frame.frameNumber}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-102"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority
                  />
                  <span className={`absolute top-3 right-3 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm z-10 tracking-wide uppercase ${
                    frame.status === "Wazi" ? "bg-emerald-500 text-white" : "bg-rose-500 text-white"
                  }`}>
                    {frame.status === "Wazi" ? "Ipo Wazi" : "Imepangwa"}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg tracking-tight text-gray-900">{frame.frameNumber}</h3>
                    <p className="text-xs font-semibold text-gray-500">
                      Vipimo: <span className="text-gray-800 font-bold bg-gray-100 px-2 py-0.5 rounded ml-1">{frame.size}</span>
                    </p>
                    <p className="text-xs text-gray-600 bg-slate-50 p-3 rounded-xl border border-slate-100 leading-relaxed min-h-64px">
                      {frame.descriptionSwahili}
                    </p>
                  </div>

                  {/* Price Info Row */}
                  <div className="flex flex-col pt-1 border-t border-gray-100">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Kodi / Mwezi</span>
                    <span className="text-xl font-black text-gray-900">{frame.price}</span>
                  </div>

                  {/* 4-BUTTON CONTROLS */}
                  <div className="grid grid-cols-1 gap-2 pt-2">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        className="text-xs font-bold py-2 px-3 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-all active:scale-95 shadow-sm text-center"
                      >
                        Description
                      </button>

                      <button
                        type="button"
                        className="text-xs font-bold py-2 px-3 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-all active:scale-95 shadow-sm text-center"
                      >
                        Map
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        // disabled={frame.status === "Imepangwa"}
                        className={`text-xs font-extrabold py-2.5 px-3 rounded-xl transition-all active:scale-95 shadow-sm text-center tracking-wide uppercase ${
                          frame.status === "Wazi" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        }`}
                      >
                        Rent
                      </button>

                      <button
                        type="button"
                        disabled
                        className={`text-xs font-extrabold py-2.5 px-3 rounded-xl border transition-all text-center tracking-wide uppercase ${
                          frame.status === "Imepangwa" ? "bg-rose-50 border-rose-200 text-rose-700" : "bg-gray-50 border-gray-100 text-gray-400 cursor-not-allowed"
                        }`}
                      >
                        {frame.status === "Imepangwa" ? "Rented" : "Available"}
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
          
        </div>
      ))}
    </div>
  );
}
