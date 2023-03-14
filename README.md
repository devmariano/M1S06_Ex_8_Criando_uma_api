<h1># M1S06_Ex_8_Criando_uma_api</h1>

Parte 1

Você foi convocado para criar uma API completa, levando todo o conhecimento aprendido, incluindo a arquitetura vista no slide Aula 01 página 09, crie duas rotas HTTP: uma para o envio de um novo usuário para o banco de dados, e outra para deletar o usuário.

Apenas crie a conexão do servidor node e as rotas em arquivos separados.

Não será necessária a implementação das funcionalidades;

Parte 2

Agora continuando o exercício anterior no módulo de controlador siga as seguintes regras de negócio de cada rota:

Envio de um novo usuário:

O objeto a ser enviado no corpo da requisição para controlador deve seguir o seguinte formato :
{
  "nome":"Fulano",
  "idade":18,
  "cargo":"junior"
  "senha":"12345678"
}
O método HTTP será o post com a rota da sua escolha;
Caso o usuário tenha idade menor que 21 anos não deverá prosseguir com a requisição, então retorne o objeto {“mensagem”: “Usuário não possui idade suficiente”};
Caso na requisição não seja enviado nada no seu corpo retorne com status 406 com o objeto {“mensagem”: “Está faltando dados para concluir a operação”};
Caso a operação seja um sucesso, retorne com status 200 o objeto {“mensagem”: “Criado com sucesso”};
Deletar o usuário:

Deverá ser passado na URL da requisição um id;
Verifique na url se o id é passado, caso contrário retorne com status 406 com o objeto {“mensagem”: “Está faltando dados para concluir a operação”};
Caso a operação seja um sucesso, retorne com status 200 o objeto {“mensagem”: “Deletado com sucesso”};
OBS: lembre de alterar os dados para que passe em todos os testes e sua API esteja 100%.

Parte 3
Agora para deixar nossa aplicação do exercício anterior mais completa, na rota de Envio de um novo usuário adicione um middleware que irá capturar o cargo do usuário. Só poderá prosseguir para a seguinte função se o cargo do usuário for igual a string “líder”.

‌

Lembre-se: um middleware é uma função que fica antes da chamada para o controlador ou antes da função da rota.

<h1>COMO TESTAR:</h1>

Para testar as rotas da API Express com as regras de negócio que você definiu, você pode utilizar uma ferramenta como o Postman ou o Insomnia.

<br>Baixe e instale o Postman ou o Insomnia em seu computador.
<br>Inicie o servidor da sua API Express executando o comando node index.js na linha de comando a partir do diretório raiz do seu projeto.
<br>Abra o Postman ou o Insomnia.
<br>Crie uma nova requisição POST para a URL http://localhost:3000/users.
<br>No corpo da requisição, adicione um objeto JSON com os dados de um novo usuário, por exemplo:
<br>
{
  "nome": "Fulano",
  "idade": 25,
  "cargo": "líder",
  "senha": "12345678"
}
<br>Envie a requisição.
<br>Caso o usuário tenha idade menor que 21 anos, você receberá uma resposta com status 400 e a mensagem "Usuário não possui idade suficiente".
<br>Caso a requisição não contenha todas as informações necessárias, você receberá uma resposta com status 406 e a mensagem "Está faltando dados para concluir a operação".
<br>Caso o usuário seja criado com sucesso, você receberá uma resposta com status 200 e a mensagem "Criado com sucesso".
<br>Crie uma nova requisição DELETE para a URL http://localhost:3000/users/:id, substituindo :id pelo id do usuário que você deseja deletar.
<br>Envie a requisição.
<br>Caso a requisição não contenha o id do usuário, você receberá uma resposta com status 406 e a mensagem "Está faltando dados para concluir a operação".
<br>Caso o usuário seja deletado com sucesso, você receberá uma resposta com status 200 e a mensagem "Deletado com sucesso".
