const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/enviar-correo', (req, res) => {
  const { nombre, correo, telefono, maquinaria, poblacion, fecha, dias, comentarios } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'contacto@ferrimas2.com', // Cambia esto con tu correo electrónico
      pass: 'FerriMas2!', // Cambia esto con tu contraseña
    },
  });

  const mailOptions = {
    from: 'tucorreo@gmail.com',
    to: 'contacto@ferrimas2.com',
    subject: 'Nuevo formulario de contacto',
    text: `
      Nombre o Empresa: ${nombre}
      Correo Electrónico: ${correo}
      Teléfono: ${telefono}
      Maquinaria: ${maquinaria}
      Población: ${poblacion}
      Fecha de alquiler: ${fecha}
      Días de alquiler: ${dias}
      Comentarios: ${comentarios}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error al enviar el correo');
    } else {
      console.log('Correo enviado: ' + info.response);
      res.status(200).send('Correo enviado con éxito');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
