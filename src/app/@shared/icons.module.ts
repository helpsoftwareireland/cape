import { NgModule } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';

import {
  faBatteryEmpty,
  faSave,
  faCartShopping,
  faBagShopping,
  faWineBottle,
  faBars,
  faClose,
  faCircleChevronLeft
} from '@fortawesome/free-solid-svg-icons';
import { faAddressBook, faComment } from '@fortawesome/free-regular-svg-icons';

@NgModule({
  declarations: [],
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class IconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faBatteryEmpty,
      faSave,
      faCartShopping,
      faWineBottle,
      faAddressBook,
      faComment,
      faBars,
      faClose,
      faBagShopping,
      faCircleChevronLeft
    );
  }
}
