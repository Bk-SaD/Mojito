/* 𝐂𝐑𝐄𝐀𝐃𝐎 𝐏𝐎𝐑 https://github.com/BrunoSobrino */

let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `*❗𝐈𝐍𝐅𝐎❗] ᴿᵉˢᵖᵒⁿᵈᵃ ᵃ ᵘⁿ ᵛⁱᵈᵉᵒ qᵘᵉ ᵈᵉˢᵉᵉ ᶜᵒⁿᵛᵉʳᵗⁱʳ ᵃ ᵍⁱᶠ ᶜᵒⁿ ᵃᵘᵈⁱᵒ` 
const q = m.quoted || m
let mime = (q.msg || q).mimetype || ''
if (!/(mp4)/.test(mime)) throw `*❗ ᴱˡ ᵗⁱᵖᵒ ᵈᵉ ᵃʳᶜʰⁱᵛᵒ ${mime} ⁿᵒ ᵉˢ ᶜᵒʳʳᵉᶜᵗᵒ*`
m.reply(global.wait)
let media = await q.download()
conn.sendMessage(m.chat, { video: media, gifPlayback: true, caption: '*ᴀϙᴜɪ ᴇsᴛᴀ sᴜ ɢɪғ ᴄᴏɴ ᴀᴜᴅɪᴏ, ᴀʟ ᴀʙʀɪʀʟᴏ sᴇ ʀᴇᴘʀᴏᴅᴜᴄᴇ ᴄᴏɴ ᴀᴜᴅɪᴏ*' }, { quoted: m })}
handler.command = ['togifaud']
export default handler
