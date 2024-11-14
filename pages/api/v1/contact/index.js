import { sendmail } from "./nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { name, email, message } = req.body;

            if (!name || !email || !message) {
                return res
                    .status(400)
                    .json({ message: "All fields are required" });
            }

            console.log("Received contact form data:", {
                name,
                email,
                message
            });

            const emailResponse = await sendmail(name, email, message);

            if (emailResponse.success) {
                return res.status(200).json({ message: emailResponse.message });
            } else {
                return res.status(500).json({ message: emailResponse.message });
            }
        } catch (error) {
            console.error("Error processing request:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
