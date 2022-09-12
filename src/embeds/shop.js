// >> Modules
require('dotenv').config();
const { MessageEmbed } = require('discord.js');

// >> Imports
const dbCon = require('../../dbConnect.js');

// >> Variables
let embedName = 'CoconutShop';

let sendedMessage = true;
let channelId = '965980074694287450';
let messageId = '966708035848372274';

// >> Main function
async function sendEmbed(interaction, client) {
	//Embed creation
	const embed = new MessageEmbed()
		.setColor('#d1d1d1')
		.setTitle('🥥⠀Shop')
		.setDescription(
			`With coconuts, you can buy entries to special giveaways with NFT, WL prizes, and other valuable things. You can also buy additional things from the shop if you don’t want to save your coconuts for the Coconut Giveaway.\n\n**5 🥥** - 1 entry to a Coconut Giveaway (no entry limit)\n**50 🥥** - Whitelist Spot\n**200 🥥** - Coconut role\n**X 🥥** - Free NFT\n**X 🥥** - [REDACTED]\n\n(Buying entries to giveaways will be available in <#954446622140547122> 2 days before every Coconut Giveaway). The more entries you’ve bought the higher your chance of winning you have. There will be a giveaway every 1-2 weeks. Please create a ticket if you want to buy a WL or Coconut Role with coconuts.`
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
