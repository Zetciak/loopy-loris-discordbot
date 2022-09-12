// >> Modules
require('dotenv').config();
const { MessageEmbed } = require('discord.js');

// >> Imports
const dbCon = require('../../dbConnect.js');
const expCounter = require('./../otherFunctions/expCounter.js');
const ssProof = require('./../otherFunctions/ssProof.js');
const rarityCheck = require('./../otherFunctions/rarityCheck.js');

// >> Functions
module.exports = {
	name: 'messageCreate',
	async execute(message, client) {
		// SS Proof channel
		ssProof.mainFunction(message, client);

		// Rarity channel
		if (message) {
			if (message.author.bot === false) {
				rarityCheck.mainFunction(message, client);
			}
		}

		// Message on ss proof
		if (message)
			if (message.author.bot === false) {
				//CHECK WALLET SUBMIT
				if (message.channel.id === '988946399959867445') {
					let wallet = message.content;
					let embed;
					if (!wallet.search('stars1') && wallet.length === 44) {
						if (
							message.member.roles.cache.some(
								(role) => role.id === '952592856038666313'
							) ||
							message.member.roles.cache.some(
								(role) => role.id === '952592856038666311'
							)
						) {
							dbCon.query(
								`UPDATE lp_users SET wallet='${wallet}' WHERE user_id='${message.author.id}'`,
								async function () {}
							);
							embed = new MessageEmbed()
								.setColor(process.env.command_success_color)
								.setAuthor({
									name: '✔️ Success!',
								})
								.setDescription(
									'The address has been successfully linked to your account!'
								);
						} else {
							embed = new MessageEmbed()
								.setColor(
									process.env.command_permissions_error_color
								)
								.setAuthor({
									name: '❌ Error!',
								})
								.setDescription(
									"You don't have <@&952592856038666313> or <@&952592856038666311> role!"
								);
						}
					} else {
						embed = new MessageEmbed()
							.setColor(
								process.env.command_permissions_error_color
							)
							.setAuthor({
								name: '❌ Error!',
							})
							.setDescription(
								'The address provided is not valid!'
							);
					}

					await message.reply({
						embeds: [embed],
					});
				}

				// Message counting
				expCounter.checkExp(message);
				//Database querry
				dbCon.query(
					`SELECT createdMessages FROM lp_users WHERE user_id='${message.author.id}'`,
					async function (err, result, fields) {
						if (err) {
							console.log(err);
						} else {
							if (result.length > 0) {
								let messages =
									Number(result[0].createdMessages) + 1;
								dbCon.query(
									`UPDATE lp_users SET createdMessages='${messages}' WHERE user_id='${message.author.id}'`,
									async function () {}
								);
							}
						}
					}
				);
			}
	},
};
