import nodemailer from "nodemailer";

export const sendmail = async (name, email, query) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.zoho.in",
            port: 465,
            secure: true,
            auth: {
                user: process.env.SENDER_EMAIL, // Club Query Zoho email
                pass: process.env.SENDER_PASS
            }
        });

        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: process.env.RECIPIENT_EMAIL, // Club community email address
            subject: `Query from ${email}`,
            html: `Hello Support Team,<br><br>
                    Please find below a new inquiry from <br>Name: <strong>${name}</strong><br>Email: <em>${email}</em>.<br><br>
                    <strong>Query:</strong><br>
                    ${query}<br><br>
                    Kind regards,<br>
                    ${name}`
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.response);
        return { success: true, message: "Email sent successfully" };
    } catch (err) {
        console.error("Error sending email:", err.message);
        return { success: false, message: err.message };
    }
};