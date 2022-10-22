import fetch from 'node-fetch'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*❗ᴸᵒˢ ᶜᵒᵐᵃⁿᵈᵒˢ ᵖᵃʳᵃ ᵖᵃʲⁱⁿᵉˢ ⁽⁺¹⁸⁾ ᵉˢᵗᵃⁿ ᵈᵉˢᵃᶜᵗⁱᵛᵃᵈᵒˢ*\n*sⁱ ᵈᵉˢᵉᵃ ᵖᵉᵍᵃʳˢᵉ ᵘⁿ ᵖᵃʲᵃᶻᵒ ᵘˢᵃⁿᵈᵒᵐᵉ ᵈᵉᵇᵉˢ ˢᵉʳ ᴬᴰᴹᴵᴺ ʸ ᵘˢᵃʳ #ᵉⁿᵃᵇˡᵉ ᵐᵒᵈᵒʰᵒʳⁿʸ*\n\n_Qᵘⁱᵉʳᵒ qᵘᵉ ˢᵉᵖᵃˢ qᵘᵉ ᵉˢᵗᵒʸ ᵈᵉᶜᵉᵖᶜⁱᵒⁿᵃᵈᵒ ᵈᵉ ᵗⁱ_ 🦍'
if (!args[0]) throw `*ᴼᵉ ⁱⁿᵍʳᵉˢᵃ ᵘⁿ ˡⁱⁿᵏ ᵛᵃˡⁱᵈᵒ ᵖᵃ qᵘᵉ ᵗᵉ ˡᵃ ᵖᵘᵉᵈᵃˢ ʲᵃˡᵃʳ ᵃ ᵍᵘˢᵗᵒ..*\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ${usedPrefix + command} https://www.xvideos.com/video70389849/pequena_zorra_follada_duro*`
try {
await conn.reply(m.chat, '[❗] 𝐸𝑙 𝑣𝑖𝑑𝑒𝑜 𝑒𝑠𝑡𝑎 𝑠𝑖𝑒𝑛𝑑𝑜 𝑝𝑟𝑜𝑐𝑒𝑠𝑎𝑑𝑜, 𝑒𝑠𝑝𝑒𝑟𝑒 𝑢𝑛 𝑚𝑜𝑚𝑒𝑛𝑡𝑜 𝑒𝑛 𝑙𝑜 𝑞𝑢𝑒 𝑒𝑠 𝑒𝑛𝑣𝑖𝑎𝑑𝑜..\n\n﹣ ᴇʟ ᴛɪᴇᴍᴘᴏ ᴅᴇ ᴇɴᴠɪᴏ ᴅᴇᴘᴇɴᴅᴇ ᴅᴇʟ ᴘᴇsᴏ ʏ ᴅᴜʀᴀᴄɪᴏ́ɴ ᴅᴇʟ ᴠɪᴅᴇᴏ', m)
let res = await fetch(`https://zenzapis.xyz/downloader/xvideos?apikey=${keysxxx}&url=`+args[0])
let json = await res.json()
conn.sendMessage(m.chat, { document: { url: json.result.files.high }, mimetype: 'video/mp4', fileName: json.result.title }, { quoted: m })
} catch (e) {
m.reply('*❗ᴱᴿᴿᴼᴿ, ᵖᵃʳᵉᶜᵉ qᵘᵉ ⁿᵒ ᵖᵘᵈᵉ ᵈᵉˢᶜᵃʳᵍᵃʳ ᵉˡ ᵛⁱᵈᵉᵒ.. ᵗᵉ ᵗᵒᶜᵃʳᵃ ⁱᵐᵃᵍⁱⁿᵃʳˡᵒ ᵒ ⁱʳ ᵗᵘ ᵐⁱˢᵐ@ ᵃ ˡᵃ ᵖᵃᵍⁱⁿᵃ.. ᶠˡᵒʲ@ ᵈᵉ ᵐⁱᵉʳᵈᵃ*')
}}
handler.command = /^(xvideosdl)$/i
export default handler
