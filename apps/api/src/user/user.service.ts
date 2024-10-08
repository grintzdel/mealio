import { Injectable } from '@nestjs/common';
import { PrismaService } from "@api/prisma.service";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        userName: true,
        email: true,
      }
    });
  }

  async getUser({ userId }: { userId: string }) {
    return this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        userName: true,
        email: true,
      }
    });
  }
}
