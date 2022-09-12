// >> Modules
require('dotenv').config();
const { MessageEmbed } = require('discord.js');

// >> Main function
async function sendEmbed(interaction, client) {
	//Embed creation
	const embed = new MessageEmbed()
		.setColor('#2696ff')
		.setAuthor({
			name: '🌐 Insider Info',
		})
		.setDescription('Soon!')
		.setImage('http://54.37.232.208/loopyEmbedsGraphics/insider.png');

	const channel = await client.channels.fetch('970704345161146408');

	try {
		await channel.messages.fetch('970704508525105152').then((message) => {
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
	});*/
}

module.exports = { sendEmbed };
