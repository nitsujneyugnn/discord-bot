const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category: 'utility',
	guildOnly: false,
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('cucumber will say your message')
		.addStringOption(option =>
			option.setName('message')
				.setDescription('What the bot should say')
				.setRequired(true)),
	async execute(interaction) {
		const message = interaction.options.getString('message', true);
		const catSounds = ['meow', 'chomp!', 'meEeeOoow!!?', 'purrr'];
		const randomSound = catSounds[Math.floor(Math.random() * catSounds.length)];
		await interaction.reply({ content: `${message}-${randomSound}` });
	},
};