import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CountdownTimerComponent} from './countdown-timer/countdown-timer.component';
import {CountdownTimerGetSetComponent} from './countdown-timer-get-set/countdown-timer-get-set.component';
import {RatingBarComponent} from './rating-bar/rating-bar.component';

const routes: Routes = [
  { path: "countdown-time", component: CountdownTimerComponent },
  { path: "rating-bar", component: RatingBarComponent },
  { path: "countdown-time-get-set", component: CountdownTimerGetSetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
