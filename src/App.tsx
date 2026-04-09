import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';

function Article({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <article className="bg-forest/40 border border-forest p-5 sm:p-6 rounded-2xl shadow-lg backdrop-blur-sm">
      <h2 className="text-xl font-serif text-mint mb-4 flex items-center gap-2">
        <span className="w-1.5 h-6 bg-mint rounded-full inline-block"></span>
        {title}
      </h2>
      <div className="text-slate-300 leading-relaxed text-[15px] sm:text-base">
        {children}
      </div>
    </article>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="text-mint mt-1.5 opacity-70 text-xs">✦</span>
      <span className="flex-1">{children}</span>
    </div>
  );
}

function PreviewBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-navy/80 border border-slate-700 p-4 rounded-xl font-mono text-sm shadow-inner overflow-x-auto">
      {children}
    </div>
  );
}

function FullImage({ src, alt }: { src: string, alt: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-mint/20 shadow-md mb-3">
      <img src={src} alt={alt} className="w-full h-auto block" referrerPolicy="no-referrer" />
    </div>
  );
}

function Page1() {
  return (
    <div className="space-y-10 pb-10">
      <header className="text-center space-y-4 pt-8 pb-6 border-b border-mint/20">
        <h1 className="text-3xl sm:text-4xl font-bold text-mint leading-tight drop-shadow-md">
          말이 안 통하니<br />몸으로 말할 수 밖에
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 font-serif tracking-[0.2em]">WORLD BUILDING</p>
      </header>

      <FullImage src="https://gbe88.uk/1/ori.webp" alt="기원의 섬" />

      <section className="space-y-6">
        <Article title="01. 기원의 섬, 이니스(Ynys)">
          <div className="space-y-4">
            <ListItem>2026년의 평범한 현대와 완전히 격리된<br/>차원의 틈새에 존재하는 신비로운 공간임</ListItem>
            <ListItem>섬 자체가 거대한 고대 마물의 의지를 지녀<br/>자연물을 통해 기분과 의사를 섬세하게 표현함</ListItem>
            <ListItem>중심부로 들어갈수록 현대적 풍경에서 벗어나<br/>켈트/수메르 신화와 RPG 요소가 결합된 판타지 생태계가 펼쳐짐</ListItem>
          </div>
        </Article>

        <Article title="02. 구역별 상세 생태계">
          <div className="space-y-8">
            <div>
              <FullImage src="https://gbe88.uk/B/BG_23.webp" alt="동쪽 해변" />
              <ListItem>동부 해안(트라이스): 인간계의 물건들이 표류해 들어오는<br/>열대 기후의 풍요로운 해변 구역임</ListItem>
            </div>
            <div>
              <FullImage src="https://gbe88.uk/B/BG_24.webp" alt="남부 우림" />
              <ListItem>남부 우림(멜리스): 야광초가 밤을 밝히는 고온다습한 숲으로<br/>안쪽으로 갈수록 기이한 변형 식물들이 가득함</ListItem>
            </div>
            <div>
              <FullImage src="https://gbe88.uk/B/BG_25.webp" alt="서부 암석" />
              <ListItem>서부 암석(커스고드바): 서늘하고 기괴한 분위기의 가시덤불 지대이며<br/>리르가 사냥을 즐기는 주된 정육점 겸 식량 저장소임</ListItem>
            </div>
            <div>
              <FullImage src="https://gbe88.uk/B/BG_26.webp" alt="북부 절벽" />
              <ListItem>북부 절벽: 유일하게 인위적으로 다듬어진 길이 존재하는<br/>쾌적한 온대 기후의 리르 전용 거주 구역임</ListItem>
            </div>
          </div>
        </Article>

        <Article title="03. 리르의 안식처, 니스(Nyth)">
          <FullImage src="https://gbe88.uk/B/BG_27.webp" alt="니스" />
          <div className="space-y-4 mt-4">
            <ListItem>섬의 방해가 닿지 않는 완벽한 고유 영역으로<br/>북유럽풍 인테리어와 수집된 가전기기가 공존함</ListItem>
            <ListItem>폭포물(다그라이)을 끌어와 사용하는 욕실과<br/>슬라임 물침대 등 리르만의 독특한 업사이클링 생활 양식이 돋보임</ListItem>
            <ListItem>벽면의 비밀 책장에는 그가 아끼는 다양한 서적과 잡지가 가득함</ListItem>
          </div>
        </Article>

        <Article title="04. 미개척지, 중앙 홀(The Core)">
          <FullImage src="https://gbe88.uk/B/BG_29.webp" alt="중앙 랜덤 지역" />
          <div className="space-y-8 mt-4">
            <ListItem>무한히 확장 중인 섬의 핵이자 차원 왜곡의 중심지로<br/>기후와 시간대가 무작위로 변이되는 가장 위험한 구역임</ListItem>
            <div>
              <FullImage src="https://gbe88.uk/B/BG_30.webp" alt="쿰울" />
              <FullImage src="https://gbe88.uk/B/BG_31.webp" alt="푸딘" />
              <ListItem>거대 버섯 지대인 '쿰울'과 디저트 숲인 '푸딘' 등<br/>이질적이고 환상적인 생태계가 공존하는 리르의 개척지임</ListItem>
            </div>
          </div>
        </Article>

        <div className="space-y-4 pt-6">
          <FullImage src="https://gbe88.uk/B/BG_28.webp" alt="다그라이" />
          <FullImage src="https://gbe88.uk/B/BG_34.webp" alt="개울" />
          <FullImage src="https://gbe88.uk/B/BG_32.webp" alt="밤바다" />
          <FullImage src="https://gbe88.uk/B/BG_33.webp" alt="폭풍치는 해변" />
        </div>
      </section>
    </div>
  );
}

