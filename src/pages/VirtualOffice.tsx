import { Helmet } from 'react-helmet-async';
import { CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';
import SectionHeader from '../components/SectionHeader';

const VirtualOffice = () => {
  return (
    <div className="pt-32 pb-24 bg-background">
      <Helmet>
        <title>비상주사무실 | 마이테라 공유오피스</title>
        <meta name="description" content="동탄 비상주사무실 사업자등록 주소지 서비스. 우편물 관리, 실사 지원, 회의실 혜택. 가장 신뢰할 수 있는 비즈니스 주소지." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <SectionHeader 
          subtitle="Non-Resident Service"
          title="사업자 등록을 위한 안정적인 주소 서비스"
          description="마이테라 비상주사무실은 사업자 등록에 필요한 주소지 제공과 함께 우편 관리 및 실사 대응까지 지원합니다."
        />

        <div className="mb-24 rounded-[3rem] overflow-hidden shadow-xl h-[400px]">
          <img src="/images/virtual office_00.jpg" alt="Co-working Space" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>

        {/* Comparison Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="bg-white p-10 rounded-[2.5rem] border border-border-custom shadow-sm">
            <h4 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm">X</span>
              일부 저가형 비상주 서비스의 한계
            </h4>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 bg-red-400 rounded-full shrink-0"></div>
                <span>불투명한 운영으로 인한 갑작스러운 폐업 리스크</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 bg-red-400 rounded-full shrink-0"></div>
                <span>관공서/금융권 실사 시 대응 불가능</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 bg-red-400 rounded-full shrink-0"></div>
                <span>우편물 누락 및 관리 소홀로 인한 행정 불이익</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 bg-red-400 rounded-full shrink-0"></div>
                <span>전입신고/사업자등록 거절</span>
              </li>
            </ul>
          </div>
          <div className="bg-primary p-10 rounded-[2.5rem] text-white shadow-xl shadow-primary/20">
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-accent text-primary rounded-full flex items-center justify-center text-sm">O</span>
              마이테라 비상주 서비스
            </h4>
            <ul className="space-y-4 text-gray-200">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-accent mt-1 shrink-0" />
                <span>안정적인 주소지 제공</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-accent mt-1 shrink-0" />
                <span>정식 임대차 계약서 발행으로 모든 업종 등록 가능</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-accent mt-1 shrink-0" />
                <span>우편물 도착 문자 알림</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-accent mt-1 shrink-0" />
                <span>실제 사무 공간 및 회의실을 활용한 완벽한 실사 지원</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Process */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-primary text-center mb-16">계약 절차 안내</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "상담 및 계약", desc: "전화 또는 온라인 폼을 통해 상담 신청" },
              { step: "02", title: "계약서 작성", desc: "전자계약 또는 방문을 통한 임대차 계약" },
              { step: "03", title: "이용료 결제", desc: "계약 기간에 따른 이용료 납부" },
              { step: "04", title: "사업자 등록", desc: "발행된 계약서로 세무서/홈택스 등록" }
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                <div className="w-16 h-16 bg-white border-2 border-accent rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-accent font-bold text-xl">{item.step}</span>
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-accent/20 -z-0"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">비상주 서비스 FAQ</h3>
          <Accordion className="space-y-4">
            {[
              { q: "모든 업종이 등록 가능한가요?", a: "네, 마이테라 공유오피스는 2종 근린생활시설로 등록되어 있어 대부분의 업종이 등록 가능합니다. 다만, 특정 인허가가 필요한 업종의 경우 사전에 세무사 또는 관공서에 확인이 필요할 수 있습니다." },
              { q: "실제 사무실 실사가 나오면 어떻게 하나요?", a: "실사 일정이 잡히면 미리 연락 주세요. 실제 업무 공간과 회의실을 세팅해 드리고, 담당자가 현장에서 직접 대응을 도와드립니다." },
              { q: "우편물은 어떻게 전달받나요?", a: "우편물이 도착하면 사진을 찍어 문자로 보내드립니다. 급한 우편물은 직접 방문 수령이 가능합니다." },
              { q: "계약 기간은 어떻게 되나요?", a: "최소 12개월부터 계약이 가능하며, 24개월 장기 계약 시 파격적인 할인 혜택을 제공해 드리고 있습니다." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-2xl border border-border-custom">
                <AccordionTrigger className="text-left font-bold text-primary py-5 hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5 leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default VirtualOffice;
