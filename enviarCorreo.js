
const enviarCorreo = ( parametros )=>{

    const {host, user, pass, from, to, subject, text} = parametros;

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

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            return (error.message)
        }else{
            return true
        }
    })
}

module.exports = {
    enviarCorreo
}




