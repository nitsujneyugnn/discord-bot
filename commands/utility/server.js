const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category: 'utility',
	guildOnly: false,
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('gives info about the server.'),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply(`${interaction.guild.name} has ${interaction.guild.memberCount} members`);
	},
};