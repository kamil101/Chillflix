import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Film } from '../shered/model/film.model';

/** Form that is responsible for getting person data.  */
export class FilmForm extends FormGroup {
  constructor() {
    super({
      title: new FormControl('', [
        Validators.required,
        Validators.maxLength(50)
      ]),
      director: new FormControl('', [
        Validators.required,
        Validators.maxLength(50)
      ]),
      url: new FormControl('', [Validators.maxLength(200)]),
      releaseDate: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required])
    });
  }

  /** Gets the model of this form */
  public getModel(): Film {
    return {
      title: this.controls.title.value,
      director: this.controls.director.value,
      url: this.controls.url.value,
      releaseDate: this.controls.releaseDate.value
    };
  }
}
