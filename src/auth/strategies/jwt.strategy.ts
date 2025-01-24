import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'your_jwt_secret',  // Puedes moverlo a un archivo .env
    });
  }

  async validate(payload: JwtPayload) {
    // Aquí puedes verificar la existencia del usuario en la base de datos, si es necesario
    return { userId: payload.sub, email: payload.email };  // Devuelve el payload del JWT
  }
}
