/**
 * Para criar: name, email, senha
 */

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<String | TechObject> // ou pode ser usado *string[]* quando o tipo do array não for variavel
}

export default function createUser({name , email, password } : CreateUserData) {
  const user = {
    name, 
    email, 
    password,
  }

  return user;
}

