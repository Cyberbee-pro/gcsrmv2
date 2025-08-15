import nodemailer from "nodemailer";

// Professional HTML email template with GitHub elements
const createEmailTemplate = (name, email, query) => {
    const currentDate = new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata'
    });

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif; background-color: #f6f8fa;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #d0d7de; border-radius: 6px; overflow: hidden;">
            
            <!-- Header -->
            <div style="background-color: #24292f; padding: 24px; border-bottom: 1px solid #d0d7de;">
                <div style="display: flex; align-items: center; justify-content: center;">
                    <svg height="24" width="24" viewBox="0 0 16 16" style="fill: #ffffff; margin-right: 8px;">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 600;">
                        New Contact Form Submission
                    </h1>
                </div>
                <p style="color: #7d8590; margin: 8px 0 0 0; font-size: 14px; text-align: center;">
                    GitHub Community SRM • ${currentDate} (IST)
                </p>
            </div>

            <!-- Content -->
            <div style="padding: 24px;">
                
                <!-- Contact Information -->
                <div style="background-color: #f6f8fa; padding: 16px; border: 1px solid #d0d7de; border-radius: 6px; margin-bottom: 16px;">
                    <h2 style="color: #24292f; margin: 0 0 12px 0; font-size: 16px; font-weight: 600; border-bottom: 1px solid #d0d7de; padding-bottom: 8px;">
                        Contact Information
                    </h2>
                    
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 6px 0; font-weight: 600; color: #656d76; width: 60px; vertical-align: top;">
                                Name:
                            </td>
                            <td style="padding: 6px 0; color: #24292f;">
                                ${name}
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 0; font-weight: 600; color: #656d76; vertical-align: top;">
                                Email:
                            </td>
                            <td style="padding: 6px 0;">
                                <a href="mailto:${email}" style="color: #0969da; text-decoration: none;">
                                    ${email}
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>

                <!-- Message Content -->
                <div style="background-color: #ffffff; padding: 16px; border: 1px solid #d0d7de; border-radius: 6px; margin-bottom: 16px;">
                    <h2 style="color: #24292f; margin: 0 0 12px 0; font-size: 16px; font-weight: 600; border-bottom: 1px solid #d0d7de; padding-bottom: 8px;">
                        Message
                    </h2>
                    
                    <div style="background-color: #f6f8fa; padding: 12px; border-radius: 6px; border-left: 3px solid #0969da;">
                        <p style="margin: 0; color: #24292f; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">
                            ${query}
                        </p>
                    </div>
                </div>

                <!-- Quick Actions -->
                <div style="background-color: #f6f8fa; padding: 16px; border: 1px solid #d0d7de; border-radius: 6px; margin-bottom: 16px;">
                    <h3 style="color: #24292f; margin: 0 0 12px 0; font-size: 14px; font-weight: 600;">
                        Quick Actions
                    </h3>
                    
                    <div style="text-align: left;">
                        <a href="mailto:${email}?subject=Re: Your inquiry to GitHub Community SRM&body=Hi ${name},%0A%0AThank you for reaching out to GitHub Community SRM.%0A%0A" 
                           style="background-color: #238636; color: #ffffff; padding: 8px 16px; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: 500; display: inline-block; margin-right: 8px; margin-bottom: 8px;">
                            Reply to ${name}
                        </a>
                        <a href="mailto:${email}" 
                           style="background-color: #0969da; color: #ffffff; padding: 8px 16px; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: 500; display: inline-block; margin-bottom: 8px;">
                            Compose Email
                        </a>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #f6f8fa; padding: 16px; border-top: 1px solid #d0d7de; text-align: center;">
                <p style="color: #656d76; margin: 0; font-size: 12px;">
                    This email was automatically generated from the GitHub Community SRM contact form.
                </p>
                <p style="color: #8b949e; margin: 4px 0 0 0; font-size: 11px;">
                    Please do not reply to this email directly. Use the action buttons above to respond.
                </p>
            </div>
        </div>
    </body>
    </html>
    `;
};

// Professional confirmation email template
const createConfirmationTemplate = (name) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank you for contacting GitHub Community SRM</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif; background-color: #f6f8fa;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #d0d7de; border-radius: 6px; overflow: hidden;">
            
            <!-- Header -->
            <div style="background-color: #24292f; padding: 24px; border-bottom: 1px solid #d0d7de;">
                <div style="display: flex; align-items: center; justify-content: center;">
                    <svg height="32" width="32" viewBox="0 0 16 16" style="fill: #ffffff; margin-right: 12px;">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    <div>
                        <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 600; line-height: 1;">
                            GitHub Community SRM
                        </h1>
                        <p style="color: #7d8590; margin: 4px 0 0 0; font-size: 14px;">
                            Message received successfully
                        </p>
                    </div>
                </div>
            </div>

            <!-- Content -->
            <div style="padding: 32px 24px;">
                <h2 style="color: #24292f; margin: 0 0 16px 0; font-size: 20px; font-weight: 600;">
                    Hello ${name},
                </h2>
                
                <p style="color: #656d76; font-size: 16px; line-height: 1.5; margin-bottom: 24px;">
                    Thank you for reaching out to <strong>GitHub Community SRM</strong>. We have received your message and our team will respond within <strong>24-48 hours</strong>.
                </p>

                <div style="background-color: #f6f8fa; padding: 16px; border: 1px solid #d0d7de; border-radius: 6px; margin-bottom: 24px;">
                    <div style="display: flex; align-items: flex-start;">
                        <svg height="16" width="16" viewBox="0 0 16 16" style="fill: #656d76; margin-right: 8px; margin-top: 2px; flex-shrink: 0;">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7-3.25v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5a.75.75 0 0 1 1.5 0Z"/>
                        </svg>
                        <div>
                            <p style="color: #24292f; font-size: 14px; margin: 0; font-weight: 600;">
                                What happens next?
                            </p>
                            <p style="color: #656d76; font-size: 14px; margin: 4px 0 0 0; line-height: 1.4;">
                                Our team will review your message and respond with relevant information or next steps.
                            </p>
                        </div>
                    </div>
                </div>

                <div style="background-color: #ffffff; padding: 0; margin: 24px 0;">
                    <h3 style="color: #24292f; margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">
                        Connect with us
                    </h3>
                    <div style="text-align: left;">
                        <a href="https://github.com/SRM-IST-KTR" 
                           style="background-color: #24292f; color: #ffffff; padding: 8px 12px; text-decoration: none; border-radius: 6px; font-size: 13px; font-weight: 500; display: inline-block; margin-right: 6px; margin-bottom: 6px;">
                            <svg height="14" width="14" viewBox="0 0 16 16" style="fill: currentColor; margin-right: 5px; vertical-align: text-bottom;">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                            GitHub
                        </a>
                        <a href="https://githubsrmist.in" 
                           style="background-color: #0969da; color: #ffffff; padding: 8px 12px; text-decoration: none; border-radius: 6px; font-size: 13px; font-weight: 500; display: inline-block; margin-right: 6px; margin-bottom: 6px;">
                            <svg height="14" width="14" viewBox="0 0 16 16" style="fill: currentColor; margin-right: 5px; vertical-align: text-bottom;">
                                <path d="M7.775 3.275a.75.75 0 0 0 1.06 1.06l1.25-1.25a2 2 0 1 1 2.83 2.83l-2.5 2.5a2 2 0 0 1-2.83 0 .75.75 0 0 0-1.06 1.06 3.5 3.5 0 0 0 4.95 0l2.5-2.5a3.5 3.5 0 0 0-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 0 1 0-2.83l2.5-2.5a2 2 0 0 1 2.83 0 .75.75 0 0 0 1.06-1.06 3.5 3.5 0 0 0-4.95 0l-2.5 2.5a3.5 3.5 0 0 0 4.95 4.95l1.25-1.25a.75.75 0 0 0-1.06-1.06l-1.25 1.25a2 2 0 0 1-2.83 0z"/>
                            </svg>
                            Website
                        </a>
                        <a href="https://in.linkedin.com/company/githubsrm" 
                           style="background-color: #0077b5; color: #ffffff; padding: 8px 12px; text-decoration: none; border-radius: 6px; font-size: 13px; font-weight: 500; display: inline-block; margin-right: 6px; margin-bottom: 6px;">
                            <svg height="14" width="14" viewBox="0 0 24 24" style="fill: currentColor; margin-right: 5px; vertical-align: text-bottom;">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            LinkedIn
                        </a>
                        <a href="https://instagram.com/githubsrm" 
                           style="background-color: #e4405f; color: #ffffff; padding: 8px 12px; text-decoration: none; border-radius: 6px; font-size: 13px; font-weight: 500; display: inline-block; margin-right: 6px; margin-bottom: 6px;">
                            <svg height="14" width="14" viewBox="0 0 24 24" style="fill: currentColor; margin-right: 5px; vertical-align: text-bottom;">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                            Instagram
                        </a>
                        <a href="https://discord.gg/vdJmdmG4NW" 
                           style="background-color: #5865f2; color: #ffffff; padding: 8px 12px; text-decoration: none; border-radius: 6px; font-size: 13px; font-weight: 500; display: inline-block; margin-bottom: 6px;">
                            <svg height="14" width="14" viewBox="0 0 24 24" style="fill: currentColor; margin-right: 5px; vertical-align: text-bottom;">
                                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0188 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                            </svg>
                            Discord
                        </a>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #f6f8fa; padding: 24px; border-top: 1px solid #d0d7de; text-align: center;">
                <p style="color: #656d76; margin: 0; font-size: 12px;">
                    © 2025 GitHub Community SRM. All rights reserved.
                </p>
                <p style="color: #8b949e; margin: 8px 0 0 0; font-size: 11px;">
                    This is an automated confirmation email. Please do not reply directly to this message.
                </p>
            </div>
        </div>
    </body>
    </html>
    `;
};

