const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category: 'utility',
	guildOnly: false,
	data: new SlashCommandBuilder()
		.setName('cucumber')
		.setDescription('replies with meow'),
	async execute(interaction) {
		await interaction.reply('meow');
		await interaction.followUp('chomp!');
	},
};