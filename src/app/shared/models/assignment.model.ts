export class Assignment {
  id: string = '' + Math.floor(Math.random() * 1000);
  nom: string = '';
  dateDeRendu: Date = new Date();
  rendu: boolean = false;
}
