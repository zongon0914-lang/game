import React from 'react';

const Download: React.FC = () => {
  return (
    <div className="bg-surface-light text-brown-dark relative min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-brown-dark mb-4 inline-flex items-center flex-col sm:flex-row gap-4">
            <span>下載遊戲主程式</span>
          </h1>
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-bold text-lg mb-4">
            最終大結局：桃園石魂的復甦
          </div>
          <p className="text-xl text-secondary max-w-2xl mx-auto font-medium">
            準備好揭開《世外桃源》的最終秘密了嗎？<br className="hidden sm:block"/>
            立即下載，展開虛實整合的冒險旅程。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col h-full relative group">
            <div className="bg-surface p-8 sm:p-12 rounded-3xl shadow-xl border-2 border-primary/20 flex flex-col items-center justify-center text-center h-full relative overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-2xl">
               <div className="relative z-10 w-full max-w-lg">
                  <div className="h-28 flex items-center justify-center mb-8 transform group-hover:scale-105 transition-transform duration-300">
                     <img alt="Steam Logo" className="h-full object-contain drop-shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEn7r5atiZYR6C9HHMd7nnt97I-JbLqhxufdUfnB95sUMHwy35Zy2MMfFPwdP3J2JzJDHUPa--I2I1thl-1_68bpUt6FfdlhH4UzXG2lak4cLPN9WAnOo9X4QAxMM6T-KES46qsVcTBmh9cMJM8Do863S-XjZyLz2aW7fXrb4k0enMZCBPrSy7Tyof1cOdu-o828ASx6fYTYASjK_N30oET-xCZKWpO89h9AcxeUk5ZmxitIbBLzeRlxtSXHRs_Ks8bHL61a3MpzI" />
                  </div>
                  <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-8 border border-primary/20">
                     <span className="material-symbols-outlined text-lg">new_releases</span>
                     <span>V3.0 Final Update / 最終章更新</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-brown-dark">官方 Steam 下載</h2>
                  <p className="text-secondary mb-10 text-base leading-relaxed font-medium">
                     透過 Steam 平台安全下載與自動更新。<br/>
                     立即體驗全新章節與實境解謎要素。
                  </p>
                  <a href="#" className="w-full group/btn bg-gradient-to-r from-primary to-[#F57C00] hover:from-[#FFB74D] hover:to-primary text-white font-bold text-2xl py-6 px-8 rounded-2xl transition-all duration-300 shadow-lg shadow-primary/30 flex items-center justify-center space-x-3 transform hover:-translate-y-1 relative overflow-hidden">
                     <span className="material-symbols-outlined text-4xl group-hover/btn:animate-bounce">download</span>
                     <span className="relative z-10">前往 Steam 商店頁面</span>
                  </a>
               </div>
            </div>
          </div>

          <div className="lg:col-span-5 xl:col-span-4 space-y-6 relative">
             <div className="bg-surface p-6 rounded-3xl border-2 border-primary border-opacity-60 shadow-xl relative overflow-hidden group">
                <div className="relative z-10">
                   <div className="flex items-center space-x-2 mb-3">
                      <span className="animate-pulse w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-xs font-black text-primary uppercase tracking-widest">虛實整合活動</span>
                   </div>
                   <h3 className="text-xl font-bold text-brown-dark mb-4 leading-tight">
                      解鎖隱藏彩蛋<br/><span className="text-primary">【桃園・源】</span>
                   </h3>
                   <ul className="space-y-3">
                      {['龍岡忠貞新村', '觀音甘泉寺', '土地公文化館'].map((loc, i) => (
                        <li key={i} className="flex items-start space-x-3 bg-surface-alt p-3 rounded-xl border border-primary/20">
                           <span className="material-symbols-outlined text-primary text-lg mt-0.5">flag</span>
                           <span className="text-sm font-bold text-brown-dark">{loc}</span>
                        </li>
                      ))}
                   </ul>
                </div>
             </div>
             
             <div className="bg-surface p-6 rounded-3xl border border-primary/20 shadow-lg relative overflow-hidden">
                <h3 className="text-xl font-bold text-brown-dark mb-4">系統需求 (PC)</h3>
                <div className="space-y-4">
                   <div className="border-b border-dashed border-primary/30 pb-2">
                      <span className="text-secondary text-sm">最低配備:</span>
                      <span className="font-bold text-brown-dark ml-2">GTX 960 / i5-4460</span>
                   </div>
                   <div>
                      <span className="text-secondary text-sm">建議配備:</span>
                      <span className="font-bold text-brown-dark ml-2">RTX 2060 / i7-8700K</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;