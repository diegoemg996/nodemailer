const nodemailer = require("nodemailer")

const enviarCorreo = ( parametros )=>{


    const {host, user, pass, from, to, subject, text} = parametros;
    console.log(parametros);

    const transporter = nodemailer.createTransport({
        host,
        port: 587,
        secure: false,
        auth:{
            user,
            pass
        }
    })
    const mailOptions = {
        from,
        to,
        subject,
        text
    }

    transporter.sendMail(mailOptions,  async(error, info)=>{
        var res;
        if(error){
            return false
        }else{
            return true
        }
    })
}

module.exports = {
    enviarCorreo
}




