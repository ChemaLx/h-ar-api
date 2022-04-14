import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

import { lugar } from './interfaces/lugares.interface'
import { CreateLugarDto } from './dto/lugares.dto';

@Injectable()
export class LugaresService {

    constructor(@InjectModel('Lugares') private readonly lugarModel: Model<lugar> ){}
    async getLugares(): Promise<lugar[]> {
        const lugares = await this.lugarModel.find()
        return lugares 
    }
    
    async getLugar(lugarId: string): Promise<lugar> {
        const lugar = await this.lugarModel.findById(lugarId)
        return lugar 
    }
    
    async postLugar(createLugarDto: CreateLugarDto): Promise<lugar> {
        const lugar = new this.lugarModel(createLugarDto)
        return await lugar.save()
    }

    async deleteLugar(lugarId: string): Promise<lugar> {
        const lugarBorrado = this.lugarModel.findByIdAndDelete(lugarId)
        return lugarBorrado
    }
}
