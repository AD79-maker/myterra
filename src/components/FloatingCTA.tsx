import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const FloatingCTA = () => {
  const phoneNumber = "0507-1414-6711";
  const talkTalkUrl = "http://talk.naver.com/WAQNELX";

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      {/* Naver TalkTalk Button */}
      <motion.a
        href={talkTalkUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 bg-[#03C75A] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
        title="네이버 톡톡 상담"
      >
        <MessageCircle size={28} />
      </motion.a>

      {/* Phone Call Button */}
      <motion.a
        href={`tel:${phoneNumber}`}
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
        title="전화 상담"
      >
        <Phone size={28} />
      </motion.a>
    </div>
  );
};

export default FloatingCTA;
