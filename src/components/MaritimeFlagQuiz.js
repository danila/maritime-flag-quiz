'use client'

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'


const flags = [
  // ... (paste your flags array here)
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

  const newQuestion = () => {
    const randomFlag = flags[Math.floor(Math.random() * flags.length)];
    setCurrentFlag(randomFlag);

    const incorrectOptions = shuffleArray(flags.filter(flag => flag.meaning !== randomFlag.meaning))
      .slice(0, 3)
      .map(flag => flag.meaning);

    setOptions(shuffleArray([randomFlag.meaning, ...incorrectOptions]));
    setSelectedAnswer(null);
    setProgress(0);
  };

  const handleAnswer = (selectedMeaning) => {
    setSelectedAnswer(selectedMeaning);
    setTotalQuestions(totalQuestions + 1);
    const correct = selectedMeaning === currentFlag.meaning;

    if (correct) {
      setScore(score + 1);
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
  };

  useEffect(() => {
    newQuestion();
  }, [newQuestion]); // Add newQuestion to the dependency array

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
