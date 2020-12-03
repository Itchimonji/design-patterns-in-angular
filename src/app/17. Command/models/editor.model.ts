// Receiver interface
export interface Editor {
  open(): string;
  edit(): string;
  save(): string;
  close(): string;
}

// Receiver
export class TextEditor implements Editor {
  public open(): string {
    return 'Text-Editor is opened';
  }
  public edit(): string {
    return 'Text-Editor is edited';
  }
  public save(): string {
    return 'Text-Editor is saved';
  }
  public close(): string {
    return 'Text-Editor is closed';
  }
}
