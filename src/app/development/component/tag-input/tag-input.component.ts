import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { NbTagComponent, NbTagInputDirective } from '@nebular/theme';

@Component({
  selector: 'app-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagInputComponent {
  tags: Set<string> = new Set<string>();
  options: string[] = ["jimmy", 'neurton']

  @ViewChild(NbTagInputDirective, {read: ElementRef}) tagInput: ElementRef<HTMLInputElement> | any;

  onTagRemove(tagToRemove: NbTagComponent) : void {
    this.tags.delete(tagToRemove.text);
    this.options.push(tagToRemove.text);
  }

  onTagAdd(value:string):void {
    if(value){
      this.tags.add(value);
      this.options = this.options.filter(o=>o !==value);
    }this.tagInput.nativeElement.value = '';

  }

}
