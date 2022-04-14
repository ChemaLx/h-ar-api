import { Controller, Get, Post, Res, Req, Body, HttpStatus, Delete, Param } from '@nestjs/common';
import { CreateLugarDto } from './dto/lugares.dto';
import { LugaresService } from './lugares.service';

@Controller('lugares')
export class LugaresController {

    constructor(private lugaresService: LugaresService) {}

    @Post('/new')
    async createPost(@Res() res, @Body() createLugarDto: CreateLugarDto){
        console.log(createLugarDto)
        await this.lugaresService.postLugar(createLugarDto)
        return res.json({
            message: 'received'
        })
    }

    @Get('/all')
    async getLugares(@Res() res){
        const lugares = await this.lugaresService.getLugares()
        res.status(HttpStatus.OK).json({
            lugares
        })
    }

    @Delete('/delete-lugar/:lugarId')
    async deleteLugar(@Res() res, @Param('lugarId') lugarId){
        const lugar = await this.lugaresService.deleteLugar(lugarId)
        res.status(HttpStatus.OK).json({
            messe: 'lugar borrado',
            lugar
        })
    }


}

