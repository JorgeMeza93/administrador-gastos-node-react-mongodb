import nodemailer from "nodemailer";

const emailRegistro = async (datos) => {
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
        subject: "Comprueba tu cuenta en Administrador de Gastos",
        text: "Comprueba tu cuenta",
        html: `<p>Hola ${nombre}, comprueba tu cuenta en Administrador de Gastos</p>
            <p>Tu cuenta ya está lista sólo haz clicke en el siguiente enlace: 
            <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar cuenta</a> </p>
            <p>Si tú no has creado esta cuenta puedes ignorar el mensaje </p>
        `
    })
    console.log("Mensaje enviado: %s", infoRegistro.messageId);
}

export default emailRegistro;
