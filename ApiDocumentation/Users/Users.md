# Users
Aqui temos os serviços relacionados a usuários.

## CREATE
Serviço para criação de usuários padrão/ promoter.

### Url
POST - http://localhost:3333/users

### Corpo da requisição(Entradas).
* JSON
```bash
{
  name: string *obrigatória.
  email: string *obrigatória e unicá
  password: string *obrigatória, mímino de 6 caracteres.
  confirmPassword: string *obrigatória, mímino de 6 caracteres, deve ser identico ao "password".
  promoter: boolean *obrigatório.
  contact: string não obrigatória.
  adress: string não obrigatória.
}
```

### Validações 
Email validation: Não deve ser possivél cadastrar usuários com um mesmo e-mail.

### Saídas
Retorna todos os atributos do usurio criado.
```bash
{
  "id": 6,
  "name": "leandro",
  "email": "leandro@gmail.com",
  "password": "123456",
  "promoter": true,
  "updatedAt": "2019-09-16T17:05:29.909Z",
  "createdAt": "2019-09-16T17:05:29.909Z",
  "password_hash": "$2a$08$rRPggXnAC1DTs.sP1.0zeevfWmxrnUEEawBgi3U/YFjNEC2GfUSDK",
  "adress": null,
  "contact": null,
  "avatar_id": null
}
```

### UPDATE
Serviço para atualizar informações de usuários padrão/ promoter. 
* Serviço disponível apenas para usuários autenticados.

### Url
PUT - http://localhost:3333/users

### Corpo da requisição(Entradas).
* JSON
* Bearer Token deve ser informado.
```bash
{	
  name: string não obrigatória.
  email: string não obrigatória.
  oldPassword: string não obrigatória.
  password: string obrigatória caso oldPassword exista, mímino de 6 caracteres.
  confirmPassword: string obrigatória, mímino de 6 caracteres, deve ser identico ao "password".
  contact: string não obrigatória.
  adress: string não obrigatória.
}
```

### Validações 
Token provided - Usuário deve estar logado para requisitar esse serviço.

### Saídas
```bash
{
  "id": 3,
  "name": "test",
  "email": "test@gmail.com"
}
```


	
