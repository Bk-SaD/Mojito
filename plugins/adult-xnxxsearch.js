import axios from 'axios'
import fs from 'fs'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*❗ᴸᵒˢ ᶜᵒᵐᵃⁿᵈᵒˢ ᵖᵃʳᵃ ᵖᵃʲⁱⁿᵉˢ ⁽⁺¹⁸⁾ ᵉˢᵗᵃⁿ ᵈᵉˢᵃᶜᵗⁱᵛᵃᵈᵒˢ*\n*sⁱ ᵈᵉˢᵉᵃ ᵖᵉᵍᵃʳˢᵉ ᵘⁿ ᵖᵃʲᵃᶻᵒ ᵘˢᵃⁿᵈᵒᵐᵉ ᵈᵉᵇᵉˢ ˢᵉʳ ᴬᴰᴹᴵᴺ ʸ ᵘˢᵃʳ #ᵉⁿᵃᵇˡᵉ ᵐᵒᵈᵒʰᵒʳⁿʸ*\n\n_Qᵘⁱᵉʳᵒ qᵘᵉ ˢᵉᵖᵃˢ qᵘᵉ ᵉˢᵗᵒʸ ᵈᵉᶜᵉᵖᶜⁱᵒⁿᵃᵈᵒ ᵈᵉ ᵗⁱ_ 🦍'
if (!text) throw `*❗𝙴𝙹𝙴𝙼𝙿𝙻𝙾 𝙳𝙴 𝚄𝚂𝙾 𝙳𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${usedPrefix + command} Con mi prima*`
try {
let res = await axios.get(`https://zenzapis.xyz/searching/xnxx?apikey=${keysxxx}&query=${text}`)
let json = res.data
let listSerch = []
let teskd = `𝗩𝗶𝗱𝗲𝗼𝘀 𝗿𝗲𝗹𝗮𝗰𝗶𝗼𝗻𝗮𝗱𝗼𝘀 𝐜𝐨𝐧: ${args.join(" ")}`
const sections = [{
title: `Ｒｅｓｕｌｔａｄｏｓ`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: '𝐄𝐥𝐢𝐣𝐚 𝐮𝐧𝐚 𝐨𝐩𝐜𝐢𝐨𝐧 𝐲 𝐩𝐫𝐞𝐜𝐢𝐨𝐧𝐞 𝐄𝐧𝐯𝐢𝐚𝐫',
title: " 『 𝗩𝗜𝗗𝗘𝗢𝗦 𝗥𝗘𝗟𝗔𝗖𝗜𝗢𝗡𝗔𝗗𝗢𝗦 』",
buttonText: "𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒",
sections}
for (let i of json.result) {
listSerch.push({title: i.title, description: '⇧ sᴇʟᴇᴄᴄɪᴏɴᴀ ᴇsᴛᴀ ᴏᴘᴄɪᴏɴ ᴘᴀʀᴀ ᴅᴇsᴄᴀʀɢᴀʀ ᴇsᴛᴇ ᴠɪᴅᴇᴏ ⇧', rowId: `${usedPrefix}xnxxdl ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch (e) {
m.reply('*❗ 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*')
}}
handler.command = /^porhubsearch|xvideossearch|xnxxsearch$/i
export default handler
