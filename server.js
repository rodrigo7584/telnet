const net = require('net');

// Função para criar um servidor
const createServer = (port) => {
	const server = net.createServer((socket) => {
		console.log(`Novo cliente conectado na porta ${port}.`);

		// Envia uma mensagem ao cliente
		socket.write(`Conectado na porta ${port}!\n`);

		// Manipula os dados recebidos do cliente
		socket.on('data', (data) => {
			console.log(`Mensagem recebida na porta ${port}:`, data.toString());
		});

		// Manipula a desconexão do cliente
		socket.on('end', () => {
			console.log(`Cliente desconectado na porta ${port}.`);
		});
	});

	// Escuta na porta desejada
	server.listen(port, () => {
		console.log(`Servidor está rodando na porta ${port}.`);
	});
};

// Iniciar servidores em duas portas diferentes
createServer(443); // Porta 443
createServer(4095); // Porta adicional (exemplo)
