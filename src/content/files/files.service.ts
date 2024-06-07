import { Injectable } from '@nestjs/common';
@Injectable()
export class filesService {
private files: any[] = [];
findOne(id: number): string {
return `Get files with id ${id}`;
}
findAll(): string {
return 'Get all files';
}
create(createfilesDto): string {
this.files.push(createfilesDto);
return 'files created successfully';
}
update(id, updatefiles): string {
return 'files updated successfully';
}
delete(id): string {
return 'files deleted successfully';
}
}