import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Calendar, MessageSquare, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { Button } from '../../components/ui/button';

const Contact = () => {
  const contactCards = [
    {
      title: "네이버 플레이스 예약",
      description: "간편하게 방문 일정을 예약하세요.",
      buttonText: "예약하기",
      link: "https://naver.me/GbDd81fm",
      icon: <Calendar className="text-white" size={24} />,
      color: "bg-[#03C75A]"
    },
    {
      title: "네이버 톡톡 상담",
      description: "실시간 채팅으로 궁금한 점을 문의하세요.",
      buttonText: "문의하기",
      link: "http://talk.naver.com/WAQNELX",
      icon: <MessageSquare className="text-white" size={24} />,
      color: "bg-[#03C75A]"
    },
    {
      title: "카카오톡 채널",
      description: "카카오톡으로 편하게 상담받으세요.",
      subtext: "ID: @동탄공유오피스 비상주사무실 마이테라",
      buttonText: "상담하기",
      link: "http://pf.kakao.com/_GQIQn",
      icon: <MessageCircle className="text-black" size={24} />,
      color: "bg-[#FEE500]"
    },
    {
      title: "상담 직통",
      description: "전화/문자로 빠르게 상담하세요.",
      subtext: "0507-1414-6711",
      buttonText: "전화하기",
      link: "tel:0507-1414-6711",
      icon: <Phone className="text-white" size={24} />,
      color: "bg-primary"
    }
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-24 flex items-center overflow-hidden">
      <Helmet>
        <title>상담 및 예약 | 마이테라 공유오피스</title>
        <meta name="description" content="마이테라 공유오피스 동탄점 방문 투어 예약 및 입주 상담. 전화, 카카오톡, 온라인 문의를 통해 친절히 안내해 드립니다." />
      </Helmet>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
          alt="Office Lounge" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent font-bold tracking-widest uppercase mb-4 block"
          >
            Contact Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white"
          >
            비즈니스의 견고한 터전,<br />마이테라 투어 및 입주 상담
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-300"
          >
            단순한 공간을 넘어 당신의 성장이 시작되는 곳. 마이테라의 프리미엄 인프라와 세심한 서비스를 직접 확인해 보세요. 방문 전 예약제로 운영됩니다.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] p-8 flex flex-col items-center text-center shadow-2xl hover:bg-white/15 transition-all group"
            >
              <div className={`w-16 h-16 ${card.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-gray-300 text-sm mb-2 leading-relaxed">{card.description}</p>
              {card.subtext && <p className="text-accent text-xs font-medium mb-6">{card.subtext}</p>}
              {!card.subtext && <div className="mb-6"></div>}
              
              <Button 
                asChild 
                className="mt-auto w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-xl flex items-center justify-center gap-2 group/btn"
              >
                <a href={card.link} target={card.link.startsWith('http') ? "_blank" : undefined} rel="noopener noreferrer">
                  {card.buttonText} <ArrowUpRight size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
