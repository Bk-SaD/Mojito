import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*❗ᴸᵒˢ ᶜᵒᵐᵃⁿᵈᵒˢ ᵖᵃʳᵃ ᵖᵃʲⁱⁿᵉˢ ⁽⁺¹⁸⁾ ᵉˢᵗᵃⁿ ᵈᵉˢᵃᶜᵗⁱᵛᵃᵈᵒˢ*\n*sⁱ ᵈᵉˢᵉᵃ ᵖᵉᵍᵃʳˢᵉ ᵘⁿ ᵖᵃʲᵃᶻᵒ ᵘˢᵃⁿᵈᵒᵐᵉ ᵈᵉᵇᵉˢ ˢᵉʳ ᴬᴰᴹᴵᴺ ʸ ᵘˢᵃʳ #ᵉⁿᵃᵇˡᵉ ᵐᵒᵈᵒʰᵒʳⁿʸ*\n\n_Qᵘⁱᵉʳᵒ qᵘᵉ ˢᵉᵖᵃˢ qᵘᵉ ᵉˢᵗᵒʸ ᵈᵉᶜᵉᵖᶜⁱᵒⁿᵃᵈᵒ ᵈᵉ ᵗⁱ_ 🦍'
let url = pack[Math.floor(Math.random() * pack.length)]
conn.sendButton(m.chat, `_Ojito no aparece tu ex aqui🥵_`, author, url, [['⏭', `/${command}`]], m)
}
handler.help = ['pack']
handler.tags = ['internet']
handler.command = /^(pack)$/i
export default handler

global.pack = [
  "https://i.imgur.com/XbW7FO2.jpg",
  "https://i.imgur.com/ciuzM98.jpg",
  "https://i.imgur.com/uHsrrrx.jpg",
  "https://i.imgur.com/PVi8YDi.jpg",
  "https://i.imgur.com/FLC3ZXE.jpg",
  "https://i.imgur.com/54m52tX.jpg",
  "https://i.imgur.com/OsxYPgQ.jpg",
  "https://i.imgur.com/vpw6Xnr.jpg",
  "https://i.imgur.com/aAyPrZx.jpg",
  "https://i.imgur.com/Gh3ORCd.jpg",
  "https://i.imgur.com/rjGhygM.jpg",
  "https://i.imgur.com/zdHVFEI.jpg",
  "https://i.imgur.com/kAplnSG.jpg",
  "https://i.imgur.com/15UiO8o.jpg",
  "https://i.imgur.com/qjjyr6G.jpg",
  "https://i.imgur.com/bQZRhBU.jpg",
  "https://i.imgur.com/vpw6Xnr.jpg",
  "https://i.imgur.com/aAyPrZx.jpg",
  "https://i.imgur.com/Gh3ORCd.jpg",
  "https://i.imgur.com/rjGhygM.jpg",
  "https://i.imgur.com/0MhmmF4.jpg",
  "https://i.imgur.com/2MX4wvq.jpg",
  "https://i.imgur.com/HYL5ggu.jpg",
  "https://i.imgur.com/7ZjOD2a.jpg",
  "https://i.imgur.com/zbEUy3m.jpg",
  "https://i.imgur.com/tZ6vlg6.jpg",
  "https://i.imgur.com/jdPns8O.jpg",
  "https://i.imgur.com/VyjBQHT.jpg",
  "https://i.imgur.com/ozAGqBD.jpg",
  "https://i.imgur.com/DsSj9S1.jpg",
  "https://i.imgur.com/KYHpjNc.jpg",
]
