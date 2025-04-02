import { useState } from "react";

const quizData = [
  {
    question: "무인항공기 조종 자격은 몇 세부터 취득 가능한가?",
    options: ["13세", "14세", "16세", "18세"],
    answer: "14세",
    explanation: "무인기 조종 자격은 만 14세 이상부터 취득할 수 있습니다."
  },
  {
    question: "구름 아래에서 비행 가능한 고도는?",
    options: ["100m", "150m", "200m", "300m"],
    answer: "150m",
    explanation: "기본 비행 고도 제한은 150m입니다."
  },
  {
    question: "장거리 비행 시 주의할 점은?",
    options: ["속도 유지", "통신 거리 확인", "야간 촬영", "프로펠러 색상"],
    answer: "통신 거리 확인",
    explanation: "통신이 끊기면 제어가 불가능해집니다."
  }
];

function DroneQuiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const question = quizData[current];
  const isCorrect = selected === question.answer;

  const handleNext = () => {
    if (isCorrect) setScore(score + 1);
    if (current + 1 === quizData.length) {
      setCompleted(true);
    } else {
      setCurrent(current + 1);
      setSelected(null);
      setShowResult(false);
    }
  };

  if (completed) {
    return (
      <div style={{ padding: 20, textAlign: "center" }}>
        <h2>🎉 퀴즈 완료!</h2>
        <p>총 점수: {score} / {quizData.length}</p>
        <button onClick={() => {
          setCurrent(0);
          setSelected(null);
          setShowResult(false);
          setScore(0);
          setCompleted(false);
        }}>
          다시 풀기
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <h2>Q{current + 1}. {question.question}</h2>
      <div style={{ marginTop: 10 }}>
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(opt)}
            disabled={showResult}
            style={{
              display: "block",
              width: "100%",
              margin: "8px 0",
              padding: "10px",
              backgroundColor: selected === opt ? "#007bff" : "#f0f0f0",
              color: selected === opt ? "white" : "black",
              border: "none",
              cursor: "pointer"
            }}
          >
            {opt}
          </button>
        ))}
      </div>
      {!showResult && selected && (
        <button onClick={() => setShowResult(true)} style={{ marginTop: 10 }}>
          정답 확인
        </button>
      )}
      {showResult && (
        <div style={{ marginTop: 10 }}>
          <p style={{ color: isCorrect ? "green" : "red" }}>
            {isCorrect ? "정답입니다!" : `오답입니다. 정답: ${question.answer}`}
          </p>
          <p>해설: {question.explanation}</p>
          <button onClick={handleNext} style={{ marginTop: 10 }}>
            {current + 1 === quizData.length ? "결과 보기" : "다음 문제"}
          </button>
        </div>
      )}
    </div>
  );
}

export default DroneQuiz;
