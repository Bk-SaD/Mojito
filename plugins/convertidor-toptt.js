import { toPTT } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `*❗𝐈𝐍𝐅𝐎❗] ᴿᵉˢᵖᵒⁿᵈᵉ ᵃˡ ᵛⁱᵈᵉᵒ ᵒ ᵃᵘᵈⁱᵒ qᵘᵉ ᵈᵉˢᵉᵃ ᶜᵒⁿᵛᵉʳᵗⁱʳ ᵉⁿ ⁿᵒᵗᵃ ᵈᵉ ᵛᵒᶻ*`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw '*❗ 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 su video*'
if (!media && !/audio/.test(mime)) throw '*❗ 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝚂𝚄 𝙰𝚄𝙳𝙸𝙾*'
let audio = await toPTT(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw '*❗ 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁 𝚂𝚄 𝙰𝚄𝙳𝙸𝙾 𝙰 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*'
if (!audio.data && !/video/.test(mime)) throw '*❗ 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁 𝚂𝚄 𝚅𝙸𝙳𝙴𝙾 𝙰 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*'
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['tovn (reply)']
handler.tags = ['audio']
handler.command = /^to(vn|(ptt)?)$/i
export default handler
