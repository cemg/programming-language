'use client'

import { useState } from 'react'
import Result from '@/components/Result'
import { questions, QuestionId } from '@/data/questions'
import { programmingLanguages } from '@/data/languages'

export default function Home() {
    const [started, setStarted] = useState(false)
    const [currentQuestionId, setCurrentQuestionId] = useState<QuestionId>('start')
    const [result, setResult] = useState<string | null>(null)
    const [history, setHistory] = useState<QuestionId[]>(['start'])

    // Toplam soru sayısını hesapla
    const totalQuestions = Object.keys(questions).length

    const handleStart = () => {
        setStarted(true)
    }

    const handleAnswer = (option: { text: string; nextId?: string; result?: string }) => {
        if (option.result) {
            setResult(option.result)
        } else if (option.nextId) {
            setCurrentQuestionId(option.nextId)
            setHistory(prev => [...prev, option.nextId!])
        }
    }

    const handleBack = () => {
        if (history.length > 1) {
            const newHistory = [...history]
            newHistory.pop()
            const previousQuestion = newHistory[newHistory.length - 1]
            setCurrentQuestionId(previousQuestion)
            setHistory(newHistory)
        } else {
            setStarted(false)
        }
    }

    if (result) {
        return <Result result={result} />
    }

    const currentQuestion = questions[currentQuestionId]

    // Hata kontrolü ekleyelim
    if (!currentQuestion) {
        return <div>Bir hata oluştu</div>
    }

    return (
        <main className="min-h-screen bg-purple-50">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">
                    Yazılım Geliştirme Alanlarını ve Programlama Dilinizi Keşfedin!
                </h1>

                {!started ? (
                    <div className="text-center mb-8">
                        <p className="text-gray-700 mb-4">
                            Bu test, size en uygun programlama dilini bulmanıza yardımcı olacak {totalQuestions} sorudan oluşmaktadır.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Vereceğiniz cevaplara göre size en uygun programlama dilini önerecektir.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Lütfen her soruyu kendi tercihlerinize göre yanıtlayın.
                        </p>
                        <button
                            onClick={handleStart}
                            className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300"
                        >
                            Teste Başla
                        </button>

                        <h2 className="text-2xl font-bold text-center text-purple-800 mt-20 mb-6">
                            Programlama Dilleri
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto">
                            {programmingLanguages.map((lang, index) => (
                                <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow">
                                    <img
                                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${lang.icon}.svg`}
                                        alt={lang.name}
                                        className="w-8 h-8"
                                    />
                                    <span className="mt-2 text-gray-700">{lang.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="max-w-2xl mx-auto">
                        <div className="mb-8">
                            <div className="flex justify-center items-center mb-4">
                                <p className="text-purple-600 font-medium text-center">
                                    {currentQuestion.text}
                                </p>
                            </div>
                            <div className="w-full bg-purple-200 rounded-full h-2.5 mt-4">
                                <div
                                    className="bg-purple-600 h-2.5 rounded-full transition-all duration-300"
                                    style={{
                                        width: `${(Object.keys(questions).indexOf(currentQuestionId) / totalQuestions) * 100}%`
                                    }}
                                ></div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {currentQuestion.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswer(option)}
                                    className="w-full p-4 text-purple-900 text-left bg-white rounded-lg shadow hover:bg-purple-50
                                                border-2 border-transparent hover:border-purple-500
                                                transition-colors duration-200 hover:shadow-md"
                                >
                                    {option.text}
                                </button>
                            ))}
                        </div>

                        {history.length > 1 && (
                            <div className="mt-6 flex gap-4">
                                <button
                                    onClick={handleBack}
                                    className="w-1/2 p-4 bg-purple-100 rounded-lg shadow hover:bg-purple-200
                                                border-2 border-transparent hover:border-purple-500
                                                transition-colors duration-200 hover:shadow-md"
                                >
                                    ← Kararım Değişti Geri Dön
                                </button>
                                <button
                                    onClick={() => {
                                        setStarted(false)
                                        setCurrentQuestionId('start')
                                        setHistory(['start'])
                                        setResult(null)
                                    }}
                                    className="w-1/2 p-4 bg-red-100 rounded-lg shadow hover:bg-red-200
                                                border-2 border-transparent hover:border-red-500
                                                transition-colors duration-200 hover:shadow-md"
                                >
                                    ← Yeniden Başla
                                </button>
                            </div>
                        )}
                    </div>
                )}

            </div>

            <footer className="text-center p-4">
                <p className="text-gray-500">
                    © {new Date().getFullYear()} Cem Gündüzoğlu (<a href="https://github.com/cemg/programming-language">Repo</a>). Generated by Cursor ❤
                </p>
            </footer>
        </main>
    )
}