'use client'

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react'


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
  const [currentFlag, setCurrentFlag] = useState({});
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [progress, setProgress] = useState(0);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const newQuestion = useCallback(() => {
    const randomFlag = flags[Math.floor(Math.random() * flags.length)];
    setCurrentFlag(randomFlag);

    const incorrectOptions = shuffleArray(flags.filter(flag => flag.meaning !== randomFlag.meaning))
      .slice(0, 3)
      .map(flag => flag.meaning);

    setOptions(shuffleArray([randomFlag.meaning, ...incorrectOptions]));
    setSelectedAnswer(null);
    setProgress(0);
  }, []);

  const handleAnswer = useCallback((selectedMeaning) => {
    setSelectedAnswer(selectedMeaning);
    setTotalQuestions(prev => prev + 1);
    const correct = selectedMeaning === currentFlag.meaning;

    if (correct) {
      setScore(prev => prev + 1);
      let startTime = Date.now();
      const interval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const newProgress = Math.min((elapsedTime / 2000) * 100, 100);  // 2 seconds
        setProgress(newProgress);
        if (newProgress === 100) {
          clearInterval(interval);
          newQuestion();
        }
      }, 16);
    }
  }, [currentFlag.meaning, newQuestion]);

  useEffect(() => {
    newQuestion();
  }, [newQuestion]);

  return (
    <Card className="w-full max-w-2xl mx-auto relative">
      <CardHeader>
        <CardTitle className="text-center">Морские сигнальные флаги</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-4">
          <p className="text-2xl font-bold mb-2">Что означает этот флаг?</p>
          <Image
            src={currentFlag.url}
            alt={`${currentFlag.name} flag`}
            width={128}
            height={128}
            className="mx-auto object-contain mb-4"
          />
        </div>
        <div className="grid grid-cols-1 gap-2 mb-4">
          {options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswer(option)}
              className="w-full relative text-left h-auto py-3 px-4 whitespace-normal"
              variant="outline"
              disabled={selectedAnswer !== null}
              style={{
                backgroundColor: selectedAnswer === option
                  ? option === currentFlag.meaning
                    ? '#d1fae5' // light green for correct
                    : '#fee2e2' // light red for incorrect
                  : '',
                borderColor: selectedAnswer === option
                  ? option === currentFlag.meaning
                    ? '#34d399' // medium green for correct
                    : '#f87171' // medium red for incorrect
                  : ''
              }}
            >
              <span className="pr-6">{option}</span>
              {selectedAnswer === option && (
                option === currentFlag.meaning
                  ? <CheckCircle2 className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-600" size={20} />
                  : <XCircle className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-600" size={20} />
              )}
              {selectedAnswer !== null && option === currentFlag.meaning && selectedAnswer !== option && (
                <CheckCircle2 className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-600" size={20} />
              )}
            </Button>
          ))}
        </div>
        {selectedAnswer && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <p className="font-bold">{currentFlag.russianName} ({currentFlag.name}) - {currentFlag.letter}</p>
            {selectedAnswer !== currentFlag.meaning && (
              <p className="mt-2 text-red-600">Правильный ответ: {currentFlag.meaning}</p>
            )}
          </div>
        )}
        <div className="mt-4 text-center">
          <p>Счёт: {score} / {totalQuestions}</p>
          {selectedAnswer !== null && selectedAnswer !== currentFlag.meaning && (
            <Button onClick={newQuestion} className="mt-2 w-full">
              Следующий флаг <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '4px',
          backgroundColor: '#10B981',
          width: `${progress}%`,
          transition: 'width 0.1s linear'
        }}
      />
    </Card>
  );
};

export default MaritimeFlagQuiz;
