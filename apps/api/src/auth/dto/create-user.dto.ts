import {IsEmail, IsNotEmpty, IsString, MinLength} from "class-validator";

export class CreateUserDto {
    @IsEmail({}, {message: 'Adresse email non valide'})
    email: string;

    @IsNotEmpty()
    @MinLength(6, {message: 'Le mot de passe doit contenir au moins 6 caractères'})
    password: string;

    @IsString({message: 'Nom d\'utilisateur non valide'})
    userName: string;
}
