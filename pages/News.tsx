import React from 'react';

const News: React.FC = () => {
  return (
    <div className="bg-earth-50 text-earth-800 min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
          
          {/* Sidebar */}
          <aside className="w-full md:w-64 flex-shrink-0 relative hidden md:block z-20">
            <div className="sticky top-32">
              <div className="bg-white border border-earth-200 shadow-lg p-6 relative overflow-hidden clip-diagonal">
                <div className="absolute top-0 left-0 w-1 h-full bg-earth-300"></div>
                <h2 className="text-xs font-black text-earth-500 uppercase tracking-[0.2em] mb-6 pl-2">資訊類別</h2>
                <div className="space-y-1 relative">
                  {['全部消息', '線下活動', '桃園石魂檔案', '遊戲推廣'].map((item, index) => (
                    <div key={index} className="relative group cursor-pointer">
                      <div className={`absolute left-[7px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white border-2 ${index === 0 ? 'border-accent' : 'border-earth-300'} rounded-full z-10 group-hover:border-accent transition-colors`}></div>
                      <a className="block pl-8 py-2.5 text-base font-bold text-earth-600 hover:text-accent hover:bg-earth-50 rounded-r-md transition-all flex items-center justify-between">
                        {item}
                        <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity text-accent">chevron_right</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-grow w-full z-10">
            <div className="mb-10 relative pl-6 border-l-4 border-accent">
              <h1 className="text-4xl md:text-6xl font-black text-earth-900 uppercase tracking-tight mb-2">最新消息</h1>
              <div className="flex items-center space-x-3 text-earth-600 font-medium font-mono text-sm md:text-base">
                <span>NEWS CENTER</span>
                <span className="w-1 h-1 bg-earth-400 rounded-full"></span>
                <span className="text-accent font-bold">LATEST UPDATE: 2.4.0</span>
              </div>
            </div>

            {/* Featured Item */}
            <div className="mb-12 group cursor-pointer relative">
               <div className="relative bg-white clip-diagonal overflow-hidden shadow-lg border border-earth-100 h-[400px] md:h-[450px]">
                  <div className="absolute top-6 left-0 z-20">
                    <span className="bg-accent text-white text-xs font-black px-4 py-1.5 uppercase tracking-wider shadow-md">線下活動整合</span>
                  </div>
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="relative h-64 md:h-full overflow-hidden bg-earth-900">
                        <img alt="Featured game art" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://cdn.discordapp.com/attachments/1431510703050719394/1449414988040241245/image0.jpg?ex=69436da5&is=69421c25&hm=c664a7c605a6555073074f568d7143c8a95108c9e58cd8efe3ee3472d9d534bb&" />
                        <div className="absolute inset-0 bg-gradient-to-t from-earth-900/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-earth-900/10"></div>
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center bg-white relative">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-2 h-2 rounded-full bg-accent"></span>
                            <span className="text-accent font-bold text-xs tracking-wider uppercase">機捷快閃活動</span>
                            <span className="text-earth-400 text-xs font-mono px-2 border-l border-earth-200">2024.05.20</span>
                        </div>
                        <h3 className="text-3xl font-black text-earth-900 mb-4 leading-tight group-hover:text-accent transition-colors">「尋找被遺忘的桃園記憶」</h3>
                        <p className="text-earth-600 mb-6 line-clamp-3 leading-relaxed text-base font-medium">即刻出發！搭乘機場捷運，尋找散落在各站點的記憶碎片。參與 FB 與 IG 的社群解謎挑戰，解開隱藏的歷史謎題，贏取獨家限量周邊！</p>
                    </div>
                  </div>
               </div>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <ArticleCard 
                 title="沉浸式體驗：第一人稱解謎與文化探索"
                 category="GAMEPLAY"
                 date="2024.05.18"
                 image="https://cdn.discordapp.com/attachments/1450006816875479163/1450837081294110780/ABS2GSmgIrSH8CJhAUI02m4E6-3LRR3xmgBQeX8g8yVCVIFn4OHPtO5g_VYRiL2pYXIIgEL4tTlUAcVAXNAYJUlNj-j8YrpVwvQOA98F9tyjynZCBTYAWsmcI6UGzNM0M-413DE1cBA5C7XNHxwk9om7MUPdqtBQ-1waPWkkXwTv3MQ1ZfWus1024-rj.png?ex=6943fcd3&is=6942ab53&hm=ae7cbb28e408ec3b3c9d8e488e64a44a0cc8b6d84b7848d6ca8817ad4d828d3c&"
               />
               <ArticleCard 
                 title="桃園石魂檔案室：龍岡眷村的時光印記"
                 category="ARCHIVE"
                 date="2024.05.15"
                 image="https://cdn.discordapp.com/attachments/1450006816875479163/1450009435329265744/AIJ2gl-v4VPgUU0hUhWVcrRfSArolLlH2BdyA2UnMcOHroQwKWja5dkPsBpGp0kCt5aWaPzu4me2H8Jdj_cA3rv5I94aYAiIzQHEU9DCmNlVc4hhQ7ZBA6Ee8MItzIc2ejTM8SCbHjH2UJFg4deEFSFUH7H07_1h7QIkRBl9PT_4oefsByPo49HADqU1YmhRKMt7N6aSteOQnU1cMD2UMtCdzbbL9nBgvYRL51HyTs9_geS3lqFE_yPkzIyKzTqgsWVb1z8sLiamuKzU7oP6lBiWhnozp1vRacdA6dP9tqJrMLhUiTFTUut-fhQnu8Lby6EpzeCD13Ll2_JUSJsRfCGzOPqxs1024-rj.png?ex=69439d05&is=69424b85&hm=a21d8165ca6e5738067fc1b1e5222fe172706c03eed3d4f9ef55e8b6ab5aff16&"
               />
               <ArticleCard 
                 title="桃園石魂檔案室：甘泉寺湧泉與民俗傳說"
                 category="FOLKLORE"
                 date="2024.05.12"
                 image="https://cdn.discordapp.com/attachments/1450006816875479163/1450009642812833933/AIJ2gl-A-z4uJa3bTvN81syAB2-Gg7ISyhZ3aLy0n3twCb04ALyRqgW5-5jvdW-HbbS0VFUmGX2aQAqK7SKbutSO3DB5tqoDYKA2q0Q87fD0PF5g68WpQ3hKVzV-cnqMQduSaRQoQ_SFFNn3CkFSKEbJY3pA5MYaw1lT9zvWTCKPv9_aHvL4e2RCpmoILIvuH_e5E2g8DAVJhJvbZK5anmcJ6LYM0XwPankKAbsb-9lDKUbLopV1jQrLGRuYmnNhfte9PmWYE8oIxRIc3PHaVKMldtSHpCQttwEy8z_R13imdNWiWvz6BqeKOIxl6QPquBEtELqDnHQRIoP1n2eF_ZxFmM79s1024-rj.png?ex=69439d36&is=69424bb6&hm=ceb4c5558781f1a4c199047a0032e24282adb27d0ec097435a777d89a5358340&"
               />
               <ArticleCard 
                 title="桃園石魂檔案室：客家守護意象解析"
                 category="CULTURE"
                 date="2024.05.10"
                 image="https://cdn.discordapp.com/attachments/1450006816875479163/1450009716330725579/AIJ2gl_XOL-1i1xYYZvEy8iao7SmESV3Iyl2OFQdt5yTbgdRZ0orQRtfDDYVwLrHHNkpoRykeBHUmI92Jtm9AthpKHFaair8if47O73Ik5Oh3mql7tBOD-H6EKDfnMftmg_ReBBxHwYpWYea_CylfbLElLtHfRF8JoDmp-es1eV4u0lNjKgJlyvgKwraidhbFo4C6P8EWrzX1a9NbDvlhmzPHncC9EYMit2QZT1XbB2Mq1DE1K6KXK_ENSVK7ZdxVvTc1dauc8ao67D3Z_vp1RIaTbdk8IKsuI4IgJ_q95wfpTo94PHHBmcCTSVdl5xKBXVQyOsibbYY4iXPZxwEIIRKAwT2s1024-rj.png?ex=69439d48&is=69424bc8&hm=92fc5cde4535d3aabaa7f017c9a90fafa447801b523d209bb94c81fb1ddb1553&"
               />
            </div>
            
             <div className="mt-8 flex justify-center">
                <button className="border-2 border-earth-300 text-earth-600 hover:border-accent hover:text-accent px-8 py-3 font-black uppercase tracking-widest text-sm transition-colors bg-earth-50 hover:bg-white clip-tech-btn">
                    載入更多資訊
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ArticleCard: React.FC<{ title: string; category: string; date: string; image: string }> = ({ title, category, date, image }) => (
  <article className="group relative bg-white border border-earth-200 clip-diagonal hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col h-full">
    <div className="h-48 overflow-hidden relative">
      <div className="absolute inset-0 bg-earth-900/10 group-hover:bg-transparent transition-colors z-10"></div>
      <img alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={image} />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center justify-between mb-3 text-xs">
        <span className="font-mono text-accent bg-surface-alt px-2 py-0.5 rounded-sm">{category}</span>
        <span className="text-earth-400">{date}</span>
      </div>
      <h3 className="text-xl font-bold text-earth-900 mb-3 group-hover:text-accent transition-colors leading-snug">{title}</h3>
      <a href="#" className="text-accent font-bold text-sm uppercase tracking-wide flex items-center gap-1 mt-auto group-hover:translate-x-1 transition-transform">
        閱讀更多 <span className="material-symbols-outlined text-base">chevron_right</span>
      </a>
    </div>
  </article>
);

export default News;