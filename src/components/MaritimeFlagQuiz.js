'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle, Loader2, RefreshCw, ArrowRight } from 'lucide-react'

const flags = [
  { letter: '~', name: 'Code Pennant', russianName: 'Вымпел', url: 'flags/~_Code_Pennant.svg', meaning: 'Вымпел свода и ответный вымпел' },
  { letter: 'A', name: 'Alpha', russianName: 'Алфа', url: 'flags/A_Alpha.svg', meaning: '«У меня спущен водолаз: держитесь в стороне от меня и следуйте малым ходом»' },
  { letter: 'B', name: 'Bravo', russianName: 'Браво', url: 'flags/B_Bravo.svg', meaning: '«Я загружаюсь или разгружаюсь, или имею на борту опасный груз»' },
  { letter: 'C', name: 'Charlie', russianName: 'Чарли', url: 'flags/C_Charlie.svg', meaning: '«Положительный ответ. Значение предыдущей группы должно читаться в утвердительной форме» (утвердительный).' },
  { letter: 'D', name: 'Delta', russianName: 'Дэлта', url: 'flags/D_Delta.svg', meaning: '«Держитесь в стороне от меня: я управляюсь с трудом»' },
  { letter: 'E', name: 'Echo', russianName: 'Эхо', url: 'flags/E_Echo.svg', meaning: '«Я изменяю свой курс вправо»' },
  { letter: 'F', name: 'Foxtrot', russianName: 'Фокстрот', url: 'flags/F_Foxtrot.svg', meaning: '«Я не управляюсь; держите связь со мной»' },
  { letter: 'G', name: 'Golf', russianName: 'Голф', url: 'flags/G_Golf.svg', meaning: '«Мне нужен лоцман». Для рыболовных судов, работающих в непосредственной близости друг от друга: «Я выбираю сети»' },
  { letter: 'H', name: 'Hotel', russianName: 'Отель', url: 'flags/H_Hotel.svg', meaning: '«У меня на борту лоцман»' },
  { letter: 'I', name: 'India', russianName: 'Индия', url: 'flags/I_India.svg', meaning: '«Я изменяю свой курс влево»' },
  { letter: 'J', name: 'Juliet', russianName: 'Джулет', url: 'flags/J_Juliet.svg', meaning: '«У меня пожар и я имею на борту опасный груз: держитесь в стороне от меня»' },
  { letter: 'K', name: 'Kilo', russianName: 'Кило', url: 'flags/K_Kilo.svg', meaning: '«Я хочу связаться с вами».' },
  { letter: 'L', name: 'Lima', russianName: 'Лима', url: 'flags/L_Lima.svg', meaning: 'В море: «Немедленно остановитесь» или «застопорить ход». В порту: «Карантин»' },
  { letter: 'M', name: 'Mike', russianName: 'Майк', url: 'flags/M_Mike.svg', meaning: '«Моё судно остановлено и не имеет хода относительно воды»' },
  { letter: 'N', name: 'November', russianName: 'Новембр', url: 'flags/N_November.svg', meaning: '«Отрицательный ответ. Значение предыдущей группы должно читаться в отрицательной форме» (отрицательный)' },
  { letter: 'O', name: 'Oscar', russianName: 'Оскар', url: 'flags/O_Oscar.svg', meaning: '«Человек за бортом!»' },
  { letter: 'P', name: 'Papa', russianName: 'Папа', url: 'flags/P_Papa.svg', meaning: 'В гавани: «Судно собирается в море: всем доложить о прибытии». Для рыболовных судов: «Мои сети зацепились за препятствие»' },
  { letter: 'Q', name: 'Quebec', russianName: 'Квебек', url: 'flags/Q_Quebec.svg', meaning: '«Моё судно незараженное, прошу предоставить мне свободную практику»' },
  { letter: 'R', name: 'Romeo', russianName: 'Ромео', url: 'flags/R_Romeo.svg', meaning: 'Флаг не имеет определённого значения.' },
  { letter: 'S', name: 'Sierra', russianName: 'Сьера', url: 'flags/S_Sierra.svg', meaning: '«Мои двигатели работают на задний ход»' },
  { letter: 'T', name: 'Tango', russianName: 'Танго', url: 'flags/T_Tango.svg', meaning: '«Держитесь в стороне от меня; я произвожу парное траление».' },
  { letter: 'U', name: 'Uniform', russianName: 'Юниформ', url: 'flags/U_Uniform.svg', meaning: '«Вы идёте к опасности»' },
  { letter: 'V', name: 'Victor', russianName: 'Виктор', url: 'flags/V_Victor.svg', meaning: '«Мне необходима помощь»' },
  { letter: 'W', name: 'Whiskey', russianName: 'Виски', url: 'flags/W_Whiskey.svg', meaning: '«Мне необходима медицинская помощь»' },
  { letter: 'X', name: 'X-Ray', russianName: 'Эксрэй', url: 'flags/X_X-Ray.svg', meaning: '«Приостановите выполнение ваших намерений и наблюдайте за моими сигналами»' },
  { letter: 'Y', name: 'Yankee', russianName: 'Янкии', url: 'flags/Y_Yankee.svg', meaning: '«Меня дрейфует на якоре» / «Я выбираю якорь»' },
  { letter: 'Z', name: 'Zulu', russianName: 'Зулу', url: 'flags/Z_Zulu.svg', meaning: '«Мне нужен буксир». Для рыболовных судов: «Вымётываю сети»' },
];

