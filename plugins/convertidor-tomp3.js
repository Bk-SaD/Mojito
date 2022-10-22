import { toAudio } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q || q.msg).mimetype || q.mediaType || ''
if (!/video|audio/.test(mime)) throw `*❗ ᴿᵉˢᵖᵒⁿᵈᵉ ᵃˡ ᵛⁱᵈᵉᵒ ᵒ ⁿᵒᵗᵃ ᵈᵉ ᵛᵒᶻ qᵘᵉ ᵈᵉˢᵉᵃ ᶜᵒⁿᵛᵉʳᵗⁱʳ ᵉⁿ ᵃᵘᵈⁱᵒ/ᵐᵖ³*`
let media = await q.download()
if (!media) throw '*❗  𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁*'
let audio = await toAudio(media, 'mp4')
if (!audio.data) throw '*❗ 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁*'
conn.sendMessage(m.chat, { audio: audio.data,  mimetype: 'audio/mpeg' }, { quoted: m })
}
handler.alias = ['tomp3', 'toaudio']
handler.command = /^to(mp3|audio)$/i
export default handler
