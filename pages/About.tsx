import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
  // Configurable images for the Core Philosophy section
  const heroImages = [
    "https://cdn.discordapp.com/attachments/1450006816875479163/1450842823611121704/image.png?ex=6944022c&is=6942b0ac&hm=c13000b200b343361e27163f5383187c53e020585675f903742467b7e5e3153c&",
    "https://cdn.discordapp.com/attachments/1450006816875479163/1450837935950790716/image.png?ex=6943fd9f&is=6942ac1f&hm=a444590a122725b743446ff9cc5bc02b64bcb71a5e7c81c20fdc86e30199658a&",
    "https://cdn.discordapp.com/attachments/1450006816875479163/1450840493586911405/ABS2GSmOy2s2kfez75pb8I5NvssKCaR5Caof7ZSa4gFBz3JF1v6JnpYJGcFSUhNmnxk1ReEvEqjkz5yKxAcl8uWORuIMrM2RlKhCwRw31QZZwJlX9TU5h9JcKiTxJnxoAzofNXSIpGA6z06ic3NcpSZSZr2duzC0mOjsRGQNcpSvw2V_qFJRpgs1024-rj.png?ex=69440000&is=6942ae80&hm=48ac08678064149f3d317b95ef083ba9611914ae3e9539d6b77e19716ad4e1ff&"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="bg-surface text-brown-dark min-h-screen pt-24">
      {/* Page Header */}
      <div className="text-center mb-20 relative z-10 px-4">
        <div className="inline-flex flex-col items-center animate-fade-in-up">
          <span className="py-1 px-4 border border-secondary/30 text-secondary text-xs font-bold tracking-[0.4em] uppercase mb-4 bg-white/50 backdrop-blur-sm shadow-sm">SANGZI STUDIO</span>
          <h1 className="font-display text-7xl md:text-9xl font-bold uppercase tracking-widest text-brown-dark drop-shadow-sm">
            <span className="text-primary relative inline-block">
              關於
              <span className="absolute -top-4 -right-4 text-sm text-secondary/40 font-mono tracking-tighter opacity-50">00</span>
            </span>我們
          </h1>
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-secondary"></div>
            <p className="text-lg md:text-xl text-brown-earth font-medium tracking-widest uppercase">
              重塑文化敘事 <span className="text-primary px-2">•</span> 探索傳說邊界
            </p>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-secondary"></div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto pb-20 px-4 md:px-6">
        {/* Core Philosophy Section */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row shadow-2xl rounded-sm overflow-hidden min-h-[600px]">
            
            {/* Left: Text Content */}
            <div className="md:w-1/2 bg-[#E9E0D6] p-8 md:p-16 relative flex flex-col justify-center">
               <div className="absolute top-4 right-6 pointer-events-none opacity-10">
                  <span className="font-display text-9xl font-bold text-white">01</span>
               </div>
               
               <div className="relative z-10 mb-8">
                  <div className="flex items-center gap-3 mb-2">
                     <div className="w-10 h-10 rounded-md bg-white/60 flex items-center justify-center text-primary shadow-sm">
                       <span className="material-symbols-outlined text-2xl">psychology</span>
                     </div>
                     <div>
                       <h2 className="font-display text-4xl font-bold text-brown-dark tracking-wide leading-none">核心理念</h2>
                       <p className="font-bold text-xs tracking-[0.2em] text-brown-earth uppercase">Core Philosophy</p>
                     </div>
                  </div>
               </div>

               <div className="space-y-8 relative z-10">
                  <p className="text-lg text-[#5D4037] font-medium leading-relaxed">
                    桑梓工作室以深度的互動體驗重新詮釋地方文化。我們的願景是讓古老的傳說在數位時代獲得新生，構建一個令人流連忘返的沈浸式世界。
                  </p>
                  
                  <div className="pl-6 border-l-4 border-primary/80 py-2">
                      <p className="text-xl md:text-2xl text-[#4E342E] font-serif italic leading-relaxed">
                        "桑梓，意即「家園」；我們主打的就是將家園的景色，或者故事；呈現於顧客們的眼中！"
                      </p>
                  </div>
                  
                  <p className="text-lg text-[#5D4037] font-medium leading-relaxed">
                    我們致力於將桃園的文化敘事轉化為扣人心弦的互動旅程，透過「實境解謎（ARG）× 在地傳說數位轉譯」，打破時間與空間的界線。
                  </p>
               </div>
            </div>

            {/* Right: Image Carousel */}
            <div className="md:w-1/2 bg-[#D7C8B6] relative overflow-hidden min-h-[400px]">
              {heroImages.map((src, index) => (
                <img 
                  key={index}
                  alt={`Core Philosophy Illustration ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover object-[75%_center] md:object-center transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`} 
                  src={src} 
                />
              ))}
               {/* Left Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-r from-[#E9E0D6] to-transparent w-20 z-10"></div>
               
               {/* Carousel Indicators */}
               <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
                 {heroImages.map((_, index) => (
                   <button
                     key={index}
                     onClick={() => setCurrentImageIndex(index)}
                     className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                       index === currentImageIndex ? 'bg-primary w-8' : 'bg-white/50 hover:bg-white'
                     }`}
                     aria-label={`Go to slide ${index + 1}`}
                   />
                 ))}
               </div>
            </div>
            
          </div>
        </section>

        <section className="relative md:grid md:grid-cols-2 md:gap-24 mb-24 items-center group">
          <div className="relative">
             <div className="relative h-64 w-full overflow-hidden clip-diagonal bg-stone-200 border-b border-primary/20 shadow-lg">
                <img alt="Sangzi Studio Team" className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5xij92CEJBAg5PdlbiG-ib9l69xdXipNI5rFjM7VCgqKIZhvt8LAaf8f9rmYZ24I2N6H13bME17Jrltc8Qah3X9pHf9K2aG6Wdf3ry0uVV5C40R9XiZFKY30NqU-TtxkIfHYc8QkyVsrubJdJK3Xp1lKb0A3vyxEdwWg7EqKUNEeTDB3JVSGY8UQ6yV2H-04IX6uWjRRLGe0semK3oLqWHAB-bEvgqOyBXBZ9s2_TEHvaJ4dtSNfANSFqzOEX7i0b3lhgpg-CwLU" />
                <div className="absolute inset-0 bg-secondary/20 mix-blend-multiply"></div>
             </div>
             <div className="bg-white p-8 md:p-10 relative border-x border-b border-primary/20 shadow-xl -mt-4 mx-4 z-10">
                 <div className="space-y-4">
                    <h3 className="font-bold text-xl flex items-center text-brown-dark">
                      <span className="w-1.5 h-6 bg-primary mr-3"></span>
                      實境解謎 × 傳說轉譯
                    </h3>
                    <p className="text-base leading-relaxed text-secondary font-medium">
                      桑梓工作室成立於 2024 年，專注於挖掘在地的文化寶藏。我們團隊由敘事設計師、程式開發者與文化研究員組成。
                    </p>
                 </div>
             </div>
          </div>
          <div className="text-left mt-10 md:mt-0">
              <h2 className="font-display text-5xl font-bold text-brown-dark mb-6">桑梓工作室</h2>
              <p className="text-lg text-brown-earth mb-6">
                  我們是一群熱愛在地文化與創新科技的開發者。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-brown-earth font-bold">
                  <span className="material-symbols-outlined text-primary">check_circle</span> 專業的歷史考據與田野調查
                </li>
                <li className="flex items-center gap-3 text-brown-earth font-bold">
                  <span className="material-symbols-outlined text-primary">check_circle</span> 創新的 ARG 實境遊戲設計
                </li>
                <li className="flex items-center gap-3 text-brown-earth font-bold">
                  <span className="material-symbols-outlined text-primary">check_circle</span> 跨領域的技術整合團隊
                </li>
              </ul>
          </div>
        </section>

        <section className="text-center mt-12 relative px-4 z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-b from-white/90 to-surface-alt/90 backdrop-blur-md p-12 border border-primary/20 shadow-2xl clip-diagonal relative overflow-hidden group">
            <h3 className="font-display text-5xl md:text-6xl font-bold mb-4 text-brown-dark uppercase tracking-wide">加入我們</h3>
            <p className="text-lg text-secondary mb-10 max-w-lg mx-auto font-medium">
              無論您是文史愛好者還是解謎高手，我們都期待您的聲音。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-display text-lg font-bold tracking-widest text-white uppercase transition-all duration-300 bg-primary hover:bg-secondary clip-diagonal shadow-lg">
                <span className="mr-2">查看職缺</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;