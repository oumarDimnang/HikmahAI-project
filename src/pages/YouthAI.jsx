import { useState } from "react";
import { Smile, CheckCircle, XCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const YouthAI = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const questions = [
    {
      question:
        "What should you do before sharing personal information with an AI app?",
      options: [
        "Tell the app everything because it’s smart",
        "Ask a parent if it’s okay to share",
        "Share your password with the app",
      ],
      correctAnswer: 1,
      correctFeedback:
        "Awesome! You’re absolutely right! Always ask an adult before sharing personal information. You’re already a responsible AI user!",
      incorrectFeedback:
        "Oops! Remember, it’s always important to ask an adult before sharing personal details. Keep up the good work and try again!",
    },
    {
      question: "What’s a good way to use AI?",
      options: [
        "To cheat in a game",
        "To learn something new and fun",
        "To be rude to others",
      ],
      correctAnswer: 1,
      correctFeedback:
        "Great job! Using AI to learn and have fun is the best way to do it. Keep using your curiosity to discover new things!",
      incorrectFeedback:
        "Not quite! AI is a great tool for learning and fun, but we should always use it for good. Keep exploring and let’s find the right answer together!",
    },
    {
      question:
        "If an AI app asks for your name and where you live, what should you do?",
      options: [
        "Share everything with the app",
        "Ask an adult if it’s okay to share",
        "Ignore the app and close it",
      ],
      correctAnswer: 1,
      correctFeedback:
        "Fantastic! Asking an adult before sharing your information is the smartest thing you can do. You’re making wise choices!",
      incorrectFeedback:
        "Almost there! Remember, it’s always a good idea to ask a parent or adult first before sharing information with an app. You’re doing great!",
    },
    // New Question 1
    {
      question: "What is one way AI can help the environment?",
      options: [
        "By using more electricity",
        "By predicting weather patterns to help farmers",
        "By creating more plastic waste",
      ],
      correctAnswer: 1,
      correctFeedback:
        "That’s right! AI can help predict weather patterns, which helps farmers grow more food and protect the environment. Great thinking!",
      incorrectFeedback:
        "Not quite! AI can actually help the environment by predicting weather patterns and reducing waste. Keep learning!",
    },
    // New Question 2
    {
      question:
        "Why is it important to be kind when using AI to talk to others?",
      options: [
        "Because AI doesn’t care about feelings",
        "Because being kind makes the world a better place",
        "Because AI will punish you if you’re mean",
      ],
      correctAnswer: 1,
      correctFeedback:
        "Exactly! Being kind makes the world a better place, whether you’re talking to people or using AI. You’re awesome!",
      incorrectFeedback:
        "Almost! Being kind is important because it makes the world a better place, not because AI will punish you. Keep trying!",
    },
  ];

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    setIsCorrect(index === questions[currentQuestion].correctAnswer);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  const handleBackToWebsite = () => {
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-b from-blue-100 to-purple-100 min-h-screen">
      {/* Back to Website Button */}
      <button
        onClick={handleBackToWebsite}
        className="fixed top-4 left-4 p-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 flex items-center space-x-2 z-50"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-robotoMono">Back to HikmahAI</span>
      </button>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-[calc(100vh-4rem)] relative flex items-center pt-20"
      >
        <div className="mx-auto px-4">
          <div className="max-w-3xl space-y-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-barriecito text-purple-800">
              Welcome to YouthAI! 🐧
            </h1>
            <p className="text-xl text-purple-600 font-montserrat">
              Hey there, young explorers!
            </p>
            <p className="text-lg text-purple-700 font-firaCode">
              Welcome to YouthAI, a fun space where we teach you all about
              Artificial Intelligence (AI) and how to use it safely and
              responsibly! Let’s dive in and learn some cool tricks about how AI
              works while staying safe and smart.
            </p>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-robotoMono text-purple-800">
              Fun Questions for You!
            </h2>
          </div>

          {/* Question Card */}
          <div className="mt-8 bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-robotoMono text-purple-800">
              {questions[currentQuestion].question} 🐧
            </h3>
            <div className="mt-6 space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full text-left p-4 rounded-lg font-firaCode ${
                    selectedAnswer === index
                      ? isCorrect
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                      : "bg-purple-50 text-purple-700 hover:bg-purple-100"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className="mt-6">
                {isCorrect ? (
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="w-6 h-6" />
                    <p className="text-lg font-montserrat">
                      {questions[currentQuestion].correctFeedback}
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 text-red-600">
                    <XCircle className="w-6 h-6" />
                    <p className="text-lg font-montserrat">
                      {questions[currentQuestion].incorrectFeedback}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Next Question Button */}
            {showFeedback && currentQuestion < questions.length - 1 && (
              <button
                onClick={handleNextQuestion}
                className="mt-6 w-full bg-purple-600 text-white p-3 rounded-lg font-robotoMono hover:bg-purple-700"
              >
                Next Question
              </button>
            )}

            {/* Completion Message */}
            {showFeedback && currentQuestion === questions.length - 1 && (
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center space-x-2 text-purple-800">
                  <Smile className="w-8 h-8" />
                  <p className="text-2xl font-robotoMono">
                    Great job, little tech expert!
                  </p>
                </div>
                <p className="text-lg text-purple-700 font-montserrat mt-4">
                  Keep learning and have fun with AI, but always remember to
                  stay safe and kind. You’re on your way to becoming a
                  responsible AI explorer! 🚀
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default YouthAI;
