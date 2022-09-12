// >> Modules
const { MessageEmbed } = require('discord.js');
require('dotenv').config();
const axios = require('axios');
const cheerio = require('cheerio');

// >> Imports
const dbCon = require('../../dbConnect.js');

// >> Main function
async function mainFunction(message, client) {
	if (message.channel.id === '954749957481594960') {
		let content = message.content;
		if (Number(content)) {
			content = Number(content);
			if (content <= 2222 && content >= 1) {
				const { data } = await axios.get(
					`https://www.hubble.tools/collections/loopy-loris-tribe/tokens/${content}`
				);
				const $ = cheerio.load(data);
				let sad = $('h3').html();
				if (sad === '* UNMINTED') {
					embed = new MessageEmbed()
						.setColor(process.env.command_permissions_error_color)
						.setAuthor({
							name: '❌ Error!',
						})
						.setDescription('This NFT is not minted!');
					await message.reply({
						embeds: [embed],
					});
				} else {
					dbCon.query(
						`SELECT * FROM lp_nfts WHERE nftId="${content}" LIMIT 1`,
						async function (error, result, fields) {
							if (error) {
								console.log(error);
							} else {
								if (result.length > 0) {
									//NFT FOUND SEND EMBED AAAAAAAAA

									let rarityProc = (
										(Number(result[0].rarityTop) / 2222) *
										100
									).toFixed(2);

									let traits = '';
									traits = `${traits} **Background:** \` ${result[0].Background} \`\n`;
									traits = `${traits} **Clothes*:* \` ${result[0].Clothes} \`\n`;
									traits = `${traits} **Eyes:** \` ${result[0].Eyes} \`\n`;
									traits = `${traits} **Fur:** \` ${result[0].Fur} \`\n`;
									traits = `${traits} **Hat:** \` ${result[0].Hat} \`\n`;
									traits = `${traits} **Mouth:** \` ${result[0].Mouth} \``;

									const embed = new MessageEmbed()
										.setColor('#fcca03')
										.setTitle(`Loopy Loris #${content}`)
										.setURL(
											`https://app.stargaze.zone/marketplace/stars123eahekleqvqdsmngy8ejheaf9tez43zxf2hh99sc9d3hgv7nvxse9qd2n/${content}`
										)
										.setTimestamp()
										.setImage(
											`https://stargaze.mypinata.cloud/ipfs/QmPpzvk9GVPjDWw3iDjsXbbpZxT5CCURrqv78TiTKCGKJB/${content}.png?img-width=500&img-fit=scale-down&img-anim=false&img-format=auto`
										)
										.setAuthor({
											name: 'Loopy Loris Tribe',
											iconURL:
												'https://i.imgur.com/glXG0TL.png',
											url: `https://loopyloristribe.com/`,
										})
										.addFields(
											{
												name: '💎 Rank',
												value: `\` ${result[0].rarityTop} / 2222 \``,
												inline: true,
											},
											{
												name: '✨ Top',
												value: `\` ${rarityProc}% \``,
												inline: true,
											},
											{
												name: '⠀\n👕 Traits',
												value: traits,
												inline: false,
											}
										);

									await message.reply({
										embeds: [embed],
									});
								} else {
									embed = new MessageEmbed()
										.setColor(
											process.env
												.command_permissions_error_color
										)
										.setAuthor({
											name: '❌ Error!',
										})
										.setDescription('Error finding NFT!');
									await message.reply({
										embeds: [embed],
									});
								}
							}
						}
					);
				}
			} else {
				embed = new MessageEmbed()
					.setColor(process.env.command_permissions_error_color)
					.setAuthor({
						name: '❌ Error!',
					})
					.setDescription('Error finding NFT!');
				await message.reply({
					embeds: [embed],
				});
			}
		} else {
			embed = new MessageEmbed()
				.setColor(process.env.command_permissions_error_color)
				.setAuthor({
					name: '❌ Error!',
				})
				.setDescription('Error finding NFT!');
			await message.reply({
				embeds: [embed],
			});
		}
	}
}

module.exports = { mainFunction };
