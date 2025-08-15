import { sendmail } from "./nodemailer";

const escapeHTML = (str) => {
    return str.replace(/[&<>"']/g, (char) => {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
        }[char];
    });
};

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            // Log the incoming request body for debugging
            console.log("📥 Received contact form data:", {
                body: req.body,
                bodyKeys: Object.keys(req.body || {}),
                contentType: req.headers['content-type']
            });

            let { name, email, message } = req.body;

            if (!name || !email || !message) {
                console.log("❌ Missing required fields:", {
                    name: !!name,
                    email: !!email,
                    message: !!message
                });
                return res
                    .status(400)
                    .json({
                        success: false,
                        message: "All fields are required",
                        received: {
                            name: !!name,
                            email: !!email,
                            message: !!message
                        }
                    });
            }

            name = escapeHTML(name);
            email = escapeHTML(email);
            message = escapeHTML(message);

            // Enhanced validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                console.log("❌ Invalid email format:", email);
                return res.status(400).json({
                    success: false,
                    message: "Please provide a valid email address",
                    field: "email"
                });
            }

            if (name.length < 2 || name.length > 100) {
                console.log("❌ Invalid name length:", name.length);
                return res.status(400).json({
                    success: false,
                    message: "Name must be between 2 and 100 characters",
                    field: "name"
                });
            }

            if (message.length < 10 || message.length > 2000) {
                console.log("❌ Invalid message length:", message.length);
                return res.status(400).json({
                    success: false,
                    message: "Message must be between 10 and 2000 characters",
                    field: "message"
                });
            }

            console.log("📧 Processing contact form submission:", {
                name,
                email: email.replace(/(.{3}).*(@.*)/, "$1***$2"), // Mask email for logging
                messageLength: message.length,
                timestamp: new Date().toISOString()
            });

            const emailResponse = await sendmail(name, email, message);

            if (emailResponse.success) {
                console.log("✅ Contact form emails sent successfully");
                return res.status(200).json({
                    success: true,
                    message: "Thank you! Your message has been sent successfully. We'll get back to you within 24-48 hours.",
                    details: emailResponse.details
                });
            } else {
                console.error("❌ Failed to send contact form emails:", emailResponse.message);
                return res.status(500).json({
                    success: false,
                    message: "Sorry, there was an error sending your message. Please try again later or contact us directly."
                });
            }
        } catch (error) {
            console.error("❌ Error processing contact request:", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error. Please try again later."
            });
        }
    } else {
        res.status(405).json({
            success: false,
            message: "Method not allowed. Please use POST."
        });
    }
}
