import { toPTT } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `*βππππβ] α΄Ώα΅Λ’α΅α΅βΏα΅α΅ α΅Λ‘ α΅β±α΅α΅α΅ α΅ α΅α΅α΅β±α΅ qα΅α΅ α΅α΅Λ’α΅α΅ αΆα΅βΏα΅α΅Κ³α΅β±Κ³ α΅βΏ βΏα΅α΅α΅ α΅α΅ α΅α΅αΆ»*`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw '*β π΄πππΎπ π°π» π³π΄ππ²π°ππΆπ°π su video*'
if (!media && !/audio/.test(mime)) throw '*β π΄πππΎπ π°π» π³π΄ππ²π°ππΆπ°π ππ π°ππ³πΈπΎ*'
let audio = await toPTT(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw '*β π΄πππΎπ π°π» π²πΎπ½ππ΄πππΈπ ππ π°ππ³πΈπΎ π° π½πΎππ° π³π΄ ππΎπ*'
if (!audio.data && !/video/.test(mime)) throw '*β π΄πππΎπ π°π» π²πΎπ½ππ΄πππΈπ ππ ππΈπ³π΄πΎ π° π½πΎππ° π³π΄ ππΎπ*'
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['tovn (reply)']
handler.tags = ['audio']
handler.command = /^to(vn|(ptt)?)$/i
export default handler