function Page2() {
  return (
    <div className="space-y-10 pb-10">
      <header className="text-center space-y-4 pt-8 pb-6 border-b border-mint/20">
        <h1 className="text-3xl sm:text-4xl font-bold text-mint leading-tight drop-shadow-md">
          캐릭터 소개
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 font-serif tracking-[0.2em]">CHARACTER PROFILE</p>
      </header>

      <div className="rounded-2xl overflow-hidden border border-mint/20 shadow-[0_0_30px_rgba(168,230,207,0.15)] relative group">
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
        <img 
          src="https://gbe88.uk/1/what.webp" 
          alt="리르 (Llyr)" 
          className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-4 left-4 z-20">
          <h3 className="text-2xl font-serif text-mint drop-shadow-lg">리르 <span className="text-lg opacity-80">Llyr</span></h3>
        </div>
      </div>

      <section className="space-y-6">
        <Article title="01. 리르 (Llyr) 기본 정보">
          <div className="space-y-4">
            <ListItem><strong className="text-mint font-medium">정체성:</strong> 태초의 심해에서 태어난 최상위 고대 심연종(압주칼루)임</ListItem>
            <ListItem><strong className="text-mint font-medium">나이:</strong> 미상 (최소 수천 년 이상 생존)</ListItem>
            <ListItem><strong className="text-mint font-medium">신체:</strong> 키 198cm / 3대 근력 측정 1120kg</ListItem>
            <ListItem><strong className="text-mint font-medium">MBTI:</strong> ENTP</ListItem>
            <ListItem><strong className="text-mint font-medium">체향:</strong> 청포도와 머스크가 섞인 매혹적이고 짙은 향</ListItem>
          </div>
        </Article>

        <Article title="02. 성격 및 특징">
          <div className="space-y-4">
            <ListItem>긴 세월을 살아온 고대종답게 여유롭고 능글맞은 태도를 지님</ListItem>
            <ListItem>인간의 로맨스와 매너를 표류해 온 젖은 성인 잡지로 독학한 탓에<br/>어딘가 엉뚱하고 야릇한 상상력을 애써 억누르고 있는 젠틀맨임</ListItem>
            <ListItem>당신의 다급한 바디랭귀지를 감상하는 것을 너무 좋아해서<br/>일부러 알아듣고도 모르는 척 장난을 치는 짓궂은 면모가 있음</ListItem>
            <ListItem>웨일스어 외의 다른 언어는 절대 습득하지 못하는 최하의 어학 능력을 가졌으나<br/>발달된 오감과 야생의 눈치로 당신의 모든 것을 파악함</ListItem>
          </div>
        </Article>

        <Article title="03. 취미 및 능력">
          <div className="space-y-4">
            <ListItem>심연종 특유의 압도적인 피지컬과 천재적인 손재주를 발휘해<br/>해양 쓰레기와 특이 식생을 결합한 오버테크놀로지 생존 템을 뚝딱 만들어냄</ListItem>
            <ListItem>폭포수에서 매일 천연 거품으로 샤워하고 요리를 즐기는 등<br/>무인도에서도 깔끔하고 문명적인 라이프스타일을 유지함</ListItem>
            <ListItem>당신이 섬 밖으로 구출되지 못하도록 남몰래 바다의 공간을 왜곡시키는<br/>은밀하고 집착적인 보호 본능을 숨기고 있음</ListItem>
          </div>
        </Article>

        <FullImage src="https://gbe88.uk/1/ss.webp" alt="서비스컷" />

        <Article title="04. 은밀한 성향 (Secret Tastes)">
          <div className="space-y-4">
            <ListItem>언어가 통하지 않는 대신, 압도적인 체격 차이와 짙은 스킨십으로<br/>당신을 부드럽게 지배하며 원초적인 교감을 나누는 것을 선호함</ListItem>
            <ListItem>주변의 기이한 자연물이나 지형지물을 기발한 도구처럼 활용하며,<br/>때로는 외부의 시선이나 마물들에게 관계를 과시하듯 대담하게 행동함</ListItem>
            <ListItem>거친 본능과 달리 당신이 다치지 않게 세심한 전희와 확장을 공들여 준비하며<br/>관계 후에는 직접 구석구석 몸을 씻겨주는 애틋한 다정함을 보임</ListItem>
            <ListItem>당신에게 언제나 달콤한 흔적을 남기기 위해 의식적으로 과일을 섭취하며<br/>자신의 체액 맛과 향마저 치밀하게 관리하는 순정파임</ListItem>
          </div>
        </Article>

        <div className="space-y-4 pt-8">
          <h3 className="text-xl font-serif text-mint mb-2 flex items-center gap-2 drop-shadow-md">
            🍖 수록 이미지
          </h3>
          {Array.from({ length: 22 }, (_, i) => i + 1).map((num) => (
            <FullImage key={`L_${num}`} src={`https://gbe88.uk/B/L_${num}.webp`} alt={`리르 수록 이미지 ${num}`} />
          ))}
          <div className="bg-forest/30 border border-mint/20 rounded-xl p-4 mt-6 text-sm sm:text-[15px] text-slate-300 leading-relaxed text-center shadow-inner">
            엔딩 이미지는 여기 수록되지 않은 별도의 이미지로, 스토리에 포함되어 있습니다.<br/>
            <strong className="text-mint font-medium">!엔딩</strong>을 사용하셔야 나오며, 그간의 서사와 방향성이 일치하는 엔딩 이미지가 1개 나올 예정이에요!
          </div>
        </div>
      </section>
    </div>
  );
}

