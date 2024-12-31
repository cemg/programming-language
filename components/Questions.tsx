interface QuestionProps {
    currentQuestion: {
        question: string
        options: string[]
    }
    onAnswer: (answer: string) => void
}

export default function Questions({ currentQuestion, onAnswer }: QuestionProps) {
    return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    {currentQuestion.question}
                </h2>
                <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => onAnswer(option)}
                            className="w-full text-left px-4 py-3 rounded-lg bg-purple-100 
                       hover:bg-purple-200 transition-colors duration-200
                       text-purple-900 font-medium"
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
} 