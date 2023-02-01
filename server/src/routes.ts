import { FastifyInstance } from 'fastify';
import { z } from 'zod'
import { prisma } from './lib/prisma';

export async function appRoutes(app: FastifyInstance) {

    app.post('/veiculo', async (request) => {

        const createVeiculoBody = z.object({
            veiculo: z.string(),
            marca: z.string(),
            ano: z.number().min(1980).max(2024),
            desc: z.string(),
            vendido: z.boolean()
        })

        const { veiculo, marca, ano, desc, vendido } = createVeiculoBody.parse(request.body)

        await prisma.veiculo.create({
            data: {
                veiculo,
                marca,
                ano,
                desc,
                vendido,
            }
        })

    })

    app.get('/veiculos', async () => {

        const vehs = prisma.veiculo.findMany()

        return vehs
    })

    app.get('/veiculo/:id', async (request) => {

        const idVehParams = z.object({
            id: z.string()
        });

        const { id } = idVehParams.parse(request.params);
        const parsedId = parseInt(id, 10);


        const veh = prisma.veiculo.findMany({
            where: {
                id: parsedId
            }
        })

        return veh
    })

    app.put('/veiculo/:id', async (request) => {
        const idVehParams = z.object({
            id: z.string()
        })

        const createVeiculoBody = z.object({
            veiculo: z.string(),
            marca: z.string(),
            ano: z.number().min(1980).max(2024),
            desc: z.string(),
            vendido: z.boolean()
        })

        const { id } = idVehParams.parse(request.params);
        const parsedId = parseInt(id, 10);

        const { veiculo, marca, ano, desc, vendido } = createVeiculoBody.parse(request.body)

        await prisma.veiculo.update({
            where: {
                id: parsedId
            },
            data: {
                veiculo,
                marca,
                ano,
                desc,
                vendido,
                updatedAt: new Date()
            }
        });
    });

    app.patch('/veiculo/:id', async (request) => {
        const idVehParams = z.object({
            id: z.string()
        })

        const createVeiculoBody = z.object({
            veiculo: z.string().optional(),
            marca: z.string().optional(),
            ano: z.number().min(1980).max(2024).optional(),
            desc: z.string().optional(),
            vendido: z.boolean().optional()
        })

        const { id } = idVehParams.parse(request.params);
        const parsedId = parseInt(id, 10);

        const { veiculo, marca, ano, desc, vendido } = createVeiculoBody.parse(request.body)

        await prisma.veiculo.update({
            where: {
                id: parsedId
            },
            data: {
                veiculo,
                marca,
                ano,
                desc,
                vendido,
                updatedAt: new Date()
            }
        })
    })

    app.delete('/veiculo/:id', async (request) => {
        const idVehParams = z.object({
            id: z.string()
        })

        const { id } = idVehParams.parse(request.params)
        const parsedId = parseInt(id, 10)

        await prisma.veiculo.delete({
            where: {
                id: parsedId
            }
        })
    })

}
