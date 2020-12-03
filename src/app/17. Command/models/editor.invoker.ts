import { Command } from './command.interface';

export class EditorInvoker {
  private onOpen: Command;
  private onClose: Command;
  private onEdit: Command;
  private onSave: Command;

  constructor(open: Command, close: Command, edit: Command, save: Command) {
    this.onOpen = open;
    this.onClose = close;
    this.onEdit = edit;
    this.onSave = save;
  }

  public setOnOpen(command: Command): void {
    this.onOpen = command;
  }

  public setOnClose(command: Command): void {
    this.onClose = command;
  }

  public setOnEdit(command: Command): void {
    this.onEdit = command;
  }

  public setOnSave(command: Command): void {
    this.onSave = command;
  }

  public pressOpen(): string {
    return this.onOpen.execute();
  }

  public pressClose(): string {
    return this.onClose.execute();
  }

  public pressEdit(): string {
    return this.onEdit.execute();
  }

  public pressSave(): string {
    return this.onSave.execute();
  }
}
