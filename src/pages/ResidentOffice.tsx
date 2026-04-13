import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Clock, FileText, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import { Card } from '../../components/ui/card';
import SectionHeader from '../components/SectionHeader';

const ResidentOffice = () => {
  return (
    <div className="pt-32 pb-24 bg-background">
      <Helmet>
        <title>상주사무실 | 마이테라 공유오피스</title>
        <meta name="description" content="동탄 프리미엄 상주사무실 1~2인실. 풀옵션, 개별냉난방, 완벽방음. 업무에만 집중할 수 있는 나만의 독립 공간." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <SectionHeader 
          subtitle="Resident Office"
          title="업무에 집중할 수 있는 독립 사무 공간"
          description="독립된 업무 공간이 필요한 분들을 위한 사무실입니다. 불필요한 비용 없이 바로 업무를 시작할 수 있는 환경을 제공합니다."
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            { icon: <ShieldCheck className="text-accent" />, title: "완벽한 프라이버시", desc: "방음 시공 및 개별 도어락" },
            { icon: <Clock className="text-accent" />, title: "24/7 자유로운 출입", desc: "지문/번호키 보안 시스템" },
            { icon: <FileText className="text-accent" />, title: "풀옵션 사무 가구", desc: "데스커 책상, 시디즈 의자, 서랍장 완비" },
            { icon: <MapPin className="text-accent" />, title: "동탄역 초역세권", desc: "편리한 교통과 우수한 접근성" }
          ].map((item, i) => (
            <Card key={i} className="rounded-3xl border-none shadow-sm p-8 bg-white hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>

        {/* Detailed Description */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="flex-1 order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-primary mb-8">답답함 없는 쾌적한 업무 환경</h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                많은 공유오피스들이 공간 효율을 위해 천장을 낮추고 좁은 복도를 만듭니다. 하지만 마이테라는 다릅니다. 
                우리는 업무 효율이 공간의 쾌적함에서 나온다고 믿습니다.
              </p>
              <p>
                마이테라 공유오피스는 기존 오피스 대비 20% 이상 높은 층고를 확보하여 장시간 근무 시에도 피로감이 적습니다. 
                또한, 각 실별로 독립된 온도조절 시스템을 갖추고 있어 365일 최적의 온도를 유지할 수 있습니다.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "실별 독립 온도조절리모컨",
                  "전 좌석 유선 LAN 및 기업용 Wi-Fi",
                  "방음 전문 자재 시공",
                  "개방감 있는 창문 및 블라인드 설치",
                  "데스커 사무용 책상 및 시디즈 의자",
                  "개별 도어락 및 복도 CCTV"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle2 size={16} className="text-accent" /> {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <img src="https://picsum.photos/seed/premium-office/800/600" alt="Office Interior" className="rounded-[2.5rem] shadow-2xl" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* Included Services */}
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white mb-24">
          <div className="max-w-3xl mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">기본 서비스는 이용료에 포함되어 있습니다</h3>
            <p className="text-gray-300">추가 관리비 걱정 없이 비즈니스에만 집중하세요. 마이테라가 모든 인프라를 지원합니다.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-6">
            {[
              "전기/수도/관리비 0원", "초고속 인터넷 무상 제공", "회의실 월 무료 시간", "고급 원두커피 무제한",
              "복합기 이용 (무료)", "우편물 수령 및 보관", "무료 주차 지원", "지문 인식 보안 출입",
              "공용 라운지 이용", "얼음 정수기 완비", "정기 공용 공간 청소", "화재/배상 보험 가입"
            ].map((service, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={12} className="text-accent" />
                </div>
                <span className="text-sm md:text-base">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing/Tour CTA */}
        <div className="text-center bg-background-sub rounded-[2.5rem] p-12 md:p-20 border border-border-custom">
          <h3 className="text-3xl font-bold text-primary mb-6">지금 바로 상담 예약을 신청하세요</h3>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            공간의 질은 직접 보셨을 때 가장 잘 느끼실 수 있습니다. 
            원하시는 시간에 맞춰 담당자가 친절히 안내해 드립니다.
          </p>
          <Button asChild size="lg" className="bg-primary text-white px-10 py-7 rounded-xl text-lg">
            <a href="https://naver.me/GbDd81fm" target="_blank" rel="noopener noreferrer">무료 상담 예약하기 <ArrowRight className="ml-2" /></a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResidentOffice;
