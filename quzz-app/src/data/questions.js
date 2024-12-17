// JSON directo en el código
export const quizData = {
    "quiz": [
      {
        "question": "¿Cuál es la capital de Francia?",
        "options": ["Berlín", "Madrid", "París", "Lisboa"],
        "correctAnswer": "París"
      },
      {
        "question": "¿Qué lenguaje de programación se utiliza principalmente en desarrollo web?",
        "options": ["Python", "C++", "JavaScript", "Java"],
        "correctAnswer": "JavaScript"
      },
      {
        "question": "¿Quién pintó la Mona Lisa?",
        "options": [
          "Vincent van Gogh",
          "Leonardo da Vinci",
          "Pablo Picasso",
          "Claude Monet"
        ],
        "correctAnswer": "Leonardo da Vinci"
      },
      {
        "question": "¿Cuál es el río más largo del mundo?",
        "options": ["Amazonas", "Nilo", "Misisipi", "Yangtsé"],
        "correctAnswer": "Amazonas"
      },
      {
        "question": "¿Cuál es el resultado de 15 ÷ 3?",
        "options": ["3", "5", "6", "8"],
        "correctAnswer": "5"
      },
      {
        "question": "¿En qué año llegó el hombre a la luna por primera vez?",
        "options": ["1965", "1969", "1972", "1975"],
        "correctAnswer": "1969"
      },
      {
        "question": "¿Qué elemento químico tiene el símbolo 'O'?",
        "options": ["Oro", "Osmio", "Oxígeno", "Olmo"],
        "correctAnswer": "Oxígeno"
      },
      {
        "question": "¿Quién escribió la obra 'Hamlet'?",
        "options": ["Miguel de Cervantes", "William Shakespeare", "Homero", "Dante Alighieri"],
        "correctAnswer": "William Shakespeare"
      },
      {
        "question": "¿Cuál es el océano más grande del mundo?",
        "options": ["Atlántico", "Índico", "Pacífico", "Ártico"],
        "correctAnswer": "Pacífico"
      },
      {
        "question": "¿Cuál es el país con mayor población en el mundo?",
        "options": ["Estados Unidos", "India", "China", "Rusia"],
        "correctAnswer": "China"
      }
    ]
  };
  
  // Acceder a las preguntas y opciones
  quizData.quiz.forEach((item, index) => {
    console.log(`Pregunta ${index + 1}: ${item.question}`);
    item.options.forEach((option, i) => {
      console.log(`${i + 1}. ${option}`);
    });
    console.log(`Respuesta correcta: ${item.correctAnswer}\n`);
  });
  