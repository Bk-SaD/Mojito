export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
  * ᴬˡ ᶠⁱⁿ.. ᵖᵉⁿˢᵉ qᵘᵉ ʸᵃ ⁿᵒ ᵛᵉⁿᵈʳⁱᵃˢ ${user.afkReason ? ' ᴱˢᵗᵃᵇᵃˢ ᴬfᴷ ᵖᵒʳ: ' + user.afkReason : ''}*
  
  *—◉ 𝚃𝙸𝙴𝙼𝙿𝙾 𝙳𝙴 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙸𝙳𝙰𝙳 (𝙰𝙵𝙺): ${(new Date - user.afk).toTimeString()}*
  `.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`*❗ 𝙽𝙾 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴𝚂*

*—◉ ᴬ ᵉˢᵉ qᵘᵉ ᵉᵗⁱqᵘᵉᵗᵃˢᵗᵉ ˡᵒ ᵛⁱᵍⁱˡᵒ ᵐⁱᵉⁿᵗʳᵃˢ ᵉˢᵗᵃ ᴬᶠᴷ*      
*—◉ ${reason ? 'esa mrd ta 𝙰𝙵𝙺 por vago y dice que fue porque ' + reason : '𝙼𝙾𝚃𝙸𝚅𝙾 𝙳𝙴 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙸𝙳𝙰𝙳 (𝙰𝙵𝙺): _le pesan las bolas_'}*
*—◉ 𝚃𝙸𝙴𝙼𝙿𝙾 𝚃𝚁𝙰𝙽𝚂𝙲𝚄𝚁𝚁𝙸𝙳𝙾 𝙳𝙴 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙸𝙳𝙰𝙳 (𝙰𝙵𝙺): ${(new Date - afkTime).toTimeString()}*
  `.trim())
    }
    return true
}
