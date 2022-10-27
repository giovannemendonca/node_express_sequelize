module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Niveis', [
			{
				descr: 'básico',
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				descr: 'intermediário',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				descr: 'avançado',
				createdAt: new Date(),
				updatedAt: new Date()
			} 
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Niveis', null, {})
  }
}
