Nest.js: https://docs.nestjs.com/
Prisma
Jest

Post: '/notifications': 
```json
{
	"recipientId": "{% uuid 'v4' %}",
	"content": "Nova Notificação de teste",
	"category": "social"
}
```

Return 
```json
{
	"notification": {
		"_id": "cd9f0791-fba8-4dba-9b85-98c2f42108f8",
		"props": {
			"recipientId": "3f92fb43-0ca5-4c61-b418-cd9ad0789978",
			"content": {
				"content": "Nova Notificação de teste"
			},
			"category": "social",
			"createdAt": "2022-12-16T04:14:16.886Z"
		}
	}
}
```