const MaritimeFlagQuiz = () => {
  const [currentFlag, setCurrentFlag] = useState(null);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [guessedFlags, setGuessedFlags] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [quizState, setQuizState] = useState('unanswered'); // 'unanswered', 'correct', 'incorrect'
  const [progressValue, setProgressValue] = useState(0);
  const timerRef = useRef(null);
  const guessedFlagsRef = useRef(guessedFlags);

  useEffect(() => {
    guessedFlagsRef.current = guessedFlags;
  }, [guessedFlags]);

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const getNewQuestion = useCallback(() => {
    setImageLoaded(false);
    setSelectedAnswer(null);
    setQuizState('unanswered');
    setProgressValue(0);

    let availableFlags = flags.filter(flag => !guessedFlagsRef.current.includes(flag.letter));
    if (availableFlags.length === 0) {
      availableFlags = flags;
      setGuessedFlags([]);
    }

    const newFlag = availableFlags[Math.floor(Math.random() * availableFlags.length)];
    setCurrentFlag(newFlag);

    const incorrectOptions = shuffleArray(flags.filter(flag => flag.letter !== newFlag.letter))
      .slice(0, 3)
      .map(flag => ({ letter: flag.letter, name: flag.name, russianName: flag.russianName, meaning: flag.meaning }));

    setOptions(shuffleArray([
      { letter: newFlag.letter, name: newFlag.name, russianName: newFlag.russianName, meaning: newFlag.meaning },
      ...incorrectOptions
    ]));
  }, []);

  const handleAnswer = (selectedOption) => {
    if (quizState !== 'unanswered') return;

    setSelectedAnswer(selectedOption);
    setTotalQuestions(prev => prev + 1);

    if (selectedOption.letter === currentFlag.letter) {
      setScore(prev => prev + 1);
      setGuessedFlags(prev => [...prev, currentFlag.letter]);
      setQuizState('correct');
      startProgressBar();
    } else {
      setQuizState('incorrect');
    }
  };

  const startProgressBar = () => {
    setProgressValue(0);
    const interval = 33.33; // Update roughly 30 times per second
    const increment = (100 / (2000 / interval)); // 100% over 3 seconds

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setProgressValue(prevProgress => {
        const newProgress = prevProgress + increment;

        if (newProgress >= 100) {
          clearInterval(timerRef.current);
          getNewQuestion();
          return 100;
        } else {
          return newProgress;
        }
      });
    }, interval);
  };

  const handleNextQuestion = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    getNewQuestion();
  };

  const resetQuiz = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setScore(0);
    setTotalQuestions(0);
    setGuessedFlags([]);
    getNewQuestion();
  };

  useEffect(() => {
    getNewQuestion();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  if (!currentFlag) return null;

  return (
    <Card className="w-full max-w-2xl mx-auto relative overflow-hidden border border-gray-200">
      <CardHeader className="bg-gray-100 border-b border-gray-200 p-4">
        <CardTitle className="text-center text-2xl font-bold text-gray-800">Морские сигнальные флаги</CardTitle>
      </CardHeader>
      <CardContent className="p-4 bg-white">
        <div className="text-center mb-6">
          <p className="text-xl font-semibold mb-4 text-gray-700">Что означает этот флаг?</p>
          <div className="relative" style={{ height: '300px', width: '100%', maxWidth: '450px', margin: '0 auto' }}>
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="w-12 h-12 animate-spin text-gray-500" />
              </div>
            )}
            <Image
              src={currentFlag.url}
              alt={`${currentFlag.name} flag`}
              fill
              className={`object-contain transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ border: '1px solid rgb(6, 69, 173)' }}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(true)}
              priority
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 mb-6">
          {options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswer(option)}
              className={`w-full relative text-left h-auto py-4 px-6 text-sm font-medium transition-all border ${
                quizState !== 'unanswered'
                  ? option.letter === currentFlag.letter
                    ? 'bg-green-50 text-green-800 border-green-200'
                    : option === selectedAnswer
                    ? 'bg-red-50 text-red-800 border-red-200'
                    : 'bg-gray-50 text-gray-800 border-gray-200'
                  : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-50'
              }`}
              disabled={quizState !== 'unanswered'}
            >
              <div className="pr-8 flex flex-col items-start w-full">
                <span className="font-bold text-left">{option.letter} {option.name}</span>
                <span className="text-xs mt-1 text-left break-words w-full whitespace-normal">{option.meaning}</span>
              </div>
              {quizState !== 'unanswered' && (
                option.letter === currentFlag.letter
                  ? <CheckCircle2 className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-600" size={24} />
                  : option === selectedAnswer
                  ? <XCircle className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-600" size={24} />
                  : null
              )}
            </Button>
          ))}
        </div>
        {quizState !== 'unanswered' && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200">
            <p className="font-bold text-gray-800">{currentFlag.russianName} ({currentFlag.name}) - {currentFlag.letter}</p>
            <p className="mt-2 text-gray-700">{currentFlag.meaning}</p>
          </div>
        )}
        {quizState === 'correct' && (
          <div className="mt-4">
            <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-100 ease-linear"
                style={{ width: `${progressValue}%` }}
              ></div>
            </div>
          </div>
        )}
        {quizState === 'incorrect' && (
          <div className="mt-4 flex justify-center">
            <Button onClick={handleNextQuestion} className="bg-blue-500 text-white">
              Next Flag <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
        <div className="mt-6 flex justify-between items-center">
          <p className="text-lg font-semibold text-gray-800">Счёт: {score} / {totalQuestions}</p>
          <p className="text-lg font-semibold text-gray-800">Угадано флагов: {guessedFlags.length} / {flags.length}</p>
          <Button onClick={resetQuiz} className="bg-blue-500 text-white">
            <RefreshCw className="mr-2 h-4 w-4" /> Restart Quiz
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MaritimeFlagQuiz;