export const sendmail = async (name, email, query) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.zoho.in",
            port: 465,
            secure: true,
            auth: {
                user: process.env.SENDER_EMAIL,
                pass: process.env.SENDER_PASS
            }
        });

        // Enhanced mail options for the team
        const teamMailOptions = {
            from: process.env.SENDER_EMAIL,
            to: process.env.RECIPIENT_EMAIL,
            replyTo: email, // Enable direct reply to the sender
            subject: `🔔 New Contact Form Submission from ${name}`,
            html: createEmailTemplate(name, email, query),
            // Add plain text version for better compatibility
            text: `
New Contact Form Submission

From: ${name} (${email})
Date: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} IST

Message:
${query}

Reply to this person: ${email}
            `
        };

        // Confirmation email for the sender
        const confirmationMailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: "✅ Thank you for contacting GitHub Community SRM",
            html: createConfirmationTemplate(name),
            text: `
Hi ${name}!

Thank you for reaching out to GitHub Community SRM! We've received your message and our team will get back to you within 24-48 hours.

What happens next?
Our team will review your message and respond with relevant information, resources, or next steps.

Best regards,
GitHub Community SRM Team
            `
        };

        // Send both emails
        const [teamEmailResult, confirmationResult] = await Promise.all([
            transporter.sendMail(teamMailOptions),
            transporter.sendMail(confirmationMailOptions)
        ]);

        console.log("Team email sent successfully:", teamEmailResult.response);
        console.log("Confirmation email sent successfully:", confirmationResult.response);

        return {
            success: true,
            message: "Emails sent successfully",
            details: {
                teamEmail: teamEmailResult.messageId,
                confirmationEmail: confirmationResult.messageId
            }
        };
    } catch (err) {
        console.error("Error sending emails:", err.message);
        return {
            success: false,
            message: `Failed to send email: ${err.message}`
        };
    }
};