import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Wind, Brain, Activity, Footprints, Info, HelpCircle, ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "腹部起伏不明显，感觉不到怎么办？",
      a: "如果腹部的起伏不明显，你可以把手平放在腹部来感受。如果仍然感觉不到，不要刻意改变呼吸去寻找。你可以将觉知转移到“坐着”的姿势和身体与座垫“接触”的感觉上，在心里标记“坐、触”。当腹部起伏再次明显时，再回到“起、伏”的观察。"
    },
    {
      q: "妄念非常多，心一直跑掉怎么办？",
      a: "初学者心经常游荡是完全正常的，不要因此感到气馁或沮丧。关键在于“觉察”。一旦发现心在思考、想象或回忆，立刻在心里标记“想、想”或“回忆、回忆”。只要你觉察并标记了它，妄念通常就会消失。消失后，立刻将觉知带回腹部的“起、伏”。"
    },
    {
      q: "腿非常痛或麻，可以换姿势吗？",
      a: "当疼痛生起时，不要立刻移动。将注意力集中在痛的感觉上，标记“痛、痛”，耐心地观察它。如果疼痛变得极其剧烈、难以忍受，你可以改变姿势。但在改变之前，必须先标记意图：“想动、想动”。然后缓慢地移动，并标记每一个动作：“移动、移动”。调整好后，立刻回到腹部的观察。"
    },
    {
      q: "禅修时看到光、影像或听到奇怪的声音怎么办？",
      a: "在定力提升时，可能会出现各种幻象（如光芒、风景、人物）或听到声音。不要去探究、执着或害怕它们。只要如实地标记“看到、看到”或“听到、听到”，直到它们消失。它们只是心理现象，不是禅修的最终目标。消失后，继续观察腹部。"
    },
    {
      q: "感到非常昏沉、想睡觉怎么办？",
      a: "当昏沉或睡意袭来时，立刻标记“昏沉、昏沉”或“想睡、想睡”。你可以尝试睁开眼睛，或者稍微用力地呼吸几次。如果睡意仍然很浓，应该起身进行行禅（经行），通过走动来激发精进力，克服昏沉。"
    }
  ];

  return (
    <div className="space-y-4 mt-2">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-stone-200 rounded-2xl overflow-hidden bg-stone-50/50">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left px-6 py-5 font-serif font-medium text-stone-900 flex justify-between items-center hover:bg-stone-100/50 transition-colors"
          >
            <span className="pr-4">{faq.q}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-stone-400 shrink-0"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-6 pb-5 text-stone-700 leading-relaxed border-t border-stone-200/50 pt-4">
                  {faq.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

const sections = [
  {
    id: 'intro',
    title: '前言与准备',
    icon: <BookOpen className="w-5 h-5" />,
    content: (
      <div className="space-y-4 text-stone-700">
        <p>本指南严格依据马哈希尊者（Mahasi Sayadaw）所著的《内观基础》（2006年校译版）整理，旨在为初学者提供准确的内观（Vipassana）禅修基础指导。</p>
        <p>内观禅修的目的是通过培育正念（Mindfulness），如实地观察身心现象的生灭，从而体证无常（Anicca）、苦（Dukkha）、无我（Anatta），最终导向烦恼的止息。</p>
        <h3 className="text-xl font-serif font-semibold mt-8 mb-3 text-stone-900">禅修姿势</h3>
        <p>选择一个安静的地方。盘腿而坐，保持背部挺直，但不要过度僵硬。如果盘腿有困难，可以坐在椅子上，保持背部不靠椅背。轻轻闭上双眼。</p>
      </div>
    )
  },
  {
    id: 'basic',
    title: '基本练习：观察腹部起伏',
    icon: <Wind className="w-5 h-5" />,
    content: (
      <div className="space-y-4 text-stone-700">
        <p>将你的注意力（觉知）集中在腹部。正常呼吸，不要刻意改变呼吸的节奏，不要深呼吸或憋气。</p>
        <ul className="list-disc pl-5 space-y-3 mt-4">
          <li>当吸气时，腹部会自然膨胀。此时，将注意力放在腹部膨胀的整个过程，并在心里默念（标记）：<strong className="text-stone-900 font-serif">“起”</strong>。</li>
          <li>当呼气时，腹部会自然收缩。此时，将注意力放在腹部收缩的整个过程，并在心里默念（标记）：<strong className="text-stone-900 font-serif">“伏”</strong>。</li>
        </ul>
        <div className="bg-stone-100 p-6 rounded-2xl mt-6 border border-stone-200">
          <p className="font-medium text-stone-900 mb-2">注意事项：</p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>不要出声，只是在心里轻轻地标记。</li>
            <li>标记的词语只是为了帮助心锚定在目标上，关键是<strong>觉知</strong>腹部运动的真实感觉（如紧绷、推挤、移动等）。</li>
            <li>如果腹部运动不明显，可以把手轻轻放在腹部来感受。</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'thoughts',
    title: '处理妄念',
    icon: <Brain className="w-5 h-5" />,
    content: (
      <div className="space-y-4 text-stone-700">
        <p>在观察“起、伏”时，心不可避免地会游荡、思考或想象。这是正常的现象，不需要感到挫败。</p>
        <ul className="list-disc pl-5 space-y-3 mt-4">
          <li>当发现心游荡时，必须立刻觉察到它。</li>
          <li>如果你在想象，就在心里标记：<strong className="text-stone-900 font-serif">“想象、想象”</strong>。</li>
          <li>如果你在思考，就标记：<strong className="text-stone-900 font-serif">“思考、思考”</strong>。</li>
          <li>如果你在计划，就标记：<strong className="text-stone-900 font-serif">“计划、计划”</strong>。</li>
          <li>如果你在回忆，就标记：<strong className="text-stone-900 font-serif">“回忆、回忆”</strong>。</li>
        </ul>
        <p className="mt-6 font-medium text-stone-900">
          持续标记这些心理活动，直到它们消失。一旦它们消失，立刻将注意力带回腹部的“起”和“伏”。
        </p>
      </div>
    )
  },
  {
    id: 'sensations',
    title: '处理身体感受',
    icon: <Activity className="w-5 h-5" />,
    content: (
      <div className="space-y-4 text-stone-700">
        <p>在静坐过程中，身体可能会出现各种感受，如疼痛、僵硬、发痒、麻木或热感。</p>
        <ul className="list-disc pl-5 space-y-3 mt-4">
          <li>当出现明显的不适感时，不要立刻移动身体去消除它。将注意力从腹部转移到不适的部位。</li>
          <li>如果是痛，就专注在痛的感觉上，标记：<strong className="text-stone-900 font-serif">“痛、痛”</strong>。</li>
          <li>如果是痒，就标记：<strong className="text-stone-900 font-serif">“痒、痒”</strong>。</li>
          <li>如果是麻，就标记：<strong className="text-stone-900 font-serif">“麻、麻”</strong>。</li>
        </ul>
        <p className="mt-4">耐心地、如实地观察这些感觉，直到它们减弱或消失。如果感觉消失，就回到腹部的“起、伏”。</p>
        
        <h3 className="text-xl font-serif font-semibold mt-8 mb-3 text-stone-900">改变姿势</h3>
        <p>如果疼痛变得非常剧烈，难以忍受，你可以改变姿势。但在改变之前，必须先标记想要改变的意图：<strong className="text-stone-900 font-serif">“想动、想动”</strong>。然后，在移动身体的每一个微小动作中保持觉知，标记：<strong className="text-stone-900 font-serif">“移动、移动”</strong>。姿势调整好后，立刻回到腹部的“起、伏”。</p>
      </div>
    )
  },
  {
    id: 'walking',
    title: '行禅（经行）',
    icon: <Footprints className="w-5 h-5" />,
    content: (
      <div className="space-y-4 text-stone-700">
        <p>行禅是与坐禅同等重要的练习，交替进行可以平衡精进与定力。</p>
        <p>找一条安静的走道，约10到20步长。双手可以交叉放在身前或背后。目光自然下垂，看着前方约两米处的地面，不要东张西望。</p>
        
        <h3 className="text-xl font-serif font-semibold mt-8 mb-3 text-stone-900">初学阶段（两步标记）</h3>
        <p>缓慢行走，将注意力放在脚的动作上。标记：<strong className="text-stone-900 font-serif">“左步、右步”</strong> 或 <strong className="text-stone-900 font-serif">“走、走”</strong>。</p>
        
        <h3 className="text-xl font-serif font-semibold mt-8 mb-3 text-stone-900">进阶阶段（三步标记）</h3>
        <p>走得更慢一些，将每一步分解为三个阶段并保持精确的觉知：</p>
        <ul className="list-disc pl-5 space-y-3 mt-4">
          <li>脚跟抬起时，标记：<strong className="text-stone-900 font-serif">“提起”</strong>。</li>
          <li>脚向前移动时，标记：<strong className="text-stone-900 font-serif">“推前”</strong>。</li>
          <li>脚接触地面并放下时，标记：<strong className="text-stone-900 font-serif">“放下”</strong>。</li>
        </ul>
        <p className="mt-6">在行禅中，如果出现妄念、看到事物或听到声音，也要像坐禅时一样进行标记（如“看到”、“听到”、“思考”），然后回到脚的动作上。</p>
      </div>
    )
  },
  {
    id: 'faq',
    title: '常见问题',
    icon: <HelpCircle className="w-5 h-5" />,
    content: <FAQSection />
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  return (
    <div className="min-h-screen bg-[#f5f4f0] text-stone-800 font-sans selection:bg-stone-200">
      {/* Hero Section */}
      <header className="relative bg-stone-900 text-[#f5f4f0] py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1528315651484-4dba0735b434?q=80&w=2070&auto=format&fit=crop" 
            alt="Serene nature" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 to-stone-900"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-widest mb-6 drop-shadow-lg">
            马哈希内观禅法
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto flex items-center justify-center gap-2 font-light tracking-wide">
            <Info className="w-4 h-4" />
            依据《内观基础》（马哈希尊者著，2006年校译版）
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Sidebar Navigation */}
        <nav className="md:w-72 shrink-0">
          <div className="sticky top-8 flex flex-col gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-white text-stone-900 shadow-sm border border-stone-200/50'
                    : 'text-stone-500 hover:bg-white/50 hover:text-stone-700 border border-transparent'
                }`}
              >
                <span className={`${activeSection === section.id ? 'text-stone-700' : 'text-stone-400'}`}>
                  {section.icon}
                </span>
                <span className="font-medium text-sm md:text-base tracking-wide">{section.title}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Content Area */}
        <div className="flex-1 min-h-[60vh]">
          <AnimatePresence mode="wait">
            {sections.map(
              (section) =>
                activeSection === section.id && (
                  <motion.article
                    key={section.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-stone-100"
                  >
                    <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 text-stone-900 border-b border-stone-100 pb-6">
                      {section.title}
                    </h2>
                    <div className="prose prose-stone prose-lg max-w-none leading-relaxed">
                      {section.content}
                    </div>
                  </motion.article>
                )
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-stone-200/50 py-12 text-center text-stone-500 text-sm font-serif tracking-widest">
        <p>愿一切众生快乐、安详、解脱。</p>
      </footer>
    </div>
  );
}