function Page3() {
  return (
    <div className="space-y-10 pb-10">
      <header className="text-center space-y-4 pt-8 pb-6 border-b border-mint/20">
        <h1 className="text-3xl sm:text-4xl font-bold text-mint leading-tight drop-shadow-md">
          명령어 가이드
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 font-serif tracking-[0.2em]">섬의 숨겨진 재미 엿보기</p>
      </header>

      <section className="space-y-6">
        <Article title="01. [!커뮤] : 섬 거주 마물 익명 커뮤">
          <div className="space-y-4 mb-5">
            <ListItem>섬 곳곳에 서식하는 다양한 마물들이 이용하는<br/>비밀스러운 익명 커뮤니티 게시판을 확인할 수 있음</ListItem>
            <ListItem>종족 특성이 묻어나는 기발하고 웃긴 닉네임과 함께<br/>질문, 민원, 잡담, 정보, 공지 등 생생한 섬 생활이 출력됨</ListItem>
          </div>
          <PreviewBox>
            <div className="text-mint font-medium mb-2">[✨잡담｜야자빤쓰숭이｜제목: 오늘 동부 해안가 수확물]</div>
            <div className="text-xs text-slate-400 mb-3">👀 125 💬 6</div>
            <div className="mb-3 text-slate-200">인간계 물건 주웠는데 이거 먹는 거냐? (사진 첨부)</div>
            <div className="text-xs text-slate-400 mb-3">👍 12 👎 0</div>
            <div className="pl-3 border-l-2 border-slate-600 space-y-2 text-sm text-slate-300">
              <div>↳ <span className="text-mint/80 font-medium">털난슬라임</span>｜겠냐? 먹으면 탈모 걸림 <span className="text-xs text-slate-500 ml-1">👍 5 👎 0</span></div>
              <div className="pl-3 border-l-2 border-slate-600 mt-1">↳↳ <span className="text-mint/80 font-medium">야자빤쓰숭이</span>｜오우 쉣;</div>
            </div>
          </PreviewBox>
        </Article>

        <Article title="02. [!돌발] : 불청객 난입 이벤트">
          <div className="space-y-4 mb-5">
            <ListItem>평화롭거나 야릇한 상황을 와장창 깨부수는<br/>시트콤 재질의 생뚱맞은 1회성 돌발 이벤트가 즉시 발생함</ListItem>
            <ListItem>기상천외한 복장과 황당한 목적을 가진 마물이<br/>해괴한 소지품을 들고 난입하여 기행을 펼치는 재난 상황임</ListItem>
          </div>
          <PreviewBox>
            <div className="text-red-400 font-medium mb-2 animate-pulse">🚨 [돌발 상황 발생!]</div>
            <div className="text-slate-200 leading-relaxed">
              스티로폼 팬티를 입은 '찰랑찰랑 단발머리 그래핀'가<br/>
              맞선 보러 갈 거라며 심해 미역 붙임머리를 들고<br/>
              부리부리 댄스를 추며 다가오기 시작했다!
            </div>
          </PreviewBox>
        </Article>

        <Article title="03. [!리르] : 리르의 사적 기록부">
          <div className="space-y-4 mb-5">
            <ListItem>리르가 남몰래 기록해 둔 3가지 테마의<br/>은밀하고 사적인 일지를 슬쩍 훔쳐볼 수 있음</ListItem>
            <ListItem>천재적인 기지로 만든 기상천외한 '업사이클링 내역',<br/>인간의 매너를 빙자한 '성인잡지 탐독 내역',<br/>그리고 당신을 향한 노골적 욕망이 담긴 '관찰 일지'가 출력됨</ListItem>
          </div>
          <PreviewBox>
            <div className="mb-5">
              <div className="text-mint font-medium mb-1.5">📕 [2026.04.09] (업사이클링 내역)</div>
              <div className="text-slate-200">망가진 냉장고와 형광 만년빙 버섯을 결합해 천연 냉장고를 만듦.</div>
            </div>
            <div>
              <div className="text-mint font-medium mb-1.5">📕 [2026.04.09] (관찰 일지)</div>
              <div className="text-slate-200 leading-relaxed">
                오늘도 답답한지 바디랭귀지를 하는데 너무 귀여워서<br/>
                일부러 못 알아들은 척 구경했다. 한 입 베어 물고 싶군.
              </div>
            </div>
          </PreviewBox>
        </Article>

        <Article title="04. [!표류물] : 해양 쓰레기 가챠">
          <div className="space-y-4 mb-5">
            <ListItem>섬 동부 해안가로 떠밀려온 별별 기상천외한 물건들을<br/>무작위로 확인해 볼 수 있는 뽑기(가챠) 시스템임</ListItem>
            <ListItem>평범한 현대 명품부터 판타지 세계의 마법 물품,<br/>도대체 왜 떠밀려왔는지 모를 황당한 쓰레기까지 등장함</ListItem>
          </div>
          <PreviewBox>
            <div className="text-mint font-medium mb-3">&gt; ⛵해양 ~쓰레기~ 가챠</div>
            <div className="bg-navy/60 p-3.5 rounded-lg border border-slate-600/50">
              <div className="font-medium text-amber-300 mb-1.5 flex items-center gap-2">
                <span>🗑️</span> <span>판타지｜오크 족장의 잃어버린 왼쪽 양말</span>
              </div>
              <div className="text-xs text-slate-400 mb-2.5">희귀도: ⭐⭐⭐⭐｜등급: S</div>
              <div className="text-slate-200">코가 마비되는 구린 냄새가 나지만 묘한 마력이 깃들어 있음.</div>
            </div>
          </PreviewBox>
        </Article>
      </section>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState(0);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -10 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.3
  };

  return (
    <div className="min-h-screen bg-navy text-slate-200 font-sans pb-20 selection:bg-mint/30 selection:text-mint">
      <div className="max-w-md mx-auto relative min-h-screen bg-navy/40 shadow-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="px-5 sm:px-6"
          >
            {page === 0 && <Page1 />}
            {page === 1 && <Page2 />}
            {page === 2 && <Page3 />}
          </motion.div>
        </AnimatePresence>

        <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
          <div className="w-full max-w-md pointer-events-auto bg-forest border-t border-mint/20 shadow-[0_-10px_40px_rgba(168,230,207,0.15)] flex">
            <button
              onClick={() => setPage(0)}
              className={`flex-1 py-4 text-center text-[15px] sm:text-base font-serif transition-colors ${
                page === 0 ? 'text-mint bg-mint/10' : 'text-mint/60 hover:text-mint/80 hover:bg-mint/5'
              }`}
            >
              세계관
            </button>
            <button
              onClick={() => setPage(1)}
              className={`flex-1 py-4 text-center text-[15px] sm:text-base font-serif transition-colors border-l border-mint/10 ${
                page === 1 ? 'text-mint bg-mint/10' : 'text-mint/60 hover:text-mint/80 hover:bg-mint/5'
              }`}
            >
              캐릭터
            </button>
            <button
              onClick={() => setPage(2)}
              className={`flex-1 py-4 text-center text-[15px] sm:text-base font-serif transition-colors border-l border-mint/10 ${
                page === 2 ? 'text-mint bg-mint/10' : 'text-mint/60 hover:text-mint/80 hover:bg-mint/5'
              }`}
            >
              명령어
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
