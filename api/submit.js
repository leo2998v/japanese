export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Obtener datos enviados desde el frontend
    const { score, level, userAnswer, correctAnswer } = req.body;

    // Aquí puedes manejar los datos como quieras (por ejemplo, guardarlos en una base de datos)
    console.log(`Puntaje: ${score}, Nivel: ${level}, Respuesta escrita: ${userAnswer}, Respuesta correcta: ${correctAnswer}`);

    // Responder con un mensaje de éxito
    res.status(200).json({ message: 'Datos recibidos correctamente' });
  } else {
    // Si no es una solicitud POST
    res.status(405).json({ message: 'Método no permitido' });
  }
}
