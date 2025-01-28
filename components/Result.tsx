'use client'

import confetti from 'canvas-confetti';
import { useEffect } from 'react';

interface ResultProps {
    result: string;
}

export default function Result({ result }: ResultProps) {
    useEffect(() => {
        // Confetti efektini sayfa yüklendiğinde tetikle
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        })
    }, [])

    return (
        <main className="min-h-screen bg-purple-50 flex items-center">
            <div className="max-w-2xl mx-auto text-center">
                <div className="bg-white rounded-lg shadow-lg p-8 relative z-20">
                    <h2 className="text-2xl font-bold text-purple-800 mb-4">
                        Size Önerilen Programlama Dili:
                    </h2>
                    <p className="text-4xl font-bold text-purple-600 mb-6">
                        <span dangerouslySetInnerHTML={{ __html: result }}></span>
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-purple-600 text-white px-6 py-2 rounded-lg
                   hover:bg-purple-700 transition-colors duration-200"
                    >
                        ← Yeniden Başla
                    </button>
                </div>
            </div>
        </main>
    )
}