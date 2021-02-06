const rules = (name, uptime, tanggal, jam, prefix) => {
return `
           ⚠ *REGULATION* ${name} ⚠ 
🔛 *AKTIF* : ${kyun(uptime)}
⏰ *JAM* : ${jam} *WIB*
📅 *TANGGAL* : *${tanggal}*
🆚 *VERSION* : *6.5.0 TERMUX*

📨 ❌ *SPAM*
📞 ❌ *CALL & VC*
*Melanggar??* ⛔ *Banned* ⛔ 

🆘 *Bugs??* 🆘
 1. *creator*

               🔔 *NOTE* ${name} 🔔
🛂 *KASIH BOT JEDA BIAR GA ERROR!!!!*
*Bot ini belum selesai sepenuhnya*
*Masih dalam proses pengerjaan*
*Jadi masih jarang aktif, dan*
*Maaf Jika Ada Menu Yang Error*
*Jika Lama Harap Ulangi Command*

🛂 *Gunakan Command Tanpa [ ]*

🛂 *Dan Jika Mengalami Error*
*Harap Lapor Owner Dengan Cara*
*${prefix}report* *apa pesan errornya*

🆒 *Mau Invit Bot?? Donasi Gan,*

🆓 *Kalian Bisa Mempublish Quotes Kalian*
*Jika Minat Hubungi Aja Owner Buat*
*Mempublish*
*Quotes Kalian,*
*Dan Makasih Buat Temen" Yg Mau Di Public Quotesnya:)*

📣 *Kenapa Saya Tambahkan Fitur Premium*
*Seperti Yang Kalian Tahu Karna Fitur Tersebut*
*Membutuhkan Kuota Banyak Untuk Mendownload*
*Dan Mengirimkan Audio/ Video Yang*
*Anda Minta Mohon Pengertiannya🙂*

`
}
exports.rules = rules
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}