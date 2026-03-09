import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors({
    origin: function (origin, callback) {
        const allowed = [
            'http://localhost:5173',
            'http://localhost:5174',
            'http://localhost:3000',
        ]
        // Allow Vercel deployments (*.vercel.app) and no-origin requests (like Postman)
        if (!origin || allowed.includes(origin) || /\.vercel\.app$/.test(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    methods: ['GET', 'POST'],
}))
app.use(express.json())

// Create Nodemailer transporter (Gmail)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
})

// Verify transporter on startup
transporter.verify()
    .then(() => console.log('✅ Email transporter is ready'))
    .catch((err) => console.error('❌ Email transporter error:', err.message))

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' })
    }

    // Log the contact submission
    console.log('\n========== NEW CONTACT SUBMISSION ==========')
    console.log(`Name:    ${name}`)
    console.log(`Email:   ${email}`)
    console.log(`Message: ${message}`)
    console.log(`Time:    ${new Date().toISOString()}`)
    console.log('=============================================\n')

    try {
        // Send email to you (portfolio owner)
        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `🚀 Portfolio Contact: ${name}`,
            html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f2a; color: #f0f0ff; padding: 32px; border-radius: 16px;">
          <h2 style="color: #00d4ff; margin-top: 0;">New Portfolio Message</h2>
          <hr style="border: 1px solid rgba(255,255,255,0.1);" />
          <p><strong style="color: #7c3aed;">From:</strong> ${name}</p>
          <p><strong style="color: #7c3aed;">Email:</strong> <a href="mailto:${email}" style="color: #00d4ff;">${email}</a></p>
          <p><strong style="color: #7c3aed;">Message:</strong></p>
          <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 8px; border-left: 3px solid #00d4ff;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <hr style="border: 1px solid rgba(255,255,255,0.1); margin-top: 24px;" />
          <p style="font-size: 12px; color: #6b6b8a;">Sent from your portfolio contact form at ${new Date().toLocaleString()}</p>
        </div>
      `,
        })

        // Send confirmation email to the visitor
        await transporter.sendMail({
            from: `"Gaurav Kumar" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Thanks for reaching out, ${name}! 🙌`,
            html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f2a; color: #f0f0ff; padding: 32px; border-radius: 16px;">
          <h2 style="color: #00d4ff; margin-top: 0;">Hey ${name}! 👋</h2>
          <p>Thank you for reaching out through my portfolio. I've received your message and will get back to you as soon as possible!</p>
          <p style="color: #a0a0c0;">Here's a copy of your message:</p>
          <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 8px; border-left: 3px solid #7c3aed;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <p style="margin-top: 24px;">Best regards,<br><strong style="color: #00d4ff;">Gaurav Kumar</strong><br>Software Engineer</p>
        </div>
      `,
        })

        res.status(200).json({ success: true, message: 'Message sent! Check your email for a confirmation.' })
    } catch (err) {
        console.error('❌ Error sending email:', err.message)
        res.status(500).json({ error: 'Failed to send email. Please try again later.' })
    }
})

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.listen(PORT, () => {
    console.log(`\n🚀 Portfolio server running at http://localhost:${PORT}`)
    console.log(`   Health check: http://localhost:${PORT}/api/health\n`)
})
