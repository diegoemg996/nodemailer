const express = require("express");
const { enviarCorreo } = require("./enviarCorreo");

const app = express();

app.use(express.json());

 

app.post("/send-email",  (req,res)=>{

    

     const enviado = enviarCorreo(req.body)

    
    /*const transporter = nodemailer.createTransport({
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
            res.status(500).send(error.message)
        }else{
            console.log("Email enviado")
            res.status(200).json({status: true})
        }
    }) */
})



app.listen(3000, ()=>{
    console.log("Servidor corriendo")
})