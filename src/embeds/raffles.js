// >> Modules
require('dotenv').config();
const { MessageEmbed } = require('discord.js');

// >> Main function
async function sendEmbed(interaction, client) {
	//Embed creation
	const embed = new MessageEmbed()
		.setColor('#d1d1d1')
		.setTitle('🥥⠀Raffle')
		.setDescription(
			`The first giveaway is coming in the next week. Prepare and get as many coconuts as possible to be able to buy more tickets and have a higher chance of winning!`
		)
		.setImage('http://54.37.232.208/loopyEmbedsGraphics/raffle.png');

	const channel = await client.channels.fetch('954446622140547122');

	try {
		await channel.messages.fetch('966101771632132176').then((message) => {
			message.edit({
				embeds: [embed],
			});
		});
	} catch (error) {
		return;
	}
	/*
	const message = await interaction.channel.send({
		embeds: [embed],
	});
	*/
}

module.exports = { sendEmbed };
