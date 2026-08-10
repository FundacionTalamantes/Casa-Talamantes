module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { nombre, apellido, email, tipo, mensaje } = req.body || {};

  const emailValid = typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!nombre || !apellido || !emailValid || !tipo || !mensaje || mensaje.length < 10) {
    res.status(400).json({ error: 'Datos inválidos' });
    return;
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Casa Talamantes <onboarding@resend.dev>',
        to: ['info@javierfranciscomaynez.org'],
        reply_to: email,
        subject: `Nuevo mensaje de contacto — ${tipo}`,
        text: `Nombre: ${nombre} ${apellido}\nCorreo: ${email}\nTipo de colaboración: ${tipo}\n\nMensaje:\n${mensaje}`,
      }),
    });

    if (!response.ok) {
      throw new Error(await response.text());
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(502).json({ error: 'No se pudo enviar el correo' });
  }
};
