import axios from "axios"
let handler = async (m, {command, conn}) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*❗ᴸᵒˢ ᶜᵒᵐᵃⁿᵈᵒˢ ᵖᵃʳᵃ ᵖᵃʲⁱⁿᵉˢ ⁽⁺¹⁸⁾ ᵉˢᵗᵃⁿ ᵈᵉˢᵃᶜᵗⁱᵛᵃᵈᵒˢ*\n*sⁱ ᵈᵉˢᵉᵃ ᵖᵉᵍᵃʳˢᵉ ᵘⁿ ᵖᵃʲᵃᶻᵒ ᵘˢᵃⁿᵈᵒᵐᵉ ᵈᵉᵇᵉˢ ˢᵉʳ ᴬᴰᴹᴵᴺ ʸ ᵘˢᵃʳ #ᵉⁿᵃᵇˡᵉ ᵐᵒᵈᵒʰᵒʳⁿʸ*\n\n_Qᵘⁱᵉʳᵒ qᵘᵉ ˢᵉᵖᵃˢ qᵘᵉ ᵉˢᵗᵒʸ ᵈᵉᶜᵉᵖᶜⁱᵒⁿᵃᵈᵒ ᵈᵉ ᵗⁱ_ 🦍'
if (command == 'nsfwloli') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/wallpaper/nsfwloli?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['⏭', `/${command}`]], m)}
if (command == 'nsfwfoot') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/foot?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['⏭', `/${command}`]], m)}
if (command == 'nsfwass') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/ass?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['⏭', `/${command}`]], m)}
if (command == 'nsfwbdsm') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/bdsm?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['⏭', `/${command}`]], m)}
if (command == 'nsfwcum') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/cum?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['⏭', `/${command}`]], m)}    
if (command == 'nsfwero') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/ero?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['⏭', `/${command}`]], m)}
if (command == 'nsfwfemdom') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/femdom?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['⏭', `/${command}`]], m)}     
if (command == 'nsfwglass') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/glasses?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['⏭', `/${command}`]], m)}
if (command == 'hentai') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/hentai?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['⏭', `/${command}`]], m)}
if (command == 'nsfworgy') {
let haha = await conn.getFile(`https://api.xteam.xyz/randomimage/orgy?APIKEY=29d4b59a4aa687ca`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['⏭', `/${command}`]], m)}
if (command == 'tetas') {
let res = await axios("https://meme-api.herokuapp.com/gimme/boobs")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['⏭', `/${command}`]], m)}
if (command == 'booty') {
let res = await axios("https://meme-api.herokuapp.com/gimme/booty")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['⏭', `/${command}`]], m)}
if (command == 'ecchi') {
let res = await axios("https://meme-api.herokuapp.com/gimme/ecchi")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['⏭', `/${command}`]], m)} 
if (command == 'furro') {
let res = await axios("https://meme-api.herokuapp.com/gimme/Furryporn")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['⏭', `/${command}`]], m)} 
if (command == 'trapito') {
let res = await axios("https://api.waifu.pics/nsfw/trap")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['⏭', `/${command}`]], m)} 
if (command == 'imagenlesbians') {
let res = await axios("https://meme-api.herokuapp.com/gimme/lesbians")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['⏭', `/${command}`]], m)}     
if (command == 'panties') {
let res = await axios("https://meme-api.herokuapp.com/gimme/panties")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['⏭', `/${command}`]], m)}
if (command == 'pene') {
let res = await axios("https://meme-api.herokuapp.com/gimme/penis")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['⏭', `/${command}`]], m)}
if (command == 'porno') {
let res = await axios("https://meme-api.herokuapp.com/gimme/nsfw")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['⏭', `/${command}`]], m)}
if (command == 'randomxxx') {
let res = await axios("https://meme-api.herokuapp.com/gimme/nsfw")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['⏭', `/${command}`]], m)}
if (command == 'pechos') {
let res = await axios("https://meme-api.herokuapp.com/gimme/sideboobs")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['⏭', `/${command}`]], m)}
if (command == 'yaoi') {
let res = await axios("https://meme-api.herokuapp.com/gimme/yaoigif")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['⏭', `/${command}`]], m)}
if (command == 'yaoi2') {
let res = await axios("https://meme-api.herokuapp.com/gimme/yaoi")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['⏭', `/${command}`]], m)}
if (command == 'yuri') {
let res = await axios("https://meme-api.herokuapp.com/gimme/yuri")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['⏭', `/${command}`]], m)}
if (command == 'yuri2') {
let res = await axios("https://meme-api.herokuapp.com/gimme/yurigif")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['⏭', `/${command}`]], m)}
}  
handler.help = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglss', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos']
handler.command = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglss', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos']
handler.tags = ['nsfw']
export default  handler
