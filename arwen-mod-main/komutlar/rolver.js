const wenzy = require('discord.js');

exports.run = async (client, message, args) => {
                const ayarlar = require('../ayarlar.json')
                    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

      if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(new wenzy.MessageEmbed().setDescription('**Bu komudu kullanmak için **Rolleri Yönet** yetkisine sahip olmalısın** <a:axze_iptal:929762366692929616>').setColor(10038562));
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
var role = message.mentions.roles.first() || message.guild.roles.cache.find(a => a.name == args.slice(1).join(' '));
if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('**Bu komutu kullanabilmek için "\`Rolleri Yönet\`" yetkisine sahip olmalısın** <a:axze_iptal:929762366692929616>');
if (!member) return message.channel.send('**Lütfen bir kullanıcıyı etiketleyin veya ismini yazın.**');
if (!role) return message.channel.send(' **Rol bulumadaım.**');
  if (message.member.roles.highest.comparePositionTo(role) < 1) {
  return message.channel.send(`Bu rol senin yetkinden üstün veya yetkine eşit bir rol maalesef veremem <a:axze_iptal:929762366692929616>`);
  }

  try{
await (member.roles.add(role.id))
 message.channel.send(new wenzy.MessageEmbed().setDescription(`${member} isimli üyeye \`${role.name}\` isimli yetki başarıyla verildi <a:axze_onay:929763543618830416>`)  .setFooter('Bu komutu kullanan yetkili ' + message.author.tag, message.author.avatarURL).setColor('#D2EE07'));
    
  } catch (e) {
    console.log(e);
    message.channel.send('Hata oluştu!');
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolver'],
  permLevel: 0
};

exports.help = {
  name: 'rol-ver',
  description: 'Belirttiğiniz kullanıcıya belirttiğiniz rolü verir.',
  usage: 'rol-ver'
};