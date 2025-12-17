import React from 'react';

const OnlineEvents: React.FC = () => {
  return (
    <div className="bg-surface-light text-text-main font-body antialiased bg-tech-grid bg-[size:40px_40px] pt-24 pb-12">
      <div className="max-w-7xl mx-auto relative z-10 px-4">
        <div className="text-center mb-28 relative">
           <div className="inline-flex items-center gap-2 border border-primary/30 bg-surface-alt/50 backdrop-blur px-4 py-1 mb-8 clip-tech-btn animate-pulse">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                <span className="text-brown-earth font-mono text-xs tracking-[0.2em] uppercase font-bold">Event Log</span>
           </div>
           <h1 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tight text-text-main mb-6 relative inline-block">
                線上活動
                <span className="absolute -right-8 -top-4 text-primary text-4xl animate-bounce">●</span>
           </h1>
           <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto font-medium leading-relaxed">
                連接現實與虛擬的橋樑。<br/>
                體驗 <span className="text-primary font-bold border-b-2 border-primary/30">網頁互動試玩</span> 與參與 <span className="text-primary font-bold border-b-2 border-primary/30">尋找桃園記憶</span>，解鎖限定獎勵。
           </p>
        </div>

        <div className="space-y-40">
           {/* Event 1 */}
           <section className="relative group scroll-mt-24">
              <div className="flex flex-col md:flex-row items-center gap-16">
                 <div className="md:w-1/2 relative w-full">
                    <div className="relative h-[420px] w-full clip-tactical bg-surface-alt shadow-lg group-hover:shadow-glow transition-all duration-500 overflow-hidden">
                       <img alt="Game demo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-8A8I1O4zgldk14luNcjGj7-CtuTaOsKZZR1NfSlLyKdqIB0yXqdesx6091ZCKqw_M8rtQvQsoEJLK1FJssRDujqAxx2_7d9VhR2ES0zffKcyyPiuWQ0yPMwrho1sE2KaKUGI-ZgCwaLKYVi6Ggd4TSYupdWmH2-bsZJtgH3CCGQa1LXPtTzjhFoMkseMAZxi5GQDpHgvkKNUV8-hmI2gfaGEFbMVx5zc67wok__wpksfctYL_ombaOCWwElUApe2CZX3zSTMhWo" />
                       <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-30">
                          <div className="flex items-center justify-between text-white font-mono text-xs tracking-wider">
                             <span className="font-bold text-primary">System.Chapter.Guanyin</span>
                             <span className="opacity-80">STATUS: INTERACTIVE</span>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="md:w-1/2">
                    <div className="flex items-center gap-3 mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                        <span className="w-8 h-0.5 bg-primary"></span>
                        <span className="text-primary font-mono text-sm font-bold tracking-[0.2em]">EVENT_01</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-black text-text-main mb-6 tracking-tight group-hover:text-primary transition-colors duration-300">
                        網頁互動試玩區
                    </h2>
                    <p className="text-text-muted text-lg mb-10 leading-relaxed border-l-2 border-primary/20 pl-6">
                        無需下載，即刻體驗遊戲核心機制。深入精簡版<span className="text-primary font-bold">「觀音篇」</span>章節，解開古老謎題，感受獨特的環境互動系統。
                    </p>
                    <button className="w-fit bg-primary hover:bg-primary-hover text-white font-bold py-4 px-10 clip-tech-btn transition-all duration-300 shadow-lg flex items-center gap-3 group/btn">
                        <span className="material-symbols-outlined group-hover/btn:rotate-12 transition-transform">play_arrow</span>
                        立即體驗觀音篇
                    </button>
                 </div>
              </div>
           </section>

           {/* Event 2 */}
           <section className="relative group scroll-mt-24">
              <div className="flex flex-col md:flex-row-reverse items-center gap-16">
                 <div className="md:w-1/2 relative w-full">
                    <div className="relative h-[420px] w-full clip-tactical bg-surface-alt shadow-lg group-hover:shadow-glow transition-all duration-500 overflow-hidden">
                       <img alt="Promo event" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD80fEszoBNMKcKvMMO9XGxEeiQD3YvCZMVBIhxU6j_1DD7dLIuD2yJt2cpDDOhxwiS4dgK2fK2ZwMDZdjmMveb3UgcG2lerG-jOryMpvu--192AriATMp_mSNlrUhNmmNiEUr26DSSmAj3R8hXeMCx1RwhefJn_u4t4-zrw4Uw6tpxzYPJKwDg-310iFcRGKd_w1S3BEsg13jcDPsklp-zSAGDGU_B5N8HNouDIEjPubucU0FqM-ob0M1pnZArzN8XoOMypqsB-0w" />
                       <div className="absolute top-0 left-0 p-4 z-30">
                          <div className="bg-surface-light/90 backdrop-blur text-text-main px-3 py-1 font-mono text-xs font-bold border-r-4 border-accent shadow-lg">
                             <span className="text-accent mr-1">///</span> IRL_EVENT
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="md:w-1/2 text-right md:text-right">
                    <div className="flex flex-col h-full justify-center items-end pr-4 md:pr-0">
                       <div className="flex items-center gap-3 mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                          <span className="text-primary font-mono text-sm font-bold tracking-[0.2em]">EVENT_02</span>
                          <span className="w-8 h-0.5 bg-primary"></span>
                       </div>
                       <h2 className="text-4xl md:text-5xl font-display font-black text-text-main mb-6 tracking-tight group-hover:text-primary transition-colors duration-300">
                          機捷快閃宣傳
                       </h2>
                       <p className="text-text-muted text-lg mb-10 leading-relaxed border-r-2 border-primary/20 pr-6">
                          加入<span className="text-primary font-bold">「尋找被遺忘的桃園記憶」</span>特別活動。於桃園機場捷運沿線蒐集散落的記憶碎片，掃描隱藏 QR Code 解鎖限定獎勵與實體周邊。
                       </p>
                    </div>
                 </div>
              </div>
           </section>
        </div>
      </div>
    </div>
  );
};

export default OnlineEvents;