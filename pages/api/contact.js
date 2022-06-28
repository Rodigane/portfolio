import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, mail, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: mail,
      to: "gellenoncourt.thibaut@gmail.com",
      subject: `Contact form from Portfolio for ${name}`,
      html: `<p> Message recieved from my portfolio </p><br>
      <p><strong>Email : </strong>${mail}</p><br>
      <p><strong>${message}</strong></p> 
      `,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ info: "Mail sent" });
};
