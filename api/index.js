export default function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log('Visita recibida desde la IP:', ip);

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mensaje importante</title>
        <style>
            body {
                margin: 0;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #111111;
                color: #ffffff;
                font-family: Arial, sans-serif;
                text-align: center;
            }
            h1 { font-size: 4rem; padding: 20px; }
        </style>
    </head>
    <body>
        <h1>Dani eres tonto</h1>
    </body>
    </html>
  `);
}

