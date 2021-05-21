import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Plank } from '../plank.model';
import { Tag } from '../tag.model';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
import { PlankDataService } from '../plank-data.service';
import { EMPTY } from 'rxjs'

@Component({
  selector: 'app-add-plank',
  templateUrl: './add-plank.component.html',
  styleUrls: ['./add-plank.component.css']
})
export class AddPlankComponent implements OnInit {
  @Output() public newPlank = new EventEmitter<Plank>()
  plankFG: FormGroup;
  public errorMessage: string='';
 
  constructor(private fb: FormBuilder, private _plankDataService: PlankDataService){}

  get tagsFG(): FormArray {
    return <FormArray>this.plankFG.get('tags');
  }
  createTags(){
    return this.fb.group({name: [""]});
  }

  ngOnInit(): void {
    this.plankFG = new FormGroup({
      name: new FormControl("", Validators.required),
      material: new FormControl("", Validators.required),
      price: new FormControl(0.01, [Validators.required, Validators.min(0)]), 
      length: new FormControl(0.01, [Validators.required, Validators.min(0)]), 
      width: new FormControl(0.01, [Validators.required, Validators.min(0)]), 
      thickness: new FormControl(0.01, [Validators.required, Validators.min(0)]), 
      amount: new FormControl(1, [Validators.required, Validators.min(0), Validators.pattern("^[0-9]*$")]),
      description: new FormControl("", Validators.required),
      tags: this.fb.array([
        this.fb.group({ name: [""]})
      ]),
    });
  

    this.tagsFG.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(tagList => {
        const lastElement = tagList[tagList.length - 1];
        if ( lastElement.name && lastElement.name.length > 0 ) { 
          this.tagsFG.push(this.createTags()); 
        }
      });

  }
  

  submitPlank(){
    let tags: Tag[] = this.plankFG.value.tags.map(Tag.fromJSON);
    tags = tags.filter(tag => tag.name.length > 0);
    const plank = new Plank(this.plankFG.value.name, this.plankFG.value.material,tags, this.plankFG.value.price,this.plankFG.value.thickness, this.plankFG.value.width, this.plankFG.value.length, this.plankFG.value.amount, this.plankFG.value.description);
   // this.newPlank.emit(plank);
   this._plankDataService.addNewPlank(plank)  .pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  )
  .subscribe();
    return false;
  }
  

}
  
