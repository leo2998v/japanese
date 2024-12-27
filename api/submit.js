// api/submit.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { score, level } = req.body;
    console.log('Score:', score);
    console.log('Level:', level);
    res.status(200).json({ message: 'Datos recibidos correctamente' });
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
