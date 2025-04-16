"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(formData) {
  try {
    // Create a transporter with your credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "pankaj21dhal@gmail.com", // Your email
        pass: "rkyd ewdn hywa xuzi", // Your password
      },
    });

    // Extract form data
    const name = formData.name;
    const email = formData.email;
    const subject = formData.subject;
    const message = formData.message;

    // Email content
    const mailOptions = {
      from: "pankaj21dhal@gmail.com", // Your email as sender
      to: "pankaj21dhal@gmail.com", // Your email as recipient
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h3>New Contact Message from Your Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
}
