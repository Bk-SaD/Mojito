import fetch from 'node-fetch'
import { lyrics, lyricsv2 } from '@bochilteam/scraper'
import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) throw `*❗ ᴸᵒ ʰᵃᶜᵉˢ ᵐᵃˡ, ᵉʲᵉᵐᵖˡᵒ ᵈᵉ ᵘˢᵒ ᶜᵒʳʳᵉᶜᵗᵒ: ${usedPrefix + command} beret ojala*`
try {
const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
title: result.author + result.title}))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.thumbnail.genius) throw json


let letratexto =`
𝐓𝐈𝐓𝐔𝐋𝐎: *${result.title}*
𝐀𝐔𝐓𝐎𝐑 ${result.author}


${result.lyrics}


𝐔𝐑𝐋 ${result.link}
`.trim()
conn.sendHydrated(m.chat, letratexto, wm, json.thumbnail.genius, null, null, null, null, [
['𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙰𝚄𝙳𝙸𝙾', `/play.1 ${text}`],
['𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝚅𝙸𝙳𝙴𝙾', `/play.2 ${text}`]
], m)
} catch (e) {
m.reply('*❗ 𝙴𝚁𝚁𝙾𝚁*')
console.log(e)
}}
handler.help = ['lirik','letra'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric|letra)$/i
export default handler
