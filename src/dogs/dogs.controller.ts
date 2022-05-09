import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { Dog } from './entities/dog.entity';

@ApiTags('dogs')
@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Post()
  @ApiOperation({ summary: 'Create dog' })
  @ApiResponse({
    status: 201,
    description: 'The created Dog record',
    type: Dog,
  })
  create(@Body() createDogDto: CreateDogDto) {
    return this.dogsService.create(createDogDto);
  }

  @Get()
  @ApiOperation({ summary: 'Return all dogs' })
  @ApiResponse({
    status: 200,
    description: 'Array of Dog objects',
    type: [Dog],
  })
  findAll() {
    return this.dogsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Return a dog by id' })
  @ApiResponse({
    status: 200,
    description: 'Dog object',
    type: Dog,
  })
  @ApiResponse({
    status: 404,
    description: 'Dog object not found',
  })
  findOne(@Param('id') id: string) {
    const found = this.dogsService.findOne(id);
    if (!found) throw new NotFoundException('Dog with id' + id + ' not found');
    return found;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Modify dog object by id' })
  @ApiResponse({
    status: 200,
    description: 'Dog object',
    type: Dog,
  })
  update(@Param('id') id: string, @Body() updateDogDto: UpdateDogDto) {
    return this.dogsService.update(id, updateDogDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletes a Dog by id' })
  @ApiResponse({
    status: 200,
  })
  remove(@Param('id') id: string) {
    return this.dogsService.remove(id);
  }
}
