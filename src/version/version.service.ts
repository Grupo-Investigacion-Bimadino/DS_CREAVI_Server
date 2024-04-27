import { Injectable } from '@nestjs/common';
import { CreateVcDto } from './dto/create-vc.dto';
import { UpdateVcDto } from './dto/update-vc.dto';
import { StructureService } from 'src/structures/structure.service';
import { HistoriesService } from 'src/histories/histories.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Version } from './schemas/version.schema';

@Injectable()
export class VersionService {

  constructor(
    private structureService: StructureService,
    private historiesService: HistoriesService,
    @InjectModel(Version.name) private versionModel: Model<Version>,
  ) { }

  async createVersion(elements: CreateVcDto) {
    // create structure elements    
    let structureCreated = await this.structureService.create({ elements });
    let structure = structureCreated._id;

    // create version component    
    let versionCreated = await this.versionModel.create({ structure, number: '1.0.0' });
    let version = versionCreated._id;

    // create history component    
    let historiesData = { actual_version: version, versions: [version] }
    let historiesCreated = await this.historiesService.create(historiesData);
    let history = historiesCreated._id;

    // update version field on structure with id_version
    await this.structureService.update(structure.toString(), { version });

    // update history field on version with id_history
    await this.versionModel.findByIdAndUpdate(version, { $set: { histories: history } }, { new: true });

    return { version, history };
  }

  async updateVersion(id: string, updateElements: UpdateVcDto) {
    try {
      // buscar version y obtener estructura y prioopiedades del componente - ok -version
      let versionStructure = await this.versionModel
        .findById(id)
        .populate('structure')
        .select('-_id structure');

      if (!versionStructure) {
        throw new Error('No se encontró ninguna versión con el ID proporcionado');
      }

      let { structure, _id: version } = versionStructure;
      let { elements } = structure;

      // comparar estructura actual con la nueva estructura y encontrar las diferencias - ok- jvc services
      let { added, modified, deleted } = await this.structureService.deepDiff(elements, updateElements);

      // guardar la nueva estructura - ok - jvc structure
      let structureCreated = await this.structureService.create({ elements: updateElements, added, modified, deleted, version });

      // actualizar la version en JSONStructure actual con la nueva estructura - ok - version
      const updateOps = { $set: { structure: structureCreated._id } };
      let versionUpdated = await this.versionModel.findByIdAndUpdate(id, updateOps, { new: true });

      return { versionUpdated, structureCreated };

    }
    catch (error) {
      console.log(error);
    }
  }

  async findAllComponentVersions(id_component: string) {
    return `This action removes a # vc`;
  }

  async findOneComponentVersion(_id: string) {
    return `This action removes a # vc`;
  }

  removeVersion(id: string) {
    return `This action removes a # vc`;
  }

  // ! This method is not used

  /*
  async saveNewVersion(data: any) {
  }

  async updateVersion(newJsonComponent: any) {
    // se debe obtener el estado de la version, comparar con la nueva, guardar la nueva y almacenar los cambios, la vieja version pasa a rama
    // let { added, modified, deleted } = await this.deepDiff(obj1, obj2);
  }

  getHistoryVersions(): any[] {
    // Obtiene la lista de versiones anteriores
    return []
  }

  getPreviousVersion(): any {
    // Obtiene la versión anterior

  }

  getNextVersion(): any {
    // Obtiene la siguiente versión

  }

  applyVersionToSource(version: any): void {
    // Aplica una versión específica al archivo fuente

  }

  getInitialVersion(): any {
    // Obtiene el objeto fuente de la versión inicial

  }

  getLatestVersion(): any {
    // Obtiene el objeto fuente de la última versión

  }

  applyInitialVersion(): void {
    // Aplica la versión inicial al archivo fuente

  }

  applyLatestVersion(): void {
    // Aplica la última versión al archivo fuente

  }
  */
}
