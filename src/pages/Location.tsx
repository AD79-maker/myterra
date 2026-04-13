import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { MapPin, Train, Car, Navigation, ExternalLink } from 'lucide-react';
import { Button } from '../../components/ui/button';

const Location = () => {
  const naverMapUrl = "https://naver.me/GbDd81fm";

  return (
    <div className="pt-32 pb-0 bg-[#FDFCF9] font-sans">
      <Helmet>
        <title>위치안내 | 마이테라 공유오피스</title>
        <meta name="description" content="마이테라 공유오피스 동탄점 오시는 길. 동탄역 차량 3분 초역세권 프리미엄 오피스." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-primary"
          >
            오시는 길
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg max-w-2xl leading-relaxed text-gray-600"
          >
            동탄역 초역세권에 위치하여 서울 및 수도권 어디서든 접근이 편리합니다. <br /> 
            주변의 풍부한 인프라와 함께 비즈니스의 효율을 높이세요.
          </motion.p>
        </div>

        {/* Main Content: 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-24">
          {/* Left: Map Image / Infographic */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 group relative"
          >
            <a href={naverMapUrl} target="_blank" rel="noopener noreferrer" className="block relative h-full rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100">
              {/* Infographic Map Logic */}
              <div className="w-full h-full min-h-[450px] bg-white relative overflow-hidden">
                <div className="absolute inset-0 p-8 flex flex-col z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-primary text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                      동탄역 차량 3분 거리
                    </div>
                  </div>
                  
                  <div className="flex-grow relative mt-4">
                    {/* Roads */}
                    <div className="absolute top-1/2 left-0 w-full h-12 bg-gray-100 -translate-y-1/2 rounded-full"></div>
                    <div className="absolute top-0 left-1/3 w-12 h-full bg-gray-100 -translate-x-1/2 rounded-full"></div>
                    
                    {/* Landmarks */}
                    <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 text-center">
                      <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg mb-2 mx-auto">
                        <Train className="text-white" size={32} />
                      </div>
                      <span className="text-xs font-bold text-gray-500">동탄역 (SRT/GTX)</span>
                    </div>

                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center">
                      <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mb-1 mx-auto">
                        <Navigation className="text-gray-400" size={20} />
                      </div>
                      <span className="text-[10px] font-bold text-gray-400">주변 인프라</span>
                    </div>

                    {/* MyTerra Building */}
                    <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                      <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center shadow-2xl mb-2 mx-auto border-4 border-white"
                      >
                        <MapPin className="text-white" size={40} />
                      </motion.div>
                      <span className="text-sm font-bold text-primary">마이테라 공유오피스</span>
                      <div className="text-[10px] text-gray-500">전오프라자 2층</div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
                    <div className="bg-[#03C75A] text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 hover:scale-105 transition-transform">
                      네이버 지도로 길찾기 <ExternalLink size={14} />
                    </div>
                  </div>
                </div>
                
                {/* Background Texture */}
                <img src="https://picsum.photos/seed/map-bg/1200/500" alt="Map Background" className="absolute inset-0 w-full h-full object-cover opacity-10" referrerPolicy="no-referrer" />
              </div>

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                <div className="text-center text-white p-6">
                  <p className="text-xl font-bold mb-2">네이버 지도로 길찾기</p>
                  <p className="text-sm opacity-80">클릭 시 네이버 플레이스로 연결됩니다</p>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Right: Detailed Address Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-[2.5rem] p-10 h-full shadow-xl border border-gray-100 flex flex-col justify-center">
              <span className="text-xs font-bold tracking-widest text-accent uppercase mb-6 block">Detailed Address</span>
              <h3 className="text-2xl font-bold text-primary mb-8 leading-tight">
                경기도 화성시 동탄구 동탄대로 595,<br />2층(전오프라자)
              </h3>
              <div className="space-y-6 text-gray-600">
                <p className="leading-relaxed">
                  5층에 튼튼치과가 있는 건물이며 <span className="text-primary font-semibold">2층</span>으로 오시면 마이테라 공유오피스 입구가 위치해 있습니다.
                </p>
              </div>
              <div className="mt-12">
                <Button asChild className="w-full bg-primary text-white py-8 rounded-2xl text-lg shadow-lg shadow-primary/20">
                  <a href="tel:0507-1414-6711">상담 전화하기</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Transportation Cards: 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Train className="text-white" size={24} />,
              title: "GTX/SRT 이용 시",
              desc: <>동탄역(SRT/GTX) : <span className="text-primary font-bold">차량 3분 거리</span>입니다. <br /> 동탄역에서 가장 가까운 최적의 비즈니스 입지를 확인하세요.</>
            },
            {
              icon: <Car className="text-white" size={24} />,
              title: "승용차 이용 시",
              desc: <>내비게이션에 '마이테라 공유오피스' 또는 주소 검색. <br /> 경부고속도로 기흥동탄IC 및 중리IC에서 5분 내외로 매우 인접합니다.</>
            },
            {
              icon: <MapPin className="text-white" size={24} />,
              title: "주차 안내",
              desc: <>건물 내 지하 주차장 또는 근린공원4호 공영주차장을 이용해 주세요. <br /> 방문객 및 입주사 모두에게 편리한 주차 환경과 주차 지원을 제공합니다.</>
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="bg-white p-10 rounded-[2rem] shadow-lg border border-gray-50 hover:shadow-xl transition-shadow group"
            >
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="font-bold text-xl mb-4 text-primary">{item.title}</h4>
              <p className="text-gray-500 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Slogan Bar */}
      <div className="bg-primary py-6 text-center">
        <p className="text-white font-bold text-xl md:text-2xl tracking-wider">
          동탄역에서 가장 가까운 공유오피스
        </p>
      </div>
    </div>
  );
};

export default Location;
