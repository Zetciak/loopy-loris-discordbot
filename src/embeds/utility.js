// >> Modules
require('dotenv').config();
const { MessageEmbed } = require('discord.js');

// >> Main function
async function sendEmbed(interaction, client) {
	//Embed creation
	const embed = new MessageEmbed()
		.setColor('#a826ff')
		.setAuthor({
			name: '⚛️ Utility',
		})
		.setDescription(
			'- Access To The Alpha Group, Backed By A Powerful Community Of Market Makers & Gatekeepers\n- Access to in-depth market research, emerging trends, and blockchain technology information\n- Access to High-Quality NFT Projects Analysis, Calls, and WLs\n- Premium Guides, Courses, and Tools To Assist You In Navigating The $COSMOS\n- Insider Information - Learn about our project and other projects before they are made public.\n- Weekly educational sessions and AMAs with project founders, successful traders, and influencers will be held on a weekly basis.'
		)
		.setImage('http://54.37.232.208/loopyEmbedsGraphics/nftclass.png');

	const channel = await client.channels.fetch('979354721234063360');

	try {
		await channel.messages.fetch('979738414544986112').then((message) => {
			message.edit({
				embeds: [embed],
			});
		});
	} catch (error) {
		return;
	}
}

module.exports = { sendEmbed };
