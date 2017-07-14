import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// PARENT COMPONENT
import { TestComponent } from './testing.component';

// CHILD COMPONENTS
import { ComputeComponent } from './compute/compute.component';
import { HistoryComponent } from './history/history.component';

const testRoutes: Routes = [
      {path: 'testing', component: TestComponent},
      {path: 'testing/compute', component: ComputeComponent},
      {path: 'testing/history', component: HistoryComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(testRoutes)
  ],
  exports: [ RouterModule ]
})

export class TestRoutingModule { }
