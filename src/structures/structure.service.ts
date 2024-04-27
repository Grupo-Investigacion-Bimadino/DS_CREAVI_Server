import { Injectable } from '@nestjs/common';
import { CreateJvcDto } from './dto/create-jvc.dto';
import { UpdateJvcDto } from './dto/update-jvc.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Structure } from './schemas/structure.schema';

@Injectable()
export class StructureService {
  constructor(
    @InjectModel(Structure.name) private structureModel: Model<Structure>
  ) { }

  async deepDiff(json_a: any, json_b: any) {
    // compare two objects and return the differences
    // return added, modified and deleted properties    
    return await this.compareObjects(json_a, json_b, '');
  }

  compareObjects(o1: any, o2: any, path: string = '') {
    let added: any = {};
    let modified: any = {};
    let deleted: any = {};

    const processProperty = (key: string, value1: any, value2: any) => {
      const newPath = path ? `${path}.${key}` : key;
      if (typeof value1 === 'object' && value1 !== null && typeof value2 === 'object' && value2 !== null) {
        const { added: addedInner, modified: modifiedInner, deleted: deletedInner } = this.compareObjects(value1, value2, newPath);
        added = { ...added, ...addedInner };
        modified = { ...modified, ...modifiedInner };
        deleted = { ...deleted, ...deletedInner };
      } else {
        if (value1 !== value2) {
          modified[newPath] = { old: value1, new: value2 };
        }
      }
    };

    // Process properties in o1
    for (const key in o1) {
      if (o1.hasOwnProperty(key)) {
        if (!o2.hasOwnProperty(key)) {
          deleted[`${path ? `${path}.` : ''}${key}`] = o1[key];
        } else {
          processProperty(key, o1[key], o2[key]);
        }
      }
    }

    // Process properties in o2 that are not in o1
    for (const key in o2) {
      if (o2.hasOwnProperty(key) && !o1.hasOwnProperty(key)) {
        added[`${path ? `${path}.` : ''}${key}`] = o2[key];
      }
    }

    return { added, modified, deleted };
  }

  async create(newStructure: CreateJvcDto) {
    let structure = await this.structureModel.create(newStructure);
    return structure;
  }

  findAll() {
    return `This action returns all jvc`;
  }

  findOne(id: string) {
    return `This action returns a #${id} jvc`;
  }

  update(id: string, updateDto: UpdateJvcDto) {
    const updateOps = { $set: updateDto };
    let structure = this.structureModel.findByIdAndUpdate(id, updateOps, { new: true });
    return structure;
  }

  remove(id: string) {
    return `This action removes a #${id} jvc`;
  }
}
