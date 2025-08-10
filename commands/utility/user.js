const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category: 'utility',
	guildOnly: false,
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('gives info about the user'),
	async execute(interaction) {
		await interaction.reply(`${interaction.user.username} joined this server on ${interaction.member.joinedAt}`);
	},
};