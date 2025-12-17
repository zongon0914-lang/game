import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-surface">
      <section className="relative h-screen min-h-[700px] flex items-center justify-center pt-20 overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.discordapp.com/attachments/1450006816875479163/1450837935950790716/image.png?ex=6943fd9f&is=6942ac1f&hm=a444590a122725b743446ff9cc5bc02b64bcb71a5e7c81c20fdc86e30199658a&" 
            alt="Hero Background - Dragon and Lanterns" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-black/60"></div>
        </div>
        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center mt-10">
          <div className="mb-8 animate-fade-in-up">
            <span className="inline-block py-1 px-4 border border-orange-500/50 text-orange-400 bg-black/60 backdrop-blur-md text-xs font-bold tracking-[0.2em] uppercase clip-tech-btn shadow-[0_0_15px_rgba(249,115,22,0.3)]">
              最新情報：光之碎片
            </span>
          </div>
          <h1 className="text-8xl md:text-[10rem] font-display font-bold uppercase tracking-tighter text-white drop-shadow-2xl leading-[0.9] mb-4">
            世外<span className="text-primary">桃源</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-[0.2em] text-primary mb-6 drop-shadow-lg flex flex-col md:flex-row items-center gap-2 md:gap-4">
            光之碎片 <span className="text-white/50 text-2xl hidden md:inline">×</span><span className="md:hidden text-white/50 text-sm">×</span> 桃園地景
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-stone-100 font-medium tracking-wide drop-shadow-md leading-relaxed">
            修復被遺忘的桃園傳說，體驗在地文化的<br />
            <span className="text-primary font-bold">溫情與智慧</span>
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 w-full max-w-lg mx-auto">
            <Link to="/download" className="flex-1 group relative flex items-center justify-center bg-primary hover:bg-orange-600 text-white py-4 px-8 font-display text-xl font-bold uppercase tracking-widest transition-all duration-300 shadow-lg clip-tech-btn shadow-orange-500/20 hover:shadow-orange-500/40 transform hover:-translate-y-1">
              <span className="mr-2">立即下載</span>
              <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">download</span>
            </Link>
            <Link to="/events" className="flex-1 group relative flex items-center justify-center bg-black/40 backdrop-blur-sm border border-white/20 hover:bg-black/60 hover:border-white/40 text-white py-4 px-8 font-display text-xl font-bold uppercase tracking-widest transition-all duration-300 clip-tech-btn transform hover:-translate-y-1">
              <span className="mr-2">線上免費試玩</span>
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">sports_esports</span>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-surface to-transparent pointer-events-none"></div>
      </section>

      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-grid-pattern opacity-40 pointer-events-none"></div>
        <div className="absolute top-20 left-10 w-20 h-20 border-l-4 border-t-4 border-primary/20 opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14 border-b border-primary/10 pb-6">
            <div>
              <h2 className="text-6xl font-display font-bold text-stone-900 uppercase leading-none">最新情報</h2>
              <div className="flex items-center gap-3 mt-2">
                <div className="h-1 w-10 bg-primary"></div>
                <p className="text-secondary font-bold tracking-widest text-sm uppercase">Innovation & Vision</p>
              </div>
            </div>
            <Link to="/news" className="hidden md:flex items-center gap-2 px-6 py-2 border border-secondary/20 hover:border-primary text-secondary hover:text-primary font-bold transition-all uppercase tracking-wider text-sm clip-tech-btn bg-white/50 hover:bg-white">
              <span>所有消息</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="group bg-white clip-diagonal shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full border-t-4 border-transparent hover:border-primary">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-0 bg-primary text-white text-xs font-bold px-4 py-1 uppercase tracking-wider z-10 clip-tag shadow-lg group-hover:bg-brown-dark transition-colors">
                  創新玩法
                </div>
                <img alt="ARG gameplay" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://cdn.discordapp.com/attachments/1450006816875479163/1450837081294110780/ABS2GSmgIrSH8CJhAUI02m4E6-3LRR3xmgBQeX8g8yVCVIFn4OHPtO5g_VYRiL2pYXIIgEL4tTlUAcVAXNAYJUlNj-j8YrpVwvQOA98F9tyjynZCBTYAWsmcI6UGzNM0M-413DE1cBA5C7XNHxwk9om7MUPdqtBQ-1waPWkkXwTv3MQ1ZfWus1024-rj.png?ex=6943fcd3&is=6942ab53&hm=ae7cbb28e408ec3b3c9d8e488e64a44a0cc8b6d84b7848d6ca8817ad4d828d3c&" />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-primary/20 transition-colors duration-300 mix-blend-overlay"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col bg-white">
                <div className="flex items-center gap-2 mb-3 text-primary text-xs font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">extension</span> ARG × 實境解謎
                </div>
                <h3 className="text-2xl font-display font-bold text-stone-900 mb-3 leading-tight group-hover:text-primary transition-colors">實境解謎交織的桃園</h3>
                <p className="text-stone-500 mb-6 text-sm leading-relaxed line-clamp-3 flex-1">
                  瑰寶散落在桃園，開啟手機掃描定錨點，與現實下互動的彼端連結，解開故事謎底，探索城市不為人知的一面。
                </p>
                <Link to="/intro" className="inline-flex items-center font-bold text-sm uppercase tracking-wider text-stone-900 group-hover:text-primary transition-colors">
                  了解玩法 <span className="material-symbols-outlined ml-1 text-lg group-hover:translate-x-1 transition-transform">chevron_right</span>
                </Link>
              </div>
            </article>
            <article className="group bg-white clip-diagonal shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full border-t-4 border-transparent hover:border-secondary">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-0 bg-secondary text-white text-xs font-bold px-4 py-1 uppercase tracking-wider z-10 clip-tag shadow-lg">
                  核心願景
                </div>
                <img alt="Taoyuan city dragon" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://cdn.discordapp.com/attachments/1450006816875479163/1450837935950790716/image.png?ex=6943fd9f&is=6942ac1f&hm=a444590a122725b743446ff9cc5bc02b64bcb71a5e7c81c20fdc86e30199658a&" />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-secondary/20 transition-colors duration-300 mix-blend-overlay"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col bg-white">
                <div className="flex items-center gap-2 mb-3 text-secondary text-xs font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">location_city</span> 目的地城市
                </div>
                <h3 className="text-2xl font-display font-bold text-stone-900 mb-3 leading-tight group-hover:text-secondary transition-colors">讓桃園成為你的下個目的地</h3>
                <p className="text-stone-500 mb-6 text-sm leading-relaxed line-clamp-3 flex-1">
                  將遊戲與觀光的結合，為被遺忘的桃園注入新的生命與故事，體驗在地獨有的溫情與智慧。
                </p>
                <Link to="/about" className="inline-flex items-center font-bold text-sm uppercase tracking-wider text-stone-900 group-hover:text-secondary transition-colors">
                  閱讀願景 <span className="material-symbols-outlined ml-1 text-lg group-hover:translate-x-1 transition-transform">chevron_right</span>
                </Link>
              </div>
            </article>
            <article className="group bg-white clip-diagonal shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full border-t-4 border-transparent hover:border-stone-600">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-0 bg-stone-700 text-white text-xs font-bold px-4 py-1 uppercase tracking-wider z-10 clip-tag shadow-lg">
                  日常任務
                </div>
                <img alt="Light fragments event" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://cdn.discordapp.com/attachments/1450006816875479163/1450838083997270159/ABS2GSmtLYOcY8tr4q4RaeK-IAkBEFHcHR4YqlXwxjAHT1UQBc6gMwk4lEGBqMPW0jiDzA9vx6S-KqpIJUpaJn5hk4ibZpY3RHmcPtgdFV6LTEZX_3gPt-I6ipErRxf3qzRVw3lVL_ePdC1xR9lutvBqgpNrHAdRpfdpDvbDNMqashjwzRIZs1024-rj.png?ex=6943fdc2&is=6942ac42&hm=0752ff32ae946fa7489289b88aee4544a1bb4d17768722b2e57be7fbd3b39f92&" />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300 mix-blend-overlay"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col bg-white">
                <div className="flex items-center gap-2 mb-3 text-stone-600 text-xs font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">event</span> 限時活動
                </div>
                <h3 className="text-2xl font-display font-bold text-stone-900 mb-3 leading-tight group-hover:text-stone-600 transition-colors">收集「光之碎片」</h3>
                <p className="text-stone-500 mb-6 text-sm leading-relaxed line-clamp-3 flex-1">
                  線索散落在桃園的各個角落。快上街尋找遺失的碎片，收集碎片修復破碎的傳說鏡面，解開隱藏謎題，喚醒沉睡力量。
                </p>
                <Link to="/events" className="inline-flex items-center font-bold text-sm uppercase tracking-wider text-stone-900 group-hover:text-stone-600 transition-colors">
                  活動詳情 <span className="material-symbols-outlined ml-1 text-lg group-hover:translate-x-1 transition-transform">chevron_right</span>
                </Link>
              </div>
            </article>
          </div>
          <div className="mt-10 text-center md:hidden">
            <Link to="/news" className="inline-flex items-center gap-2 justify-center w-full px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white font-bold transition-all uppercase tracking-wider text-sm clip-tech-btn">
              查看所有新聞
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32 relative bg-white border-t border-primary/10">
        <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-surface-alt/50 to-transparent pointer-events-none"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-64 bg-primary/10 clip-tech-btn hidden lg:block border-l-4 border-primary"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3 order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-[2px] bg-secondary"></span>
                <span className="text-secondary font-bold tracking-widest uppercase text-sm">The Mind Map</span>
              </div>
              <h2 className="text-6xl font-display font-bold text-stone-900 mb-6 uppercase leading-none">
                探索<br /><span className="text-primary">傳說網絡</span>
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                《世外桃源》的世界與現實緊密相連。透過我們的互動式心智圖，查看傳說之間的關聯、您收集到的光之碎片，以及隱藏在城市街角的歷史記憶。每一個節點都是一個動人的故事。
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-stone-700 font-medium">
                  <span className="w-2 h-2 bg-primary rotate-45"></span> 完整桃園傳說資料庫
                </li>
                <li className="flex items-center gap-3 text-stone-700 font-medium">
                  <span className="w-2 h-2 bg-primary rotate-45"></span> 實境解謎 (ARG) 地點導航
                </li>
                <li className="flex items-center gap-3 text-stone-700 font-medium">
                  <span className="w-2 h-2 bg-primary rotate-45"></span> 在地文化與景點深度解析
                </li>
              </ul>
              <Link to="/intro" className="inline-flex items-center gap-2 bg-stone-900 hover:bg-primary text-white font-bold font-display text-xl py-4 px-10 uppercase tracking-widest transition-all duration-200 clip-tech-btn shadow-xl hover:shadow-primary/40 group">
                進入傳說資料庫
                <span className="material-symbols-outlined group-hover:rotate-45 transition-transform duration-300">hub</span>
              </Link>
            </div>
            <div className="lg:w-2/3 order-1 lg:order-2 relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-stone-100 group bg-stone-900">
                <img alt="Mind map of game structure" className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-105" src="https://cdn.discordapp.com/attachments/1450006816875479163/1450839661051121724/ABS2GSmCCQbCxRaXtjk52QyELa0gaSRpHLP1w-KQP9IZJ0JjQKZyYNjva6Q6y7afA8zEzbd_fm2s-sg7qeqdqxLtfefORz9JTb9SkIHpAdBXM42uGzEfRGebaDGZ9MhdgiV0IHEXEy3371pTXCVXgRt4LvOAlBY_eVU4zYJxKdWjSoUJoRZUIAs1024-rj.png?ex=6943ff3a&is=6942adba&hm=e269a602b9b27415bf57059a1de547aa0c307412905818d98295ffa86cf6eddd&" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur px-4 py-2 text-white font-mono text-xs border-l-2 border-primary">
                  Status: CONNECTED<br />
                  Legends Found: 1,024
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 -z-10 rounded-lg bg-primary/5"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;