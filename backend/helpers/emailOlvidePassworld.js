import nodemailer from "nodemailer";

const emailOlvidePassword = async (datos) => {
    var transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });
    const { nombre, token, email } = datos;
    const infoRegistro = await transport.sendMail({
        from: "Administrador de Gastos",
        to: email,
        subject: "Restablece tu password",
        text: "Restablece tu password",
        html: `<p>Hola ${nombre}, has solicitado restablecer tu password Administrador de Gastos</p>
            <p>Haz click en el siguiente enlace para restablecer tu password:
            <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer Password</a> </p>
            <p>Si tú no has creado esta cuenta puedes ignorar el mensaje </p>
        `
    })
    console.log("Mensaje enviado: %s", infoRegistro.messageId);
}

export default emailOlvidePassword;
