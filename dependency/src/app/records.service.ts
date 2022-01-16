import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  info1: string[] = ['Titu', 'E234', 'ti@abc.com']
  info2: string[] = ['Jitu', 'E235', 'ji@abc.com']
  info3: string[] = ['Ritu', 'E236', 'ri@abc.com']

getinfo1(): string[]{ 
  return this.info1
}
getinfo2(): string[]{ 
  return this.info2
}
getinfo3(): string[]{ 
  return this.info3
}

  constructor() { }
}
