import nodemailer from "nodemailer";

export const sendmail = async (name, email, query) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.zoho.in",
            port: 465,
            secure: true,
            auth: {
                user: "aditya0@zohomail.in", // Club Query Zoho email
                pass: process.env
            }
        });

        const mailOptions = {
            from: "aditya0@zohomail.in",
            to: "aditya0@zohomail.in", // Club community email address
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