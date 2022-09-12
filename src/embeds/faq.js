// >> Modules
require('dotenv').config();
const { MessageEmbed } = require('discord.js');

// >> Imports
const dbCon = require('../../dbConnect.js');

// >> Variables
let embedName = 'FAQ';

// >> Main function
async function sendEmbed(interaction, client) {
	//Embed creation
	const embed = new MessageEmbed()
		.setColor('#FF3F41')
		.setAuthor({
			name: 'Frequently Asked Questions',
			iconURL: 'https://i.imgur.com/96a5Esg.png',
		})
		.addFields(
			{
				name: 'How to get Whitelisted?',
				value: 'Check <#955846367857758288> channel.\nWe\'ll capture everyone\'s wallet 15 days before the mint to prevent "ghost wallets". If you have a WL role, you will be then asked to send your Keplr wallet.\n⠀',
			},
			{
				name: 'Where can I ask a question?',
				value: 'You can contact our team by <#952592857557004342> or ask for help on a public channel. (<#952592857557004343>)\n⠀',
			},
			{
				name: 'How do you check your level?',
				value: `Type /rank and use our bot (<@${process.env.clientId}>) on <#${process.env.commandsChannel}> channel.\n⠀`,
			},
			{
				name: 'How do you level up?',
				value: 'You can gain exp by talking with others on the chat & interacting with our community events. Check our bulletin boards to stay updated.\n⠀',
			},
			{
				name: 'Do you want to collaborate with us?',
				value: 'Message our official Twitter account @LoopyLorisTribe with more details.\n⠀',
			},
			/*{
				name: 'What is the Coconut System?',
				value: 'By solving tasks on <#956225406531436554> & playing games on <#954769304849616936> you can earn coconuts. You use these coconuts to enter in our community giveaways. The more coconuts you earn, the more entries you can enter, thus raising your probability of winning.\n⠀',
			},
			{
				name: 'What are the utilities?',
				value: 'Check the <#952592856751673465> channel.\n⠀',
			},*/
			{
				name: 'What is a Slow Loris?',
				value: "It's a cute animal threatened with extinction. They spend their days now residing on the beach getting a nice tan.",
			}
		);

	const channel = await client.channels.fetch('952592856751673469');

	try {
		await channel.messages.fetch('961704154064101466').then((message) => {
			message.edit({
				embeds: [embed],
			});
		});
	} catch (error) {
		return;
	}
}

module.exports = { sendEmbed };
