import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Button } from '../../components/ui/button';

const Gallery = () => {
  const images = [
    { src: '/images/lounge_02.png', title: '메인 라운지', desc: '깨끗한 카테테리아와 넓은 공용공간' },
    { src: '/images/room1_2.png', title: '1인실 프라이빗 오피스', desc: '개방감 있는 창과 넓은독립적인 공간' },
    { src: '/images/room1_3.png', title: '1인실 집중존 오피스', desc: '집중력을 높여주는 아늑하고 독립적인 공간' },
    { src: '/images/room2_1.png', title: '2인실 팀 오피스', desc: '소규모 팀 프로젝트에 최적화된 넓은 공간' },
    { src: '/images/meeting 02.png', title: '회의실/미팅룸', desc: '회의용 모니터와 화이트보드 완비된 미팅 공간' },
    { src: '/images/cafeteria.png', title: '카페테리아', desc: '최고급 원두커피와 다양한 차가 준비된 공간' },
    { src: '/images/cafeteria2.png', title: 'OA 존', desc: '고성능 복합기와 사무용품이 완비된 구역' },
    { src: '/images/lounge_01.jpg', title: '복도 및 보안', desc: '철저한 보안 시스템과 정돈된 복도 환경' },
    { src: '/images/facade.png', title: '입구 파사드', desc: '아늑하고 깨끗한 공유오피스 입구' },
  ];

  return (
    <div className="pt-32 pb-24 bg-background">
      <Helmet>
        <title>갤러리 | 마이테라 공유오피스</title>
        <meta name="description" content="마이테라 공유오피스의 쾌적한 공간을 사진으로 확인하세요. 라운지, 사무실, 회의실 등 프리미엄 인테리어." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-sm font-bold tracking-widest uppercase mb-4 block text-accent">Gallery</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-primary">공간 둘러보기</h2>
          <p className="text-lg max-w-2xl leading-relaxed text-gray-600">
            마이테라 공유오피스의 모든 공간은 실제 사용자의 경험을 최우선으로 디자인되었습니다. 
            사진보다 더 쾌적한 실제 공간을 투어를 통해 확인해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 shadow-lg">
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">크게 보기</Button>
                </div>
              </div>
              <h4 className="text-xl font-bold text-primary mb-2">{img.title}</h4>
              <p className="text-gray-500 text-sm">{img.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
