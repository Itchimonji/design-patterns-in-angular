import { Command } from './command.interface';
import { Editor } from './editor.model';

export class EditorOpen implements Command {
  private editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
  }

  public execute(): string {
    return this.editor.open();
  }
}

export class EditorEdit implements Command {
  private editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
  }

  public execute(): string {
    return this.editor.edit();
  }
}

export class EditorSave implements Command {
  private editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
  }

  public execute(): string {
    return this.editor.save();
  }
}

export class EditorClose implements Command {
  private editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
  }

  public execute(): string {
    return this.editor.close();
  }
}
