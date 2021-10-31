import { NextApiRequest, NextApiResponse } from "next"

// JWT (Storage)
// Next Auth(Social)
// Cognito, Auth0


export default function users (request: NextApiRequest, response: NextApiResponse) {
    const users = [
        {id: 1, name: 'Diego'},
        {id: 2, name: 'Dani'},
        {id: 3, name: 'Rafa'},
    ]

    return response.json(users)
}