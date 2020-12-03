import { Component } from '@angular/core';
import { Editor, TextEditor } from '../models/editor.model';
import { EditorInvoker } from '../models/editor.invoker';
import { EditorClose, EditorEdit, EditorOpen, EditorSave } from '../models/editor.command';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent {

  public listLog: string[] = [];

  private readonly editor: Editor;
  private editorInvoker: EditorInvoker;

  constructor() {
    this.editor = new TextEditor();
    this.editorInvoker = new EditorInvoker(
      new EditorOpen(this.editor),
      new EditorClose(this.editor),
      new EditorEdit(this.editor),
      new EditorSave(this.editor)
    );
  }

  public btnOpen(): void {
    this.listLog.push(this.editorInvoker.pressOpen());
  }

  public btnClose(): void {
    this.listLog.push(this.editorInvoker.pressClose());
  }

  public btnEdit(): void {
    this.listLog.push(this.editorInvoker.pressEdit());
  }

  public btnSave(): void {
    this.listLog.push(this.editorInvoker.pressSave());
  }

}
