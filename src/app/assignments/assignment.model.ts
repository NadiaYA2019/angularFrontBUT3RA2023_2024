export class Assignment {
    id: number = Math.floor(Math.random() * 1000);
    nom: string = '';
    dateDeRendu: Date = new Date();
    rendu: boolean = false;
}