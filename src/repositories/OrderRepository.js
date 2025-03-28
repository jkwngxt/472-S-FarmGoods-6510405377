import { PrismaClient } from '@prisma/client'

export class OrderRepository {
    constructor() {
        this.prisma = new PrismaClient()
    }

    async findByStatusEqualO() {
        return this.prisma.order.findFirst({
            where: {orderStatus: 0},
            include: {
                orderDetails: {
                    include: {
                        product: true
                    }
                }
            }
        });
    }

    async findById(orderId) {
        return this.prisma.order.findUnique({
            where: {
                where: {orderId: parseInt(orderId)}
            }
        });
    }

    async addOrder(cartItem, paymentMethods) {
        return this.prisma.order.create({
            data: {
                orderDetails: {create: cartItem}, paymentMethods,
                purchaseDatetime: new Date()
            }
        });
    }


}