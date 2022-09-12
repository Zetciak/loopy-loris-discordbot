// >> Modules
require('dotenv').config();
const { MessageEmbed } = require('discord.js');

// >> Variables
let color = '#e8e8e8';
let title = '📩 Mod applications';

let sendedMessage = false;
let channelId = '979834033074749471';
let messageId = '980835793390166026';

// >> Main function
async function sendEmbed(interaction, client) {
	//Embed creation
	const embed = new MessageEmbed()
		.setColor(color)
		.setAuthor({
			name: title,
		})
		.setDescription(
			'If you are interested in joining our team please post the following information below:\n\n- Where are you from\n- Your timezone & Availability\n- Your prior moderating experience\n- What Cryptos you are educated on\n- How many projects are you currently working on\n- Your English grammar skills on a scale of 1-10\n- Any other skills you have besides moderating (Marketing, Researchers, Graphic Design, Coding)'
		);

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
