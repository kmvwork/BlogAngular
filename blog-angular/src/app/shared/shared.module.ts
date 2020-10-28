import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  exports: [HttpClientModule],
  imports: [HttpClientModule]
})

export class SharedModule {

}
