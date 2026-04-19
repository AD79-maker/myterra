import { Helmet } from 'react-helmet-async';
import { CheckCircle2, Clock, Coffee } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

const MeetingRoom = () => {
  return (
    <div className="pt-32 pb-24 bg-background">
      <Helmet>
        <title>회의실 대관 | 마이테라 공유오피스</title>
        <meta name="description" content="동탄역 인근 전문 회의실 대관. 4인실, 대형 모니터, 화이트보드 완비. 비즈니스 미팅, 면접, 세미나를 위한 최적의 공간." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          subtitle="Meeting Room"
          title="비즈니스의 가치를 높이는 전문적인 공간"
          description="외부 미팅, 상담, 면접을 위한 회의 공간입니다. 필요한 시간만 예약하여 효율적으로 이용할 수 있습니다."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="grid grid-cols-2 gap-4">
            <img src="/images/meeting 01.png" alt="Meeting Room 1" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
            <img src="/images/meeting 03.png" alt="Meeting Room 2" className="rounded-3xl shadow-lg mt-8" referrerPolicy="no-referrer" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary mb-8">최적의 미팅을 위한 완벽한 장비</h3>
            <ul className="space-y-6">
              {[
                { title: "42인치 회의용 모니터", desc: "HDMI 연결을 통한 고화질 프레젠테이션 지원" },
                { title: "대형 화이트보드", desc: "아이디어 브레인스토밍을 위한 넓은 판서 공간" },
                { title: "초고속 Wi-Fi", desc: "끊김 없는 화상 회의와 대용량 자료 공유 가능" },
                { title: "회의 전용 테이블 & 의자", desc: "장시간 회의에도 편안함을 유지해주는 회의요 가구" }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 p-6 bg-background-sub rounded-2xl border border-border-custom">
              <p className="text-sm text-primary font-bold mb-2">이용 요금 안내</p>
              <p className="text-2xl font-bold text-primary">시간당 10,000원 <span className="text-sm font-normal text-gray-500">(VAT 포함)</span></p>
              <p className="text-xs text-gray-500 mt-2">* 상주 고객님은 매월 무료시간 제공 </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-12 border border-border-custom shadow-sm">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">이용 규칙 및 안내</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-4 flex items-center gap-2 text-accent">
                <Clock size={18} /> 예약 및 시간
              </h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 최소 3시간부터 예약 가능 </li>
                <li>• 예약 시간 10분 전부터 입장 가능합니다.</li>
                <li>• 다음 예약자를 위해 종료 시간을 엄수해 주세요.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 flex items-center gap-2 text-accent">
                <Coffee size={18} /> 편의 시설
              </h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 라운지 내 커피 및 차 무제한 이용 가능</li>
                <li>• 외부 음식물 반입은 냄새가 나지 않는 음료만 가능</li>
                <li>• 복합기 이용 필요 시 카드 단말기 별도 결제</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-primary text-white px-10 py-7 rounded-xl">
              <a href="https://naver.me/GbDd81fm" target="_blank" rel="noopener noreferrer">회의실 예약 문의하기</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingRoom;
