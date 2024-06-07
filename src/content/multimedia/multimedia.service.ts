import { Injectable } from '@nestjs/common';
@Injectable()
export class multimediaService {
private multimedia: any[] = [];
findOne(id: number): string {
return `Get multimedia with id ${id}`;
}
findAll(): string {
return 'Get all multimedia';
}
create(createmultimediaDto): string {
this.multimedia.push(createmultimediaDto);
return 'multimedia created successfully';
}
update(id, updatemultimedia): string {
return 'multimedia updated successfully';
}
delete(id): string {
return 'multimedia deleted successfully';
}
}