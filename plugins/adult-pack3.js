import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*❗ᴸᵒˢ ᶜᵒᵐᵃⁿᵈᵒˢ ᵖᵃʳᵃ ᵖᵃʲⁱⁿᵉˢ ⁽⁺¹⁸⁾ ᵉˢᵗᵃⁿ ᵈᵉˢᵃᶜᵗⁱᵛᵃᵈᵒˢ*\n*sⁱ ᵈᵉˢᵉᵃ ᵖᵉᵍᵃʳˢᵉ ᵘⁿ ᵖᵃʲᵃᶻᵒ ᵘˢᵃⁿᵈᵒᵐᵉ ᵈᵉᵇᵉˢ ˢᵉʳ ᴬᴰᴹᴵᴺ ʸ ᵘˢᵃʳ #ᵉⁿᵃᵇˡᵉ ᵐᵒᵈᵒʰᵒʳⁿʸ*\n\n_Qᵘⁱᵉʳᵒ qᵘᵉ ˢᵉᵖᵃˢ qᵘᵉ ᵉˢᵗᵒʸ ᵈᵉᶜᵉᵖᶜⁱᵒⁿᵃᵈᵒ ᵈᵉ ᵗⁱ_ 🦍'
let url = packmen[Math.floor(Math.random() * packmen.length)]
conn.sendButton(m.chat, `_Ojito no apareces tu aqui🥵_`, author, url, [['⏭', `/${command}`]], m)
}
handler.help = ['pack3']
handler.tags = ['internet']
handler.command = /^(pack3)$/i
export default handler

global.packmen = [
  "https://i.imgur.com/TK0qLAu.jpg",
  "https://i.imgur.com/q8lKT40.jpg",
  "https://i.imgur.com/OwWdL9u.jpg",
  "https://i.imgur.com/Er7WiQo.jpg",
  "https://i.imgur.com/u4y0q4P.jpg",
  "https://i.imgur.com/y8y4PPr.jpg",
  "https://i.imgur.com/qgfLlRY.jpg",
  "https://i.imgur.com/irgyUTD.jpg",
  "https://i.imgur.com/uXrqfBl.jpg",
  "https://i.imgur.com/lgXjetf.jpg",
  "https://i.imgur.com/81QLh8s.jpg",
  "https://i.imgur.com/R3AlYe1.jpg",
  "https://i.imgur.com/a2Myr3F.jpg",
  "https://i.imgur.com/Wp9cgGw.jpg",
  "https://i.imgur.com/ggKUnxt.jpg",
  "https://i.imgur.com/eCJNWBl.jpg",
  "https://i.imgur.com/6lcrBQB.jpg",
  "https://i.imgur.com/eSSbXJ1.jpg",
  "https://i.imgur.com/tNyvzyO.jpg"
]
