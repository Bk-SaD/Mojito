let handler = async (m, { conn, text, usedPrefix, command }) => {
global.db.data.sticker = global.db.data.sticker || {}
if (!m.quoted) throw '*❗ ᴿᵉˢᵖᵒⁿᵈᵉ ᵃ ᵘⁿ ˢᵗⁱᶜᵏᵉʳ ᵒ ⁱᵐᵃᵍᵉⁿ qᵘᵉ ᵈᵉˢᵉᵃˢ ᵃᵍʳᵉᵍᵃʳ ᵘⁿ ᶜᵒᵐᵃⁿᵈᵒ ᵒ ᵗᵉˣᵗᵒ*'
if (!m.quoted.fileSha256) throw '*❗ ˢᵒˡᵒ ᵖᵘᵉᵈᵉˢ ᵃˢⁱᵍⁿᵃʳ ᶜᵒᵐᵃⁿᵈᵒˢ ᵃ ˢᵗⁱᶜᵏᵉʳˢ ᵉ ⁱᵐᵃᵍᵉⁿᵉˢ*'
if (!text) throw `*❗ 𝙴𝚁𝚁𝙾𝚁 𝙳𝙴 𝚄𝚂𝙾, 𝚃𝙴𝚇𝚃𝙾 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴*\n\n*𝚄𝚂𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾 𝙳𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾:*\n*—◉ ${usedPrefix + command} <texto> <responder a sticker o imagen>*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾 𝙳𝙴 𝚄𝚂𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾 𝙳𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾:*\n*—◉ ${usedPrefix + command} <#menu> <responder a sticker o imagen>*`
let sticker = global.db.data.sticker
let hash = m.quoted.fileSha256.toString('base64')
if (sticker[hash] && sticker[hash].locked) throw '*❗ ˢᵒˡᵒ 𝐌øɉɨŧø ᵖᵘᵉᵈᵉ ʳᵉᵃˡⁱᶻᵃʳ ˡᵃ ᵐᵒᵈⁱᶠⁱᶜᵃᶜⁱᵒⁿ*'
sticker[hash] = { text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false }
m.reply(`*[ ✔ ] 𝙴𝙻 𝚃𝙴𝚇𝚃𝙾/𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝚂𝙸𝙶𝙽𝙰𝙳𝙾 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁/𝙸𝙼𝙰𝙶𝙴𝙽 𝙵𝚄𝙴 𝙰𝙶𝚁𝙴𝙶𝙰𝙳𝙾 𝙰 𝙻𝙰 𝙱𝙰𝚂𝙴 𝙳𝙴 𝙳𝙰𝚃𝙾𝚂 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴*`)
}
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset']
handler.rowner = true
export default handler
