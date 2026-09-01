document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registro-servico');

  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const aparelho = document.getElementById('aparelho').value.trim();
    const descricao = document.getElementById('problema').value.trim();

    try {
      if (!nome || !email || !telefone || !aparelho || !descricao) {
        alert('Preencha todos os campos obrigatórios.');
        return;
      }
      const response = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome,
          email,
          telefone,
          aparelho,
          descricao,
          status: 'Pendente'
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.erro || 'Erro ao registrar serviço');
      }

      console.log('Serviço salvo:', data);
      alert('Serviço registrado com sucesso!');
      form.reset();

    } catch (error) {
      console.error(error);
      alert('Erro ao registrar serviço: ' + error.message);
    }
  });
});
