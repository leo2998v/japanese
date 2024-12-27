// Este archivo es una función serverless en Vercel que recibe una solicitud POST
// y verifica si la respuesta del usuario es correcta.

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Extraer los datos enviados en el cuerpo de la solicitud
    const { character, userAnswer } = req.body;

    // Respuestas correctas para algunos caracteres (puedes agregar más aquí)
    const correctAnswers = {
      "あ": "a",
      "い": "i",
      "う": "u",
      "え": "e",
      "お": "o",
      "か": "ka",
      "き": "ki",
      "く": "ku",
      "け": "ke",
      "こ": "ko",
      "さ": "sa",
      "し": "shi",
      "す": "su",
      "せ": "se",
      "そ": "so",
      "た": "ta",
      "ち": "chi",
      "つ": "tsu",
      "て": "te",
      "と": "to",
      "な": "na",
      "に": "ni",
      "ぬ": "nu",
      "ね": "ne",
      "の": "no",
      "は": "ha",
      "ひ": "hi",
      "ふ": "fu",
      "へ": "he",
      "ほ": "ho",
      "ま": "ma",
      "み": "mi",
      "む": "mu",
      "め": "me",
      "も": "mo",
      "や": "ya",
      "ゆ": "yu",
      "よ": "yo",
      "ら": "ra",
      "り": "ri",
      "る": "ru",
      "れ": "re",
      "ろ": "ro",
      "わ": "wa",
      "を": "wo",
      "ん": "n",
      // Agrega más caracteres si es necesario...
    };

    // Verificar si la respuesta del usuario es correcta
    const correct = correctAnswers[character] === userAnswer.toLowerCase();

    // Enviar la respuesta al cliente con el resultado de la comprobación
    res.status(200).json({ correct });
  } else {
    // Si no es una solicitud POST, devolver un error 405
    res.status(405).json({ message: 'Método no permitido' });
  }
}
