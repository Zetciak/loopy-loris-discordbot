// >> Modules
require('dotenv').config();
const { MessageEmbed } = require('discord.js');

// >> Main function
async function sendEmbed(interaction, client) {
	//Embed creation
	const embed = new MessageEmbed()
		.setColor('#33a3ff')
		.setAuthor({
			name: '💳 Wallet submit',
		})
		.setDescription(
			'If you have the <@&952592856038666311> or <@&952592856038666313> role, send your stargaze wallet here to access wl mint phase!\n\n**Sample address:**\nstars1fgnfg2gnxhkmcc8agpph6jm6xdn236jehmydfd'
		);

	const channel = await client.channels.fetch('988946399959867445');

	try {
		await channel.messages.fetch('988947534800117830').then((message) => {
			message.edit({
				embeds: [embed],
			});
		});
	} catch (error) {
		return;
	}

	/*const message = await interaction.channel.send({
		embeds: [embed],
	});*/
}

module.exports = { sendEmbed };
