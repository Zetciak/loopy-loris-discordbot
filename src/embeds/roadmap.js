// >> Modules
require('dotenv').config();
const { MessageEmbed } = require('discord.js');

let roadmap1 = [
	{
		name: 'Market Research 🌐',
		value: "Cosmos ecosystem research, buyer persona & psychology of a typical web3/Cosmos user. Research on successful NFT projects. All of that and more has led us to have the best fundamentals possible. With strong fundamentals, well planned marketing strategies and the essentials of every project such as a sensible and orderly marketing calendar, utilities with real value and a long-term plan on organically building a project. Market research is the most important part of every project, that's why this one took us over 2 weeks on dozens of successful projects. Thanks to our market research we pinpointed what to create and how to do it!\n⠀",
	},
	{
		name: 'Team Formation 🙋',
		value: "We believe a project without a great team is nothing. For that reason we have one of the best marketers, strategists & community managers on Cosmos with a lot of experience in Cosmos NFTs. More importantly, every member of our team is a Cosmonaut. We had interviews with over 30 people. Some didn't pass our short trial test (to most, we said “thank you” on the spot) and that led us to 8 strong, hard-working and knowledgeable members.\n⠀",
	},
	{
		name: 'Creating Marketing Strategy ✍️',
		value: 'Foundation & utility are important but even a project with the best utility and art is doomed to fail without good marketing. We believe the most efficient way of growing a NFT project on Cosmos is organically through games, activities and giving value to its community. No spammy giveaways and NO paid advertisement on which some projects are based on. That’s a good way to get ghost numbers - but not an active and genuine community. We first focused on building a tight knit community by giving value and playing around with utility and it has worked. With a strong foundation of followers we will dominate the space through partnerships and added value. \n⠀',
	},
	{
		name: 'Community Building 👨‍👨‍👦‍👦',
		value: 'As  stated in the marketing strategy - we are focusing mostly on organic growth based on the free value that we are giving inorder to build a foundation with a nice community! When we have reached 2k followers we will start with partnerships, recurring giveaways and more fun activities, games, events on the Discord. We still have more exciting things to reveal that will help everyone find their place in our family and keep it fun! We will take care of every single member whether you feel lonely, need any help or you just want to have a lighthearted conversation.\n⠀',
	},

	{
		name: 'Developing Lasting Relationships 🤝',
		value: "The Cosmos NFT space should be opposite to that of ETH. A strong sense of ethics and collaboration is the path to success. That's what we believe Cosmos will become in the future. Cooperation over competition so everyone wins! Building a strong network of projects and Cosmos influencers will aid us in building a high quality project with creative and new possibi",
	},
];

let roadmap2 = [
	{
		name: 'Determination of Mint Details With the Community 👀',
		value: 'A project without a community is nothing. So why not allow the community to decide the supply, price and all the mint details in a democratic way? After the mint details have been voted on by the community, they will be displayed on socials with no possibility of change.\n⠀',
	},
	{
		name: 'Mint Phase 🥇',
		value: 'WL mint will be followed by the public mint. The entire team will be on standby to resolve any technical problems from the project or marketplace. We’ll also be in our Discord to answer any and all possible questions. We hope for a bot-less mint and a smooth transition to the next step.\n⠀',
	},
	{
		name: 'Marketplace Listing 🎯',
		value: 'The collection goes on a secondary marketplace. After 2 weeks, we will brainstorm ways to gradually raise and maintain the floor price. A decision tree based on different situations has already been prepared. The most important factor in our decision is the floor price.\n⠀',
	},
	{
		name: 'Rarity Checker 💎',
		value: 'Soon after the secondary market goes live we will have a rarity tool in our Discord to check the rarity of your NFT based on ranking and traits. This is one of the many tools we have prepared for the community.\n⠀',
	},
	{
		name: 'Private Access To Tools 🔨',
		value: 'Other tools include; Price Finder, Sales Tracker, Floor Sweeper, Whale Tracker & Bid Tracker. Our developer has worked tirelessly to bring these to Cosmos! Information will be released closer to mint explaining every tool available.\n⠀',
	},
	{
		name: 'Holders Only & Utility Channels 🧙',
		value: 'Every holder that verifies their NFT will have access to a holders channel where you have access to Insider Info, NFT Cosmos class and new tools to help you profit in the marketplace. NFT Cosmos Class will be closed to the public and visible for holders after mint (however, there will be sessions and live streams before the mint to showcase the class).\n⠀',
	},
	{
		name: 'Donating Money To Charity 💖',
		value: 'We will be donating a percentage of our mint revenue to a charity of the community’s choosing. It can be for endangered animals, environment preservation or split between different organizations. It is all up to the community!',
	},
];

let roadmap3 = [
	{
		name: 'Treasury Wallet 🦜',
		value: 'More than 50 Loopy Loris NFTs will go into the treasury to be won by the community through games and giveaways.\n⠀',
	},
	{
		name: 'Reoccurring Giveaways 🏆',
		value: "The mint doesn't mean it's over! We'll be still working and engaging with our community in different ways and creating more hype! Giveaways, activities, events and games will allow all members, not just NFT holders a chance to win. Regular WL giveaways will also be held. Holders and non-holders will benefit.\n⠀",
	},
	{
		name: 'Strategic Marketing by Doing More Growth Activations 🏃🏻',
		value: 'After the mint and successful delivery of the road map we should have gained trust in the Cosmonaut and Cosmos community. The more our community grows and the more trust we earn in the community the more collaborations with big projects we can make.We want the project to continue to grow in strength and speed to keep the floor price high. This will aid our project in the near future. We have planned for the next 2-3 years, but we also have crazy stuff for the next few months after mint.\n⠀',
	},
	{
		name: '[REDACTED] For Whales… 🤐',
		value: '⠀',
	},
	{
		name: '[REDACTED] For Holders… 🤐',
		value: '⠀',
	},
];

// >> Main function
async function sendEmbed(interaction, client) {
	//Embed creation
	const embed1 = new MessageEmbed()
		.setColor('#ff5c33')
		//.setAuthor({
		//	name: '💥 Earthquake 💥',
		//})
		.setTitle('💥 Phase One: Earthquake 💥')
		.addFields(roadmap1);
	//Embed creation
	const embed2 = new MessageEmbed()
		.setColor('#3399ff')
		//.setAuthor({
		//	name: '🌎 Traveling 🌎',
		//})
		.setTitle('🌎 Phase Two: Traveling 🌎')
		.addFields(roadmap2);
	//Embed creation
	const embed3 = new MessageEmbed()
		.setColor('#a3ff33')
		//.setAuthor({
		//	name: '🌴 Paradise 🌴',
		//})
		.setTitle('🌴 Phase Three: Paradise 🌴')
		.addFields(roadmap3)
		.setImage('http://54.37.232.208/loopyEmbedsGraphics/roadmap.png');

	const channel = await client.channels.fetch('952592856751673465');

	try {
		await channel.messages.fetch('956661479652880444').then((message) => {
			message.edit({
				embeds: [embed1, embed2, embed3],
			});
		});
	} catch (error) {
		return;
	}
	/*const message = await interaction.channel.send({
		embeds: [embed1, embed2, embed3],
	});*/
}

module.exports = { sendEmbed };
