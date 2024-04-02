const express = require('express');
const Mailjet = require('node-mailjet');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const mailjetClient = Mailjet.Client.apiConnect(
    'df75cf3d7651baf74f0709ef8f90262f',
    '1769daf4c9c7818b9c20293188a5f6f0'
);

app.post('/send-email', async (req, res) => {
    const { toEmail, toName, fromEmail, fromName, subject, textPart, htmlPart } = req.body;

    try {
        const request = await mailjetClient
            .post("send", { 'version': 'v3.1' })
            .request({
                Messages: [{
                    From: {
                        Email: fromEmail,
                        Name: fromName
                    },
                    To: [{
                        Email: toEmail,
                        Name: toName
                    }],
                    Subject: subject,
                    TextPart: textPart,
                    HTMLPart: htmlPart,
                }]
            });

        res.status(200).send(request.body);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.statusCode);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
