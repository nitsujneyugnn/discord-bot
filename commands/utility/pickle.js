const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category: 'utility',
	guildOnly: false,
	data: new SlashCommandBuilder()
		.setName('pickle')
		.setDescription('replies discreetly with meow'),
	async execute(interaction) {
		await interaction.reply({ content: 'secret meow', ephemeral: true });
	},
};