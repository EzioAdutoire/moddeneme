const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const nameles = new Discord.MessageEmbed()

  .setColor("BLACK")

  .setTitle('L I N G ✩ R D | M O D E R A T I O N')

  .addField("• | .ban",`__Etiketlediğiniz kullanıcıyı banlarsınız.__`)
  .addField("• | .unban",`__ID sini yazdığınız kişinin banını kaldırırsınız.__`)
  .addField("• | .ban-bilgi",`__Etiketlediğiniz kullanıcının ban siciline bakarsınız.__`)
  .addField("• | .sorgula",`__Seste kaç üye olduğunu görürsünüz.__`)
  .addField("• | .sesteki-yetkililer",`__Seste kaç yetkili olduğunu görürsünüz.__`)
  .addField("• | .gel",`__Sesli odaya gelme teklifi yaparsınız.__`)
  .addField("• | .git",`__Sesli odaya gitme teklifi yaparsınız.__`)
  .addField("• | .jail",`__Etiketlediğiniz kişiye jail atarsınız.__`)
  .addField("• | .unjail",`__Etiketlediğiniz kişinin jailini kaldırırsınız.__`)
  .addField("• | .mute",`__Etiketlediğiniz kişiye mute atarsınız.__`)
  .addField("• | .unmute",`__Etiketlediğiniz kişinin mutesini açarsınız.__`)
  .addField("• | .vmute",`__Etiketlediğiniz kişiye sesli mute atarsınız.__`)
  .addField("• | .vunmute",`__Etiketlediğiniz kişinin sesli mutesini açarsınız.__`)
  .addField("• | .channel-set",`__Etiketlediğiniz kanalı toplantı olarak ayarlar.__`)
  .addField("• | .staff-set",`__Etiketlediğiniz rolü toplantı yetkilisi olarak ayarlar.__`)
  .addField("• | .toplantı",`__Yetkililer için toplantı başlatırsınız.__`)
  .addField("• | .sicil",`__Sicilinize bakarsınız.__`)
  .addField("• | .sicil-sıfırla",`__Etiketlediğiniz kişinin sicilini sıfırlarsınız sadece **sahipler** içindir.__`)
  .addField("• | .rol-al",`__Etiketlediğiniz kişiden belirttiğiniz rolü alırsınız.__`)
  .addField("• | .rol-ver",`__Etiketlediğiniz kişiye belirttiğiniz rolü verirsiniz.__`)
  .addField("• | .say",`__Sunucudaki üye sayısını görürsünüz.__`)
  .addField("• | .tag-say",`__Sunucuda kaç taglı üye olduğunu görürsünüz.__`)
  .addField("• | .ses-kes",`__Etiketlediğiniz kişiyi sesten atarsınız.__`)
  .addField("• | .temizle",`__100 e kadar belirtilen sayıda mesaj silersiniz.__`)
  .addField("• | .snipe",`__Son silinen mesajları gösterir.__`)

  .setDescription("L I N G ✩ R D | M O D E R A T I O N bilgilendirme menüsü" )
  .setThumbnail("")
  

 message.channel.send(nameles)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ['help', 'h', 'y', 'yardım']

}

exports.help = {

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}