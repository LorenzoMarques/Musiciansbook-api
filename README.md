<h1 align="center">MusiciansBook</h1>

# Tabela de conteúdo

- [Sobre](#Sobre)
- [Front-end](#front-end)
- [Integrantes](#Integrantes)
- [Aplicação](#Aplicação)
- [Rotas](#Rotas)
  - [USERS](#USERS)
  - [SONGS](#SONGS)
  - [IMAGES](#IMAGES)
  - [FEED](#FEED)
  - [CHAT](#CHAT)
- [Tecnologias](#Tecnologias)

<head>
	<h1>Documentação da API MusiciansBook</h1>
</head>
<div>
	<h1 id="USERS">Rota de Usuários</h1>
<h2>Listar usuários - GET</h2>

<p><strong>Endpoint:</strong> /users</p>

<h3>Request</h3>
<h4>Parâmetros</h4>

<table>
	<tr>
		<th>Parâmetro</th>
		<th>Tipo</th>
		<th>Descrição</th>
	</tr>
	<tr>
		<td>Nenhum</td>
		<td>Nenhum</td>
		<td>Nenhum</td>
	</tr>
</table>

<h4>Headers</h4>
<pre>
Authorization: token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvcmVuem9AbWFpbC5jb20iLCJpYXQiOjE2ODAxNzYzODksImV4cCI6MTY4MDI2Mjc4OSwic3ViIjoiNTZhYmZmY2YtYzQwZS00MGFlLTllN2MtODIzMzdhYTcwMzFkIn0.Sb1wQCyGdFldZKnJ622_nrjvEBpdnlzUPJ3webFBIDM
</pre>

<h3>Response</h3>
<pre>
{
	"id": "7e1d7dd7-919e-4cc2-909d-87fa13187cea",
	"name": "Jhon Doe",
	"email": "test@mail.com"
},
{
	"id": "d5e92e97-0953-4824-8f47-7965a45730ed",
	"name": "Mary Christmas",
	"email": "mary@mail.com"
},
</pre>

<h2>Listar um usuário - GET</h2>

<p><strong>Endpoint:</strong> /users/{id}</p>

<h3>Request</h3>
<h4>Parâmetros</h4>

<table>
	<tr>
		<th>Parâmetro</th>
		<th>Tipo</th>
		<th>Descrição</th>
	</tr>
	<tr>
		<td>id</td>
		<td>string</td>
		<td>Identificador único do usuário</td>
	</tr>
</table>

<h4>Headers</h4>
<pre>
Authorization: token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvcmVuem9AbWFpbC5jb20iLCJpYXQiOjE2ODAxNzYzODksImV4cCI6MTY4MDI2Mjc4OSwic3ViIjoiNTZhYmZmY2YtYzQwZS00MGFlLTllN2MtODIzMzdhYTcwMzFkIn0.Sb1wQCyGdFldZKnJ622_nrjvEBpdnlzUPJ3webFBIDM
</pre>

<h3>Response</h3>
<pre>
{
	"id": "7e1d7dd7-919e-4cc2-909d-87fa13187cea",
	"name": "Jhon Doe",
	"email": "test@mail.com"
}
</pre>

<h2>Listar posts de um usuário - GET</h2>

<p><strong>Endpoint:</strong> /users/posts/{id}</p>

<h3>Request</h3>
<h4>Parâmetros</h4>

<table>
	<tr>
		<th>Parâmetro</th>
		<th>Tipo</th>
		<th>Descrição</th>
	</tr>
	<tr>
		<td>id</td>
		<td>string</td>
		<td>Identificador único do usuário</td>
	</tr>
</table>

<h4>Headers</h4>
<pre>
Authorization: token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvcmVuem9AbWFpbC5jb20iLCJpYXQiOjE2ODAxNzYzODksImV4cCI6MTY4MDI2Mjc4OSwic3ViIjoiNTZhYmZmY2YtYzQwZS00MGFlLTllN2MtODIzMzdhYTcwMzFkIn0.Sb1wQCyGdFldZKnJ622_nrjvEBpdnlzUPJ3webFBIDM
</pre>

<h3>Response</h3>
<pre>
{
	"user": {
		"id": "56abffcf-c40e-40ae-9e7c-82337aa7031d",
		"name": "Lorenzo",
		"email": "lorenzo@mail.com"
	},
	"followers": 2,
	"images": [
		{
			"id": "f03fdc66-05b2-4570-92ad-c1ec52adf663",
			"created_at": "Tue Mar 14 2023 18:56:20 GMT+0000 (Coordinated Universal Time)",
			"name": "image1.png",
			"user_id": "56abffcf-c40e-40ae-9e7c-82337aa7031d",
			"url": "https://url.com/1678820179910.png",
			"text": "Teste"
		}
	],
	"songs": [
		{
			"id": "5850f50c-8d47-4ebb-9690-702aee0f5de9",
			"created_at": "Tue Mar 14 2023 18:59:39 GMT+0000 (Coordinated Universal Time)",
			"name": "song.mp3",
			"user_id": "56abffcf-c40e-40ae-9e7c-82337aa7031d",
			"text": "Hey yah!",
			"url": "https://url.com/1678820376382.mp3"
		}
	]
}
</pre>

<h2>Validar token de um usuário - GET</h2>

<p><strong>Endpoint:</strong> /users/validate</p>

<h3>Request</h3>
<h4>Parâmetros</h4>

<table>
	<tr>
		<th>Parâmetro</th>
		<th>Tipo</th>
		<th>Descrição</th>
	</tr>
	<tr>
		<td>nenhum</td>
		<td>nenhum</td>
		<td>nenhum</td>
	</tr>
</table>

<h4>Headers</h4>
<pre>
Authorization: token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvcmVuem9AbWFpbC5jb20iLCJpYXQiOjE2ODAxNzYzODksImV4cCI6MTY4MDI2Mjc4OSwic3ViIjoiNTZhYmZmY2YtYzQwZS00MGFlLTllN2MtODIzMzdhYTcwMzFkIn0.Sb1wQCyGdFldZKnJ622_nrjvEBpdnlzUPJ3webFBIDM
</pre>

<h3>Response</h3>
<pre>
{
	"message": "User Validated"
}
</pre>

<h2>Criar usuário - POST</h2>

<p><strong>Endpoint:</strong> /users</p>

<h3>Request</h3>
<h4>Body</h4>
<pre>
{
	"name": "Jhon Doe",
	"email": "test@mail.com"
}
</pre>

<h3>Response</h3>
<pre>
{
	"id": "oa1a1836-4cef-4b20-8931-b8fc143a0efd",
	"name": "Jhon Doe",
	"email": "test@mail.com"
}
</pre>

<h2>Atualizar dados do usuário - PATCH</h2>

<p><strong>Endpoint:</strong> /users/{id}</p>

<h3>Request</h3>
<h4>Parâmetros</h4>

<table>
	<tr>
		<th>Parâmetro</th>
		<th>Tipo</th>
		<th>Descrição</th>
	</tr>
  	<tr>
		<td>id</td>
		<td>string</td>
		<td>Identificador único do usuário</td>
</table>

<h4>Body</h4>

<pre>
{
	"name": "Jhon doe",
	"email": "test@mail.com",
	"password": "123456ab"
}
</pre>

<h4>Headers</h4>
<pre>
Authorization: token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvcmVuem9AbWFpbC5jb20iLCJpYXQiOjE2ODAxNzYzODksImV4cCI6MTY4MDI2Mjc4OSwic3ViIjoiNTZhYmZmY2YtYzQwZS00MGFlLTllN2MtODIzMzdhYTcwMzFkIn0.Sb1wQCyGdFldZKnJ622_nrjvEBpdnlzUPJ3webFBIDM
</pre>


<h3>Response</h3>
<pre>
{
	"id": "ea1a1836-4cef-4b20-8931-b8fc143a0efd",
	"name": "Jhon doe",
	"email": "test@mail.com"
}
</pre>

<h2>Login - POST</h2>

<p><strong>Endpoint:</strong> /users/login</p>

<h3>Request</h3>
<h4>Body</h4>
<pre>
{
	"email": "test@mail.com",
	"password": "123456ab"
}
</pre>

<h3>Response</h3>
<pre>
{
	"id": "56abffcf-c40e-40ae-9e7c-82337aa7031d",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvcmVuem9AbWFpbC5jb20iLCJpYXQiOjE2ODAxNzYzODksImV4cCI6MTY4MDI2Mjc4OSwic3ViIjoiNTZhYmZmY2YtYzQwZS00MGFlLTllN2MtODIzMzdhYTcwMzFkIn0.Sb1wQCyGdFldZKnJ622_nrjvEBpdnlzUPJ3webIBIDM"
}
</pre>

<h2>Deletar usuário - DELETE</h2>

<p><strong>Endpoint:</strong> /users/{id}</p>

<h3>Request</h3>
<h4>Parâmetros</h4>

<table>
	<tr>
		<th>Parâmetro</th>
		<th>Tipo</th>
		<th>Descrição</th>
	</tr>
	</tr>
  	<tr>
		<td>id</td>
		<td>string</td>
		<td>Identificador único do usuário</td>
</table>

<h4>Headers</h4>
<pre>
Authorization: token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvcmVuem9AbWFpbC5jb20iLCJpYXQiOjE2ODAxNzYzODksImV4cCI6MTY4MDI2Mjc4OSwic3ViIjoiNTZhYmZmY2YtYzQwZS00MGFlLTllN2MtODIzMzdhYTcwMzFkIn0.Sb1wQCyGdFldZKnJ622_nrjvEBpdnlzUPJ3webFBIDM
</pre>

<h3>Response</h3>
<pre>
{
	"status": "ok",
	"message": "user deleted"
}
</pre>

<h2>Buscar usuário - POST</h2>

<p><strong>Endpoint:</strong> /users/search/{page}</p>

<h3>Request</h3>
<h4>Parâmetros</h4>

<table>
	<tr>
		<th>Parâmetro</th>
		<th>Tipo</th>
		<th>Descrição</th>
	</tr>
	<tr>
		<td>id</td>
		<td>string</td>
		<td>ID do usuário a ser verificado</td>
	</tr>
</table>

<h4>Body</h4>

<pre>
{
	"searchValue": "Jhon"
}
</pre>

<h4>Headers</h4>
<pre>
Authorization: token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvcmVuem9AbWFpbC5jb20iLCJpYXQiOjE2ODAxNzYzODksImV4cCI6MTY4MDI2Mjc4OSwic3ViIjoiNTZhYmZmY2YtYzQwZS00MGFlLTllN2MtODIzMzdhYTcwMzFkIn0.Sb1wQCyGdFldZKnJ622_nrjvEBpdnlzUPJ3webFBIDM
</pre>


<h3>Response</h3>
<pre>
{
	"nextPage": false,
	"prevPage": false,
	"results": [
		{
			"id": "5987de46-67b6-47e4-85e1-08da15eb7182",
			"name": "Jhon Doe"
		},
	]
}
</pre>

<div>
	<h1 id="IMAGES">Rota de Imagens</h1>

<h2>Upload de imagem - POST</h2>

<p><strong>Endpoint:</strong> /api/images</p>

<h3>Request</h3>
<h4>Parâmetros</h4>

<table>
	<tr>
		<th>Parâmetro</th>
		<th>Tipo</th>
		<th>Descrição</th>
	</tr>
	<tr>
		<td>nenhum</td>
		<td>nenhum</td>
		<td>nenhum</td>
	</tr>
</table>

<h4>Body</h4>

<pre>
{
	"image": "image.png",
	"text": "test upload"
}
</pre>

<h4>Headers</h4>
<pre>
Authorization: token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvcmVuem9AbWFpbC5jb20iLCJpYXQiOjE2ODAxNzYzODksImV4cCI6MTY4MDI2Mjc4OSwic3ViIjoiNTZhYmZmY2YtYzQwZS00MGFlLTllN2MtODIzMzdhYTcwMzFkIn0.Sb1wQCyGdFldZKnJ622_nrjvEBpdnlzUPJ3webFBIDM
</pre>


<h3>Response</h3>
<pre>
{
	"message": "Uploaded",
	"Image": {
		"id": "7084908a-84a4-446b-8112-133e3fe7d24e",
		"created_at": "Thu Mar 09 2023 17:22:48 GMT-0300 (Horário Padrão de Brasília)",
		"name": "image.png",
		"user_id": "924cb997-3b34-4747-b490-1a81fbcd15b7",
		"url": "https://url.com/1678393367741.png",
		"text": "new image"
	}
}
</pre>

<h2>Listar todas as imagens - GET</h2>

<p><strong>Endpoint:</strong> /images/get</p>

<h3>Request</h3>
<h4>Parâmetros</h4>

<table>
	<tr>
		<th>Parâmetro</th>

		<th>Tipo</th>
		<th>Descrição</th>
	</tr>
	<tr>
		<td>Nenhum</td>
		<td>Nenhum</td>
		<td>Nenhum</td>
	</tr>
</table>

<h4>Headers</h4>
<pre>
Authorization: token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvcmVuem9AbWFpbC5jb20iLCJpYXQiOjE2ODAxNzYzODksImV4cCI6MTY4MDI2Mjc4OSwic3ViIjoiNTZhYmZmY2YtYzQwZS00MGFlLTllN2MtODIzMzdhYTcwMzFkIn0.Sb1wQCyGdFldZKnJ622_nrjvEBpdnlzUPJ3webFBIDM
</pre>

<h3>Response</h3>
<pre>
[
	{
		"id": "d8f34943-9475-49cd-891c-4b3172115156",
		"created_at": "Fri Mar 10 2023 18:28:05 GMT+0000 (Coordinated Universal Time)",
		"name": "iamge.png",
		"user_id": "5987de46-67b6-47e4-85e1-08da15eb7185",
		"url": "https://url.com/1678472883600.png",
		"text": "Testando upload de fotos",
		"user": {
			"id": "5987de46-67b6-47e4-85e1-08da15eb7185",
			"name": "Jhon Doe",
			"email": "teste@mail.com"
		}
	},
	{
		"id": "f03fdc66-05b2-4570-92ad-c1ec52adf663",
		"created_at": "Tue Mar 14 2023 18:56:20 GMT+0000 (Coordinated Universal Time)",
		"name": "image.png",
		"user_id": "56abffcf-c40e-40ae-9e7c-82337aa7031d",
		"url": "https://url.com/1678820179910.png",
		"text": "Teste",
		"user": {
			"id": "56abffcf-c40e-40ae-9e7c-82337aa7031d",
			"name": "Jhon Down",
			"email": "test@mail.com"
		}
	}
]

</div>

<head>
	<title>Rota de Songs</title>
</head>
<div>
	<h1 id="SONGS">Rota de Músicas</h1>

<h2>Upload de música - POST</h2>

<p><strong>Endpoint:</strong> /songs</p>

<h3>Request</h3>
<h4>Parâmetros</h4>

<table>
	<tr>
		<th>Parâmetro</th>
		<th>Tipo</th>
		<th>Descrição</th>
	</tr>
	<tr>
		<td>nenhum</td>
		<td>nenhum</td>
		<td>nenhum</td>
	</tr>
</table>

<h4>Headers</h4>
<pre>
Authorization: token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvcmVuem9AbWFpbC5jb20iLCJpYXQiOjE2ODAxNzYzODksImV4cCI6MTY4MDI2Mjc4OSwic3ViIjoiNTZhYmZmY2YtYzQwZS00MGFlLTllN2MtODIzMzdhYTcwMzFkIn0.Sb1wQCyGdFldZKnJ622_nrjvEBpdnlzUPJ3webFBIDM
</pre>

<h4>Body</h4>

<pre>
{
    "song": song.mp3,
    "text": "new song"
}
</pre>

<h3>Response</h3>
<pre>
{
	"message": "Uploaded",
	"Song": {
		"id": "35aef4c9-ba84-4dcf-b4aa-beb9204ac331",
		"created_at": "Thu Mar 09 2023 17:19:26 GMT-0300 (Horário Padrão de Brasília)",
		"name": "song.mp3",
		"user_id":"924cb997-3b34-4747-b490-1a81fbcd15b7",
		"text": "new song",
		"url": "https://url.com/1678393165647.mp3"
	}
}
</pre>

<h2>Listar todas as músicas - GET</h2>

<p><strong>Endpoint:</strong> /api/songs</p>

<h3>Request</h3>
<h4>Parâmetros</h4>

<table>
	<tr>
		<th>Parâmetro</th>
		<th>Tipo</th>
		<th>Descrição</th>
	</tr>
	<tr>
		<td>Nenhum</td>
		<td>Nenhum</td>
		<td>Nenhum</td>
	</tr>
</table>

<h4>Headers</h4>
<pre>
Authorization: token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvcmVuem9AbWFpbC5jb20iLCJpYXQiOjE2ODAxNzYzODksImV4cCI6MTY4MDI2Mjc4OSwic3ViIjoiNTZhYmZmY2YtYzQwZS00MGFlLTllN2MtODIzMzdhYTcwMzFkIn0.Sb1wQCyGdFldZKnJ622_nrjvEBpdnlzUPJ3webFBIDM
</pre>

<h3>Response</h3>
<pre>
[
	{
		"id": "f6318f61-53e7-4940-a930-100a245184cc",
		"created_at": "Fri Mar 10 2023 18:26:15 GMT+0000 (Coordinated Universal Time)",
		"name": "song.mp3",
		"user_id": "5987de46-67b6-47e4-85e1-08da15eb7185",
		"text": "My new song",
		"url": "https://url.com/1678820376385.mp3",
		"user": {
			"id": "5987de46-67b6-47e4-85e1-08da15eb7185",
			"name": "Julio Cesar",
			"email": "teste@mail.com"
		}
	},
	{
		"id": "5850f50c-8d47-4ebb-9690-702aee0f5de9",
		"created_at": "Tue Mar 14 2023 18:59:39 GMT+0000 (Coordinated Universal Time)",
		"name": "song2.mp3",
		"user_id": "56abffcf-c40e-40ae-9e7c-82337aa7031d",
		"text": "Hey yah!",
		"url": "https://url.com/1678820376382.mp3",
		"user": {
			"id": "56abffcf-c40e-40ae-9e7c-82337aa7031d",
			"name": "Lorenzo",
			"email": "lorenzo@mail.com"
		}
	}
]
</pre>

</div>

<head>
	<title id="FOLLOW">Rota de Follow</title>
</head>
<div>
	<h1>Rotas de Follow</h1>

<h2>Seguir um usuário - POST</h2>

<p><strong>Endpoint:</strong> /api/followers/{id}</p>

<h3>Request</h3>
<h4>Parâmetros</h4>

<table>
	<tr>
		<th>Parâmetro</th>
		<th>Tipo</th>
		<th>Descrição</th>
	</tr>
	<tr>
		<td>id</td>
		<td>string</td>
		<td>ID do usuário a ser seguido</td>
	</tr>
</table>

<h4>Headers</h4>
<pre>
Authorization: token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvcmVuem9AbWFpbC5jb20iLCJpYXQiOjE2ODAxNzYzODksImV4cCI6MTY4MDI2Mjc4OSwic3ViIjoiNTZhYmZmY2YtYzQwZS00MGFlLTllN2MtODIzMzdhYTcwMzFkIn0.Sb1wQCyGdFldZKnJ622_nrjvEBpdnlzUPJ3webFBIDM
</pre>

<h3>Response</h3>
<pre>
{
	"message": "Followed",
	"Follow": {
		"followed_id": "b708d2d3-45a1-4901-b4e7-b74fd8c96eb5",
		"follower_id": "8f91bed1-285d-4a59-8daa-e42d2f4337d0",
		"id": 10
	}
}
</pre>

<h2>Número de seguidores de um usuário - GET</h2>

<p><strong>Endpoint:</strong> /followers/{id}</p>

<h3>Request</h3>
<h4>Parâmetros</h4>

<table>
	<tr>
		<th>Parâmetro</th>
		<th>Tipo</th>
		<th>Descrição</th>
	</tr>
	<tr>
		<td>id</td>
		<td>string</td>
		<td>ID do usuário a ser consultado</td>
	</tr>
</table>

<h4>Headers</h4>
<pre>
Authorization: token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvcmVuem9AbWFpbC5jb20iLCJpYXQiOjE2ODAxNzYzODksImV4cCI6MTY4MDI2Mjc4OSwic3ViIjoiNTZhYmZmY2YtYzQwZS00MGFlLTllN2MtODIzMzdhYTcwMzFkIn0.Sb1wQCyGdFldZKnJ622_nrjvEBpdnlzUPJ3webFBIDM
</pre>

<h3>Response</h3>
<pre>
{
  10
}
</pre>

<h2>Listar todas as pessoas que um usuário segue - GET</h2>

<p><strong>Endpoint:</strong> /followers</p>

<h3>Request</h3>
<h4>Parâmetros</h4>

<table>
	<tr>
		<th>Parâmetro</th>
		<th>Tipo</th>
		<th>Descrição</th>
	</tr>
	<tr>
		<td>Nenhum</td>
		<td>Nenhum</td>
		<td>Nenhum</td>
	</tr>
</table>

<h4>Headers</h4>
<pre>
Authorization: token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvcmVuem9AbWFpbC5jb20iLCJpYXQiOjE2ODAxNzYzODksImV4cCI6MTY4MDI2Mjc4OSwic3ViIjoiNTZhYmZmY2YtYzQwZS00MGFlLTllN2MtODIzMzdhYTcwMzFkIn0.Sb1wQCyGdFldZKnJ622_nrjvEBpdnlzUPJ3webFBIDM
</pre>

<h3>Response</h3>
<pre>
[
	{
		"id": "bf45e76e-44d4-4cd3-97bf-e4983c2f02f3",
		"name": "Ana Karolina"
	},
	{
		"id": "5987de46-67b6-47e4-85e1-08da15eb7185",
		"name": "Julio Cesar"
	}
]
</pre>

<h2>Verificar se um usuário é seguido - GET</h2>

<p><strong>Endpoint:</strong> /followers/{id}</p>

<h3>Request</h3>
<h4>Parâmetros</h4>
<table>
	<tr>
		<th>Parâmetro</th>
		<th>Tipo</th>
		<th>Descrição</th>
	</tr>
	<tr>
		<td>id</td>
		<td>string</td>
		<td>ID do usuário a ser verificado</td>
	</tr>
</table>

<h4>Headers</h4>
<pre>
Authorization: token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvcmVuem9AbWFpbC5jb20iLCJpYXQiOjE2ODAxNzYzODksImV4cCI6MTY4MDI2Mjc4OSwic3ViIjoiNTZhYmZmY2YtYzQwZS00MGFlLTllN2MtODIzMzdhYTcwMzFkIn0.Sb1wQCyGdFldZKnJ622_nrjvEBpdnlzUPJ3webFBIDM
</pre>

<h3>Response</h3>
<pre>
[
	{
		"id": 9,
		"follower_id": "56abffcf-c40e-40ae-9e7c-82337aa7031d",
		"followed_id": "5987de46-67b6-47e4-85e1-08da15eb7185"
	}
]
</pre>

<h2>Deixar de seguir um usuário - DELETE</h2>

<p><strong>Endpoint:</strong> /followers/{id}</p>

<h3>Request</h3>
<h4>Parâmetros</h4>

<table>
	<tr>
		<th>Parâmetro</th>
		<th>Tipo</th>
		<th>Descrição</th>
	</tr>
  	<tr>
		<th>id</th>
		<th>string</th>
		<td>ID do usuário a ser verificado</td>
	</tr>
	<tr>
</table>

<h4>Headers</h4>
<pre>
Authorization: token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvcmVuem9AbWFpbC5jb20iLCJpYXQiOjE2ODAxNzYzODksImV4cCI6MTY4MDI2Mjc4OSwic3ViIjoiNTZhYmZmY2YtYzQwZS00MGFlLTllN2MtODIzMzdhYTcwMzFkIn0.Sb1wQCyGdFldZKnJ622_nrjvEBpdnlzUPJ3webFBIDM
</pre>

<h3>Response</h3>
<pre>
{
	"id": 9,
	"follower_id": "56abffcf-c40e-40ae-9e7c-82337aa7031d",
	"followed_id": "5987de46-67b6-47e4-85e1-08da15eb7185"
}
</pre>

<h1 id="FEED"> Rotas de FEED</h1>

<h2 >Retornar a pagina de feed paginada - GET</h2>
<p><strong>Endpoint:</strong> /feed/page/{page_number}</p>

<h3>Request</h3>

<h4>Parâmetros</h4>
<table>
	<tr>
		<th>Parâmetro</th>
		<th>Tipo</th>
		<th>Descrição</th>
	</tr>
	<tr>
		<td>page_number</td>
		<td>int</td>
		<td>Número da página</td>
	</tr>
</table>

<h3>Response</h3>
<pre>
{
	"nextPage": false,
	"prevPage": false,
	"results": [
		{
			"id": "d8f34943-9475-49cd-891c-4b3172115156",
			"created_at": "Fri Mar 10 2023 18:28:05 GMT+0000 (Coordinated Universal Time)",
			"name": "Captura de tela de 2023-03-10 15-26-31.png",
			"user_id": "5987de46-67b6-47e4-85e1-08da15eb7185",
			"url": "https://url.com/1678472883600.png",
			"text": "Testando upload de fotos",
			"user": {
				"id": "5987de46-67b6-47e4-85e1-08da15eb7185",
				"name": "Jhon Doe",
				"email": "teste@mail.com"
			}
		},
		{
			"id": "f6318f61-53e7-4940-a930-100a245184cc",
			"created_at": "Fri Mar 10 2023 18:26:15 GMT+0000 (Coordinated Universal Time)",
			"name": "hey ya! [lofi] (128 kbps).mp3",
			"user_id": "5987de46-67b6-47e4-85e1-08da15eb7185",
			"text": "My new song",
			"url": "https://url.com/1678472773075.mp3",
			"user": {
				"id": "5987de46-67b6-47e4-85e1-08da15eb7185",
				"name": "Jhon Doe",
				"email": "teste@mail.com"
			}
		}
	]
}
</pre>
	
<h1 id="CHAT">Rotas de CHAT</h1>

<h2>Retornar as conversas entre o usuário autenticado e o usuário com o ID fornecido = GET</h2>

<p><strong>Endpoint:</strong> /chats/{id}</p>

<h3>Request</h3>

<h4>Parâmetros</h4>
<table>
	<tr>
		<th>Parâmetro</th>
		<th>Tipo</th>
		<th>Descrição</th>
	</tr>
	<tr>
		<td>id</td>
		<td>string</td>
		<td>ID do usuário a ser verificado</td>
	</tr>
</table>

<h4>Headers</h4>
<pre>
Authorization: token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvcmVuem9AbWFpbC5jb20iLCJpYXQiOjE2ODAxNzYzODksImV4cCI6MTY4MDI2Mjc4OSwic3ViIjoiNTZhYmZmY2YtYzQwZS00MGFlLTllN2MtODIzMzdhYTcwMzFkIn0.Sb1wQCyGdFldZKnJ622_nrjvEBpdnlzUPJ3webFBIDM
</pre>

<h3>Exemplo de resposta</h3>
<pre>
[
	{
		"id": "92a73c26-50db-4daf-9b55-a252684a4057",
		"created_at": "Fri Mar 10 2023 18:59:20 GMT+0000 (Coordinated Universal Time)",
		"from": "56abffcf-c40e-40ae-9e7c-82337aa7031d",
		"to": "bf45e76e-44d4-4cd3-97bf-e4983c2f02f3",
		"text": "Salve salve"
	},
	{
		"id": "ab305335-5e83-4abb-9342-d8e269b22657",
		"created_at": "Fri Mar 10 2023 19:01:10 GMT+0000 (Coordinated Universal Time)",
		"from": "bf45e76e-44d4-4cd3-97bf-e4983c2f02f3",
		"to": "56abffcf-c40e-40ae-9e7c-82337aa7031d",
		"text": "Oi "
	}
]
</pre>

<!-- POST /chat/:userId -->
<h2>POST /</h2>
<p>Envia uma mensagem do usuário autenticado para o usuário com o ID fornecido.</p>

<p><strong>Endpoint:</strong> /chats/{id}</p>

<h3>Request</h3>

<h4>Parâmetros</h4>
<table>
	<tr>
		<th>Parâmetro</th>
		<th>Tipo</th>
		<th>Descrição</th>
	</tr>
	<tr>
		<td>id</td>
		<td>string</td>
		<td>ID do usuário a ser verificado</td>
	</tr>
</table>

<h4>Headers</h4>
<pre>
Authorization: token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvcmVuem9AbWFpbC5jb20iLCJpYXQiOjE2ODAxNzYzODksImV4cCI6MTY4MDI2Mjc4OSwic3ViIjoiNTZhYmZmY2YtYzQwZS00MGFlLTllN2MtODIzMzdhYTcwMzFkIn0.Sb1wQCyGdFldZKnJ622_nrjvEBpdnlzUPJ3webFBIDM
</pre>

<h4>Body</h4>

<pre>
{
	"text":"tudo bem?"
}
</pre>

<h3>Response</h3>

<pre>
{
	"id": "2b22f27e-2650-4682-902a-4cf1e31854da",
	"created_at": "Thu Jan 05 2023 16:59:36 GMT-0300 (Horário Padrão de Brasília)",
	"from": "8f91bed1-285d-4a59-8daa-e42d2f4337d0",
	"to": "b708d2d3-45a1-4901-b4e7-b74fd8c96eb5",
	"text": "tudo bem?"
}
</pre>

<h2 id="front-end">Front-end da aplicação</h2>

<section>
    <a href="https://github.com/LorenzoMarques/MusiciansBook-front-end">Acesse o repositório contendo o back-end da aplicação clicando aqui!</a>
</section>
