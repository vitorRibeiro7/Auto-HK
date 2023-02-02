import { FastifyInstance } from 'fastify';
import { z } from 'zod'
import { prisma } from './lib/prisma';

export async function appRoutes(app: FastifyInstance) {

    app.post('/vehicle', async (request) => {

        const createvehicleBody = z.object({
            name: z.string(),
            brand: z.string(),
            year: z.number().min(1980).max(2024),
            desc: z.string(),
            sold: z.boolean()
        })

        const { name, brand, year, desc, sold } = createvehicleBody.parse(request.body)

        await prisma.vehicle.create({
            data: {
                name,
                brand,
                year,
                desc,
                sold,
            }
        })

    })

    app.get('/vehicle/find', async (request) => {

        const qParams = z.object({
            q: z.string()
        })

        const { q } = qParams.parse(request.query)

        const vehicles = await prisma.vehicle.findMany({
            where: {
                OR: [
                    { name: { contains: q } },
                    { brand: { contains: q } },
                    { desc: { contains: q } },
                ]
            }
        })

        return vehicles
    })

    app.get('/vehicles', async () => {

        const vehs = await prisma.vehicle.findMany()

        return vehs
    })

    app.get('/vehicle/:id', async (request) => {

        const idVehParams = z.object({
            id: z.string()
        });

        const { id } = idVehParams.parse(request.params);
        const parsedId = parseInt(id, 10);


        const veh = prisma.vehicle.findMany({
            where: {
                id: parsedId
            }
        })

        return veh
    })

    app.put('/vehicle/:id', async (request) => {
        const idVehParams = z.object({
            id: z.string()
        })

        const createvehicleBody = z.object({
            name: z.string(),
            brand: z.string(),
            year: z.number().min(1980).max(2024),
            desc: z.string(),
            sold: z.boolean()
        })

        const { id } = idVehParams.parse(request.params);
        const parsedId = parseInt(id, 10);

        const { name, brand, year, desc, sold } = createvehicleBody.parse(request.body)

        await prisma.vehicle.update({
            where: {
                id: parsedId
            },
            data: {
                name,
                brand,
                year,
                desc,
                sold,
                updatedAt: new Date()
            }
        });
    });

    app.patch('/vehicle/:id', async (request) => {
        const idVehParams = z.object({
            id: z.string()
        })

        const createvehicleBody = z.object({
            name: z.string().optional(),
            brand: z.string().optional(),
            year: z.number().min(1980).max(2024).optional(),
            desc: z.string().optional(),
            sold: z.boolean().optional()
        })

        const { id } = idVehParams.parse(request.params);
        const parsedId = parseInt(id, 10);

        const { name, brand, year, desc, sold } = createvehicleBody.parse(request.body)

        await prisma.vehicle.update({
            where: {
                id: parsedId
            },
            data: {
                name,
                brand,
                year,
                desc,
                sold,
                updatedAt: new Date()
            }
        })
    })

    app.delete('/vehicle/:id', async (request) => {
        const idVehParams = z.object({
            id: z.string()
        })

        const { id } = idVehParams.parse(request.params)
        const parsedId = parseInt(id, 10)

        await prisma.vehicle.delete({
            where: {
                id: parsedId
            }
        })
    })

}
