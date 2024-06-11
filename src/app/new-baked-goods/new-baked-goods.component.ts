import { Component, EventEmitter, Output } from '@angular/core';
import { BakedGood } from '../models/baked-good';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-baked-goods',
  templateUrl: './new-baked-goods.component.html',
  styleUrls: ['./new-baked-goods.component.css']
})
export class NewBakedGoodsComponent {

  @Output() cancelClicked = new EventEmitter<null>();
  @Output() bakedGoodValue = new EventEmitter<BakedGood>();

  newBakedGood = <BakedGood>{};
  bakedGoodForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bakedGoodForm = this.fb.group({
      id: [null],
      type: ['', Validators.required],
      name: ['', Validators.required],
      topping: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.bakedGoodForm.valid) {
      console.log('Form Submitted!', this.bakedGoodForm.value);
      this.bakedGoodForm.patchValue({ id: 0o7 })
      this.bakedGoodValue.emit(this.bakedGoodForm.value);
      this.newBakedGood = {} as BakedGood;
    } else {
      this.bakedGoodForm.markAllAsTouched();
      console.log('Form is not valid!');
    }
  }

  cancelForm() {
    if (confirm("You are exiting the form. Any entered data will be lost.")) {
      this.cancelClicked.emit();
    }
  }

}
