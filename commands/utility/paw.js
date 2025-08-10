const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category: 'utility',
	guildOnly: false,
	data: new SlashCommandBuilder()
		.setName('paw')
		.setDescription('flips his paw for yes or no'),
	async execute(interaction) {
		const result = Math.random() < 0.5 ? 'yes' : 'no';
		const catSounds = ['meow', 'chomp!', 'meEeeOoow!!?', 'purrr'];
		const randomSound = catSounds[Math.floor(Math.random() * catSounds.length)];
		await interaction.reply({ content: `${result}-${randomSound}` });
	},
};