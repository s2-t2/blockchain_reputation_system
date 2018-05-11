//load smalluser.json
CALL apoc.load.json("file:/home/sujata/Documents/Masters-Thesis/graph/smalluser.json") YIELD value AS user 
MERGE (u:User {user_id: user.user_id})

SET u.name			=	user.name,
	u.friends		=	user.friends

