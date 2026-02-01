import React, { useState } from 'react';
import { BookOpen, Brain, CheckCircle, XCircle, Award, ArrowRight, Home } from 'lucide-react';

const RomantismusApp = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const sections = [
    { id: 'home', title: 'Úvod', icon: Home },
    { id: 'charakteristika', title: 'Charakteristika romantismu', icon: BookOpen },
    { id: 'autori-cesko', title: 'Čeští autoři', icon: BookOpen },
    { id: 'autori-svetovi', title: 'Světoví autoři', icon: BookOpen },
    { id: 'dila', title: 'Klíčová díla', icon: BookOpen },
    { id: 'kviz', title: 'Testovací kvíz', icon: Brain },
  ];

  const quizQuestions = [
    {
      id: 1,
      question: "V jakém období se romantismus rozvíjel?",
      options: [
        "Konec 17. a začátek 18. století",
        "Konec 18. a začátek 19. století",
        "Polovina 19. století",
        "Konec 19. století"
      ],
      correct: 1
    },
    {
      id: 2,
      question: "Co je typickým tématem romantismu?",
      options: [
        "Racionalismus a věda",
        "Cit, příroda a individualismus",
        "Společenská kritika realismu",
        "Historická fakta"
      ],
      correct: 1
    },
    {
      id: 3,
      question: "Kdo napsal Máj?",
      options: [
        "Karel Havlíček Borovský",
        "Božena Němcová",
        "Karel Hynek Mácha",
        "Josef Kajetán Tyl"
      ],
      correct: 2
    },
    {
      id: 4,
      question: "Jaký je hlavní hrdina Máje?",
      options: [
        "Jarmil",
        "Vilém",
        "Hynek",
        "Karel"
      ],
      correct: 1
    },
    {
      id: 5,
      question: "Kdo napsal Kytici?",
      options: [
        "Karel Jaromír Erben",
        "Božena Němcová",
        "Karel Hynek Mácha",
        "Alois Jirásek"
      ],
      correct: 0
    },
    {
      id: 6,
      question: "Jaký žánr představuje Kytice?",
      options: [
        "Román",
        "Drama",
        "Sbírka balad",
        "Povídky"
      ],
      correct: 2
    },
    {
      id: 7,
      question: "Kdo napsal Babičku?",
      options: [
        "Karel Jaromír Erben",
        "Božena Němcová",
        "Karel Hynek Mácha",
        "Karolína Světlá"
      ],
      correct: 1
    },
    {
      id: 8,
      question: "Co je byronic hero?",
      options: [
        "Tradiční kladný hrdina",
        "Rebel s tajemnou minulostí a vnitřními konflikty",
        "Komický charakter",
        "Historická postava"
      ],
      correct: 1
    },
    {
      id: 9,
      question: "Kdo napsal Frankenstein?",
      options: [
        "Mary Shelley",
        "Lord Byron",
        "Victor Hugo",
        "Edgar Allan Poe"
      ],
      correct: 0
    },
    {
      id: 10,
      question: "Co charakterizuje poetismus v českém romantismu?",
      options: [
        "Důraz na vědu",
        "Politickou angažovanost",
        "Lyričnost a emotivnost",
        "Satirický humor"
      ],
      correct: 2
    },
    {
      id: 11,
      question: "Kolik zpěvů má báseň Máj?",
      options: [
        "2 zpěvy",
        "3 zpěvy",
        "4 zpěvy + 2 intermezza",
        "5 zpěvů"
      ],
      correct: 2
    },
    {
      id: 12,
      question: "Kdo je Jarmila v Máji?",
      options: [
        "Vilémova sestra",
        "Vilémova milá, kterou svedl jeho otec",
        "Vilémova matka",
        "Dcera popravčího"
      ],
      correct: 1
    },
    {
      id: 13,
      question: "Kde se odehrává děj Babičky?",
      options: [
        "V Praze",
        "V Ratibořicích",
        "V Litoměřicích",
        "Na Slovensku"
      ],
      correct: 1
    },
    {
      id: 14,
      question: "Která postava v Babičce pomátne se rozumem?",
      options: [
        "Babička Magdaléna",
        "Paní kněžna",
        "Viktorka",
        "Hortensie"
      ],
      correct: 2
    },
    {
      id: 15,
      question: "V jaké baladě z Kytice se objevuje vodník?",
      options: [
        "Polednice",
        "Vodník",
        "Holoubek",
        "Vrba"
      ],
      correct: 1
    },
    {
      id: 16,
      question: "Co se stane v baladě Polednice?",
      options: [
        "Dítě se ztratí v lese",
        "Matka vyhrožuje dítěti polednicí a dítě zemře",
        "Polednice unese matku",
        "Dítě se stane polednicí"
      ],
      correct: 1
    },
    {
      id: 17,
      question: "Kdo napsal Fidlovačku s písní Kde domov můj?",
      options: [
        "Karel Hynek Mácha",
        "Josef Kajetán Tyl",
        "Karel Jaromír Erben",
        "Božena Němcová"
      ],
      correct: 1
    },
    {
      id: 18,
      question: "Který autor je představitelem anglického romantismu a vytvořil byronského hrdinu?",
      options: [
        "Edgar Allan Poe",
        "Victor Hugo",
        "Lord Byron",
        "Johann Wolfgang Goethe"
      ],
      correct: 2
    },
    {
      id: 19,
      question: "Jaké dílo napsal Victor Hugo o zvoníkovi Quasimodovi?",
      options: [
        "Bídníci",
        "Chrám Matky Boží v Paříži",
        "Cromwell",
        "Hernani"
      ],
      correct: 1
    },
    {
      id: 20,
      question: "Kdo napsal báseň Havran (The Raven)?",
      options: [
        "Edgar Allan Poe",
        "Lord Byron",
        "Mary Shelley",
        "Victor Hugo"
      ],
      correct: 0
    },
    {
      id: 21,
      question: "Co je balada?",
      options: [
        "Čistě lyrický žánr",
        "Pouze epický žánr s dějem",
        "Lyricko-epický žánr (má děj i city)",
        "Dramatický žánr"
      ],
      correct: 2
    },
    {
      id: 22,
      question: "Kdy Karel Hynek Mácha zemřel?",
      options: [
        "Ve 25 letech v roce 1836",
        "Ve 30 letech v roce 1840",
        "Ve 40 letech v roce 1850",
        "Ve 20 letech v roce 1830"
      ],
      correct: 0
    },
    {
      id: 23,
      question: "Co symbolizuje máj v Máchově básni?",
      options: [
        "Pouze radost a lásku",
        "Pouze smrt a smutek",
        "Paradox - měsíc zrodu, lásky i smrti",
        "Jaro a probouzení přírody"
      ],
      correct: 2
    },
    {
      id: 24,
      question: "Kolik balad obsahuje Kytice?",
      options: [
        "10 balad",
        "12 balad",
        "13 balad",
        "15 balad"
      ],
      correct: 2
    },
    {
      id: 25,
      question: "V baladě Holoubek se objevuje motiv:",
      options: [
        "Nevěrnosti a trestu",
        "Otravy manžela a jeho pomsty",
        "Nešťastné lásky",
        "Prokletí"
      ],
      correct: 1
    },
    {
      id: 26,
      question: "Které vlastní jméno měla Božena Němcová?",
      options: [
        "Barbora Panklová",
        "Magdaléna Nováková",
        "Božena Panklová",
        "Barbora Němcová"
      ],
      correct: 0
    },
    {
      id: 27,
      question: "Jaký byl osud Viktorky v Babičce?",
      options: [
        "Šťastně se vdala",
        "Odešla do kláštera",
        "Svedl ji důstojník, pomátla se a žije v lese",
        "Zemřela na nemoc"
      ],
      correct: 2
    },
    {
      id: 28,
      question: "Kdo napsal Pan Tadeáš?",
      options: [
        "Johann Wolfgang Goethe",
        "Adam Mickiewicz",
        "Victor Hugo",
        "Lord Byron"
      ],
      correct: 1
    },
    {
      id: 29,
      question: "Co je charakteristické pro romantického hrdinu?",
      options: [
        "Je spokojený se svým životem",
        "Je v konfliktu se společností, citlivý, melancholický",
        "Je racionální a praktický",
        "Je průměrný a konformní"
      ],
      correct: 1
    },
    {
      id: 30,
      question: "Jaká báseň začína slovy 'Byl pozdní večer - první máj'?",
      options: [
        "Kytice",
        "Marinka",
        "Máj",
        "Cikáni"
      ],
      correct: 2
    },
    {
      id: 31,
      question: "Co je společného pro všechny balady v Kytici?",
      options: [
        "Všechny mají šťastný konec",
        "Trest za přestupek a nadpřirozené motivy",
        "Pojednávají o lásce",
        "Odehrávají se ve městě"
      ],
      correct: 1
    },
    {
      id: 32,
      question: "Kdo je autorem Utrpení mladého Werthera?",
      options: [
        "Victor Hugo",
        "Lord Byron",
        "Johann Wolfgang Goethe",
        "Edgar Allan Poe"
      ],
      correct: 2
    },
    {
      id: 33,
      question: "V baladě Zlatý kolovrat je příběh:",
      options: [
        "Čistě tragický bez šťastného konce",
        "Pohádkový, kde dobro nakonec zvítězí",
        "O vodníkovi",
        "O neposlušném dítěti"
      ],
      correct: 1
    },
    {
      id: 34,
      question: "Jaký vztah má romantismus k osvícenství?",
      options: [
        "Je jeho pokračováním",
        "Je reakcí proti němu, cit nad rozumem",
        "Je totožný s osvícenstvím",
        "Nemá s ním žádnou souvislost"
      ],
      correct: 1
    },
    {
      id: 35,
      question: "Která z těchto postav NENÍ z Babičky?",
      options: [
        "Viktorka",
        "Paní kněžna",
        "Vilém",
        "Babička Magdaléna"
      ],
      correct: 2
    }
  ];

  const handleQuizAnswer = (questionId, answerIndex) => {
    setQuizAnswers({...quizAnswers, [questionId]: answerIndex});
  };

  const submitQuiz = () => {
    let correctCount = 0;
    quizQuestions.forEach(q => {
      if (quizAnswers[q.id] === q.correct) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setQuizSubmitted(true);
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setScore(0);
  };

  const renderHome = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Romantismus - Kompletní příprava na test</h1>
        <p className="text-xl">Vítej v interaktivním studijním nástroji pro přípravu na test z romantismu!</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-purple-200">
          <h3 className="text-xl font-bold mb-3 text-purple-700">📚 Co se naučíš:</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Charakteristické rysy romantismu</li>
            <li>✓ Důležité české i světové autory</li>
            <li>✓ Klíčová literární díla a jejich rozbor</li>
            <li>✓ Historický kontext a vliv na literaturu</li>
            <li>✓ Romantické motivy a témata</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-pink-200">
          <h3 className="text-xl font-bold mb-3 text-pink-700">🎯 Jak používat:</h3>
          <ol className="space-y-2 text-gray-700">
            <li>1. Projdi si teorii v jednotlivých sekcích</li>
            <li>2. Zaměř se na klíčové autory a díla</li>
            <li>3. Otestuj své znalosti v kvízu</li>
            <li>4. Opakuj dokud nebudeš mít plný počet bodů</li>
            <li>5. Používej jako rychlou referenci před testem</li>
          </ol>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
        <h3 className="font-bold text-yellow-800 mb-2">💡 Tip na přípravu:</h3>
        <p className="text-yellow-700">Nejprve si přečti všechny sekce s teorií. Pak si udělej kvíz a zjisti, kde máš mezery. Vrať se k těm částem, kde jsi měl chyby, a kvíz opakuj!</p>
      </div>
    </div>
  );

  const renderCharakteristika = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-purple-700 mb-4">Charakteristika romantismu</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-3 text-purple-600">Základní informace</h3>
        <div className="space-y-3 text-gray-700">
          <p><strong>Časové období:</strong> Konec 18. století - polovina 19. století (u nás zhruba 1820-1850)</p>
          <p><strong>Původ názvu:</strong> Z francouzského "roman" (román) nebo "romantique" (romantický, citový)</p>
          <p><strong>Kontext:</strong> Reakce na osvícenství a racionalismus, vliv Francouzské revoluce a napoleonských válek</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-3 text-purple-600">Hlavní rysy romantismu</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-purple-50 p-4 rounded">
            <h4 className="font-bold text-purple-700 mb-2">🎭 Témata a motivy:</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Cit nad rozumem</li>
              <li>• Individuální prožitek</li>
              <li>• Vztah člověka a přírody</li>
              <li>• Láska (často nešťastná)</li>
              <li>• Touha po svobodě</li>
              <li>• Tajemno, mystika</li>
              <li>• Národní obrození</li>
            </ul>
          </div>
          
          <div className="bg-pink-50 p-4 rounded">
            <h4 className="font-bold text-pink-700 mb-2">✍️ Literární prostředky:</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Emotivní jazyk</li>
              <li>• Metafory a přirovnání</li>
              <li>• Personifikace přírody</li>
              <li>• Symbolismus</li>
              <li>• Gradace</li>
              <li>• Kontrasty (světlo-tma)</li>
              <li>• Expresivní vyjádření</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-3 text-purple-600">Romantický hrdina</h3>
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded">
          <p className="text-gray-700 mb-2"><strong>Typické charakteristiky:</strong></p>
          <ul className="space-y-1 text-gray-700 ml-4">
            <li>• Výjimečná, silná osobnost</li>
            <li>• V konfliktu se společností</li>
            <li>• Citlivý, melancholický</li>
            <li>• Toužící po absolutnu</li>
            <li>• Často nešťastně zamilovaný</li>
            <li>• Rebelující proti normám</li>
            <li>• Tajemná minulost</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-3 text-purple-600">Žánry romantismu</h3>
        <div className="space-y-3">
          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-bold text-purple-700">Poezie</h4>
            <p className="text-gray-700">Lyrika, epická poezie, balada (děj + lyrika)</p>
          </div>
          <div className="border-l-4 border-pink-500 pl-4">
            <h4 className="font-bold text-pink-700">Próza</h4>
            <p className="text-gray-700">Historický román, povídka, básnická próza</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-bold text-purple-700">Drama</h4>
            <p className="text-gray-700">Romantické drama, historické drama</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAutoriCesko = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-purple-700 mb-4">Čeští romantičtí autoři</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-3 text-purple-600">Karel Hynek Mácha (1810-1836)</h3>
        <div className="space-y-3 text-gray-700">
          <p><strong>Život:</strong> Nejvýznamnější český romantický básník. Studoval práva, zemřel mladý (25 let) v Litoměřicích.</p>
          <p><strong>Tvorba:</strong></p>
          <ul className="ml-6 space-y-2">
            <li><strong>Máj (1836):</strong> Lyricko-epická báseň, vrchol české romantické poezie
              <ul className="ml-4 mt-1 text-sm">
                <li>- 4 zpěvy + 2 intermezza</li>
                <li>- Hlavní hrdina: Vilém (loupežník odsouzený k smrti)</li>
                <li>- Zabil otce, aniž to věděl</li>
                <li>- Nešťastná láska k Jarmile</li>
                <li>- Kontrasty: krásná příroda vs. tragický osud</li>
                <li>- Symbolika: máj jako čas zrození i smrti</li>
              </ul>
            </li>
            <li><strong>Marinka:</strong> Povídka v próze</li>
            <li><strong>Cikáni:</strong> Poema o svobodném životě</li>
            <li><strong>Deník:</strong> Osobní záznamy a filozofické úvahy</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-3 text-purple-600">Karel Jaromír Erben (1811-1870)</h3>
        <div className="space-y-3 text-gray-700">
          <p><strong>Život:</strong> Sběratel lidové slovesnosti, archivář, historik. Připravoval sbírky českých pohádek a legend.</p>
          <p><strong>Kytice (1853):</strong> Sbírka 13 balad inspirovaných lidovou slovesností</p>
          <div className="bg-purple-50 p-4 rounded mt-2">
            <p className="font-bold mb-2">Hlavní balady z Kytice:</p>
            <ul className="space-y-2 ml-4">
              <li><strong>Kytice:</strong> Úvodní báseň</li>
              <li><strong>Poklad:</strong> Lakota a její důsledky</li>
              <li><strong>Svatební košile:</strong> Mrtvý milý přichází pro dívku</li>
              <li><strong>Polednice:</strong> Matka vyhrožuje dítěti polednicí</li>
              <li><strong>Zlatý kolovrat:</strong> Pohádkový příběh o zlu a dobru</li>
              <li><strong>Štědrý den:</strong> Věštění budoucnosti</li>
              <li><strong>Holoubek:</strong> Otrava manžela a jeho pomsta</li>
              <li><strong>Záhořovo lože:</strong> Nevěrnost a trest</li>
              <li><strong>Vodník:</strong> Vodník bere dívku za ženu</li>
              <li><strong>Vrba:</strong> Pomsta zavražděné dívky</li>
              <li><strong>Lilie:</strong> Neposlušnost a trest</li>
              <li><strong>Dceřina kletba:</strong> Matka prokleje dceru</li>
            </ul>
          </div>
          <p><strong>Typické rysy:</strong> Nadpřirozené bytosti, trest za přestupky, lidová moudrost, balada jako žánr (děj + lyrika)</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-3 text-purple-600">Božena Němcová (1820-1862)</h3>
        <div className="space-y-3 text-gray-700">
          <p><strong>Život:</strong> Vlastním jménem Barbora Panklová. Měla nešťastné manželství, žila v bídě, často se stěhovala.</p>
          <p><strong>Tvorba:</strong></p>
          <ul className="ml-6 space-y-2">
            <li><strong>Babička (1855):</strong> Vzpomínkový román z dětství
              <ul className="ml-4 mt-1 text-sm">
                <li>- Idealizovaný obraz venkova a dětství</li>
                <li>- Hlavní postava: babička Magdaléna</li>
                <li>- Prostředí: Ratibořice (statek Starých pánů)</li>
                <li>- Témata: vztah generací, tradiční hodnoty, příroda</li>
                <li>- Postavy: Viktorka (nešťastná láska), paní kněžna</li>
              </ul>
            </li>
            <li><strong>Divá Bára:</strong> Povídka o svobodomyslné dívce</li>
            <li><strong>Národní báchorky a pověsti:</strong> Sbírka pohádek</li>
            <li><strong>V zámku a podzámčí:</strong> Pověsti ze Slovenska</li>
            <li><strong>Obrazy z okolí domažlického:</strong> Povídky</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-3 text-purple-600">Josef Kajetán Tyl (1808-1856)</h3>
        <div className="space-y-3 text-gray-700">
          <p><strong>Život:</strong> Dramatik, herec, divadelní režisér. Zakladatel českého národního divadla.</p>
          <p><strong>Hlavní díla:</strong></p>
          <ul className="ml-6 space-y-2">
            <li><strong>Fidlovačka aneb Žádný hněv a žádná rvačka:</strong> Veselohra, obsahuje píseň "Kde domov můj"</li>
            <li><strong>Strakonický dudák:</strong> Drama o prostém muzikantovi</li>
            <li><strong>Paličova dcera:</strong> Drama o sociální nespravedlnosti</li>
            <li><strong>Jiříkovo vidění:</strong> Pohádkové drama</li>
          </ul>
          <p><strong>Význam:</strong> Rozvoj českého divadla, vlastenecké motivy</p>
        </div>
      </div>
    </div>
  );

  const renderAutoriSvetovi = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-purple-700 mb-4">Světoví romantičtí autoři</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-3 text-purple-600">Lord Byron (1788-1824) - Anglie</h3>
        <div className="space-y-3 text-gray-700">
          <p><strong>Život:</strong> George Gordon Byron, anglický básník a bojovník za svobodu. Zemřel v Řecku při boji za nezávislost.</p>
          <p><strong>Tvorba:</strong></p>
          <ul className="ml-6 space-y-2">
            <li><strong>Childe Haroldova pouť:</strong> Autobiografická lyricko-epická báseň</li>
            <li><strong>Don Juan:</strong> Satirická epická báseň</li>
            <li><strong>Manfréd:</strong> Filozofické drama</li>
          </ul>
          <p><strong>Byronic hero (byronský hrdina):</strong> Rebel, tajemná minulost, vnitřní konflikty, výjimečná osobnost v rozporu se společností - typ romantického hrdiny, který inspiroval mnoho dalších autorů včetně Máchy.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-3 text-purple-600">Victor Hugo (1802-1885) - Francie</h3>
        <div className="space-y-3 text-gray-700">
          <p><strong>Život:</strong> Francouzský romanopisec, dramatik a básník. Politicky angažovaný, vedl odpor proti Napoleonu III.</p>
          <p><strong>Hlavní díla:</strong></p>
          <ul className="ml-6 space-y-2">
            <li><strong>Chrám Matky Boží v Paříži (Zvoník u Matky Boží):</strong> Román o znetvořeném zvoníkovi Quasimodovi a krásné Esmeraldě</li>
            <li><strong>Bídníci:</strong> Monumentální román o sociální nespravedlnosti (Jean Valjean)</li>
            <li><strong>Cromwell:</strong> Drama s důležitým předmluvou o romantismu</li>
          </ul>
          <p><strong>Témata:</strong> Sociální problémy, humanismus, kontrast krásy a ošklivosti</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-3 text-purple-600">Edgar Allan Poe (1809-1849) - USA</h3>
        <div className="space-y-3 text-gray-700">
          <p><strong>Život:</strong> Americký básník a prozaik, mistr hororové povídky. Měl tragický život, zemřel za nevyjasněných okolností.</p>
          <p><strong>Hlavní díla:</strong></p>
          <ul className="ml-6 space-y-2">
            <li><strong>Havran (The Raven):</strong> Slavná báseň o ztrátě a smutku</li>
            <li><strong>Jáma a kyvadlo:</strong> Hororová povídka</li>
            <li><strong>Zánik domu Usherů:</strong> Gotická povídka</li>
            <li><strong>Černý kocour:</strong> Psychologická hororová povídka</li>
            <li><strong>Vraždy v ulici Morgue:</strong> Detektivní povídka (zakladatel žánru)</li>
          </ul>
          <p><strong>Styl:</strong> Temná atmosféra, psychologické napětí, symboly smrti</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-3 text-purple-600">Mary Shelley (1797-1851) - Anglie</h3>
        <div className="space-y-3 text-gray-700">
          <p><strong>Život:</strong> Anglická spisovatelka, manželka básníka Percy Bysshe Shelleyho.</p>
          <p><strong>Frankenstein aneb Moderní Prométheus (1818):</strong></p>
          <ul className="ml-6 space-y-1">
            <li>- Gotický román o vědci, který vytvoří umělou bytost</li>
            <li>- Témata: hranice vědy, odpovědnost tvůrce, osamělost</li>
            <li>- Kritika bezbřehého pokroku</li>
            <li>- Jeden z prvních sci-fi románů</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-3 text-purple-600">Johann Wolfgang Goethe (1749-1832) - Německo</h3>
        <div className="space-y-3 text-gray-700">
          <p><strong>Život:</strong> Německý básník, dramatik, prozaik, vědec. Představitel Výmarského klasicismu (přechod mezi osvícenstvím a romantismem).</p>
          <p><strong>Hlavní díla:</strong></p>
          <ul className="ml-6 space-y-2">
            <li><strong>Utrpení mladého Werthera:</strong> Román v dopisech o nešťastné lásce končící sebevraždou</li>
            <li><strong>Faust:</strong> Dramatická báseň o učenci, který prodá duši ďáblu (Mefistofelovi) za poznání a mládí</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-3 text-purple-600">Adam Mickiewicz (1798-1855) - Polsko</h3>
        <div className="space-y-3 text-gray-700">
          <p><strong>Život:</strong> Polský básník, vůdce polského národního obrození.</p>
          <p><strong>Hlavní díla:</strong></p>
          <ul className="ml-6 space-y-2">
            <li><strong>Pan Tadeáš:</strong> Národní epos v verších</li>
            <li><strong>Konrád Wallenrod:</strong> Historická povídka v verších</li>
            <li><strong>Balady a romance:</strong> Sbírka poezie</li>
          </ul>
          <p><strong>Význam:</strong> Vliv na české národní obrození, inspirace pro Máchu</p>
        </div>
      </div>
    </div>
  );

  const renderDila = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-purple-700 mb-4">Klíčová díla - podrobný rozbor</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
        <h3 className="text-2xl font-bold mb-3 text-purple-600">Máj - Karel Hynek Mácha (1836)</h3>
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded">
            <h4 className="font-bold text-purple-700 mb-2">Základní informace:</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• <strong>Žánr:</strong> Lyricko-epická báseň (kombinace děje a citů)</li>
              <li>• <strong>Literární druh:</strong> Poezie</li>
              <li>• <strong>Forma:</strong> Verš</li>
              <li>• <strong>Složení:</strong> 4 zpěvy (První máj, Druhý, Třetí, Čtvrtý) + 2 intermezza</li>
            </ul>
          </div>

          <div className="bg-pink-50 p-4 rounded">
            <h4 className="font-bold text-pink-700 mb-2">Děj:</h4>
            <p className="text-gray-700 mb-2"><strong>1. zpěv:</strong> Popis krásného máje. Vilém, loupežník odsouzený k smrti, přemýšlí ve vězení o svém životě.</p>
            <p className="text-gray-700 mb-2"><strong>Intermezzo I:</strong> Lyrický popis jezera.</p>
            <p className="text-gray-700 mb-2"><strong>2. zpěv:</strong> Vilém zjišťuje, že zabil vlastního otce, který svedl jeho milou Jarmilu.</p>
            <p className="text-gray-700 mb-2"><strong>Intermezzo II:</strong> Básníkova úvaha o čase a pomíjivosti.</p>
            <p className="text-gray-700 mb-2"><strong>3. zpěv:</strong> Poprava Viléma, smrt Jarmily (skočila do jezera).</p>
            <p className="text-gray-700"><strong>4. zpěv:</strong> Po letech básník navštěvuje místo děje, přemýšlí o minulosti.</p>
          </div>

          <div className="bg-purple-50 p-4 rounded">
            <h4 className="font-bold text-purple-700 mb-2">Postavy:</h4>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Vilém:</strong> Romantický hrdina, loupežník, citlivá duše v konfliktu s osudem. Nešťastně zamilovaný, tragický hrdina.</li>
              <li><strong>Jarmila:</strong> Vilémova milá, svedena a opuštěna jeho otcem, zemře sebevraždou.</li>
              <li><strong>Básník:</strong> Vypravěč, později návštěvník místa tragédie.</li>
            </ul>
          </div>

          <div className="bg-pink-50 p-4 rounded">
            <h4 className="font-bold text-pink-700 mb-2">Témata a motivy:</h4>
            <ul className="space-y-1 text-gray-700 ml-4">
              <li>• Láska (nešťastná, zrazená)</li>
              <li>• Smrt a pomíjivost</li>
              <li>• Osud a vina</li>
              <li>• Příroda jako kontrast k lidskému neštěstí</li>
              <li>• Konflikt individua se společností</li>
              <li>• Romantický hrdina jako oběť okolností</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded">
            <h4 className="font-bold text-purple-700 mb-2">Symbolika:</h4>
            <ul className="space-y-1 text-gray-700 ml-4">
              <li>• <strong>Máj:</strong> Měsíc zrodu, lásky, ale i smrti (paradox)</li>
              <li>• <strong>Jezero:</strong> Hloubka, tajemství, smrt</li>
              <li>• <strong>Popraviště:</strong> Místo trestu, konec života</li>
              <li>• <strong>Kontrast:</strong> Krásná příroda vs. lidské utrpení</li>
            </ul>
          </div>

          <div className="bg-pink-50 p-4 rounded">
            <h4 className="font-bold text-pink-700 mb-2">Jazyk a styl:</h4>
            <ul className="space-y-1 text-gray-700 ml-4">
              <li>• Bohatá metaforika</li>
              <li>• Personifikace přírody</li>
              <li>• Kontrasty (světlo-tma, radost-smutek)</li>
              <li>• Zvukomalba</li>
              <li>• Emotivní vyjádření</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
            <h4 className="font-bold text-yellow-800 mb-2">💡 Důležité citáty k zapamatování:</h4>
            <p className="text-gray-700 italic">"Byl pozdní večer - první máj - / Večerní máj - byl lásky čas."</p>
            <p className="text-gray-700 italic mt-2">"Hyne samota i sláva, / Věků pomíjí čas."</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-pink-500">
        <h3 className="text-2xl font-bold mb-3 text-pink-600">Kytice - Karel Jaromír Erben (1853)</h3>
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded">
            <h4 className="font-bold text-purple-700 mb-2">Základní informace:</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• <strong>Žánr:</strong> Sbírka balad</li>
              <li>• <strong>Balada:</strong> Lyricko-epický žánr (má děj i city)</li>
              <li>• <strong>Inspirace:</strong> Lidová slovesnost, pověsti, pohádky</li>
              <li>• <strong>Počet balad:</strong> 13 (původně 12, později přidána Věštkyně)</li>
            </ul>
          </div>

          <div className="bg-pink-50 p-4 rounded">
            <h4 className="font-bold text-pink-700 mb-2">Společné rysy balad:</h4>
            <ul className="space-y-1 text-gray-700 ml-4">
              <li>• Nadpřirozené bytosti (vodník, polednice, mrtvý milý)</li>
              <li>• Trest za přestupek (neposlušnost, lakotu, nevěru)</li>
              <li>• Tragický konec</li>
              <li>• Lidová moudrost</li>
              <li>• Refrénovitost (opakování veršů)</li>
              <li>• Symbolika (květiny, přírodní živly)</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded">
            <h4 className="font-bold text-purple-700 mb-2">Vybrané balady - stručný obsah:</h4>
            
            <div className="space-y-3 mt-3">
              <div className="border-l-4 border-purple-400 pl-3">
                <p className="font-bold text-purple-700">Poklad</p>
                <p className="text-gray-700 text-sm">Lakotná žena zabije manžela kvůli pokladu. Duchy ji pronásledují, umírá v šílenství.</p>
              </div>

              <div className="border-l-4 border-pink-400 pl-3">
                <p className="font-bold text-pink-700">Svatební košile</p>
                <p className="text-gray-700 text-sm">Dívka prosí Pannu Marii o návrat milého. Ten se vrátí, ale jako mrtvý. Zachrání ji až modlitba.</p>
              </div>

              <div className="border-l-4 border-purple-400 pl-3">
                <p className="font-bold text-purple-700">Polednice</p>
                <p className="text-gray-700 text-sm">Matka vyhrožuje neposlušnému dítěti polednicí. Ta skutečně přijde a dítě zemře.</p>
              </div>

              <div className="border-l-4 border-pink-400 pl-3">
                <p className="font-bold text-pink-700">Zlatý kolovrat</p>
                <p className="text-gray-700 text-sm">Pohádkový příběh. Zlá macecha zabije dívku, její místo zaujme nevlastní sestra. Dobro nakonec zvítězí.</p>
              </div>

              <div className="border-l-4 border-purple-400 pl-3">
                <p className="font-bold text-purple-700">Štědrý den</p>
                <p className="text-gray-700 text-sm">Dívky věští budoucnost. Marie vidí hrob - zemře do roka.</p>
              </div>

              <div className="border-l-4 border-pink-400 pl-3">
                <p className="font-bold text-pink-700">Holoubek</p>
                <p className="text-gray-700 text-sm">Žena otrávila manžela. Jeho duch se mění v holoubka a vede k odhalení pravdy.</p>
              </div>

              <div className="border-l-4 border-purple-400 pl-3">
                <p className="font-bold text-purple-700">Vodník</p>
                <p className="text-gray-700 text-sm">Vodník si bere ženu, ta touží po návštěvě matky. Vodník ji pustí, ale nechá si dítě. Když se nevrátí včas, dítě zabije.</p>
              </div>

              <div className="border-l-4 border-pink-400 pl-3">
                <p className="font-bold text-pink-700">Vrba</p>
                <p className="text-gray-700 text-sm">Macecha zabije nevlastní dceru. Z jejího hrobu vyroste vrba, která prozradí pravdu.</p>
              </div>

              <div className="border-l-4 border-purple-400 pl-3">
                <p className="font-bold text-purple-700">Dceřina kletba</p>
                <p className="text-gray-700 text-sm">Dcera prokleje matku, zemře. Po smrti jí duchy nedají klidu, dokud matka kletbu neodvolá.</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
            <h4 className="font-bold text-yellow-800 mb-2">💡 Tip na zapamatování:</h4>
            <p className="text-gray-700">V Erbenovských baladách téměř vždy platí: přestupek (hřích) = trest (smrt nebo neštěstí). Postavy jsou trestány za lakotu, nevěru, neposlušnost nebo ublížení nevinným.</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
        <h3 className="text-2xl font-bold mb-3 text-purple-600">Babička - Božena Němcová (1855)</h3>
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded">
            <h4 className="font-bold text-purple-700 mb-2">Základní informace:</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• <strong>Žánr:</strong> Vzpomínkový (autobiografický) román</li>
              <li>• <strong>Literární druh:</strong> Epika (próza)</li>
              <li>• <strong>Prostředí:</strong> Ratibořice (východní Čechy), statek Starých pánů</li>
              <li>• <strong>Časové období:</strong> První polovina 19. století</li>
            </ul>
          </div>

          <div className="bg-pink-50 p-4 rounded">
            <h4 className="font-bold text-pink-700 mb-2">Hlavní postavy:</h4>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Babička (Magdaléna):</strong> Moudrá, laskavá, znalá lidové medicíny. Pomáhá všem v okolí, reprezentuje tradiční hodnoty.</li>
              <li><strong>Paní kněžna:</strong> Majitelka panství, vzdělaná a laskavá aristokratka.</li>
              <li><strong>Viktorka:</strong> Nešťastně zamilovaná dívka, kterou svedl důstojník. Pomátne se rozumem, žije v lese.</li>
              <li><strong>Děti:</strong> Četníci (vypravěčka), Adélka, Jan, Vilém - vnuci babičky</li>
              <li><strong>Hortensie:</strong> Dcera babičky, matka dětí</li>
              <li><strong>Prosper:</strong> Syn babičky</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded">
            <h4 className="font-bold text-purple-700 mb-2">Děj:</h4>
            <p className="text-gray-700">Příběh vypráví o životě na venkově očima dětí, zejména vnučky. Babička přijíždí na statek, aby pomohla dceři s výchovou dětí. Děti prožívají šťastné dětství plné her, objevování přírody a učení se lidové moudrosti. Kniha zachycuje běžný venkovský život, svátky, obyčeje i tragické osudy (Viktorka). Babička je moudrá, laskavá a respektovaná postavou, která pomáhá všem v okolí.</p>
          </div>

          <div className="bg-pink-50 p-4 rounded">
            <h4 className="font-bold text-pink-700 mb-2">Témata:</h4>
            <ul className="space-y-1 text-gray-700 ml-4">
              <li>• Idealizace dětství a venkova</li>
              <li>• Vztah generací</li>
              <li>• Tradiční hodnoty a lidová moudrost</li>
              <li>• Harmonie člověka s přírodou</li>
              <li>• Sociální rozdíly (šlechta vs. lid)</li>
              <li>• Nešťastná láska (Viktorka)</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded">
            <h4 className="font-bold text-purple-700 mb-2">Styl a jazyk:</h4>
            <ul className="space-y-1 text-gray-700 ml-4">
              <li>• Vzpomínková vypravěčská forma</li>
              <li>• Idealizovaný pohled na minulost</li>
              <li>• Poetický jazyk s nářečními prvky</li>
              <li>• Detailní popisy přírody a prostředí</li>
              <li>• Používání lidových přísloví a rčení</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
            <h4 className="font-bold text-yellow-800 mb-2">💡 Důležité:</h4>
            <p className="text-gray-700">Babička je jedním z nejčtenějších českých románů. Představuje ideální obraz venkova a dětství, který kontrastuje s Němcové vlastním obtížným životem. Je to příklad romantické idealizace minulosti.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderKviz = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-purple-700 mb-4">Testovací kvíz</h2>
      
      {!quizSubmitted ? (
        <>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Otestuj své znalosti!</h3>
            <p>Odpověz na 35 otázek a zjisti, jak dobře jsi připraven/a na test. Kvíz pokrývá všechny oblasti romantismu.</p>
          </div>

          {quizQuestions.map((q, index) => (
            <div key={q.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="font-bold text-lg mb-3 text-purple-700">
                {index + 1}. {q.question}
              </h4>
              <div className="space-y-2">
                {q.options.map((option, optIndex) => (
                  <label
                    key={optIndex}
                    className={`flex items-center p-3 rounded cursor-pointer transition-all ${
                      quizAnswers[q.id] === optIndex
                        ? 'bg-purple-100 border-2 border-purple-500'
                        : 'bg-gray-50 border-2 border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      checked={quizAnswers[q.id] === optIndex}
                      onChange={() => handleQuizAnswer(q.id, optIndex)}
                      className="mr-3"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          <button
            onClick={submitQuiz}
            disabled={Object.keys(quizAnswers).length !== quizQuestions.length}
            className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
              Object.keys(quizAnswers).length === quizQuestions.length
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {Object.keys(quizAnswers).length === quizQuestions.length
              ? 'Odeslat kvíz'
              : `Odpověz na všechny otázky (${Object.keys(quizAnswers).length}/${quizQuestions.length})`}
          </button>
        </>
      ) : (
        <>
          <div className={`p-8 rounded-lg ${
            score >= 30 ? 'bg-green-100 border-4 border-green-500' :
            score >= 25 ? 'bg-yellow-100 border-4 border-yellow-500' :
            score >= 20 ? 'bg-orange-100 border-4 border-orange-500' :
            'bg-red-100 border-4 border-red-500'
          }`}>
            <div className="text-center">
              <Award className={`mx-auto mb-4 ${
                score >= 30 ? 'text-green-600' :
                score >= 25 ? 'text-yellow-600' :
                score >= 20 ? 'text-orange-600' :
                'text-red-600'
              }`} size={64} />
              <h3 className="text-3xl font-bold mb-2">
                Tvé skóre: {score}/35
              </h3>
              <p className="text-xl mb-4">
                {score === 35 && '🎉 Perfektní! Jsi naprosto připraven/a na výbornou!'}
                {score >= 32 && score < 35 && '🌟 Excelentní! Máš výborné znalosti!'}
                {score >= 30 && score < 32 && '👍 Výborně! Jen pár drobných chybiček.'}
                {score >= 25 && score < 30 && '✅ Velmi dobře! Ještě si zopakuj některé části.'}
                {score >= 20 && score < 25 && '📖 Dobré! Potřebuješ si zpevnit znalosti v některých oblastech.'}
                {score < 20 && '📚 Potřebuješ více přípravy. Vrať se důkladně k teorii a zkus to znovu!'}
              </p>
              <div className="text-lg font-semibold">
                Úspěšnost: {Math.round((score / 35) * 100)}%
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-purple-700">Vyhodnocení odpovědí:</h3>
            {quizQuestions.map((q, index) => {
              const isCorrect = quizAnswers[q.id] === q.correct;
              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-lg border-2 ${
                    isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {isCorrect ? (
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                    ) : (
                      <XCircle className="text-red-600 flex-shrink-0 mt-1" size={24} />
                    )}
                    <div className="flex-1">
                      <h4 className="font-bold mb-2">
                        {index + 1}. {q.question}
                      </h4>
                      {!isCorrect && (
                        <>
                          <p className="text-red-700 mb-1">
                            <strong>Tvoje odpověď:</strong> {q.options[quizAnswers[q.id]]}
                          </p>
                          <p className="text-green-700">
                            <strong>Správná odpověď:</strong> {q.options[q.correct]}
                          </p>
                        </>
                      )}
                      {isCorrect && (
                        <p className="text-green-700">
                          <strong>Správně!</strong> {q.options[q.correct]}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={resetQuiz}
            className="w-full py-4 rounded-lg font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all"
          >
            Zkusit kvíz znovu
          </button>
        </>
      )}
    </div>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'home': return renderHome();
      case 'charakteristika': return renderCharakteristika();
      case 'autori-cesko': return renderAutoriCesko();
      case 'autori-svetovi': return renderAutoriSvetovi();
      case 'dila': return renderDila();
      case 'kviz': return renderKviz();
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-700 to-pink-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">📚 Romantismus - Příprava na test</h1>
          <p className="text-purple-100 mt-1">Kompletní studijní materiály pro 2. ročník</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-3">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon size={18} />
                  {section.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {renderContent()}
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-purple-700 to-pink-700 text-white mt-12">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-purple-100">Hodně štěstí na testu! 🍀</p>
          <p className="text-sm text-purple-200 mt-2">Připraveno speciálně pro tebe</p>
        </div>
      </div>
    </div>
  );
};

export default RomantismusApp;