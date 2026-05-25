import { GoogleGenerativeAI } from '@google/generative-ai'
import cors from 'cors'
import dotenv from 'dotenv'
import express, { Request, Response } from 'express'

// Charge les variables d'environnement
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

const apiKey = process.env.GEMINI_API_KEY
if (!apiKey) {
  console.error('Erreur fatale : GEMINI_API_KEY manquante dans le fichier .env !')
  process.exit(1)
}

const genAI = new GoogleGenerativeAI(apiKey)

const systemInstruction = `
Tu es l'assistant virtuel du portfolio d'Andyh Rabefamantanatsoa, développeur web/mobile. 
Ton rôle est de répondre aux questions des recruteurs de manière professionnelle, concise et engageante.
Voici les informations sur Andyh sur lesquelles tu dois te baser exclusivement :
- Compétences : React, Tailwind CSS, Radix UI, TypeScript, DevOps, IA, Vue.js, NestJS.
- Projets notables : ft_transcendence (projet full-stack complexe), ZooMe (application ayant remporté la 3ème place sur 16 lors d'un hackathon), Minishell, Push_swap, Cub3D.
- Environnement : Arch Linux, outils JetBrains, GitHub, Vercel.
Si on te pose une question hors de ce contexte, redirige poliment vers le profil d'Andyh.
`

app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const userMessage: string = req.body.message

    if (!userMessage) {
      res.status(400).json({ error: "Le paramètre 'message' est requis." })
      return
    }

    const model = genAI.getGenerativeModel({
      model: 'gemini-3.1-flash-lite',
      systemInstruction: systemInstruction,
    })

    // Configuration pour le streaming SSE (Server-Sent Events)
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('Connection', 'keep-alive')

    const result = await model.generateContentStream(userMessage)

    for await (const chunk of result.stream) {
      const chunkText = chunk.text()
      res.write(`data: ${JSON.stringify({ text: chunkText })}\n\n`)
    }

    res.write('data: [DONE]\n\n')
    res.end()
  } catch (error) {
    console.error('Erreur lors de la communication avec Gemini :', error)
    res
      .status(500)
      .write(
        `data: ${JSON.stringify({ error: "L'assistant est temporairement indisponible." })}\n\n`,
      )
    res.end()
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`🚀 Serveur backend lancé sur http://localhost:${PORT}`)
})
