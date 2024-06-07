import { Injectable } from '@nestjs/common';
@Injectable()
export class labelsService {
private labels: any[] = [];
findOne(id: number): string {
return `Get labels with id ${id}`;
}
findAll(): string {
return 'Get all labels';
}
create(createlabelsDto): string {
this.labels.push(createlabelsDto);
return 'labels created successfully';
}
update(id, updatelabels): string {
return 'labels updated successfully';
}
delete(id): string {
return 'labels deleted successfully';
}
}