// >> Modules
require('dotenv').config();
const { MessageEmbed } = require('discord.js');

// >> Imports
const dbCon = require('../../dbConnect.js');

// >> Variables
let embedName = 'CoconutTasks';

// >> Main function
async function sendEmbed(interaction, client) {
	//Embed creation
	const embed = new MessageEmbed()
		.setColor('#d1d1d1')
		.setTitle('🥥⠀Tasks')
		.setDescription(
			`You can get coconuts by doing special tasks. If you’ve done a task, post a screenshot/photo proof in <#966075650467328061> with a few words description about which task is this. Each task has its own time in the brackets after which you can re-do the task.\n\n**3 🥥** - Daily check-in, see bottom of channel.\n**5 🥥** - Post a Screenshot of your RT on our Latest Twitter post\n**5 🥥** - Post a project improvement idea in <#952592857108193304> (1 week)\n**15 🥥** - Create a meme/GIF in our project’s theme in <#952592857108193301> - top 3 memes with the most reactions of the week win (1 week)\n**10 🥥** - Win a gaming session - <#954769022522638336> (1 week)\n**15 🥥** - Post an improvement idea in <#952592857108193304> - top 3 ideas of the week wins (2 weeks)\n**5 🥥** - Play a FULL game night (1 week)\n**15 🥥** - Create a loopy loris fan-art (2 weeks)\n**10 🥥** - Boost our server (1 per month)\n**5 🥥** - Follow and turn on Twitter notifications (1 time)\n**5 🥥** - Flex your OG or WL on Twitter (1 time)\n**15 🥥** - Invite 20 friends to our Discord (1 time)\n**10 🥥** - Reach Level 10 (1 time)\n**20 🥥** - Reach Level 15 (1 time)\n**30 🥥** - Reach Level 20 (1 time)\n**40 🥥** - Reach Level 25 (1 time)\n\nWhile posting a re-do task your proof must contain the date + screenshot of the last time you did the task (we can confirm the time limit thanks to this).\nAfter you post your proof we'll give you your coconuts within 12h.\nIf you have any bonus questions please <#952592857557004342>\n\nType **/coconuts** or **/topcoconuts** in <#952592857108193306> to check how many coconuts you have.`
		)
		.setImage('http://54.37.232.208/loopyEmbedsGraphics/earn.png');

	/*const message = await interaction.channel.send({
		embeds: [embed],
	});*/

	const channel = await client.channels.fetch('965980074694287450');

	try {
		await channel.messages.fetch('966708045054877696').then((message) => {
			message.edit({
				embeds: [embed],
			});
		});
	} catch (error) {
		return;
	}
}

module.exports = { sendEmbed };
