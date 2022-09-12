// >> Modules
require('dotenv').config();
const { MessageEmbed } = require('discord.js');

// >> Main function
async function sendEmbed(interaction, client) {
	//Embed creation
	const embed = new MessageEmbed()
		.setColor('90FF59')
		.setAuthor({
			name: 'Only the links below are official',
			iconURL: 'https://i.imgur.com/yzsndlI.png',
		})
		.setDescription(
			'Discord: https://discord.gg/loopyloristribe\nTwitter: https://twitter.com/LoopyLorisTribe\nPage: https://loopyloristribe.com'
		)
		.setFooter({
			text: 'DO NOT CLICK ON LINKS FROM OTHER PLACES!',
		});

	const channel = await client.channels.fetch('952592856751673464');

	try {
		await channel.messages.fetch('970328193271738378').then((message) => {
			message.edit({
				embeds: [embed],
			});
		});
	} catch (error) {
		return;
	}
}

module.exports = { sendEmbed };
