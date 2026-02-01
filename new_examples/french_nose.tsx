import React, { useState } from 'react';
import { Check, X, RefreshCw } from 'lucide-react';

const FrenchClothingPractice = () => {
  const [currentSection, setCurrentSection] = useState('vocabulary');
  const [score, setScore] = useState(0);

  const vocabulary = {
    corps: [
      { fr: "grand(e)", cz: "vysoký/á", opposite: "petit(e) (malý/á)", img: "📏" },
      { fr: "petit(e)", cz: "malý/á", opposite: "grand(e) (vysoký/á)", img: "📏" },
      { fr: "gros(se)", cz: "tlustý/á", opposite: "mince (štíhlý/á)", img: "👤" },
      { fr: "mince", cz: "štíhlý/á", opposite: "gros(se) (tlustý/á)", img: "👤" },
      { fr: "la barbe", cz: "vousy", img: "🧔" },
      { fr: "la moustache", cz: "knír", img: "👨" },
      { fr: "le nez", cz: "nos", img: "👃" }
    ],
    yeux: [
      { fr: "les yeux bleus", cz: "modré oči", color: "#3B82F6" },
      { fr: "les yeux marron", cz: "hnědé oči", color: "#92400E" },
      { fr: "les yeux noirs", cz: "černé oči", color: "#1F2937" },
      { fr: "les yeux verts", cz: "zelené oči", color: "#10B981" }
    ],
    cheveux: [
      { fr: "blancs", cz: "bílé", color: "#F3F4F6" },
      { fr: "courts", cz: "krátké", opposite: "longs (dlouhé)", img: "💇" },
      { fr: "longs", cz: "dlouhé", opposite: "courts (krátké)", img: "💇‍♀️" },
      { fr: "blonds", cz: "blond", color: "#FCD34D" },
      { fr: "frisés", cz: "kudrnaté", opposite: "raides (rovné)", img: "👨‍🦱" },
      { fr: "raides", cz: "rovné", opposite: "frisés (kudrnaté)", img: "👱" },
      { fr: "bruns", cz: "tmavé", color: "#78350F" },
      { fr: "être chauve", cz: "být plešatý/á", img: "👨‍🦲" },
      { fr: "châtains", cz: "kaštanové", color: "#92400E" },
      { fr: "gris", cz: "šedé", color: "#9CA3AF" },
      { fr: "roux", cz: "zrzavé", color: "#F97316" }
    ],
    caractere: [
      { fr: "bavard(e)", cz: "povídavý/á", img: "💬" },
      { fr: "calme", cz: "klidný/á", img: "😌" },
      { fr: "courageux (courageuse)", cz: "odvážný/á", img: "🦁" },
      { fr: "drôle", cz: "vtipný/á", img: "😄" },
      { fr: "dynamique", cz: "dynamický/á", img: "⚡" },
      { fr: "généreux (généreuse)", cz: "štědrý/á", img: "🎁" },
      { fr: "gentil (gentille)", cz: "milý/á", opposite: "méchant(e) (zlý/á)", img: "😊" },
      { fr: "méchant(e)", cz: "zlý/á", opposite: "gentil(le) (milý/á)", img: "😠" },
      { fr: "intelligent(e)", cz: "inteligentní", img: "🧠" },
      { fr: "sérieux (sérieuse)", cz: "vážný/á", img: "🤔" },
      { fr: "sociable", cz: "společenský/á", img: "👥" },
      { fr: "stressé(e)", cz: "vystresovaný/á", img: "😰" },
      { fr: "sympathique, sympa", cz: "sympatický/á", img: "😊" },
      { fr: "timide", cz: "plachý/á", img: "🙈" }
    ]
  };

  const photoExercises = [
    {
      type: "photo",
      question: "Comment est cette personne?",
      description: "Muž s vousy a tmavými vlasy",
      features: ["grand", "cheveux bruns", "barbe", "yeux marron"],
      options: [
        "Il est grand, il a les cheveux bruns et il a une barbe.",
        "Il est petit, il a les cheveux blonds et il est chauve.",
        "Il est mince, il a les cheveux roux et une moustache.",
        "Il est gros, il a les cheveux gris et les yeux bleus."
      ],
      correct: "Il est grand, il a les cheveux bruns et il a une barbe.",
      emoji: "🧔"
    },
    {
      type: "photo",
      question: "Comment est cette personne?",
      description: "Žena s dlouhými blond vlasy",
      features: ["mince", "cheveux longs et blonds", "yeux bleus"],
      options: [
        "Elle est mince, elle a les cheveux longs et blonds.",
        "Elle est grosse, elle a les cheveux courts et bruns.",
        "Elle est petite, elle a les cheveux roux et frisés.",
        "Elle est grande, elle a les cheveux noirs et raides."
      ],
      correct: "Elle est mince, elle a les cheveux longs et blonds.",
      emoji: "👱‍♀️"
    },
    {
      type: "photo",
      question: "Comment est cette personne?",
      description: "Muž s krátkými kudrnatými vlasy",
      features: ["cheveux courts et frisés", "souriant", "yeux noirs"],
      options: [
        "Il a les cheveux courts et frisés et les yeux noirs.",
        "Il est chauve et il a une barbe longue.",
        "Il a les cheveux longs et raides.",
        "Il a les cheveux blancs et une moustache."
      ],
      correct: "Il a les cheveux courts et frisés et les yeux noirs.",
      emoji: "👨‍🦱"
    },
    {
      type: "photo",
      question: "Quel est son caractère?",
      description: "Smějící se osoba",
      personality: ["drôle", "sympathique", "sociable"],
      options: [
        "Il/Elle est drôle, sympathique et sociable.",
        "Il/Elle est timide, calme et sérieux.",
        "Il/Elle est méchant, stressé et bavard.",
        "Il/Elle est généreux, courageux et intelligent."
      ],
      correct: "Il/Elle est drôle, sympathique et sociable.",
      emoji: "😄"
    },
    {
      type: "photo",
      question: "Comment est cette personne?",
      description: "Starší muž se šedivými vlasy",
      features: ["petit", "cheveux gris", "lunettes", "sympathique"],
      options: [
        "Il est petit, il a les cheveux gris et il est sympathique.",
        "Il est grand, il a les cheveux noirs et il est méchant.",
        "Il est gros, il a les cheveux roux et il est timide.",
        "Il est mince, il est chauve et il est bavard."
      ],
      correct: "Il est petit, il a les cheveux gris et il est sympathique.",
      emoji: "👴"
    }
  ];

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const generateExercises = () => {
    const exercises = [];
    
    // Shuffle options for photo exercises
    const shuffledPhotoExercises = photoExercises.map(ex => ({
      ...ex,
      options: shuffleArray(ex.options)
    }));
    exercises.push(...shuffledPhotoExercises);

    exercises.push(
      { type: "choice", question: "Qu'est-ce que c'est?", word: "vysoký", options: shuffleArray(["grand", "petit", "gros", "mince"]), correct: "grand" },
      { type: "choice", question: "Qu'est-ce que c'est?", word: "štíhlý", options: shuffleArray(["mince", "gros", "grand", "petit"]), correct: "mince" },
      { type: "choice", question: "Qu'est-ce que c'est?", word: "vousy", options: shuffleArray(["la barbe", "la moustache", "le nez", "les cheveux"]), correct: "la barbe" },
      { type: "choice", question: "Qu'est-ce que c'est?", word: "knír", options: shuffleArray(["la moustache", "la barbe", "le nez", "les yeux"]), correct: "la moustache" }
    );

    exercises.push(
      { type: "choice", question: "Qu'est-ce que c'est?", word: "kudrnaté vlasy", options: shuffleArray(["frisés", "raides", "longs", "courts"]), correct: "frisés" },
      { type: "choice", question: "Qu'est-ce que c'est?", word: "rovné vlasy", options: shuffleArray(["raides", "frisés", "longs", "courts"]), correct: "raides" },
      { type: "choice", question: "Qu'est-ce que c'est?", word: "zrzavé vlasy", options: shuffleArray(["roux", "blonds", "bruns", "châtains"]), correct: "roux" },
      { type: "choice", question: "Qu'est-ce que c'est?", word: "plešatý", options: shuffleArray(["chauve", "cheveux courts", "cheveux longs", "cheveux gris"]), correct: "chauve" }
    );

    exercises.push(
      { type: "choice", question: "Qu'est-ce que c'est?", word: "vtipný", options: shuffleArray(["drôle", "sérieux", "timide", "calme"]), correct: "drôle" },
      { type: "choice", question: "Qu'est-ce que c'est?", word: "milý", options: shuffleArray(["gentil", "méchant", "bavard", "timide"]), correct: "gentil" },
      { type: "choice", question: "Qu'est-ce que c'est?", word: "plachý", options: shuffleArray(["timide", "sociable", "bavard", "dynamique"]), correct: "timide" },
      { type: "choice", question: "Qu'est-ce que c'est?", word: "sympatický", options: shuffleArray(["sympathique", "méchant", "stressé", "timide"]), correct: "sympathique" }
    );

    exercises.push(
      { type: "color", question: "De quelle couleur sont les yeux?", color: "#3B82F6", options: shuffleArray(["bleus", "verts", "marron", "noirs"]), correct: "bleus" },
      { type: "color", question: "De quelle couleur sont les yeux?", color: "#10B981", options: shuffleArray(["verts", "bleus", "marron", "noirs"]), correct: "verts" }
    );

    exercises.push(
      { type: "write", question: "Napište ve francouzštině:", word: "vousy", correct: ["la barbe", "barbe"] },
      { type: "write", question: "Napište ve francouzštině:", word: "knír", correct: ["la moustache", "moustache"] },
      { type: "write", question: "Napište ve francouzštině:", word: "vtipný", correct: ["drôle", "drole"] },
      { type: "write", question: "Napište ve francouzštině:", word: "plachý", correct: ["timide"] }
    );

    exercises.push(
      { 
        type: "sentence-choice", 
        question: "Vyberte správný překlad:", 
        sentence: "Je vysoký a má tmavé vlasy.",
        options: shuffleArray([
          "Il est grand et il a les cheveux bruns.",
          "Il est petit et il a les cheveux blonds.",
          "Il est gros et il a les cheveux roux.",
          "Il est mince et il est chauve."
        ]),
        correct: "Il est grand et il a les cheveux bruns."
      },
      { 
        type: "sentence-choice", 
        question: "Vyberte správný překlad:", 
        sentence: "Má modré oči a blond vlasy.",
        options: shuffleArray([
          "Il/Elle a les yeux bleus et les cheveux blonds.",
          "Il/Elle a les yeux verts et les cheveux bruns.",
          "Il/Elle a les yeux marron et les cheveux noirs.",
          "Il/Elle a les yeux noirs et les cheveux roux."
        ]),
        correct: "Il/Elle a les yeux bleus et les cheveux blonds."
      }
    );

    exercises.push(
      { 
        type: "sentence-choice", 
        question: "Vyberte správný překlad:", 
        sentence: "Je vtipný a sympatický.",
        options: shuffleArray([
          "Il est drôle et sympathique.",
          "Il est timide et sérieux.",
          "Il est méchant et stressé.",
          "Il est bavard et calme."
        ]),
        correct: "Il est drôle et sympathique."
      },
      { 
        type: "sentence-choice", 
        question: "Vyberte správný překlad:", 
        sentence: "Je milá a inteligentní.",
        options: shuffleArray([
          "Elle est gentille et intelligente.",
          "Elle est méchante et timide.",
          "Elle est bavarde et stressée.",
          "Elle est calme et dynamique."
        ]),
        correct: "Elle est gentille et intelligente."
      }
    );

    exercises.push(
      { 
        type: "sentence-write", 
        question: "Přeložte do francouzštiny:", 
        sentence: "Je vysoký.",
        correct: ["il est grand", "est grand", "elle est grande", "est grande"]
      },
      { 
        type: "sentence-write", 
        question: "Přeložte do francouzštiny:", 
        sentence: "Má zrzavé vlasy.",
        correct: ["il a les cheveux roux", "elle a les cheveux roux", "a les cheveux roux"]
      }
    );

    return exercises;
  };

  const [exercises] = useState(generateExercises());
  const [currentExercise, setCurrentExercise] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [writtenAnswer, setWrittenAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState({});

  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/['']/g, "'")
      .replace(/\s+/g, " ");
  };

  const handleChoiceAnswer = (answer) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    const isCorrect = answer === exercises[currentExercise].correct;
    if (isCorrect) {
      setScore(score + 1);
    }
    setAnsweredQuestions({
      ...answeredQuestions,
      [currentExercise]: isCorrect
    });
  };

  const handleWriteAnswer = () => {
    const normalized = normalizeText(writtenAnswer);
    const correctAnswers = exercises[currentExercise].correct.map(a => normalizeText(a));
    const isCorrect = correctAnswers.some(correct => normalized === correct);
    
    setShowResult(true);
    if (isCorrect) {
      setScore(score + 1);
    }
    setAnsweredQuestions({
      ...answeredQuestions,
      [currentExercise]: isCorrect
    });
  };

  const nextExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setSelectedAnswer(null);
      setWrittenAnswer('');
      setShowResult(false);
    }
  };

  const goToExercise = (index) => {
    setCurrentExercise(index);
    setSelectedAnswer(null);
    setWrittenAnswer('');
    setShowResult(false);
  };

  const resetExercises = () => {
    setCurrentExercise(0);
    setSelectedAnswer(null);
    setWrittenAnswer('');
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions({});
  };

  const renderExercise = () => {
    const exercise = exercises[currentExercise];

    if (exercise.type === 'photo') {
      return (
        <div>
          <div className="mb-8">
            <p className="text-xl font-bold text-gray-800 mb-4">
              {exercise.question}
            </p>
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-8 mb-4">
              <div className="text-center">
                <div className="text-9xl mb-4">{exercise.emoji}</div>
                <p className="text-lg font-semibold text-gray-700">{exercise.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {exercise.features && exercise.features.map((item, idx) => (
                    <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">
                      {item}
                    </span>
                  ))}
                  {exercise.personality && exercise.personality.map((item, idx) => (
                    <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {exercise.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => !showResult && handleChoiceAnswer(option)}
                disabled={showResult}
                className={`p-4 rounded-lg font-bold text-lg transition-all text-left ${
                  !showResult
                    ? 'bg-purple-100 hover:bg-purple-200 text-purple-800'
                    : option === exercise.correct
                    ? 'bg-green-500 text-white'
                    : option === selectedAnswer
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showResult && option === exercise.correct && (
                    <Check size={24} />
                  )}
                  {showResult && option === selectedAnswer && option !== exercise.correct && (
                    <X size={24} />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (exercise.type === 'choice' || exercise.type === 'color' || exercise.type === 'sentence-choice') {
      return (
        <div>
          <div className="mb-8">
            <p className="text-xl font-bold text-gray-800 mb-4">
              {exercise.question}
            </p>
            {exercise.type === 'choice' && (
              <p className="text-3xl font-bold text-purple-600">
                {exercise.word}
              </p>
            )}
            {exercise.type === 'color' && (
              <div
                className="w-32 h-32 rounded-lg border-4 border-gray-300 mx-auto"
                style={{ backgroundColor: exercise.color }}
              />
            )}
            {exercise.type === 'sentence-choice' && (
              <p className="text-2xl font-semibold text-blue-700 bg-blue-50 p-4 rounded-lg">
                {exercise.sentence}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-3">
            {exercise.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => !showResult && handleChoiceAnswer(option)}
                disabled={showResult}
                className={`p-4 rounded-lg font-bold text-lg transition-all text-left ${
                  !showResult
                    ? 'bg-purple-100 hover:bg-purple-200 text-purple-800'
                    : option === exercise.correct
                    ? 'bg-green-500 text-white'
                    : option === selectedAnswer
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showResult && option === exercise.correct && (
                    <Check size={24} />
                  )}
                  {showResult && option === selectedAnswer && option !== exercise.correct && (
                    <X size={24} />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (exercise.type === 'write' || exercise.type === 'sentence-write') {
      const normalized = normalizeText(writtenAnswer);
      const correctAnswers = exercise.correct.map(a => normalizeText(a));
      const isCorrect = correctAnswers.some(correct => normalized === correct);

      return (
        <div>
          <div className="mb-8">
            <p className="text-xl font-bold text-gray-800 mb-4">
              {exercise.question}
            </p>
            <p className="text-3xl font-bold text-purple-600 mb-4">
              {exercise.sentence || exercise.word}
            </p>
          </div>

          <input
            type="text"
            value={writtenAnswer}
            onChange={(e) => setWrittenAnswer(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !showResult && writtenAnswer.trim() && handleWriteAnswer()}
            disabled={showResult}
            placeholder="Napište odpověď..."
            className="w-full p-4 text-lg border-2 border-purple-300 rounded-lg mb-4 focus:outline-none focus:border-purple-500"
          />

          {!showResult ? (
            <button
              onClick={handleWriteAnswer}
              disabled={!writtenAnswer.trim()}
              className="w-full py-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Zkontrolovat
            </button>
          ) : (
            <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
              <div className="flex items-center gap-2 mb-2">
                {isCorrect ? (
                  <>
                    <Check className="text-green-600" size={24} />
                    <span className="font-bold text-green-800">Správně!</span>
                  </>
                ) : (
                  <>
                    <X className="text-red-600" size={24} />
                    <span className="font-bold text-red-800">Zkuste to znovu příště</span>
                  </>
                )}
              </div>
              <p className="text-gray-700">
                <strong>Správná odpověď:</strong> {exercise.correct[0]}
              </p>
              {exercise.correct.length > 1 && (
                <p className="text-sm text-gray-600 mt-1">
                  (Další možnosti: {exercise.correct.slice(1).join(', ')})
                </p>
              )}
            </div>
          )}
        </div>
      );
    }
  };

  const usefulSentences = [
    {
      category: "Décrire l'apparence physique",
      sentences: [
        { fr: "Comment est-il/elle?", cz: "Jak vypadá?" },
        { fr: "Il est grand.", cz: "Je vysoký." },
        { fr: "Elle est petite.", cz: "Je malá." },
        { fr: "Il est mince.", cz: "Je štíhlý." },
        { fr: "Elle a les cheveux longs.", cz: "Má dlouhé vlasy." },
        { fr: "Il a les cheveux courts et bruns.", cz: "Má krátké tmavé vlasy." },
        { fr: "Elle a les yeux bleus.", cz: "Má modré oči." },
        { fr: "Il a une barbe.", cz: "Má vousy." },
        { fr: "Elle a les cheveux blonds et raides.", cz: "Má blond rovné vlasy." },
        { fr: "Il est chauve.", cz: "Je plešatý." }
      ]
    },
    {
      category: "Décrire le caractère",
      sentences: [
        { fr: "Comment est son caractère?", cz: "Jakou má povahu?" },
        { fr: "Il est sympathique.", cz: "Je sympatický." },
        { fr: "Elle est drôle.", cz: "Je vtipná." },
        { fr: "Il est très intelligent.", cz: "Je velmi inteligentní." },
        { fr: "Elle est gentille et généreuse.", cz: "Je milá a štědrá." },
        { fr: "Il est timide.", cz: "Je plachý." },
        { fr: "Elle est dynamique et sociable.", cz: "Je dynamická a společenská." },
        { fr: "Il est calme et sérieux.", cz: "Je klidný a vážný." },
        { fr: "Elle est courageuse.", cz: "Je odvážná." }
      ]
    },
    {
      category: "Décrire une personne complètement",
      sentences: [
        { fr: "Mon ami est grand, il a les cheveux bruns et il est très sympa.", cz: "Můj kamarád je vysoký, má tmavé vlasy a je velmi sympatický." },
        { fr: "Ma sœur est petite, elle a les cheveux longs et blonds, et elle est drôle.", cz: "Moje sestra je malá, má dlouhé blond vlasy a je vtipná." },
        { fr: "Mon père a les cheveux gris, une barbe, et il est très gentil.", cz: "Můj otec má šedivé vlasy, vousy a je velmi milý." },
        { fr: "Ma professeure est grande, elle a les yeux verts et elle est intelligente.", cz: "Moje učitelka je vysoká, má zelené oči a je inteligentní." }
      ]
    },
    {
      category: "Poser des questions",
      sentences: [
        { fr: "De quelle couleur sont tes yeux?", cz: "Jakou barvu mají tvoje oči?" },
        { fr: "Tu as les cheveux longs ou courts?", cz: "Máš dlouhé nebo krátké vlasy?" },
        { fr: "Il a une barbe ou une moustache?", cz: "Má vousy nebo knír?" },
        { fr: "Tu es plutôt timide ou sociable?", cz: "Jsi spíše plachý nebo společenský?" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-800 mb-2 text-center">
          🇫🇷 La description physique et le caractère
        </h1>
        <p className="text-center text-gray-600 mb-8">Fyzický popis a povahové vlastnosti ve francouzštině</p>

        <div className="flex gap-2 mb-6 flex-wrap justify-center">
          <button
            onClick={() => setCurrentSection('vocabulary')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              currentSection === 'vocabulary'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-purple-600 hover:bg-purple-100'
            }`}
          >
            📚 Slovní zásoba
          </button>
          <button
            onClick={() => setCurrentSection('exercises')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              currentSection === 'exercises'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-purple-600 hover:bg-purple-100'
            }`}
          >
            ✏️ Procvičování
          </button>
          <button
            onClick={() => setCurrentSection('sentences')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              currentSection === 'sentences'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-purple-600 hover:bg-purple-100'
            }`}
          >
            💬 Užitečné věty
          </button>
        </div>

        {currentSection === 'vocabulary' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">👤 Le corps</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {vocabulary.corps.map((item, idx) => (
                  <div key={idx} className="p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-3xl">{item.img}</span>
                      <div className="flex-1">
                        <p className="font-bold text-purple-800">{item.fr}</p>
                        <p className="text-sm text-gray-600">{item.cz}</p>
                      </div>
                    </div>
                    {item.opposite && (
                      <p className="text-xs text-purple-600 ml-12">↔️ {item.opposite}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">👁️ Les yeux</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {vocabulary.yeux.map((item, idx) => (
                  <div key={idx} className="p-3 bg-blue-50 rounded-lg flex items-center gap-3">
                    <div
                      className="w-16 h-16 rounded-full border-2 border-gray-300"
                      style={{ backgroundColor: item.color }}
                    />
                    <div>
                      <p className="font-bold text-blue-800">{item.fr}</p>
                      <p className="text-sm text-gray-600">{item.cz}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-amber-700 mb-4">💇 Les cheveux</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {vocabulary.cheveux.map((item, idx) => (
                  <div key={idx} className="p-3 bg-amber-50 rounded-lg">
                    <div className="flex items-center gap-3 mb-1">
                      {item.img && <span className="text-3xl">{item.img}</span>}
                      {item.color && (
                        <div
                          className="w-12 h-12 rounded-full border-2 border-gray-300"
                          style={{ backgroundColor: item.color }}
                        />
                      )}
                      <div className="flex-1">
                        <p className="font-bold text-amber-800">{item.fr}</p>
                        <p className="text-sm text-gray-600">{item.cz}</p>
                      </div>
                    </div>
                    {item.opposite && (
                      <p className="text-xs text-amber-600 ml-12">↔️ {item.opposite}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-pink-700 mb-4">😊 Le caractère</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {vocabulary.caractere.map((item, idx) => (
                  <div key={idx} className="p-3 bg-pink-50 rounded-lg">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-3xl">{item.img}</span>
                      <div className="flex-1">
                        <p className="font-bold text-pink-800">{item.fr}</p>
                        <p className="text-sm text-gray-600">{item.cz}</p>
                      </div>
                    </div>
                    {item.opposite && (
                      <p className="text-xs text-pink-600 ml-12">↔️ {item.opposite}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentSection === 'exercises' && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-gray-600">Otázka {currentExercise + 1} z {exercises.length}</p>
                <p className="text-lg font-bold text-purple-700">Skóre: {score}/{exercises.length}</p>
              </div>
              <button
                onClick={resetExercises}
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
              >
                <RefreshCw size={20} />
                Restartovat
              </button>
            </div>

            {/* Navigační lišta s čísly otázek */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-3 font-medium">Přejít na otázku:</p>
              <div className="flex flex-wrap gap-2">
                {exercises.map((_, idx) => {
                  const isAnswered = answeredQuestions.hasOwnProperty(idx);
                  const isCorrect = answeredQuestions[idx];
                  const isCurrent = idx === currentExercise;
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => goToExercise(idx)}
                      className={`w-10 h-10 rounded-lg font-bold transition-all ${
                        isCurrent
                          ? 'bg-purple-600 text-white ring-2 ring-purple-300 scale-110'
                          : isAnswered
                          ? isCorrect
                            ? 'bg-green-500 text-white hover:bg-green-600'
                            : 'bg-red-500 text-white hover:bg-red-600'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

            </div>

            {currentExercise < exercises.length ? (
              <>
                {renderExercise()}
                
                {showResult && (
                  <button
                    onClick={nextExercise}
                    className="w-full mt-4 py-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition-colors"
                  >
                    {currentExercise < exercises.length - 1 ? 'Další otázka →' : 'Dokončit'}
                  </button>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-3xl font-bold text-purple-700 mb-2">Výborně!</h2>
                <p className="text-xl text-gray-600 mb-6">
                  Vaše skóre: {score}/{exercises.length} ({Math.round((score/exercises.length) * 100)}%)
                </p>
                <button
                  onClick={resetExercises}
                  className="px-8 py-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition-colors"
                >
                  Zkusit znovu
                </button>
              </div>
            )}
          </div>
        )}

        {currentSection === 'sentences' && (
          <div className="space-y-6">
            {usefulSentences.map((section, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-purple-700 mb-4">{section.category}</h2>
                <div className="space-y-3">
                  {section.sentences.map((sentence, sIdx) => (
                    <div key={sIdx} className="p-4 bg-purple-50 rounded-lg">
                      <p className="font-bold text-purple-800 mb-1">{sentence.fr}</p>
                      <p className="text-gray-600">{sentence.cz}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FrenchClothingPractice;