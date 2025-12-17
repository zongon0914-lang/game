import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2c1004] text-white relative border-t border-secondary/20">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-primary to-secondary"></div>
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="md:w-1/3">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-4xl text-primary">public</span>
              <span className="text-5xl font-display font-bold text-white tracking-wider uppercase">世外桃源</span>
            </Link>
            <p className="text-stone-400 text-sm leading-loose max-w-sm">
              穿梭於虛擬與現實，探索桃園的無限可能。我們致力於修復被遺忘的記憶，為這座城市注入新的生命與故事。
            </p>
            <div className="mt-8 flex gap-4">
              {['Facebook', 'Twitter', 'Instagram'].map((social, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white rounded clip-tech-btn group">
                  <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">
                    {social === 'Facebook' ? 'public' : social === 'Twitter' ? 'hub' : 'photo_camera'}
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-display text-xl font-bold text-stone-200 uppercase tracking-widest mb-6">遊戲導覽</h4>
              <ul className="space-y-3 text-sm text-stone-400">
                <li><Link to="/news" className="hover:text-primary transition-colors">版本資訊</Link></li>
                <li><Link to="/intro" className="hover:text-primary transition-colors">傳說列表</Link></li>
                <li><Link to="/intro" className="hover:text-primary transition-colors">地圖導覽</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">文創商品</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-xl font-bold text-stone-200 uppercase tracking-widest mb-6">玩家支援</h4>
              <ul className="space-y-3 text-sm text-stone-400">
                <li><a href="#" className="hover:text-primary transition-colors">客服中心</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">問題回報</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">帳號安全</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">家長監護</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-xl font-bold text-stone-200 uppercase tracking-widest mb-6">法律聲明</h4>
              <ul className="space-y-3 text-sm text-stone-400">
                <li><a href="#" className="hover:text-primary transition-colors">隱私權政策</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">使用條款</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookie 政策</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 font-mono">
          <p>© 2024 Sangzi Studio. All Rights Reserved. Paradise Beyond logos are trademarks of Sangzi Studio.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">English</span>
            <span className="hover:text-white cursor-pointer text-white font-bold transition-colors">繁體中文</span>
            <span className="hover:text-white cursor-pointer transition-colors">日本語</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;