import axios from "axios";

const sendEmail = async (toEmail, subject, message) => {
  const SENDGRID_API_KEY =
    "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";
  const SENDGRID_API_URL = "https://api.sendgrid.com/v3/mail/send";

  const data = {
    personalizations: [{ to: [{ email: toEmail }] }],
    from: { email: "huy114ym@gmail.com" },
    subject,
    content: [{ type: "text/plain", value: message }],
  };

  try {
    const response = await axios.post(SENDGRID_API_URL, data, {
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    console.log(response);
  } catch (error) {
    console.log(data);
    console.error(error);
    console.log("erorr");
  }
};

export default sendEmail;
