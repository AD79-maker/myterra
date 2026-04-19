import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '../../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';
import SectionHeader from '../components/SectionHeader';

const Home = () => {
  return (
    <div className="pt-20">
      <Helmet>
        <title>마이테라 공유오피스 | 동탄에서 가장 쾌적한 프라이빗 오피스</title>
        <meta name="description" content="동탄역 인근 프리미엄 공유오피스 마이테라(My-Terra). 상주사무실, 비상주사무실, 회의실 대관. 개방감 넘치는 공간에서 업무에 몰입하세요." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background-sub">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/virtual office_00.avif" 
            alt="Premium Office" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-bold mb-6 border border-accent/20">
              프리미엄 프라이빗 오피스
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-8 leading-[1.1] tracking-tight">
              비즈니스에 집중할 수 있는<br />
              <span className="text-accent">최적의</span> 업무 공간
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              마이테라 공유오피스는, 
              불필요한 요소를 줄이고, 실제 업무에 필요한 환경에 집중한 공간입니다. 
              사업자 등록부터 업무까지, 효율적으로 운영할 수 있도록 설계되었습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-white text-lg px-8 py-7 rounded-xl shadow-lg shadow-primary/20">
                <a href="https://naver.me/GbDd81fm" target="_blank" rel="noopener noreferrer">무료 방문 상담 신청 <ArrowRight className="ml-2" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white border-border-custom text-lg px-8 py-7 rounded-xl">
                <Link to="/resident">공간 둘러보기</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            subtitle="Why My-Terra?"
            title="마이테라 공유오피스가 선택되는 이유"
            description="마이테라는 단순한 공간 제공이 아니라 실제 사업 운영에 필요한 환경을 기준으로 설계된 공유오피스입니다."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="text-accent" />,
                title: "효율적인 공간 설계",
                desc: "업무 동선과 공간 활용을 고려한 구조로 장시간 사용에도 부담 없는 환경을 제공합니다."
              },
              {
                icon: <ShieldCheck className="text-accent" />,
                title: "철저한 프라이버시",
                desc: "완벽한 방음 설계와 개별 도어락 시스템으로 업무에 집중할 수 있는 독립 공간입니다."
              },
              {
                icon: <CheckCircle2 className="text-accent" />,
                title: "개별 냉난방 온도조절시스템",
                desc: "각 실별 독립 온도조절시스템으로 365일 24시간 나에게 맞는 온도를 유지하세요."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-background rounded-3xl border border-border-custom hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-24 bg-background-sub/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            subtitle="Our Services"
            title="비즈니스 형태에 맞는 최적의 플랜"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Resident */}
            <Card className="rounded-3xl border-none shadow-lg overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img src="https://picsum.photos/seed/private-office/800/600" alt="Resident Office" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <CardHeader className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">상주사무실</h3>
                  <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">1~4인실</span>
                </div>
                <p className="text-base leading-relaxed text-gray-600">
                  나만의 독립된 공간이 필요한 분들을 위한 프라이빗 오피스입니다. 
                  가구, 인터넷, 냉난방이 모두 완비되어 있습니다.
                </p>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <ul className="space-y-3 mb-8">
                  {['24시간 연중무휴 이용', '초고속 유무선 인터넷', '커피/차 무제한 제공', '회의실 월 무료 시간 제공'].map((text, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-accent" /> {text}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-primary text-white py-6 rounded-xl">
                  <Link to="/resident">상세보기</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Non-Resident */}
            <Card className="rounded-3xl border-none shadow-lg overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img src="/images/virtual office_01.avif" alt="Non-Resident" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <CardHeader className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">비상주사무실</h3>
                  <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">사업자등록</span>
                </div>
                <p className="text-base leading-relaxed text-gray-600">
                  실제 사무실은 필요 없지만 신뢰할 수 있는 주소지가 필요한 분들을 위한 서비스입니다. 
                  우편물 관리 및 실사 지원이 포함됩니다.
                </p>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <ul className="space-y-3 mb-8">
                  {['법인/개인 사업자 등록 가능', '우편물 알림 및 재발송', '관공서 실사 완벽 지원', '회의실 할인 혜택'].map((text, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-accent" /> {text}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-primary text-white py-6 rounded-xl">
                  <Link to="/non-resident">상세보기</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Meeting Room */}
            <Card className="rounded-3xl border-none shadow-lg overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img src="https://picsum.photos/seed/modern-meeting/800/600" alt="Meeting Room" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <CardHeader className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">회의실 대관</h3>
                  <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">최대 4인</span>
                </div>
                <p className="text-base leading-relaxed text-gray-600">
                  중요한 미팅, 세미나, 면접을 위한 전문적인 공간입니다. 
                  대형 모니터와 화이트보드가 구비되어 있습니다.
                </p>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <ul className="space-y-3 mb-8">
                  {['42인치 회의용 모니터 완비', '대형 화이트 보드 완비', '고급 회의 공간 제공',  '라운지 카페 이용 가능'].map((text, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-accent" /> {text}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-primary text-white py-6 rounded-xl">
                  <Link to="/meeting-room">상세보기</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <SectionHeader 
                subtitle="Who is it for?"
                title="이런 분들께 적합합니다"
                description="마이테라 공유오피스는 단순한 공간을 넘어, 성장을 꿈꾸는 모든 분들의 파트너가 되고자 합니다."
              />
              <div className="space-y-6">
                {[
                  { title: "업무 공간이 필요한 1인 사업자 및 프리랜서", desc: "집에서는 집중이 안 되고, 카페는 눈치 보이는 분들을 위한 최적의 몰입 환경" },
                  { title: "사업자 등록과 우편 관리가 필요한 온라인 사업자", desc: "사업자 주소지가 필요하고 택배 및 우편물 관리가 중요한 초기 창업자" },
                  { title: "전문직 자격증 준비생", desc: "독서실보다 쾌적하고 카페보다 조용한 공간에서 장시간 공부가 필요한 분" },
                  { title: "거점 오피스가 필요한 팀", desc: "동탄역 인근에서 미팅이 잦거나 유연한 근무 환경이 필요한 소규모 팀" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-6 rounded-2xl hover:bg-background transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <span className="text-accent font-bold text-sm">{i+1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-primary">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
                <img src="/images/main.avif" alt="Dongtan Night View" className="w-full h-auto" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-0"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="py-24 bg-background-sub/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <SectionHeader 
            subtitle="Testimonials"
            title="입주사 생생 후기"
            description="마이테라와 함께 성장하고 있는 대표님들의 실제 이용 후기입니다."
          />
        </div>
        
        <div className="relative flex overflow-x-hidden">
          <motion.div 
            className="flex whitespace-nowrap gap-6 py-4"
            animate={{ x: [0, -1920] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[
              { text: "동탄역에서 가깝고 시설이 정말 깔끔해요. 특히 층고가 높아서 답답하지 않은 게 가장 큰 장점입니다.", author: "IT 스타트업 대표" },
              { text: "비상주 서비스 이용 중인데 우편물 관리도 꼼꼼하게 해주시고 실사 지원도 완벽해서 안심하고 사업하고 있습니다.", author: "온라인 쇼핑몰 운영자" },
              { text: "회의실 시설이 너무 좋아서 중요한 미팅 때마다 이용합니다. 커피 맛도 일품이에요!", author: "프리랜서 디자이너" },
              { text: "개별 냉난방이 되는 게 정말 신의 한 수입니다. 야근할 때도 쾌적하게 업무 볼 수 있어서 좋아요.", author: "전문직 수험생" },
              { text: "주변 공유오피스 다 돌아봤는데 마이테라가 가성비 최고입니다. 사장님도 너무 친절하세요.", author: "1인 기업가" },
              { text: "인테리어가 세련되어서 손님 모시고 미팅할 때마다 어깨가 으쓱합니다. 대만족이에요.", author: "컨설팅 업체 대표" },
            ].concat([
              { text: "동탄역에서 가깝고 시설이 정말 깔끔해요. 특히 층고가 높아서 답답하지 않은 게 가장 큰 장점입니다.", author: "IT 스타트업 대표" },
              { text: "비상주 서비스 이용 중인데 우편물 관리도 꼼꼼하게 해주시고 실사 지원도 완벽해서 안심하고 사업하고 있습니다.", author: "온라인 쇼핑몰 운영자" },
              { text: "회의실 시설이 너무 좋아서 중요한 미팅 때마다 이용합니다. 커피 맛도 일품이에요!", author: "프리랜서 디자이너" },
              { text: "개별 냉난방이 되는 게 정말 신의 한 수입니다. 야근할 때도 쾌적하게 업무 볼 수 있어서 좋아요.", author: "전문직 수험생" },
              { text: "주변 공유오피스 다 돌아봤는데 마이테라가 가성비 최고입니다. 사장님도 너무 친절하세요.", author: "1인 기업가" },
              { text: "인테리어가 세련되어서 손님 모시고 미팅할 때마다 어깨가 으쓱합니다. 대만족이에요.", author: "컨설팅 업체 대표" },
            ]).map((item, i) => (
              <div 
                key={i} 
                className="inline-block w-[400px] p-8 bg-white rounded-3xl border border-border-custom shadow-sm whitespace-normal"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(star => (
                    <span key={star} className="text-accent text-lg">★</span>
                  ))}
                </div>
                <p className="text-primary font-medium mb-6 leading-relaxed">"{item.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold">
                    {item.author[0]}
                  </div>
                  <span className="text-sm text-gray-500 font-medium">{item.author}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionHeader 
              subtitle="FAQ"
              title="자주 묻는 질문"
            />
          </div>
          <Accordion className="w-full space-y-4">
            {[
              { q: "24시간 이용이 가능한가요?", a: "네, 상주사무실 이용 고객님은 지문 인식 또는 번호키를 통해 365일 24시간 언제든 자유롭게 출입 및 이용이 가능합니다." },
              { q: "관리비나 추가 비용이 있나요?", a: "아니요, 마이테라 공유오피스는 월 이용료 외에 전기세, 수도세, 인터넷 사용료 등 어떠한 추가 관리비도 청구하지 않습니다. 커피와 차도 무제한으로 제공됩니다." },
              { q: "비상주사무실 계약 시 우편물 관리는 어떻게 되나요?", a: "우편물이 도착하면 즉시 사진 촬영 후 문자로 알림을 드립니다. " },
              { q: "회의실만 따로 예약해서 사용할 수 있나요?", a: "네, 외부 고객님도 네이버 예약 또는 전화를 통해 시간 단위로 회의실 대관이 가능합니다. 상주 고객님께는 매월 일정 시간의 무료 혜택을 드립니다." },
              { q: "주차 지원이 되나요?", a: "건물 내 지하 주차장 이용이 가능하며, 근린공원4호 공영주차장도 2시간 무료로 이용하실수 있습니다. " },
              { q: "사업자 등록 주소지로 사용 가능한가요?", a: "네, 상주 및 비상주 서비스 모두 정식 임대차 계약서를 작성해 드리므로 법인 및 개인 사업자 등록이 가능합니다." },
              { q: "방음은 잘 되나요?", a: "마이테라 공유오피스는 일반 가벽이 아닌 방음 전문 자재를 사용하여 시공되었습니다. 각 실별 독립된 공간에서 조용하게 업무에 집중하실 수 있습니다." },
              { q: "단기 계약도 가능한가요?", a: "네, 최소 1개월부터 유연하게 계약이 가능합니다. 장기 계약 시에는 추가 할인 혜택을 드리고 있습니다." },
              { q: "실사 지원이 무엇인가요?", a: "금융권이나 관공서에서 사업장 실사를 나올 경우, 비상주 고객님을 위해 실제 업무 공간을 세팅을 도와드리는 서비스입니다." },
              { q: "보증금은 얼마인가요?", a: "상주사무실의 경우 통상 1개월치 이용료를 보증금으로 예치하며, 비상주 서비스는 보증금 없이 이용 가능합니다." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-2xl border border-border-custom">
                <AccordionTrigger className="text-left font-bold text-primary py-6 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">지금 바로 마이테라의 공간을 경험해보세요</h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            백문이 불여일견입니다. 직접 방문하셔서 마이테라만의 쾌적함과 개방감을 확인하세요. 
            투어 신청은 1분이면 충분합니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-primary font-bold text-lg px-10 py-7 rounded-xl hover:bg-accent/90">
              <a href="https://naver.me/GbDd81fm" target="_blank" rel="noopener noreferrer">방문 상담 예약하기</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-white/30 text-white text-lg px-10 py-7 rounded-xl hover:bg-white/10">
              <a href="tel:0507-1414-6711">전화 상담하기</a>
            </Button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent rounded-full blur-[120px]"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
