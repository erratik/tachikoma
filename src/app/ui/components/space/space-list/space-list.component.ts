import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SpaceService } from 'src/app/client/space/space.service';
import { Space } from 'src/app/client/space/space.interface';
import { Settings } from 'src/app/client/settings/settings.interface';
import { SettingsService } from 'src/app/client/settings/settings.service';
import { tap, refCount, publishReplay, map, withLatestFrom, mergeMap, switchMap, find, filter } from 'rxjs/operators';
import { combineLatest, Observable, of, from } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-space-list',
  templateUrl: './space-list.component.html',
  providers: [ SpaceService ]
})
export class SpaceListComponent implements OnInit {
  spaces: Observable<Space[]>;
  selectedSpace: Space;
  settings: Settings[];

  constructor(private spaceService: SpaceService, private settingsService: SettingsService, private route: ActivatedRoute, private router: Router) {
    // this.settings = this.settingsService.getSettings();
  }

  // ngAfterViewInit(): void {

  // }

  ngOnInit() {
    this.route.data.subscribe((data) => console.log('Data :', data));
    // debugger;
    // this.spaces = this.spaceService.getSpaces().pipe(
    //   // tap((x) => x),
    //   tap((x) => {
    //     this.route.params.forEach((params: Params) => {
    //       debugger;
    //       this.selectSpace(x.find((s) => params.space === s.name));
    //     });
    //     // debugger;
    //   })
    // );

    // this.getSpaces$ = withLatestFrom(this.spaceService.getSpaces()).pipe(
    //   tap((x) => {
    //     debugger;
    //     return x;
    //   })
    // );
    // this.getSpaces$.subscribe();
    // debugger
    // this.spaces.forEach((space) => {
    //   debugger;
    //   const settings = this.settings.find((s) => s.space === space.name);
    //   const lala = new Space(space, settings);
    //   return space;
    // });
    // combineLatest(this.spaceService.getSpaces(), this.settingsService.getSettings()).pipe(
    //   map(([ spaces, settings ]) => {
    //     // this.spaces =
    //     this.spaces.push(spaces);
    //     debugger;
    //     return spaces;
    //   })
    // );
  }

  selectSpace(space: Space) {
    // debugger;
    this.selectedSpace = space;
    this.router.navigate([ 'spaces', { space: this.selectedSpace.name } ]);
  }
}
