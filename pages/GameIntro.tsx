import React from 'react';
import { Link } from 'react-router-dom';

const GameIntro: React.FC = () => {
  return (
    <div className="bg-surface font-sans text-brown-earth">
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Panoramic view of Paradise Beyond the World game environment" className="w-full h-full object-cover object-center" src="https://cdn.discordapp.com/attachments/1450006816875479163/1450840493586911405/ABS2GSmOy2s2kfez75pb8I5NvssKCaR5Caof7ZSa4gFBz3JF1v6JnpYJGcFSUhNmnxk1ReEvEqjkz5yKxAcl8uWORuIMrM2RlKhCwRw31QZZwJlX9TU5h9JcKiTxJnxoAzofNXSIpGA6z06ic3NcpSZSZr2duzC0mOjsRGQNcpSvw2V_qFJRpgs1024-rj.png?ex=69440000&is=6942ae80&hm=48ac08678064149f3d317b95ef083ba9611914ae3e9539d6b77e19716ad4e1ff&" />
          <div className="absolute inset-0 bg-gradient-to-r from-brown-dark/90 via-brown-dark/50 to-transparent"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 pt-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4 animate-fade-in-up">
              <span className="h-px w-12 bg-secondary"></span>
              <span className="text-secondary font-display text-xl tracking-[0.2em] uppercase">ARG System // Project Start</span>
            </div>
            <h1 className="font-display text-7xl md:text-9xl font-bold uppercase tracking-wide text-white leading-none mb-6 drop-shadow-2xl">
              遊戲介紹
            </h1>
            <div className="pl-0 md:pl-2 border-l-4 border-secondary">
              <p className="text-lg md:text-2xl text-gray-200 font-medium leading-relaxed max-w-2xl bg-black/40 backdrop-blur-sm p-4 md:p-6 clip-tactical">
                一款結合實境解謎（ARG）與城市探索的創新作品。我們將桃園的文化地景轉化為遊戲舞台，邀請玩家跨越螢幕，親身走入那些被遺忘的故事之中。
              </p>
            </div>
            <div className="mt-10 flex gap-4">
              <Link to="/download" className="bg-white text-brown-dark hover:bg-secondary hover:text-white px-8 py-3 font-display text-xl font-bold tracking-widest uppercase clip-tactical transition-all duration-300">
                開始探索
              </Link>
              <div className="hidden md:flex items-center gap-2 text-white/60 font-mono text-xs">
                <span className="material-symbols-outlined text-lg">public</span>
                LAT: 24.993 N / LONG: 121.301 E
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 hidden md:block border-dashed border-l border-primary/30"></div>
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col items-center justify-center mb-20 text-center">
            <span className="text-primary font-display text-xl tracking-[0.3em] uppercase mb-2">Design Philosophy</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-brown-dark uppercase">文化轉譯與實境探索</h2>
            <div className="w-24 h-1 bg-secondary mt-6"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-8 bg-surface p-8 md:p-12 shadow-xl clip-tactical border-t-4 border-primary relative group hover:border-secondary transition-colors duration-500">
              <span className="absolute -right-4 -top-8 text-[8rem] font-display font-bold text-surface-alt opacity-50 select-none -z-10 group-hover:text-secondary/10 transition-colors">01</span>
              <h3 className="text-3xl font-bold text-secondary mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">psychology</span>
                解決文化斷層的挑戰
              </h3>
              <div className="prose prose-lg text-gray-600">
                <p>
                  面對數位時代的衝擊，傳統的在地故事面臨著被遺忘的危機。如何將深厚的文化底蘊轉化為年輕世代能夠接受的語言，是我們面臨的最大挑戰。
                </p>
                <p>
                  「世外桃源」採用創新的 <strong>ARG（侵入式實境互動）</strong> 形式，打破虛擬與現實的邊界。我們不只在螢幕上說故事，更將<strong>桃園真實地景</strong>——如龍岡的眷村巷弄、觀音的古老廟宇、楊梅的客家小徑——轉化為玩家必須親臨現場才能解開的謎題關卡。
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative clip-tactical shadow-2xl group">
                <img alt="A glowing mystical artifact representing the bridge between culture and technology" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKsPdU13MzIosuHEQH_r3LDjGiM0z5HHRy34LkZgWDv45RPBWASKCqIM8DZuGEw2c5XdxAwtgnPBSRH7u6K4E5K-tkdf6MsN_DQcV3gkG1KElYGXP-EbOsPNs_0FlJJCQyBXEAE5uMcf7eCADbHt6itV3gzZfsUHc_lSz0Z2zr43NkzADyCPIEKpu3QJTTf2iEqzHOrd_BmrDvVHXwYDf_Utn8tt9QFSFMUDGoASm_3TCnl6ivG_W22QKiaOrpx7G8yXLOBpYmARQ" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-surface-alt relative clip-diagonal-top">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-primary/20 pb-6">
            <div>
              <h2 className="font-display text-5xl md:text-7xl font-bold text-brown-dark uppercase tracking-wide">在地傳說與地景</h2>
              <p className="mt-4 text-xl text-primary font-bold">Real Landscapes to Playable Zones</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-surface hover:bg-white border-t-4 border-secondary shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative flex flex-col clip-tactical">
              <div className="h-56 overflow-hidden relative">
                <img alt="Longgang" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://cdn.discordapp.com/attachments/1431510703050719394/1450832431648079934/image.png?ex=6943f87e&is=6942a6fe&hm=e16ec122afe4a48da539d297c20eb391ad3d206f656c216e1b3452dd54b5ab35&" />
                <div className="absolute top-3 left-3 z-20 bg-black/70 text-secondary px-2 py-1 text-xs font-mono border-l-2 border-secondary">ZONE: LONGGANG</div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-display text-3xl font-bold text-brown-dark leading-none mb-4">龍岡<br />異域故事館</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow border-l-2 border-gray-100 pl-3">
                  這裡承載著滇緬孤軍的沈重記憶。遊戲將真實的眷村迷宮化為情報交換中心，玩家需在此解讀老兵留下的密碼。
                </p>
              </div>
            </div>
            
            <div className="group bg-surface hover:bg-white border-t-4 border-primary shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative flex flex-col clip-tactical">
              <div className="h-56 overflow-hidden relative">
                 <img alt="GuanYin" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://cdn.discordapp.com/attachments/1431510703050719394/1450832456717697176/image.png?ex=6943f884&is=6942a704&hm=877425022bd8fb09ecfaa9a357184fe0906b7b4350f77b839f62e0b7988c08e4&" />
                 <div className="absolute top-3 left-3 z-20 bg-black/70 text-primary px-2 py-1 text-xs font-mono border-l-2 border-primary">ZONE: GUANYIN</div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-display text-3xl font-bold text-brown-dark leading-none mb-4">觀音<br />甘泉寺</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow border-l-2 border-gray-100 pl-3">
                   傳說中擁有治癒力量的甘泉所在地。玩家將透過手機鏡頭，與現場的石獅、廟宇雕飾互動。
                </p>
              </div>
            </div>

            <div className="group bg-surface hover:bg-white border-t-4 border-accent shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative flex flex-col clip-tactical">
              <div className="h-56 overflow-hidden relative">
                 <img alt="Yangmei" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://cdn.discordapp.com/attachments/1431510703050719394/1450832483363979507/image.png?ex=6943f88b&is=6942a70b&hm=76c0fbce53b4c3a669aced04a1a251b69fb1150dd07e1b8daeb3a9a1cec040c3&" />
                 <div className="absolute top-3 left-3 z-20 bg-black/70 text-accent px-2 py-1 text-xs font-mono border-l-2 border-accent">ZONE: YANGMEI</div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-display text-3xl font-bold text-brown-dark leading-none mb-4">楊梅<br />富岡老街</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow border-l-2 border-gray-100 pl-3">
                   充滿客家風情與鐵道記憶的小鎮。遊戲將老街的紅磚拱廊變為時空迴廊，蒐集散落的客家歌謠片段。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GameIntro;