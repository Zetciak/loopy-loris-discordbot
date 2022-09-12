// >> Modules
require('dotenv').config();
const { MessageEmbed } = require('discord.js');

// >> Variables
let color = '#ffd129';
let title = '🚀 Influencer chat';

let sendedMessage = true;
let channelId = '984089075243941908';
let messageId = '984090061765230602';

// >> Main function
async function sendEmbed(interaction, client) {
	//Embed creation
	const embed = new MessageEmbed()
		.setColor(color)
		.setAuthor({
			name: title,
		})
		.setDescription('You are a key part of the community');

	if (sendedMessage === true) {
		const channel = await client.channels.fetch(channelId);
		try {
			await channel.messages.fetch(messageId).then((message) => {
				message.edit({
					embeds: [embed],
				});
			});
		} catch (error) {
			return;
		}
	} else {
		const message = await interaction.channel.send({
			embeds: [embed],
		});
	}
}

module.exports = { sendEmbed };
