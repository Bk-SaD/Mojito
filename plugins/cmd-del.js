let handler = async (m, { conn, usedPrefix, text, command }) => {
let hash = text
if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
if (!hash) throw `*❗ˢᵒˡᵒ ᵖᵘᵉᵈᵉˢ ᵃˢⁱᵍⁿᵃʳ ᶜᵒᵐᵃⁿᵈᵒˢ ᵃ ˢᵗⁱᶜᵏᵉʳˢ ᵉ ⁱᵐᵃᵍᵉⁿᵉˢ\n\n𝙿𝙰𝚁𝙰 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝙴𝙻 𝙲𝙾𝙳𝙸𝙶𝙾 𝙰𝚂𝙸𝙶𝙽𝙰𝙳𝙾 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${usedPrefix}listcmd*`
let sticker = global.db.data.sticker
if (sticker[hash] && sticker[hash].locked) throw '*❗ˢᵒˡᵒ 𝐌øɉɨŧø ᵖᵘᵉᵈᵉ ʳᵉᵃˡⁱᶻᵃʳ ˡᵃ ᵐᵒᵈⁱᶠⁱᶜᵃᶜⁱᵒⁿ*'
delete sticker[hash]
m.reply(`*[ ✔ ] 𝙴𝙻 𝚃𝙴𝚇𝚃𝙾/𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝚂𝙸𝙶𝙽𝙰𝙳𝙾 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁/𝙸𝙼𝙰𝙶𝙴𝙽 𝙵𝚄𝙴 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾 𝙳𝙴 𝙻𝙰 𝙱𝙰𝚂𝙴 𝙳𝙴 𝙳𝙰𝚃𝙾𝚂 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴*`)}
handler.command = ['delcmd']
handler.rowner = true
export default handler
