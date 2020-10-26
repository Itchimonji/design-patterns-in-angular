import { Component, OnInit } from '@angular/core';
import {Soldier} from '../models/soldier.model';

@Component({
  selector: 'app-composite',
  templateUrl: './composite.component.html',
  styleUrls: ['./composite.component.scss']
})
export class CompositeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private clientCode(tree: Soldier, leaf: Soldier): string {
    if (tree.isComposite()) {
      tree.add(leaf);
    }
    return tree.salute();
  }

}
