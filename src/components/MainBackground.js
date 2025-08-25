'use client';

export function MainBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* 學科浮動元素背景 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 數學幾何 - 菱形 */}
        <div className="absolute top-32 left-20 animate-float-3d transform rotate-45" style={{ width: '32px', height: '32px' }}>
          <div className="absolute inset-0 flex items-center justify-center text-cyan-400/30 text-xs font-bold">∑</div>
        </div>

        {/* 英文文學 - 愛心形 */}
        <div className="absolute top-36 right-28 animate-float-3d-reverse" style={{ width: '28px', height: '28px' }}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-green-400/30 fill-current">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>

        {/* 物理原子 - 星形 */}
        <div className="absolute bottom-32 left-1/4 animate-float-3d-slow" style={{ width: '24px', height: '24px' }}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-yellow-400/30 fill-current">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>

        {/* 化學分子 - 六邊形 */}
        <div className="absolute top-40 left-1/3 animate-float-3d" style={{ width: '36px', height: '36px' }}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-pink-400/30 fill-current">
            <path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z"/>
          </svg>
        </div>

        {/* 歷史時鐘 - 鋸齒型 */}
        <div className="absolute bottom-28 right-1/3 animate-float-3d-reverse" style={{ width: '32px', height: '32px' }}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-amber-400/30 fill-current">
            <path d="M2 2h20v20H2V2zm2 2v16h16V4H4zm8 2a6 6 0 0 1 6 6c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-3.31 2.69-6 6-6zm0 2a4 4 0 0 0-4 4c0 2.21 1.79 4 4 4s4-1.79 4-4c0-2.21-1.79-4-4-4zm0 2a2 2 0 0 1 2 2c0 1.1-.9 2-2 2s-2-.9-2-2c0-1.1.9-2 2-2z"/>
          </svg>
        </div>

        {/* 藝術畫筆 - 不規則多邊形 */}
        <div className="absolute top-36 left-2/3 animate-float-3d-slow" style={{ width: '28px', height: '28px' }}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-purple-400/30 fill-current">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
          </svg>
        </div>

        {/* 地理地球 - 波浪橢圓 */}
        <div className="absolute bottom-36 right-20 animate-float-3d" style={{ width: '40px', height: '32px' }}>
          <div className="absolute inset-0 flex items-center justify-center text-teal-400/30 text-xs font-bold">🌍</div>
        </div>

        {/* 生物DNA - 螺旋形 */}
        <div className="absolute top-48 left-1/2 animate-float-3d-reverse" style={{ width: '24px', height: '24px' }}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-lime-400/30 fill-current">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>

        {/* 音樂音符 - 音符形狀 */}
        <div className="absolute top-28 right-1/2 animate-float-3d" style={{ width: '32px', height: '32px' }}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-indigo-400/30 fill-current">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        </div>

        {/* 體育運動 - 閃電形 */}
        <div className="absolute bottom-20 left-1/2 animate-float-3d-slow" style={{ width: '36px', height: '36px' }}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-red-400/30 fill-current">
            <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
          </svg>
        </div>

        {/* 月球形狀 */}
        <div className="absolute top-32 left-16 animate-float-3d" style={{ width: '24px', height: '24px' }}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-slate-400/30 fill-current">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
          </svg>
        </div>

        {/* 火星形狀 */}
        <div className="absolute top-36 right-16 animate-float-3d-reverse" style={{ width: '28px', height: '28px' }}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-red-400/30 fill-current">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M8 14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
          </svg>
        </div>

        {/* 土星環 */}
        <div className="absolute bottom-16 right-1/4 animate-float-3d-slow" style={{ width: '32px', height: '32px' }}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-orange-400/30 fill-current">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <ellipse cx="12" cy="12" rx="8" ry="2" fill="none" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>

        {/* 獅子頭 */}
        <div className="absolute top-44 left-1/2 animate-float-3d" style={{ width: '32px', height: '32px' }}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-amber-500/30 fill-current">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M8 14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm8 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
            <path d="M12 18c-2.21 0-4-1.79-4-4h8c0 2.21-1.79 4-4 4z"/>
          </svg>
        </div>

        {/* 海豚形狀 */}
        <div className="absolute bottom-24 left-1/6 animate-float-3d-reverse" style={{ width: '36px', height: '28px' }}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-blue-400/30 fill-current">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M8 14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm8 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
            <path d="M12 18c-2.21 0-4-1.79-4-4h8c0 2.21-1.79 4-4 4z"/>
          </svg>
        </div>

        {/* 蝴蝶翅膀 */}
        <div className="absolute top-32 right-1/3 animate-float-3d-slow" style={{ width: '24px', height: '24px' }}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-pink-400/30 fill-current">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M8 14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm8 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
            <path d="M12 18c-2.21 0-4-1.79-4-4h8c0 2.21-1.79 4-4 4z"/>
          </svg>
        </div>

        {/* 貓頭鷹形狀 */}
        <div className="absolute bottom-28 left-1/3 animate-float-3d" style={{ width: '28px', height: '28px' }}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-amber-600/30 fill-current">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M8 14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm8 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
            <path d="M12 18c-2.21 0-4-1.79-4-4h8c0 2.21-1.79 4-4 4z"/>
          </svg>
        </div>

        {/* 連接線 - 學科關聯 */}
        <div className="absolute top-32 left-32 w-32 h-px bg-gradient-to-r from-cyan-400/20 to-transparent animate-line-extend" />
        <div className="absolute top-40 right-32 w-24 h-px bg-gradient-to-l from-green-400/20 to-transparent animate-line-extend-reverse" />
        <div className="absolute bottom-24 left-1/3 w-20 h-px bg-gradient-to-r from-yellow-400/20 to-transparent animate-line-extend" />

        {/* 知識流動粒子 */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 rounded-full animate-knowledge-flow"
            style={{
              left: `${(i * 12.5) % 100}%`,
              top: `${(i * 15) % 100}%`,
              animationDelay: `${(i * 0.3) % 4}s`,
              animationDuration: `${6 + (i * 0.2) % 3}s`,
            }}
          />
        ))}

        {/* 學科標籤 */}
        <div className="absolute top-32 left-8 text-xs text-cyan-300/30 font-medium animate-label-float" style={{ fontSize: '10px', transform: 'rotate(-15deg)' }}>
          Mathematics
        </div>
        <div className="absolute top-36 right-8 text-xs text-green-300/30 font-medium animate-label-float" style={{ fontSize: '10px', transform: 'rotate(12deg)', animationDelay: '0.5s' }}>
          Literature
        </div>
        <div className="absolute bottom-8 left-8 text-xs text-yellow-300/30 font-medium animate-label-float" style={{ fontSize: '10px', transform: 'rotate(-8deg)', animationDelay: '1s' }}>
          Physics
        </div>
        <div className="absolute bottom-8 right-8 text-xs text-purple-300/30 font-medium animate-label-float" style={{ fontSize: '10px', transform: 'rotate(18deg)', animationDelay: '1.5s' }}>
          Arts
        </div>
        <div className="absolute top-28 left-1/4 text-xs text-pink-300/30 font-medium animate-label-float" style={{ fontSize: '10px', transform: 'rotate(-25deg)', animationDelay: '0.3s' }}>
          Chemistry
        </div>
        <div className="absolute top-32 right-1/4 text-xs text-amber-300/30 font-medium animate-label-float" style={{ fontSize: '10px', transform: 'rotate(22deg)', animationDelay: '0.8s' }}>
          History
        </div>
        <div className="absolute top-40 left-1/6 text-xs text-teal-300/30 font-medium animate-label-float" style={{ fontSize: '10px', transform: 'rotate(-18deg)', animationDelay: '1.2s' }}>
          Biology
        </div>
        <div className="absolute top-1/2 left-1/4 text-xs text-indigo-300/30 font-medium animate-label-float" style={{ fontSize: '10px', transform: 'rotate(30deg)', animationDelay: '0.6s' }}>
          Music
        </div>
        <div className="absolute bottom-16 left-1/2 text-xs text-red-300/30 font-medium animate-label-float" style={{ fontSize: '10px', transform: 'rotate(-12deg)', animationDelay: '1.3s' }}>
          Sports
        </div>
        <div className="absolute bottom-20 right-1/2 text-xs text-lime-300/30 font-medium animate-label-float" style={{ fontSize: '10px', transform: 'rotate(20deg)', animationDelay: '0.9s' }}>
          Geography
        </div>
        <div className="absolute top-52 left-1/3 text-xs text-orange-300/30 font-medium animate-label-float" style={{ fontSize: '10px', transform: 'rotate(-28deg)', animationDelay: '1.4s' }}>
          Astronomy
        </div>
        <div className="absolute bottom-24 right-1/3 text-xs text-emerald-300/30 font-medium animate-label-float" style={{ fontSize: '10px', transform: 'rotate(15deg)', animationDelay: '0.7s' }}>
          Philosophy
        </div>
      </div>

      <style jsx>{`
        @keyframes float-3d {
          0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg) rotate(45deg); }
          25% { transform: translateY(-20px) rotateX(10deg) rotateY(10deg) rotate(45deg); }
          50% { transform: translateY(-40px) rotateX(20deg) rotateY(20deg) rotate(45deg); }
          75% { transform: translateY(-20px) rotateX(10deg) rotateY(10deg) rotate(45deg); }
        }

        @keyframes float-3d-reverse {
          0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          25% { transform: translateY(20px) rotateX(-10deg) rotateY(-10deg); }
          50% { transform: translateY(40px) rotateX(-20deg) rotateY(-20deg); }
          75% { transform: translateY(20px) rotateX(-10deg) rotateY(-10deg); }
        }

        @keyframes float-3d-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }

        @keyframes line-extend {
          0% { width: 0; opacity: 0; }
          50% { width: 32px; opacity: 1; }
          100% { width: 32px; opacity: 0.4; }
        }

        @keyframes line-extend-reverse {
          0% { width: 0; opacity: 0; }
          50% { width: 24px; opacity: 1; }
          100% { width: 24px; opacity: 0.4; }
        }

        @keyframes knowledge-flow {
          0% { transform: translate(0, 0); opacity: 0; }
          50% { transform: translate(0, 0); opacity: 1; }
          100% { transform: translate(0, 0); opacity: 0; }
        }

        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes label-float {
          0% { 
            opacity: 0.7; 
            transform: translateY(0px) scale(1) rotate(var(--rotation, 0deg));
          }
          25% { 
            opacity: 1; 
            transform: translateY(-20px) scale(1.1) rotate(calc(var(--rotation, 0deg) + 3deg));
          }
          50% { 
            opacity: 0.8; 
            transform: translateY(-30px) scale(1.2) rotate(calc(var(--rotation, 0deg) + 5deg));
          }
          75% { 
            opacity: 1; 
            transform: translateY(-15px) scale(1.05) rotate(calc(var(--rotation, 0deg) + 2deg));
          }
          100% { 
            opacity: 0.7; 
            transform: translateY(0px) scale(1) rotate(var(--rotation, 0deg));
          }
        }

        .animate-float-3d {
          animation: float-3d 6s ease-in-out infinite;
        }

        .animate-float-3d-reverse {
          animation: float-3d-reverse 8s ease-in-out infinite;
        }

        .animate-float-3d-slow {
          animation: float-3d-slow 10s ease-in-out infinite;
        }

        .animate-line-extend {
          animation: line-extend 4s ease-in-out infinite;
        }

        .animate-line-extend-reverse {
          animation: line-extend-reverse 6s ease-in-out infinite;
        }

        .animate-knowledge-flow {
          animation: knowledge-flow 4s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-in-out forwards;
        }

        .animate-label-float {
          animation: label-float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
