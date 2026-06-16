export default function Home() {
  return (
    <div className="flex w-full min-h-[calc(100vh-4rem)]">
      
      {/* 1. DESKTOP SIDEBAR */}
      <aside className="hidden md:block w-64 border-r bg-card shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="flex flex-col font-bold p-6">DASHBOARD</div>
      </aside>

      {/* 2. MAIN CONTENT WINDOW */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Header Typography */}
          <h1 className="text-3xl font-bold tracking-tight">MILIKI FREMU APP</h1>
          <p className="text-muted-foreground leading-relaxed">
            Miliki Frame inakusaidia kuona na kuendesha fremu zako zote za
            biashara kwa pamoja bila kupoteza muda. Angalia vipimo vya kila duka
            (fremu), bei za kodi kwa mwezi, na panga wapangaji wapya kwa kubofya
            kitufe kimoja tu.
          </p>

          {/* 3. GRID PLACES SECTION */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 pt-4">
            
            {/* Card 1 */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="font-semibold leading-none tracking-tight">frame app</h3>
              <p className="text-2xl font-bold mt-2">LOADING...</p>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="font-semibold leading-none tracking-tight">frame app</h3>
              <p className="text-2xl font-bold mt-2">LOADING...</p>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="font-semibold leading-none tracking-tight">frame app</h3>
              <p className="text-2xl font-bold mt-2">LOADING...</p>
            </div>

          </div>

        </div>
      </main>

    </div>
  );
}
